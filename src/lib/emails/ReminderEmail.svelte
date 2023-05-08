<script lang="ts">
	import { Container, Head, Html, Preview, Section, Text, Hr, Link } from 'svelte-email';

	export let name: string;
</script>

<Html lang="en">
	<Head>
		<title>Reminder Email</title>
		<meta name="description" content="Help book you an appointment at Ausländerbehörde Berlin." />
	</Head>
	<Preview preview="Reminder Email" />
	<Section>
		<Container>
			<Text>Hi {name}.</Text>
			<Text
				>We added the Anmeldung booking in Berlin (in beta). It was easier to implement and it might
				conclude the Berlin booking systems which Bookself will provide.</Text
			>
			<Hr />
			<Text
				>We've been looking for an appointment but unfortunately, we could not find any yet.
				Sometimes it takes time and hopefully, we'll get one for you asap.</Text
			>
			<Text
				>As you know that it runs in beta and we try different ways to find an appointment. If you
				want to help us how to be more efficient, please let us know! Any help is appreciated.</Text
			>
			<Text
				>Firstly, we develop new features/bug fixes in the beta test version, so you can comment
				directly on it when you log in. If you have any requests, you can email us via this email or
				leave your comments in the beta app.</Text
			>
			<Link href="https://bookself-git-beta-test-milimyname.vercel.app/">Beta App</Link>

			<Text>Best Regards</Text>
			<Text>Bookself Team</Text>
		</Container>
	</Section>
</Html>
