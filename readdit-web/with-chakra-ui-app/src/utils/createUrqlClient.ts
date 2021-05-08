import {
	dedupExchange,
	fetchExchange,
	gql,
	stringifyVariables,
} from '@urql/core';
import { cacheExchange, Resolver, Cache } from '@urql/exchange-graphcache';
import {
	LogoutMutation,
	MeQuery,
	MeDocument,
	LoginMutation,
	RegisterMutation,
	VoteMutationVariables,
	DeletePostMutationVariables,
} from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';

import { pipe, tap } from 'wonka';
import { Exchange } from 'urql';
import Router from 'next/router';
import { isServer } from './isServer';

// Global error handler for authentication.
const errorExchange: Exchange = ({ forward }) => op$ => {
	return pipe(
		forward(op$),
		tap(({ error }) => {
			if (error?.message.includes('not authenticated')) {
				// replaces the current route with the login route. ie: a redirect.
				Router.replace('/login');
			}
		})
	);
};

const cursorPagination = (): Resolver => {
	return (_parent, fieldArgs, cache, info) => {
		const { parentKey: entityKey, fieldName } = info;
		//console.log(entityKey, fieldName);

		const allFields = cache.inspectFields(entityKey); // will find all the queries in your cache.
		//console.log('allFields: ', allFields);
		const fieldInfos = allFields.filter(info => info.fieldName === fieldName);
		const size = fieldInfos.length;
		if (size === 0) {
			return undefined;
		}

		//console.log('fieldArgs: ', fieldArgs);
		const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
		//console.log('key we created: ', fieldKey);
		// if its in the cache, then we don't need to set a pertial.
		const isInTheCache = cache.resolve(
			cache.resolve(entityKey, fieldKey) as string,
			'posts'
		);
		//console.log('isInTheCache: ', isInTheCache);
		info.partial = !isInTheCache;
		let hasMore = true;
		const results: string[] = [];
		fieldInfos.forEach(fi => {
			// combining the data after our partial
			const key = cache.resolve(entityKey, fi.fieldKey) as string; // find out if info is in cache
			const data = cache.resolve(key, 'posts') as string[];
			const _hasMore = cache.resolve(key, 'hasMore');
			if (!_hasMore) {
				hasMore = _hasMore as boolean;
			}
			//console.log('data: ', hasMore, data);
			results.push(...data);
		});

		return {
			__typename: 'PaginatedPosts',
			hasMore,
			posts: results,
		};
	};
};

function invalidateAllPosts(cache: Cache) {
	const allFields = cache.inspectFields('Query');
	const fieldInfos = allFields.filter(info => info.fieldName === 'posts');
	fieldInfos.forEach(fi => {
		// console.log('start');
		// console.log(cache.inspectFields('Query'));
		cache.invalidate('Query', 'posts', fi.arguments || {});
		// console.log(cache.inspectFields('Query'));
		// console.log('end');
	});
}

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
	let cookie = '';
	if (isServer()) {
		cookie = ctx?.req?.headers?.cookie;
	}
	return {
		url: 'http://localhost:4000/graphql',
		fetchOptions: {
			credentials: 'include' as const,
			headers: cookie
				? {
						cookie,
				  }
				: undefined,
		},
		exchanges: [
			dedupExchange,
			cacheExchange({
				keys: {
					PaginatedPosts: () => null, // no id.
				},
				resolvers: {
					Query: {
						// the name "posts" has to match the funtcion name in the posts.graphql file: posts()
						posts: cursorPagination(), // client side resolvers that will run any time the query is run and show the new results. ie: when creating a new post, when posted, it will show up on the top of the list.
					},
				},
				updates: {
					Mutation: {
						deletePost: (_result, args, cache, info) => {
							cache.invalidate({
								__typename: 'Post',
								id: (args as DeletePostMutationVariables).id,
							});
						},
						vote: (_result, args, cache, info) => {
							const { postId, value } = args as VoteMutationVariables;
							const data = cache.readFragment(
								gql`
									fragment _ on Post {
										id
										points
									}
								`,
								{ id: postId } as any
							);

							// console.log(`data: `, data);
							if (data) {
								if (data.voteStatus === value) {
									return;
								}
								const newPoints =
									(data.points as number) + (!data.voteStatus ? 1 : 2) * value;
								cache.writeFragment(
									gql`
										fragment _ on Post {
											points
											voteStatus
										}
									`,
									{ id: postId, points: newPoints, voteStatus: value } as any
								);
							}
						},
						createPost: (_result, args, cache, info) => {
							invalidateAllPosts(cache);
						},
						logout: (_result, args, cache, info) => {
							betterUpdateQuery<LogoutMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								() => ({ me: null })
							);
						},
						login: (_result, args, cache, info) => {
							// cache.updateQuery({query: MeDocument}, (data: MeQuery) => {})
							betterUpdateQuery<LoginMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								(result, query) => {
									if (result.login.errors) {
										return query;
									} else {
										return {
											me: result.login.user,
										};
									}
								}
							);
							invalidateAllPosts(cache);
						},
						register: (_result, args, cache, info) => {
							// cache.updateQuery({query: MeDocument}, (data: MeQuery) => {})
							betterUpdateQuery<RegisterMutation, MeQuery>(
								cache,
								{ query: MeDocument },
								_result,
								(result, query) => {
									if (result.register.errors) {
										return query;
									} else {
										return {
											me: result.register.user,
										};
									}
								}
							);
						},
					},
				},
			}),
			errorExchange,
			ssrExchange,
			fetchExchange,
		],
	};
};
