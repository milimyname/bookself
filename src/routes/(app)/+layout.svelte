<script lang="ts">
	import bookself from '$lib/assets/white-bookself.svg';
	import imagePlaceholder from '$lib/assets/placeholder.png';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { isUserFormOpen, userDrawerSlide, darkMode } from '$lib/stores/stores';
	import { userClickOutside } from '$lib/hooks/clickOutside';
	import { handleSwitchDarkMode } from '$lib/hooks/handleDarkMode';
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import { invalidateAll } from '$app/navigation';

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $userDrawerSlide = $springValue;

	export let data;

	$: if (!$isUserFormOpen) springValue.set(100, { soft: true });

	// Dark Mode
	$: if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			$darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			$darkMode = false;
		}
	}

	// Language
	const switchLanguage = () => {
		// Get current url
		const url = new URL(window.location.href);

		data.locale === 'en' ? goto(`${url.pathname}?lang=de`) : goto(`${url.pathname}?lang=en`);
	};
</script>

<svelte:window on:click={(e) => userClickOutside(e, springValue)} />

<aside
	class="sticky top-0 z-50 flex items-center justify-between gap-5 bg-black p-4 transition-colors dark:bg-[#3F3351] md:h-screen md:flex-col md:rounded-r-3xl md:p-0"
>
	<a href="/" class="md:p-6"> <img src={bookself} class="h-12 w-12" alt="Bookself Logo" /></a>
	<div
		class="flex w-full justify-end gap-5 md:mb-5 md:mt-auto md:flex-col md:items-center md:border-b md:border-gray-200 md:pb-10"
	>
		<button class="cursor-pointer font-bold text-white" on:click={switchLanguage}>
			{data.locale}
		</button>
		<button on:click={handleSwitchDarkMode} class="transition-all">
			{#if !$darkMode}
				<div
					class="transition-all"
					transition:slide={{ delay: 0, duration: 500, easing: quintOut, axis: 'y' }}
				>
					<Icon src={icons.sun} className="w-6 h-6 fill-white" />
				</div>
			{:else}
				<div
					class="transition-all"
					transition:slide={{ delay: 0, duration: 500, easing: quintOut, axis: 'y' }}
				>
					<Icon src={icons.moon} className="w-6 h-6 fill-white" />
				</div>
			{/if}
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
