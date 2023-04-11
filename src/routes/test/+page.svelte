<script>
	import { trpc } from '$lib/trpc/client';

	import { page } from '$app/stores';

	let greeting = 'press the button to load data';
	let server;
	let loading = false;
	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();
		server = await trpc($page).log.mutate('Hi');
		loading = false;
	};
</script>

<div class="flex flex-col gap-5 p-20">
	<a
		href="#load"
		role="button"
		class="secondary"
		aria-busy={loading}
		on:click|preventDefault={loadData}>Load</a
	>
	<p>{greeting}</p>

	{#await trpc($page).users.getUser.query()}
		<p>loading...</p>
	{:then value}
		<p>Value: {JSON.stringify(value)}</p>
	{/await}

	{#await trpc($page).users.updateUser.mutate({ userId: '12', name: 'test' })}
		<p>loading...</p>
	{:then value}
		<p>Value: {JSON.stringify(value)}</p>
	{/await}
</div>
