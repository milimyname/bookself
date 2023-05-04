<script lang="ts">
	import { isModalOpen } from '$lib/stores/stores';
	import { fade } from 'svelte/transition';
	import { LL } from '$lib/i18n/i18n-svelte';

	// On click outside the modal, close the modal
	$: if ($isModalOpen) {
		window.addEventListener('click', (e) => {
			if (e.target === document.querySelector('.fixed')) $isModalOpen = false;
		});
	}
</script>

{#if $isModalOpen}
	<div class="fixed z-50 h-full w-full bg-black opacity-50" />

	<div
		transition:fade={{ delay: 250, duration: 300 }}
		class="absolute left-1/2 top-1/2 z-50 flex h-1/3 w-3/4 -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-md bg-white p-5 py-10 text-black sm:h-1/4 sm:w-1/2 md:gap-10 md:p-10"
	>
		<h1 class="text-center text-lg font-bold sm:text-2xl">{$LL.deleteAccModal()}</h1>
		<form
			class="flex flex-col justify-between gap-2 sm:flex-row"
			method="POST"
			action="?/deleteAcc"
		>
			<button
				type="submit"
				class="rounded-full bg-delete px-8 py-2 text-white transition-colors hover:bg-red-600"
				on:click={() => ($isModalOpen = false)}
			>
				{$LL.delete()}</button
			>
			<button
				type="button"
				class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100"
				on:click={() => ($isModalOpen = false)}
			>
				{$LL.cancel()}</button
			>
		</form>
	</div>
{/if}
