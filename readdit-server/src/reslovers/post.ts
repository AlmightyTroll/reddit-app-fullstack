import { Post } from '../entities/Post';
import {
	Arg,
	Ctx,
	Field,
	FieldResolver,
	InputType,
	Int,
	Mutation,
	ObjectType,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';
import { Updoot } from '../entities/Updoot';
import { User } from '../entities/User';

/////////////////////
// 		Pagination:
//			Allows you to render a 'chunk' of posts at once on the screen and will load more as you scroll.
/////////////////////

@InputType()
class PostInput {
	@Field()
	title: string;
	@Field()
	text: string;
}

@ObjectType()
class PaginatedPosts {
	@Field(() => [Post])
	posts: Post[];
	@Field()
	hasMore: boolean;
}

@Resolver(Post)
export class PostResolver {
	@FieldResolver(() => String)
	textSnippet(@Root() root: Post) {
		return root.text.slice(0, 50);
	}

	// fetching the user no matter where the post is coming from . a SQL request will be sent and it will fetch the creator.
	@FieldResolver(() => User)
	creator(@Root() post: Post, @Ctx() { userLoader }: MyContext) {
		return userLoader.load(post.creatorId);
	}

	@FieldResolver(() => Int, { nullable: true })
	async voteStatus(
		@Root() post: Post,
		@Ctx() { updootLoader, req }: MyContext
	) {
		if (!req.session.userId) {
			return null;
		}
		const updoot = await updootLoader.load({
			postId: post.id,
			userId: req.session.userId,
		});

		return updoot ? updoot.value : null;
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async vote(
		@Arg('postId', () => Int) postId: number,
		@Arg('value', () => Int) value: number,
		@Ctx() { req }: MyContext
	) {
		const isUpdoot = value !== -1;
		const realValue = isUpdoot ? 1 : -1;
		const { userId } = req.session;

		const updoot = await Updoot.findOne({ where: { postId, userId } });

		// the user has voted on the post before and are changing their vote
		if (updoot && updoot.value !== realValue) {
			// if they upvoted, the realValue is 1. Now if they try to upvote again, the updoot.value will match the realValue and wont let you upvote.
			await getConnection().transaction(async tm => {
				await tm.query(
					`update updoot
					set value = $1
					where "postId" = $2 and "userId" = $3
				`,
					[realValue, userId, postId]
				);

				await tm.query(
					`update post 
					set points = points + $1
					where id = $2
				`,
					[2 * realValue, postId]
				); // need to change by 2 points when changing your vote so that its not 0.
			});
			// has never voted before.
		} else if (!updoot) {
			await getConnection().transaction(async tm => {
				await tm.query(
					`insert into updoot ("userId", "postId", value)
				values ($1, $2, $3);
				`,
					[userId, postId, realValue]
				);
				await tm.query(
					`
				update post 
				set points = points + $1
				where id = $2
				`,
					[realValue, postId]
				);
			});
		}

		// await Updoot.insert({
		// 	userId,
		// 	postId,
		// 	value: realValue,
		// });

		return true;
	}

	//1st graphql querry. our schema is a single querry that says hello world.
	@Query(() => PaginatedPosts) // [Type]
	async posts(
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null
	): Promise<PaginatedPosts> {
		const realLimit = Math.min(50, limit); // the min number of posts shown.
		const realLimitPlusOne = realLimit + 1;

		const replacements: any[] = [realLimitPlusOne];

		if (cursor) {
			// loading more data
			replacements.push(new Date(parseInt(cursor)));
		}

		// SQL
		// single join query.
		const posts = await getConnection().query(
			`
		
		select p.*
		from post p
		${cursor ? `where p."createdAt" < $2` : ''}
		order by p."createdAt" DESC
		limit $1

		`,
			replacements
		);

		// const qb = getConnection()
		// 	.getRepository(Post)
		// 	.createQueryBuilder('p')
		// 	.innerJoinAndSelect('p.creator', 'u', 'u.id = p."creatorId"')
		// 	.orderBy('p."createdAt"', 'DESC')
		// 	.take(realLimitPlusOne);

		// if (cursor) {
		// 	qb.where('p."createdAt" < :cursor', {
		// 		cursor: new Date(parseInt(cursor)),
		// 	});
		// }

		// const posts = await qb.getMany();

		//console.log(`posts`, posts);

		return {
			posts: posts.slice(0, realLimit),
			hasMore: posts.length === realLimitPlusOne,
		};
	}

	@Query(() => Post, { nullable: true })
	post(@Arg('id', () => Int) id: number): Promise<Post | undefined> {
		return Post.findOne(id);
	}

	@Mutation(() => Post)
	//any place that we need to check this check we just use @UseMiddleware(isAuth).
	// runs before the createPost().
	@UseMiddleware(isAuth)
	async createPost(
		@Arg('input') input: PostInput, // title type of string is inferred by TS already so we don't need to asign it.
		@Ctx() { req }: MyContext
	): Promise<Post> {
		return Post.create({
			...input,
			creatorId: req.session.userId,
		}).save(); // 2 SQL queries. 1 to insert and 1 to select.
	}

	@Mutation(() => Post, { nullable: true })
	@UseMiddleware(isAuth)
	async updatePost(
		@Arg('id', () => Int) id: number,
		@Arg('title') title: string,
		@Arg('text') text: string,
		@Ctx() { req }: MyContext
	): Promise<Post | null> {
		const result = await getConnection()
			.createQueryBuilder()
			.update(Post)
			.set({ title, text })
			.where('id = :id and "creatorId" = :creatorId', {
				id,
				creatorId: req.session.userId,
			})
			.returning('*')
			.execute();
		console.log(`result: `, result);
		return result.raw[0];
	}

	@Mutation(() => Boolean)
	@UseMiddleware(isAuth)
	async deletePost(
		@Arg('id', () => Int) id: number,
		@Ctx() { req }: MyContext
	): Promise<boolean> {
		//NON CASCADE WAY TO DELETE POST.

		// const post = await Post.findOne(id);
		// if (!post) {
		// 	return false;
		// }
		// if (post.creatorId !== req.session.userId) {
		// 	throw new Error('not autorized');
		// }
		// await Updoot.delete({ postId: id }); // have to delete the updoots to the post before deleting the post, else get an error about foreign key constraint violations.
		// await Post.delete({ id });

		// CASCADE WAY TO DELETE POST: SEE Updoots.ts as well.

		await Post.delete({ id, creatorId: req.session.userId });
		return true;
	}
}
