<script lang="ts">
	import bookself from '$lib/assets/white-bookself.svg';
	import imagePlaceholder from '$lib/assets/placeholder.png';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { isUserFormOpen, userDrawerSlide } from '$lib/stores/stores';

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $userDrawerSlide = $springValue;

	// Close the drawer if the user clicks outside of it except for the button
	function clickOutside(e: MouseEvent) {
		const drawer = document.querySelector('.userDrawer');
		const button = document.querySelector('.userButton');
		const aside = document.querySelector('aside');
		if (aside && aside.contains(<Node>e!.target)) return;
		if (button && button.contains(<Node>e!.target)) return;
		if (drawer && !drawer.contains(<Node>e!.target)) {
			$isUserFormOpen = false;
			springValue.set(100, { soft: true });
		}

		// document.body.style.overflow = 'auto';
	}

	$: if (!$isUserFormOpen) springValue.set(100, { soft: true });
</script>

<svelte:window on:click={clickOutside} />

<aside
	class="sticky top-0 z-50 flex items-center justify-between gap-5 bg-black p-4 md:h-screen md:flex-col md:rounded-r-3xl md:p-0"
>
	<a href="/" class="md:p-6"> <img src={bookself} class="h-12 w-12" alt="Bookself Logo" /></a>
	<div
		class="flex w-full justify-end gap-5 md:mb-5 md:mt-auto md:flex-col md:items-center md:border-b md:border-gray-200 md:pb-10"
	>
		<button>
			<Icon src={icons.language} className="w-5 h-5 fill-white" />
		</button>
		<button>
			<Icon src={icons.sun} className="w-6 h-6 fill-white" />
		</button>
	</div>
	{#if $page.data.session}
		<button
			class="userButton"
			on:click={() => {
				// document.body.style.overflow = 'hidden';
				if ($isUserFormOpen) {
					$isUserFormOpen = false;
					springValue.set(100, { soft: true });
					return;
				}
				$isUserFormOpen = true;
				springValue.set($isUserFormOpen ? 0 : 100, { soft: true });
			}}
		>
			<img
				src={$page.data.session.user?.image ? $page.data.session.user?.image : imagePlaceholder}
				alt={$page.data.session.user?.name}
				class=" w-14 cursor-pointer rounded-full transition-transform hover:scale-125 md:mb-5"
			/>
		</button>
	{/if}
</aside>

<slot />
