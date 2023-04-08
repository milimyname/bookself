<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BookingForm from '$lib/components/BookingForm.svelte';
	import { isDrawerOpen } from '$lib/stores/stores';
	import Booking from '$lib/components/Booking.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');

	export let data;

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });
	let drawerSlide = 0;

	$: drawerSlide = $springValue;

	// Close the drawer if the user clicks outside of it except for the button
	function clickOutside(e: MouseEvent) {
		const drawer = document.querySelector('.drawer');
		const button = document.querySelector('.newBookingButton');
		const aside = document.querySelector('aside');
		if (aside && aside.contains(<Node>e!.target)) return;
		if (button && button.contains(<Node>e!.target)) return;
		if (drawer && !drawer.contains(<Node>e!.target)) {
			$isDrawerOpen = false;
			springValue.set(100, { soft: true });
		}
	}

	// Check store to see if the drawer is open
	$: if (!$isDrawerOpen) springValue.set(100, { soft: true });
	$: if ($isDrawerOpen) springValue.set(0, { soft: true });
</script>

<svelte:window on:click={clickOutside} />

{#if $isDrawerOpen}
	<div class="fixed z-20 h-full w-full bg-black opacity-50" />
{/if}

<BookingForm {drawerSlide} {data} />

<main
	class={`${
		$isDrawerOpen ? 'blur' : 'blur-0'
	} flex  flex-1 flex-col items-center gap-10 py-20 transition-all`}
>
	<header class="flex w-full items-center justify-between gap-5 px-10 xl:w-7/12 xl:px-0">
		<div>
			<h1 class="mb-2 text-4xl font-bold">Bookings</h1>
			<p>There are 8 total bookings</p>
		</div>
		<div>
			<button
				class={` newBookingButton flex cursor-pointer items-center gap-2 rounded-full bg-black py-2 pl-2 pr-4 text-white transition-colors hover:bg-slate-800 ${
					$isDrawerOpen && 'pointer-events-none'
				}`}
				on:click={() => {
					$isDrawerOpen = true;
					springValue.set($isDrawerOpen ? 0 : 100, { soft: true });
				}}
			>
				<div class="rounded-full bg-white p-2">
					<Icon src={icons.plus} className="w-5 h-5" />
				</div>
				<span class="font-medium">New Booking</span>
			</button>
		</div>
	</header>
	<section class="flex w-full flex-col gap-2 px-10 xl:w-7/12 xl:px-0">
		{#await data.bookings}
			<!-- <Spinner errors={data} /> -->
		{:then data}
			{#each data.bookings as booking}
				<Booking
					visaType={booking.visaType}
					bookingId={booking.id}
					status={booking.status}
					lastName={booking.lastName}
					firstName={booking.firstName}
					createdAt={booking.createdAt}
				/>
			{/each}
		{/await}

		<!-- <a
			href="/booking/2"
			class={`grid  grid-cols-[20px_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)] items-center justify-items-end  rounded-lg border bg-white py-5 pl-8 pr-4 drop-shadow-sm transition-colors duration-300 hover:border-[#ff9100] ${
				$isDrawerOpen && 'pointer-events-none'
			}`}
		>
			<h2 class="font-semibold">#1</h2>
			<h3 class="text-sm font-medium text-slate-500">Studium/Ausbildung</h3>
			<h3 class="text-sm text-slate-500">Jessica Nomann</h3>
			<h3 class="text-sm text-slate-500">14 Oct 2023</h3>
			<div class="flex items-center justify-end gap-2">
				<div
					class="flex w-28 items-center justify-center gap-2 rounded-md bg-[#ff91000f] px-4 py-2"
				>
					<div class="relative flex h-3 w-3 items-center">
						<span class="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-[#ff9100]" />
						<span class="relative inline-flex h-2 w-2 rounded-full bg-[#ff9100]" />
					</div>
					<span class="font-medium text-[#ff9100]">Pending</span>
				</div>
				<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
			</div>
		</a>

		<a
			href="/booking/2"
			class={`grid  grid-cols-[20px_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)] items-center justify-items-end  rounded-lg border bg-white py-5 pl-8 pr-4 drop-shadow-sm transition-colors duration-300 hover:border-green-400 ${
				$isDrawerOpen && 'pointer-events-none'
			}`}
		>
			<h2 class="font-semibold">#1</h2>
			<h3 class="text-sm font-medium text-slate-500">Studium/Ausbildung</h3>
			<h3 class="text-sm text-slate-500">Jessica Nomann</h3>
			<h3 class="text-sm text-slate-500">14 Oct 2023</h3>
			<div class="flex items-center justify-end gap-2">
				<div
					class="flex w-28 items-center justify-center gap-2 rounded-md bg-[#ff91000f] px-4 py-2"
				>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
					<span class="font-medium text-green-400">Done</span>
				</div>
				<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
			</div>
		</a> -->
	</section>
</main>
