<script lang="ts">
	import bookself from '$lib/assets/white-bookself.svg';
	import logo from '$lib/assets/favicon.png';
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import { signOut } from '@auth/sveltekit/client';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<aside class="z-50 flex h-full flex-col items-center justify-between rounded-r-2xl bg-black">
	<a href="/" class="p-6"> <img src={bookself} alt="Bookself Logo" /></a>
	<div class="brder mb-5 mt-auto flex w-full flex-col items-center gap-5 border-b pb-10">
		<button>
			<Icon src={icons.language} className="w-5 h-5 fill-white" />
		</button>
		<button>
			<Icon src={icons.sun} className="w-6 h-6 fill-white" />
		</button>
	</div>
	{#if $page.data.session}
		<button on:click={() => signOut()}>
			<img
				src={$page.data.session.user?.image ? $page.data.session.user?.image : logo}
				alt={$page.data.session.user?.name}
				class="mb-5 h-10 w-10 cursor-pointer rounded-full transition-transform hover:scale-125"
			/>
		</button>
	{/if}
</aside>
<slot />
