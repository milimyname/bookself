<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { isBookingFormOpen, isUserFormOpen, bookingDrawerSlide } from '$lib/stores/stores';
	import User from '$lib/components/User.svelte';
	import { clickOutside } from '$lib/hooks/clickOutside';
	import toast, { Toaster } from 'svelte-french-toast';

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');

	export let data;

	let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });

	$: $bookingDrawerSlide = $springValue;

	const colors = {
		bgLightColor: 'bg-light-draft',
		bgColor: 'draft',
		borderColor: 'draft',
		textColor: 'draft'
	};

	// Get color from status
	$: switch (data.booking?.status) {
		case 'draft':
			colors.bgLightColor = 'bg-light-draft';
			colors.bgColor = 'bg-draft';
			colors.textColor = 'text-draft';
			colors.borderColor = 'hover:border-draft';
			break;
		case 'pending':
			colors.bgLightColor = 'bg-light-pending';
			colors.bgColor = 'bg-pending';
			colors.textColor = 'text-pending';
			colors.borderColor = 'hover:border-pending';
			break;
		case 'done':
			colors.bgLightColor = 'bg-light-done';
			colors.bgColor = 'bg-done';
			colors.textColor = 'text-done';
			colors.borderColor = 'hover:border-done';
			break;
	}
</script>

<svelte:window on:click={(e) => clickOutside(e, springValue, $isBookingFormOpen)} />

{#if $isUserFormOpen}
	<div class="fixed z-20 h-full w-full bg-black opacity-50" />
{/if}

<User {data} />
<Toaster />

<main
	class="{$isUserFormOpen
		? 'blur'
		: 'blur-0'} flex w-full flex-1 flex-col items-center gap-5 px-4 py-8 transition-all md:px-10 md:py-20 xl:w-7/12 xl:px-0"
>
	<header class="flex w-full flex-col justify-between gap-5 xl:w-7/12 xl:px-0">
		<a class="group flex items-center gap-3" href="/">
			<Icon
				src={icons.chevronRight}
				className="h-6 w-6 rotate-180 group-hover:-translate-x-1 transition-transform"
			/>
			<span class="text-sm font-semibold">Go Back</span>
		</a>

		<div
			class="flex justify-between rounded-md border border-gray-100 bg-white p-5 shadow-custom-lg"
		>
			<div class="flex items-center gap-4">
				<h4 class="text-gray-500">Status</h4>
				<div
					class="flex w-28 items-center justify-center gap-2 rounded-md px-4 py-2 {colors.bgLightColor}"
				>
					<div class="relative flex h-3 w-3 items-center">
						{#if data.booking?.status === 'pending'}
							<span
								class="absolute inline-flex h-2 w-2 animate-ping rounded-full {colors.bgColor}"
							/>
						{/if}
						<span class="relative inline-flex h-2 w-2 rounded-full {colors.bgColor}" />
					</div>
					<span class="font-medium {colors.textColor}"
						>{data.booking?.status[0].toUpperCase() + data.booking?.status.slice(1)}</span
					>
				</div>
			</div>
			<button
				class="rounded-md bg-delete px-4 py-2 text-white transition-colors hover:bg-red-600"
				on:click={() => toast.error("Can't delete yet!")}
			>
				Disabled
			</button>
		</div>
	</header>
	<section
		class="grid w-full justify-between gap-5 rounded-md border border-gray-100 bg-white p-5 py-10 shadow-custom-lg drop-shadow-sm md:auto-cols-fr md:auto-rows-max md:px-14 md:py-10 xl:w-7/12"
	>
		<h2 class="col-span-2 md:col-span-3">
			<span class="text-xl font-semibold">#{data.booking?.id.slice(14, -1)}</span>
		</h2>
		<div>
			<h4 class="text-gray-500">First Name</h4>
			<span class="font-medium">{data.booking?.firstName}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Last Name</h4>
			<span class="font-medium">{data.booking?.lastName}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Birth Date</h4>
			<span class="font-medium">{data.booking?.birthDate}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Email</h4>
			<span class="break-all font-medium">{data.booking?.email}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Citizenship</h4>
			<span class="break-all font-medium">{data.booking?.citizenship}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Applicants</h4>
			<span class="font-medium">{data.booking?.applicants}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Visa Type</h4>
			<span class="break-all font-medium">{data.booking?.visaType}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Visa</h4>
			<span class="break-all font-medium">{data.booking?.visa}</span>
		</div>
		<div>
			<h4 class="text-gray-500">Family Member</h4>
			<span class="font-medium">{data.booking?.familyMember}</span>
		</div>
		{#if data.booking?.cizitenshipOfFamilyMember}
			<div>
				<h4 class="text-gray-500">Citizenship of Family Member</h4>
				<span class="font-medium">{data.booking?.cizitenshipOfFamilyMember}</span>
			</div>
		{/if}
		<div>
			<h4 class="text-gray-500">Current Visa</h4>
			<span class="font-medium">{data.booking?.currentVisa}</span>
		</div>
		{#if data.booking?.numberOfCurrentVisa}
			<div>
				<h4 class="text-gray-500">Number of current visa</h4>
				<span class="font-medium">{data.booking?.numberOfCurrentVisa}</span>
			</div>
		{/if}
	</section>
</main>
