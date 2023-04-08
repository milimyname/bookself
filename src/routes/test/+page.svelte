<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { trpc } from '$lib/trpc/client';

	import { page } from '$app/stores';

	let greeting = 'press the button to load data';
	let count = 0;
	let server;
	let loading = false;
	const loadData = async () => {
		loading = true;
		greeting = await trpc($page).greeting.query();
		server = await trpc($page).log.mutate('Hi');
		loading = false;
	};

	const increment = () => {
		count += 1;
	};

	const decrement = () => {
		count -= 1;
	};

	onMount(() => {
		const interval = setInterval(() => {
			count += 1;
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<!-- <button on:click={increment}>+</button>
<p>Count: {count}</p>
<button on:click={decrement}>-</button>
<button on:click={() => goto('/')}>Go to About page</button> -->

<div class="flex flex-col gap-5 p-20">
	<a
		href="#load"
		role="button"
		class="secondary"
		aria-busy={loading}
		on:click|preventDefault={loadData}>Load</a
	>
	<p>{greeting}</p>

	{#await trpc($page).bookings.getBookings.query()}
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
