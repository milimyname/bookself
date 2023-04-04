<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';
	import { signOut } from '@auth/sveltekit/client';
	let greeting = 'press the button to load data';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	// let server;
	// let loading = false;
	// const loadData = async () => {
	// 	loading = true;
	// 	greeting = await trpc($page).greeting.query();
	// 	server = await trpc($page).log.mutate('Hi');
	// 	loading = false;
	// 	signOut();
	// };

	let isDrawerOpen = false;

	let springValue = spring(100, { stiffness: 0.05, damping: 0.5 });

	let slide = 0;

	$: slide = $springValue;

	// Close the drawer if the user clicks outside of it except for the button
	function clickOutside(e: MouseEvent) {
		const drawer = document.querySelector('.drawer');
		const button = document.querySelector('.newBookingButton');
		const aside = document.querySelector('aside');
		if (aside && aside.contains(<Node>e!.target)) return;
		if (button && button.contains(<Node>e!.target)) return;
		if (drawer && !drawer.contains(<Node>e!.target)) {
			isDrawerOpen = false;
			springValue.set(100, { soft: true });
		}
	}

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');
</script>

<svelte:window on:click={clickOutside} />

<form
	class={`drawer absolute z-10 h-full w-1/2 rounded-r-2xl bg-orange-300 px-28 py-20  `}
	style="transform: translateX({-slide}%)"
>
	<h2 class="text-2xl font-bold">New Booking</h2>
	<fieldset>
		<label for="nationality">Nationality</label>
		<select name="nationality" id="nationality">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
	</fieldset>
	<fieldset>
		<label for="applicants">Amount of applicants</label>
		<select name="applicants" id="applicants">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
	</fieldset>
</form>

{#if isDrawerOpen}
	<div class="absolute z-0 h-full w-full bg-black opacity-50" />
{/if}

<main
	class={`${
		isDrawerOpen ? 'blur ' : 'bg-[#F9F9F9] blur-0 '
	} flex flex-1 flex-col items-center gap-10 py-20 transition-all`}
>
	<header class="flex w-1/2 items-center justify-between">
		<div>
			<h1 class="mb-2 text-4xl font-bold">Bookings</h1>
			<p>There are 8 total bookings</p>
		</div>
		<div>
			<button
				class={`newBookingButton flex cursor-pointer items-center gap-2 rounded-full bg-black py-2 pl-2 pr-4 text-white hover:bg-slate-800 ${
					isDrawerOpen && 'pointer-events-none'
				}`}
				on:click={() => {
					isDrawerOpen = !isDrawerOpen;
					springValue.set(isDrawerOpen ? 0 : 100, { soft: true });
				}}
			>
				<div class="rounded-full bg-white p-2">
					<Icon src={icons.plus} className="w-5 h-5" />
				</div>
				<span class="font-medium">New Booking</span>
			</button>
		</div>
	</header>
	<div class="flex w-1/2 flex-col gap-5">
		<!-- <a
				href="#load"
				role="button"
				class="secondary"
				aria-busy={loading}
				on:click|preventDefault={loadData}>Load</a
			>
			<p>{greeting}</p>

			{#await trpc($page).users.updateUser.mutate({ userId: '12', name: 'test' })}
				<p>loading...</p>
			{:then value}
				<p>Value: {JSON.stringify(value)}</p>
			{/await} -->
		<div class="flex justify-between rounded-md border px-8 py-5">
			<h2>1</h2>
			<span>02 Day </span>
			<span>02 Night</span>
			<span>02 Person</span>
			<span>02 Room</span>
			<span>02 Room</span>
		</div>
		<div class="flex justify-between rounded-md border px-8 py-5">
			<h2>1</h2>
			<span>02 Day </span>
			<span>02 Night</span>
			<span>02 Person</span>
			<span>02 Room</span>
			<span>02 Room</span>
		</div>
		<a
			href="/booking/1"
			class={`flex items-center justify-between rounded-lg border bg-white py-5 pl-8 pr-4 drop-shadow-sm transition-colors duration-300 hover:border-[#ff9100] ${
				isDrawerOpen && 'pointer-events-none'
			}`}
		>
			<h2 class="font-semibold">#1</h2>
			<h3 class="text-sm font-medium text-slate-500">Studium/Ausbildung</h3>
			<h3 class="text-sm text-slate-500">Jessica Nomann</h3>
			<h3 class="text-sm text-slate-500">14 Oct 2023</h3>
			<div class="flex items-center gap-2">
				<div class="flex items-center gap-2 rounded-md bg-[#ff91000f] py-2 px-4">
					<div class="relative flex h-3 w-3 items-center">
						<span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#ff9100]" />
						<span class="relative inline-flex h-2 w-2 rounded-full bg-[#ff9100]" />
					</div>
					<span class="font-medium text-[#ff9100]">Pending</span>
				</div>
				<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
			</div>
		</a>
	</div>
</main>
