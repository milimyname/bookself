<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelte-email';

	export let id: string;
</script>

<Html lang="en">
	<Head>
		<title>Reset password</title>
		<meta name="description" content="Reset password" />
	</Head>
	<Preview preview="Reset password" />
	<Section>
		<Container>
			<Text>Reset password</Text>
			<Button
				style={{
					color: 'white',
					padding: '1rem 2rem 1rem 2rem',
					backgroundColor: 'black'
				}}
				href={import.meta.env.DEV
					? `${env.PUBLIC_DEV}/reset/${id}`
					: `${env.PUBLIC_PROD}/reset/${id}`}>Create a new password</Button
			>
			<Hr />
			<Text>Best Regards</Text>
			<Text>Bookself Team</Text>
		</Container>
	</Section>
</Html>
