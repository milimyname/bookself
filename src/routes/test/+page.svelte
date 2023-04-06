<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let count = 0;

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

<button on:click={increment}>+</button>
<p>Count: {count}</p>
<button on:click={decrement}>-</button>
<button on:click={() => goto('/')}>Go to About page</button>
