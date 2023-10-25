<script lang="ts">
	import { fly } from 'svelte/transition';

	// your script goes here
	export let url: URL;
</script>

{#key url}
	<div
		in:fly={{ delay: 0, duration: 0, x: 0 }}
		out:fly={{ delay: 0, duration: 0, x: 0 }}
		class="w-full"
	>
		<slot />
	</div>
{/key}
