import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/layout';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import React, { useState } from 'react';
import EditDeletePostButtons from '../components/EditDeletePostButtons';
import Layout from '../components/Layout';
import UpdootSection from '../components/UpdootSection';
import { usePostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';

const Index = () => {
	const [variables, setVariables] = useState({
		limit: 15,
		cursor: null as null | string,
	});

	const [{ data, error, fetching }] = usePostsQuery({
		variables,
	});

	// console.log(variables);
	// console.log('isFetching: ', fetching);

	// If we are not loading and we have no data, return that the query failed.
	if (!fetching && !data) {
		return (
			<div>
				<div>Query Failed</div>
				<div>{error?.message}</div>
			</div>
		);
	}

	return (
		<Layout>
			{!data && fetching ? ( // if there is no data and we are loading, show the loading text.
				<div>Loading...</div>
			) : (
				<Stack spacing={8}>
					{data!.posts.posts.map(post =>
						!post ? null : ( // need the !post ? null terniary b/c w/o it post will be null and then you cant get post.id from a null post.
							<Flex key={post.id} p={5} shadow="md" borderWidth="1px">
								<UpdootSection post={post} />
								<Box flex={1}>
									<NextLink href="/post/[id]" as={`/post/${post.id}`}>
										<Link>
											<Heading fontSize="xl">{post.title}</Heading>
										</Link>
									</NextLink>
									<Text>posted by: {post.creator.username}</Text>
									<Flex alignItems="center">
										<Text flex={1} mt={4}>
											{post.textSnippet}
										</Text>
										{/* if you are not the post owner dont show the edit and delete buttons, else, show the buttons. */}
										<Box ml="auto">
											<EditDeletePostButtons
												id={post.id}
												creatorId={post.creator.id}
											/>
										</Box>
									</Flex>
								</Box>
							</Flex>
						)
					)}
				</Stack>
			)}
			{/* Only show the button is there is data */}
			{data && data.posts.hasMore ? (
				<Flex>
					<Button
						onClick={() => {
							setVariables({
								limit: variables.limit,
								cursor: data.posts.posts[data.posts.posts.length - 1].createdAt,
							});
						}}
						isLoading={fetching}
						m="auto"
						my={8}>
						Load More...
					</Button>
				</Flex>
			) : null}
		</Layout>
	);
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
