<script lang="ts">
	import { icons } from '$lib/assets/icons';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { loading } from '$lib/stores/stores';

	export let errors: any;

	$: if (errors) $loading = false;
</script>

{#if $loading}
	<div
		class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
	>
		<div class="flex items-center gap-5 rounded-md bg-white p-5">
			<Icon src={icons.loading} className="h-5 w-5 animate-spin " />
			<span class="text-xl font-medium">Pending...</span>
		</div>
	</div>
{/if}
