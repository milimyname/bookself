<script lang="ts">
	import bookself from '$lib/assets/white-bookself.svg';
	import imagePlaceholder from '$lib/assets/placeholder.png';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import {
		isUserFormOpen,
		userDrawerSlide,
		darkMode,
		anyQuestions,
		anyQuestionsDrawerSlide
	} from '$lib/stores/stores';
	import { userClickOutside, questionsClickOutside } from '$lib/hooks/clickOutside';
	import { handleSwitchDarkMode } from '$lib/hooks/handleDarkMode';
	import { browser } from '$app/environment';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { goto } from '$app/navigation';
	import Questions from '$lib/components/Questions.svelte';
	import Transition from '$lib/components/Transition.svelte';

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });
	let springValueQuestions = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $userDrawerSlide = $springValue;
	$: $anyQuestionsDrawerSlide = $springValueQuestions;

	export let data;

	$: if (!$isUserFormOpen) springValue.set(100, { soft: true });
	$: if (!$anyQuestions) springValueQuestions.set(100, { soft: true });

	// Dark Mode
	$: if (browser) {
		if (
			window.matchMedia('(prefers-color-scheme: dark)').matches &&
			localStorage.getItem('darkMode') !== 'false'
		) {
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

	/*
	 *	Add uestions letters from animate-letters span one by one with smooth animation.
	 *	Keep the letters for 5 second and then remove them one by one.
	 */
	// let span: HTMLSpanElement;
	// const text = 'Questions?';
	// let index = 0;

	// onMount(() => {
	// 	animateTyping();
	// });

	// function animateTyping() {
	// 	if (!span) return;
	// 	if (index < text.length) {
	// 		span.textContent += text.charAt(index);
	// 		index++;
	// 		setTimeout(animateTyping, 500);
	// 	} else {
	// 		setTimeout(eraseTyping, 1000);
	// 	}

	// 	return () => {
	// 		index = 0;
	// 		span.textContent = '';
	// 		setTimeout(animateTyping, 1000);
	// 	};
	// }

	// function eraseTyping() {
	// 	if (index > 1) {
	// 		span.textContent = text.substring(0, index - 1);
	// 		index--;
	// 		setTimeout(eraseTyping, 500);
	// 	} else setTimeout(animateTyping, 10000);
	// }
</script>

<svelte:window
	on:click={(e) => {
		userClickOutside(e, springValue);
		questionsClickOutside(e, springValueQuestions);
	}}
/>

<Questions />

<aside
	class="sticky top-0 z-50 flex items-center justify-between gap-5 bg-black p-4 transition-colors dark:bg-[#3F3351] md:h-screen md:flex-col md:rounded-r-3xl md:p-0"
>
	<a href="https://glowing-brand-015819.framer.app/" class="md:p-6">
		<img src={bookself} class="h-12 w-12" alt="Bookself Logo" /></a
	>
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
				class="w-14 cursor-pointer rounded-full transition-transform hover:scale-125 md:mb-5"
			/>
		</button>
	{/if}
</aside>

<Transition url={$page.url}>
	<slot />
</Transition>

<button
	class="q-button fixed bottom-5 right-4 h-10 rounded-full bg-black px-3 text-lg font-bold text-white drop-shadow transition-all dark:bg-[#864879] md:right-10"
	on:click={() => {
		console.log('clicked');
		if ($anyQuestions) {
			$anyQuestions = false;
			springValueQuestions.set(100, { soft: true });
			return;
		}

		$anyQuestions = true;
		springValueQuestions.set($anyQuestions ? 0 : 100, { soft: true });
	}}
>
	F&Q
</button>
