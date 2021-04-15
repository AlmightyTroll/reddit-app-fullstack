import { MyContext } from '../types';
import { MiddlewareFn } from 'type-graphql';

// middleware runs b4 the resolver.
export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
	// to catch users that try to post when they are not logged in.
	if (!context.req.session.userId) {
		throw new Error('not authenticated ');
	}

	return next();
};
