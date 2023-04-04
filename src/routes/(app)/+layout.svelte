<script>
	import bookself from '$lib/assets/white-bookself.svg';
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<aside class="z-20 flex h-full flex-col items-center justify-between rounded-r-2xl bg-[#1A120B]">
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
		<img
			src={$page.data.session.user?.image}
			alt={$page.data.session.user?.name}
			class="mb-5 h-10 w-10 rounded-full"
		/>
	{:else}
		<div
			class="bg-bg-gradient-to-r from-10% via-30% to-90% mb-5 h-8 w-8 rounded-full from-indigo-500 via-sky-500 to-emerald-500"
		/>
	{/if}
</aside>
<slot />
