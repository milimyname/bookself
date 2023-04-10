<script lang="ts">
	import bookself from '$lib/assets/white-bookself.svg';
	import logo from '$lib/assets/favicon.png';
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import { signOut } from '@auth/sveltekit/client';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<aside
	class="z-50 flex items-center justify-between gap-5 bg-black p-4 md:h-full md:flex-col md:rounded-r-3xl md:p-0"
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
		<button on:click={() => signOut()} >
			<img
				src={$page.data.session.user?.image ? $page.data.session.user?.image : logo}
				alt={$page.data.session.user?.name}
				class="h-10 w-10 cursor-pointer rounded-full transition-transform hover:scale-125 md:mb-5"
			/>
		</button>
	{/if}
</aside>
<slot />
