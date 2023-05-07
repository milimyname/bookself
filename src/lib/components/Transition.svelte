<script lang="ts">
	import { slide } from 'svelte/transition';

	// your script goes here
	export let url: URL;
</script>

{#key url}
	<div transition:slide={{ delay: 0, duration: 0 }} class="w-full">
		<slot />
	</div>
{/key}
