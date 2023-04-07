<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/client';
	import { signOut } from '@auth/sveltekit/client';
	let greeting = 'press the button to load data';
	import { spring } from 'svelte/motion';
	import { icons } from '$lib/assets/icons';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { config } from '$lib/config/config';

	let familyMember = 'no';
	let currentVisa = 'no';

	// let server;
	// let loading = false;
	// const loadData = async () => {
	// 	loading = true;
	// 	greeting = await trpc($page).greeting.query();
	// 	server = await trpc($page).log.mutate('Hi');
	// 	loading = false;
	// 	signOut();
	// };

	// If the user is not signed in, redirect to the login page
	if (!$page.data.session) goto('/login');

	let isDrawerOpen = false;
	let springValue = spring(100, { stiffness: 0.06, damping: 0.4 });
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
			isDrawerOpen = false;
			springValue.set(100, { soft: true });
		}
	}
</script>

<svelte:window on:click={clickOutside} />

{#if isDrawerOpen}
	<div class="fixed z-20 h-full w-full bg-[#00000080] opacity-50" />
{/if}

<form
	class={`drawer absolute z-40 h-full w-2/3 overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white`}
	style="transform: translateX({-drawerSlide}%)"
>
	<h2 class="mb-5 pl-28 pt-20 text-3xl">New Booking</h2>
	<div class="">
		<div class="  py-20relative flex flex-col gap-5 pl-28 pr-10">
			<fieldset class="mb-auto flex flex-col gap-2">
				<label for="visaType" class="font-medium">Visa Type</label>
				<select name="visaType" id="visaType" class="rounded-md">
					{#each config.de.visaType as visaType}
						<option value={visaType}>{visaType}</option>
					{/each}
				</select>
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="citizenship" class="font-medium">Citizenship</label>
				<select name="citizenship" id="citizenship" class="w-full rounded-md">
					{#each config.de.citizenship as citizenship}
						<option value={citizenship}>{citizenship}</option>
					{/each}
				</select>
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="applicants" class="font-medium">Amount of applicants</label>
				<select
					name="applicants"
					id="applicants"
					class="rounded-md"
					on:change={(e) => console.log('ye')}
				>
					{#each config.de.applicant as applicant}
						<option value={applicant}>{applicant}</option>
					{/each}
				</select>
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="familyMember" class="font-medium"
					>Do you live in Berlin together with a family member (e.g. spouse, child)?</label
				>
				<select name="familyMember" class="rounded-md" id="familyMember" bind:value={familyMember}>
					<option value="no">no</option>
					<option value="yes">yes</option>
				</select>
			</fieldset>
			{#if familyMember === 'yes'}
				<fieldset
					class="flex flex-col gap-2"
					transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
				>
					<label for="cizitenshipOfFamilyMember" class="font-medium"
						>Citizenship of the family member?</label
					>
					<select
						name="cizitenshipOfFamilyMember"
						id="cizitenshipOfFamilyMember"
						class="w-full rounded-md"
					>
						{#each config.de.citizenship as citizenship}
							<option value={citizenship}>{citizenship}</option>
						{/each}
					</select>
				</fieldset>
			{/if}
			<div class="h-[1px] w-full bg-neutral-200" />
			<fieldset class="flex flex-col gap-2">
				<label for="firstName" class="font-medium">First Name</label>
				<input type="text" name="firstName" id="firstName" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="lastName" class="font-medium">Last Name</label>
				<input type="text" name="lastName" id="lastName" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="email" class="font-medium">Email</label>
				<input type="email" name="email" id="email" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="birthDate" class="font-medium">Birth Date</label>
				<input type="date" name="birthDate" id="birthDate" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="currentVisa" class="font-medium">Current Visa</label>
				<select name="currentVisa" class="rounded-md" id="currentVisa" bind:value={currentVisa}>
					<option value="no">no</option>
					<option value="yes">yes</option>
				</select>
			</fieldset>
			{#if currentVisa === 'yes'}
				<fieldset
					class="flex flex-col gap-2"
					transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
				>
					<label for="numberOfCurrentVisa" class="font-medium"> Number of the current visa </label>
					<input
						type="text"
						name="numberOfCurrentVisa"
						id="numberOfCurrentVisa"
						class="rounded-md"
					/>
				</fieldset>
			{/if}
		</div>
		<div
			class=" sticky bottom-0 z-20 mt-10 flex w-full justify-between rounded-trxp-3xl bg-gray-200 py-5 pl-28 pr-10 shadow-negative-lg"
		>
			<div class="flex gap-2">
				<button class="rounded-full bg-black px-4 py-2 text-white">Cancel</button>
				<button class="rounded-full bg-black px-4 py-2 text-white">Draft</button>
			</div>
			<button class="rounded-full bg-black px-4 py-2 text-white">Save</button>
		</div>
	</div>
</form>

<main
	class={`${
		isDrawerOpen ? 'blur' : ' blur-0 '
	} flex  flex-1 flex-col items-center gap-10 py-20 transition-all`}
>
	<header class="flex w-full items-center justify-between gap-5 px-10 xl:w-7/12 xl:px-0">
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
	<div class="flex w-full flex-col gap-5 px-10 xl:w-7/12 xl:px-0">
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

		<a
			href="/booking/2"
			class={`grid  grid-cols-[20px_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)_minmax(100px,_1fr)] items-center justify-items-end  rounded-lg border bg-white py-5 pl-8 pr-4 drop-shadow-sm transition-colors duration-300 hover:border-[#ff9100] ${
				isDrawerOpen && 'pointer-events-none'
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
				isDrawerOpen && 'pointer-events-none'
			}`}
		>
			<h2 class="font-semibold">#1</h2>
			<h3 class="text-sm font-medium text-slate-500">Studium/Ausbildung</h3>
			<h3 class="text-sm text-slate-500">Jessica Nomann</h3>
			<h3 class="text-sm text-slate-500">14 Oct 2023</h3>
			<div class="flex items-center justify-end gap-2">
				<div
					class="flex w-28 items-center justify-center gap-2 rounded-md bg-[#87ff662b] px-4 py-2"
				>
					<span class="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
					<span class="font-medium text-green-400">Done</span>
				</div>
				<Icon src={icons.chevronRight} className="w-5 h-5 fill-[#1A120B]" />
			</div>
		</a>
	</div>
</main>
