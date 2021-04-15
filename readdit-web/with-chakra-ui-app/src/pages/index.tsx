import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { usePostsQuery } from '../generated/graphql';
import Layout from '../components/Layout';
import { Link, Stack, Box, Heading, Text, Flex } from '@chakra-ui/layout';
import NextLink from 'next/link';
import React from 'react';
import { Button } from '@chakra-ui/button';

const Index = () => {
	const [{ data, fetching }] = usePostsQuery({
		variables: {
			limit: 10,
		},
	});

	// If we are not loading and we have no data, return that the query failed.
	if (!fetching && !data) {
		return <div>query failed</div>;
	}

	return (
		<Layout>
			<Flex textAlign="center">
				<Heading>Readit</Heading>
				<NextLink href="/create-post">
					<Link ml="auto">create post</Link>
				</NextLink>
			</Flex>
			{!data && fetching ? ( // if there is no data and we are loading, show the loading text.
				<div>Loading...</div>
			) : (
				<Stack spacing={8}>
					{data!.posts.map(post => (
						<Box key={post.id} p={5} shadow="md" borderWidth="1px">
							<Heading fontSize="xl">{post.title}</Heading>
							<Text mt={4}>{post.textSnippet}</Text>
						</Box>
					))}
				</Stack>
			)}
			{/* Only show the button is there is data */}
			{data ? (
				<Flex>
					<Button isLoading={fetching} m="auto" my={8}>
						Load More...
					</Button>
				</Flex>
			) : null}
		</Layout>
	);
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
