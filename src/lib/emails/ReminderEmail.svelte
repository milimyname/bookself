<script lang="ts">
	import { Container, Head, Html, Preview, Section, Text } from 'svelte-email';

	export let name: string;
</script>

<Html lang="en">
	<Head>
		<title>Reminder Email</title>
		<meta
			name="description"
			content="Help book you an appointment in the foreigners authority in Berlin"
		/>
	</Head>
	<Preview preview="Reminder Email" />
	<Section>
		<Container>
			<Text>Hi {name}.</Text>
			<Text
				>We've been looking for an appointment but unfortunately, we could not find any yet.
				Sometimes it takes time and hopefully, we'll get soon.</Text
			>
			<Text>Best Regards</Text>
			<Text>Bookself Team</Text>
		</Container>
	</Section>
</Html>
