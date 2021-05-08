import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import React from 'react';
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';
import { Button } from '@chakra-ui/button';
import { isServer } from '../utils/isServer';
import { useRouter } from 'next/router';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
	const router = useRouter();
	const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
	const [{ data, fetching }] = useMeQuery({
		pause: isServer(), // not to run if we are on the server.
	});
	let body = null;

	// data is loading.
	if (fetching) {
		// user is not logged in
	} else if (!data?.me) {
		body = (
			<>
				<NextLink href="/login">
					<Link marginRight={2} color="white">
						Login
					</Link>
				</NextLink>
				<NextLink href="/register">
					<Link color="white">Register</Link>
				</NextLink>
			</>
		);

		// user is loggin in.
	} else {
		body = (
			<Flex alignItems="center">
				<NextLink href="/create-post">
					<Button as={Link} mr={2}>
						create post
					</Button>
				</NextLink>
				<Box color="orange" margin={2}>
					{data.me.username}
				</Box>
				<Button
					onClick={async () => {
						await logout(); // wait until logout is finished before reloading.
						router.reload();
					}}
					isLoading={logoutFetching}
					color="white"
					variant="link">
					Logout
				</Button>
			</Flex>
		);
	}

	return (
		<Flex zIndex={1} position="sticky" top={0} background="#0089aa" padding={4}>
			<Flex flex={1} margin="auto" alignItems="center" maxWidth={800}>
				<NextLink href="/">
					<Link>
						<Heading>Readit</Heading>
					</Link>
				</NextLink>

				<Box marginLeft={'auto'}>{body}</Box>
			</Flex>
		</Flex>
	);
};

export default Navbar;
