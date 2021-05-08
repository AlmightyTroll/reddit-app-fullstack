import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Box, IconButton, Link } from '@chakra-ui/react';
import React from 'react';
import NextLink from 'next/link';
import { useDeletePostMutation, useMeQuery } from '../generated/graphql';

interface EditDeletePostButtonsProps {
	id: number;
	creatorId: number;
}

const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
	id,
	creatorId,
}) => {
	const [{ data: meData }] = useMeQuery();
	const [, deletePost] = useDeletePostMutation();

	if (meData?.me?.id !== creatorId) {
		return null;
	}

	return (
		<Box>
			<NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
				<IconButton
					as={Link}
					marginRight={4}
					colorScheme="blue"
					marginLeft="auto"
					aria-label="Edit Post"
					icon={<EditIcon />}
				/>
			</NextLink>

			<IconButton
				colorScheme="red"
				marginLeft="auto"
				aria-label="Delete Post"
				icon={<DeleteIcon />}
				onClick={() => {
					deletePost({
						id,
					});
				}}
			/>
		</Box>
	);
};

export default EditDeletePostButtons;
