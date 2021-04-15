import { Post } from '../entities/Post';
import {
	Arg,
	Ctx,
	Field,
	InputType,
	Int,
	Mutation,
	Query,
	Resolver,
	UseMiddleware,
} from 'type-graphql';
import { MyContext } from '../types';
import { isAuth } from '../middleware/isAuth';
import { getConnection } from 'typeorm';

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

@Resolver()
export class PostResolver {
	//1st graphql querry. our schema is a single querry that says hello world.
	@Query(() => [Post]) // [Type]
	async posts(
		@Arg('limit', () => Int) limit: number,
		@Arg('cursor', () => String, { nullable: true }) cursor: string | null
	): Promise<Post[]> {
		const realLimit = Math.min(50, limit); // the min number of posts shown.
		const qb = getConnection()
			.getRepository(Post)
			.createQueryBuilder('p')
			.orderBy('"createdAt"', 'DESC')
			.take(realLimit);

		if (cursor) {
			qb.where('"createdAt" < :cursor', { cursor: new Date(parseInt(cursor)) });
		}
		return qb.getMany();
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
	async updatePost(
		@Arg('id') id: number,
		@Arg('title', () => String, { nullable: true }) title: string
	): Promise<Post | null> {
		const post = await Post.findOne(id); // 1 SQL query to select
		if (!post) {
			return null;
		}
		if (typeof title !== 'undefined') {
			await Post.update({ id }, { title }); // 1 SQL query to insert.
		}
		return post;
	}

	@Mutation(() => Boolean)
	async deletePost(@Arg('id') id: number): Promise<boolean> {
		await Post.delete(id);
		return true;
	}
}
