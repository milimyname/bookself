<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import {
		isUserFormOpen,
		bookingDrawerSlide,
		anyQuestions,
		isBookingFormOpen,
		editBooking,
		bookingType
	} from '$lib/stores/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import User from '$lib/components/User.svelte';
	import { clickOutside } from '$lib/hooks/clickOutside';
	import AnmeldungForm from '$lib/components/AnmeldungForm.svelte';

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');

	export let data;

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $bookingDrawerSlide = $springValue;

	const colors = {
		bgLightColor: 'bg-light-draft',
		bgColor: 'draft',
		borderColor: 'draft',
		textColor: 'draft',
		german: 'Entwurf'
	};

	// Get color from status and in de
	$: switch (data.anmeldung?.status) {
		case 'draft':
			colors.bgLightColor = 'bg-light-draft';
			colors.bgColor = 'bg-draft';
			colors.textColor = 'text-draft';
			colors.borderColor = 'hover:border-draft';
			colors.german = 'Entwurf';
			break;
		case 'pending':
			colors.bgLightColor = 'bg-light-pending';
			colors.bgColor = 'bg-pending';
			colors.textColor = 'text-pending';
			colors.borderColor = 'hover:border-pending';
			colors.german = 'Ausstehend';
			break;
		case 'done':
			colors.bgLightColor = 'bg-light-done';
			colors.bgColor = 'bg-done';
			colors.textColor = 'text-done';
			colors.borderColor = 'hover:border-done';
			colors.german = 'Erledigt';
			break;
	}

	// Keep Booking Form Open
	$: $bookingDrawerSlide = $springValue;
	$: springValue.set($isBookingFormOpen ? 0 : 100, { soft: true });
</script>

<svelte:window on:click={(e) => clickOutside(e, springValue)} />

{#if $isUserFormOpen || $anyQuestions || $isBookingFormOpen}
	<div class="fixed z-20 h-full w-full bg-black opacity-50" />
{/if}

<head>
	<title>Anmeldung Booking</title>
</head>

<User session={data.session} form2={data.userForm} />
<AnmeldungForm anmeldungForm={data.anmeldungForm} />

<main
	class="{$isUserFormOpen || $anyQuestions || $isBookingFormOpen
		? 'blur'
		: 'blur-0'} flex w-full flex-1 flex-col items-center gap-5 px-4 py-8 transition-all dark:text-black md:px-10 md:py-20 xl:px-0"
>
	<header class="flex w-full flex-col justify-between gap-5 xl:w-7/12 xl:px-0">
		<a class="group flex items-center gap-3" href="/">
			<Icon
				src={icons.chevronRight}
				className="h-6 w-6 rotate-180 dark:fill-white  group-hover:-translate-x-1 transition-transform"
			/>
			<span class="text-sm font-semibold dark:text-white">{$LL.goBack()}</span>
		</a>

		<div
			class="flex justify-between rounded-md border border-gray-100 bg-white p-5 shadow-custom-lg"
		>
			<div class="flex items-center gap-4">
				<h4 class=" hidden text-gray-500 sm:block">Status</h4>
				<div
					class="flex w-32 items-center justify-center gap-2 rounded-md px-4 py-2 {colors.bgLightColor}"
				>
					<div class="relative flex h-3 w-3 items-center">
						{#if data.anmeldung?.status === 'pending'}
							<span
								class="absolute inline-flex h-2 w-2 animate-ping rounded-full {colors.bgColor}"
							/>
						{/if}
						<span class="relative inline-flex h-2 w-2 rounded-full {colors.bgColor}" />
					</div>
					<span class="font-medium {colors.textColor}"
						>{data.locale === 'en'
							? data.anmeldung?.status[0].toUpperCase() + data.anmeldung?.status.slice(1)
							: colors.german}</span
					>
				</div>
			</div>
			{#if data.anmeldung?.status !== 'done'}
				<form method="POST" class="flex items-center gap-2">
					<button
						type="button"
						on:click={() => {
							$isBookingFormOpen = true;
							springValue.set($isBookingFormOpen ? 0 : 100, { soft: true });
							$bookingType = 'anmeldung';
							$editBooking = true;
						}}
						class="editButton rounded-md px-4 py-2 drop-shadow-sm"
					>
						<Icon src={icons.edit} className="h-6 w-6  transition-all hover:scale-110" />
					</button>
					<button
						formaction="?/deleteAnmeldung"
						type="submit"
						class="rounded-md bg-delete px-4 py-2 text-white transition-colors hover:bg-red-600"
					>
						{$LL.delete()}
					</button>
				</form>
			{/if}
		</div>
	</header>
	<section
		class="grid w-full justify-between gap-5 rounded-md border border-gray-100 bg-white p-5 py-10 shadow-custom-lg drop-shadow-sm md:auto-cols-fr md:auto-rows-max md:px-14 md:py-10 xl:w-7/12"
	>
		<h2 class="col-span-2 md:col-span-3">
			<span class="text-xl font-semibold">#{data.anmeldung?.id.slice(14, -1)}</span>
		</h2>
		<div>
			<h4 class="text-gray-500">{$LL.firstName()}</h4>
			<span class="font-medium">{data.anmeldung?.firstName}</span>
		</div>
		<div>
			<h4 class="text-gray-500">{$LL.lastName()}</h4>
			<span class="font-medium">{data.anmeldung?.lastName}</span>
		</div>
		<div>
			<h4 class="text-gray-500">{$LL.email()}</h4>
			<span class="break-all font-medium">{data.anmeldung?.email}</span>
		</div>
		<div>
			<h4 class="text-gray-500">{$LL.placeAnmeldung()}</h4>
			<span class="font-medium">{data.anmeldung?.place}</span>
		</div>
	</section>
</main>
