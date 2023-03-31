<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';

	let greeting = 'press the button to load data';
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();
		loading = false;
	};

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');
</script>

<h6>Loading data in<br /><code>+page.svelte</code></h6>

<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={loading}
	on:click|preventDefault={loadData}>Load</a
>
<p>{greeting}</p>
