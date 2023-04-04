<script>
	import { spring } from 'svelte/motion';

	let slideIn = false;
	let slide = 0;
	let springValue = spring(0, { stiffness: 0.05, damping: 0.55 });

	const handleButtonClick = () => {
		slideIn = !slideIn;
		springValue.set(slideIn ? 100 : 0);
	};

	$: slide = $springValue * -1;
</script>

<button on:click={handleButtonClick} class="z-10">
	{slideIn ? 'Slide Out' : 'Slide In'}
</button>

<div style="transform: translateX({slide}%)" class="bg-orange-400 p-10">
	<p>This text will slide in and out smoothly!</p>
</div>
