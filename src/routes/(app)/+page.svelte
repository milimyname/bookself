<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import BookingForm from '$lib/components/BookingForm.svelte';
	import { isBookingFormOpen, isUserFormOpen, bookingDrawerSlide } from '$lib/stores/stores';
	import Booking from '$lib/components/Booking.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import User from '$lib/components/User.svelte';

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');

	export let data;

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $bookingDrawerSlide = $springValue;

	// Get length of bookings
	let amountOfBookings = 0;
	$: amountOfBookings = data.bookings.bookings.length;

	// Close the drawer if the user clicks outside of it except for the button
	function clickOutside(e: MouseEvent) {
		const drawer = document.querySelector('.bookingDrawer');
		const button = document.querySelector('.newBookingButton');
		const userButton = document.querySelector('.userButton');

		// If user button is clickded, close the booking drawer
		if (userButton && userButton.contains(<Node>e!.target)) {
			$isBookingFormOpen = false;
			springValue.set(100, { soft: true });
		}

		// If the user clicks on the aside, don't close the drawer
		const aside = document.querySelector('aside');
		if (aside && aside.contains(<Node>e!.target)) return;

		if (button && button.contains(<Node>e!.target)) return;
		if (drawer && !drawer.contains(<Node>e!.target)) {
			$isBookingFormOpen = false;
			springValue.set(100, { soft: true });
		}
		// document.body.style.overflow = 'auto';
	}

	$: if (!$isBookingFormOpen) springValue.set(100, { soft: true });
</script>

<svelte:window on:click={clickOutside} />

{#if $isBookingFormOpen || $isUserFormOpen}
	<div class="fixed z-20 h-full w-full bg-black opacity-50" />
{/if}

<BookingForm form1={data.bookingForm} user={data.user} />
<User form2={data.userForm} session={data.session} />

<main
	class="{$isBookingFormOpen || $isUserFormOpen
		? 'blur'
		: 'blur-0'} flex flex-1 flex-col items-center gap-10 py-8 transition-all md:py-20"
>
	<header class="flex w-full items-center justify-between gap-5 px-4 md:px-10 xl:w-7/12 xl:px-0">
		<div>
			<h1 class="mb-2 text-4xl font-bold">Bookings</h1>
			<p>There are {amountOfBookings} total bookings</p>
		</div>
		<div>
			<button
				class={` newBookingButton flex cursor-pointer items-center gap-2 rounded-xl bg-black px-2 py-2 text-white transition-colors hover:bg-slate-800 md:rounded-full md:pl-2 md:pr-4 ${
					$isBookingFormOpen && 'pointer-events-none'
				}`}
				on:click={() => {
					$isBookingFormOpen = true;
					springValue.set($isBookingFormOpen ? 0 : 100, { soft: true });
				}}
			>
				<div class="rounded-full bg-white p-2">
					<Icon src={icons.plus} className="w-5 h-5" />
				</div>
				<span class="hidden font-medium md:block">New Booking</span>
			</button>
		</div>
	</header>
	<section class="flex w-full flex-col gap-2 scroll-auto px-4 md:px-10 xl:w-7/12 xl:px-0">
		{#await data.bookings}
			<Spinner errors={data.bookings} />
		{:then data}
			{#each data.bookings as booking}
				<Booking
					bookingId={booking.id}
					status={booking.status}
					lastName={booking.lastName}
					firstName={booking.firstName}
					createdAt={booking.createdAt}
					visaType={booking.visaType}
				/>
			{/each}
		{/await}
	</section>
</main>
