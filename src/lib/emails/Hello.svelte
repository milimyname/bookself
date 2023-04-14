<script lang="ts">
	import { dev } from '$app/environment';
	import { env } from '$env/dynamic/public';
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelte-email';

	export let id: string;
</script>

<Html lang="en">
	<Head>
		<title>Welcome to Bookself || Verification Email</title>
		<meta
			name="description"
			content="Help book you an appointment in the foreigners authority in Berlin"
		/>
	</Head>
	<Preview preview="Welcome to Bookself" />
	<Section>
		<Container>
			<Text>Welcome to Bookself</Text>
			<Text>Confirm your email to book your appointment.</Text>
			<Button
				style={{
					color: 'white',
					padding: '1rem 2rem 1rem 2rem',
					backgroundColor: 'black'
				}}
				href={dev ? `${env.PUBLIC_PROD}/confirm/${id}` : `${env.PUBLIC_DEV}/confirm/${id}`}
				>Confirm your email</Button
			>
			<Hr />
			<Text>Best Regards</Text>
			<Text>Bookself Team</Text>
		</Container>
	</Section>
</Html>
