<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { Button, Container, Head, Hr, Html, Img, Preview, Section, Text } from 'svelte-email';

	export let id: string;
</script>

<Html lang="en">
	<Head>
		<title>Booking Confirmation</title>
		<meta
			name="description"
			content="Help book you an appointment in the foreigners authority in Berlin"
		/>
	</Head>
	<Preview preview="Booking confirmation" />
	<Section>
		<Container>
			<Text>We're looking for you an appointment. We'll keep updating you.</Text>
			<Button
				style={{
					color: 'white',
					padding: '1rem 2rem 1rem 2rem',
					backgroundColor: 'black'
				}}
				href={import.meta.env.DEV
					? `${env.PUBLIC_DEV}/booking/${id}`
					: `${env.PUBLIC_PROD}/booking/${id}`}>Here is your booking details.</Button
			>
			<Hr />
			<Text>Best Regards</Text>
			<Text>Bookself Team</Text>
		</Container>
	</Section>
</Html>
