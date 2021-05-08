import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
	PostsQuery,
	PostSnippetFragment,
	useVoteMutation,
	VoteMutationVariables,
} from '../generated/graphql';

interface UpdootSectionProps {
	post: PostSnippetFragment;
}

const UpdootSection: React.FC<UpdootSectionProps> = ({ post }) => {
	const [loadingState, setLoadingState] = useState<
		'updoot-loading' | 'downdoot-loading' | 'not-loading'
	>('not-loading');
	const [, vote] = useVoteMutation();

	//console.log(operation?.variables?.value);
	return (
		<Flex
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
			mr={4}>
			<IconButton
				colorScheme={post.voteStatus === 1 ? 'green' : undefined}
				aria-label="Updoot"
				icon={<ChevronUpIcon />}
				onClick={async () => {
					if (post.voteStatus === 1) {
						return; // do nothing if you already upvoted it.
					}
					setLoadingState('updoot-loading');
					await vote({
						postId: post.id,
						value: 1,
					});
					setLoadingState('not-loading');
				}}
				isLoading={loadingState === 'updoot-loading'}
			/>
			{post.points}
			<IconButton
				colorScheme={post.voteStatus === -1 ? 'red' : undefined}
				aria-label="Downdoot"
				icon={<ChevronDownIcon />}
				onClick={async () => {
					if (post.voteStatus === -1) {
						return; // do nothing if you already downvoted it.
					}
					setLoadingState('downdoot-loading');
					await vote({
						postId: post.id,
						value: -1,
					});
					setLoadingState('not-loading');
				}}
				isLoading={loadingState === 'downdoot-loading'}
			/>
		</Flex>
	);
};

export default UpdootSection;
