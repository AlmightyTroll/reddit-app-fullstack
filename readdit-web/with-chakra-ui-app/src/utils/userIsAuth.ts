import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';

export const userIsAuth = () => {
	// checking to see if you are logged in using the me query. If you are logged in nothing will happen.
	const [{ data, fetching }] = useMeQuery();
	const router = useRouter();
	useEffect(() => {
		// if not loading and if not logged in, will be routed to the login page
		if (!fetching && !data?.me) {
			router.replace('/login?next=' + router.pathname); // telling the login page where to go after the login is sucessful.
		}
	}, [fetching, data, router]);
};
