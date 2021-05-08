import { Box, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import { withUrqlClient } from 'next-urql';
import { useRouter } from 'next/router';
import React from 'react';
import InputField from '../../../components/InputField';
import Layout from '../../../components/Layout';
import { useUpdatePostMutation } from '../../../generated/graphql';
import { createUrqlClient } from '../../../utils/createUrqlClient';
import { useGetIntId } from '../../../utils/useGetIntId';
import { useGetPostFromUrl } from '../../../utils/useGetPostFromUrl';

const EditPost = ({}) => {
	const router = useRouter();
	const intId = useGetIntId();
	const [{ data, fetching }] = useGetPostFromUrl();
	const [, updatePost] = useUpdatePostMutation();
	if (fetching) {
		return (
			<Layout>
				<div>Loading...</div>
			</Layout>
		);
	}

	if (!data?.post) {
		return (
			<Layout>
				<Box>could not find post.</Box>
			</Layout>
		);
	}

	return (
		<Layout variant="small">
			<Formik
				initialValues={{ title: data.post.title, text: data.post.text }}
				onSubmit={async values => {
					// const { error } = await createPost({ input: values });
					// if (!error) {
					//     router.push('/');
					// }
					await updatePost({ id: intId, ...values });
					router.back();
				}}>
				{({ isSubmitting }) => (
					<Form>
						<InputField name="title" placeholder="title" label="Title" />
						<Box marginTop={4}>
							<InputField
								textarea
								name="text"
								placeholder="text..."
								label="Body"
							/>
						</Box>
						<Button
							marginTop={4}
							marginRight={4}
							type="submit"
							isLoading={isSubmitting}
							colorScheme="teal">
							Update Post
						</Button>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default withUrqlClient(createUrqlClient)(EditPost);
