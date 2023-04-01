<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';

	let greeting = 'press the button to load data';
	let server;
	let loading = false;

	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();
		server = await trpc($page).log.mutate('Hi');
		loading = false;
	};

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');
</script>

<h6>Loading data in<br /><code>+page.svelte</code></h6>

<div>
	{#if $page.data.session}
		<h1>{$page.data.session.user?.name}</h1>
		<img src={$page.data.session.user?.image} alt={$page.data.session.user?.name} />
	{:else}
		<h1>Not signed in</h1>
	{/if}
</div>

<a
	href="#load"
	role="button"
	class="secondary"
	aria-busy={loading}
	on:click|preventDefault={loadData}>Load</a
>
<p>{greeting}</p>

{#await trpc($page).users.updateUser.mutate({ userId: '12', name: 'test' })}
	<p>loading...</p>
{:then value}
	<p>Value: {JSON.stringify(value)}</p>
{/await}
