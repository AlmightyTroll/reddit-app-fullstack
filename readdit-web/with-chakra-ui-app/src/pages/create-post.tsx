import { Box, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react';
import InputField from '../components/InputField';
import { useCreatePostMutation } from '../generated/graphql';
import { useRouter } from 'next/router';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import Layout from '../components/Layout';
import { userIsAuth } from '../utils/userIsAuth';

const CreatePost: React.FC<{}> = ({}) => {
	const router = useRouter();
	userIsAuth();
	const [, createPost] = useCreatePostMutation();

	return (
		<Layout variant="small">
			<Formik
				initialValues={{ title: '', text: '' }}
				onSubmit={async values => {
					const { error } = await createPost({ input: values });
					if (!error) {
						router.push('/');
					}
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
							Create Post
						</Button>
					</Form>
				)}
			</Formik>
		</Layout>
	);
};

export default withUrqlClient(createUrqlClient)(CreatePost);
