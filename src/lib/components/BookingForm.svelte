<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { config } from '$lib/config/config';
	import { superForm } from 'sveltekit-superforms/client';
	import { bookingSchema } from '$lib/config/zodSchema.js';
	import Spinner from './Spinner.svelte';
	import { isBookingFormOpen, bookingDrawerSlide } from '$lib/stores/stores';
	import toast, { Toaster } from 'svelte-french-toast';

	export let data;

	// Super Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		validators: bookingSchema,
		clearOnSubmit: 'none'
	});

	// Set default values
	$form.familyMember = 'no';
	$form.applicants = 'eine Person';
</script>

<Spinner errors={$errors} />
<Toaster />

<form
	id="booking-form"
	class="bookingDrawer absolute z-40 h-fit w-11/12 overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white md:h-full md:w-2/3"
	style="transform: translateX({-$bookingDrawerSlide}%)"
	method="POST"
	action="?/addBooking"
	on:submit={() => {
		$isBookingFormOpen = false;
		toast.success('Booked!');
	}}
>
	<h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">New Booking</h2>
	<div class="">
		<div class="relative flex flex-col gap-5 px-5 pr-10 md:pl-28">
			<fieldset class="flex flex-col gap-2">
				<label for="citizenship" class="font-medium">Citizenship</label>
				<select
					name="citizenship"
					id="citizenship"
					class="w-full rounded-md"
					bind:value={$form.citizenship}
					{...$constraints.citizenship}
				>
					{#each config.de.citizenship as citizenship}
						<option value={citizenship}>{citizenship}</option>
					{/each}
					{#if $errors.citizenship}
						<p class="text-sm text-red-500">{$errors.citizenship}</p>
					{/if}
				</select>
			</fieldset>

			<fieldset class="flex flex-col gap-2">
				<label for="applicants" class="font-medium">Amount of applicants</label>
				<select
					name="applicants"
					id="applicants"
					class="rounded-md"
					bind:value={$form.applicants}
					{...$constraints.applicants}
				>
					{#each config.de.applicants as applicant}
						<option value={applicant}>{applicant}</option>
					{/each}
					{#if $errors.applicants}
						<p class="text-sm text-red-500">{$errors.applicants}</p>
					{/if}
				</select>
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="familyMember" class="font-medium"
					>Do you live in Berlin together with a family member (e.g. spouse, child)?</label
				>
				<select
					name="familyMember"
					class="rounded-md"
					id="familyMember"
					bind:value={$form.familyMember}
					{...$constraints.familyMember}
				>
					<option value="no">no</option>
					<option value="yes">yes</option>
				</select>
				{#if $errors.familyMember}
					<p class="text-sm text-red-500">{$errors.familyMember}</p>
				{/if}
			</fieldset>
			<fieldset class="mb-auto flex flex-col gap-2">
				<label for="visaType" class="font-medium">Visa Type</label>
				<select
					name="visaType"
					id="visaType"
					class="w-full rounded-md"
					bind:value={$form.visaType}
					{...$constraints.visaType}
				>
					{#each config.de.visaType as visaType}
						<option value={visaType}>{visaType.slice(0, -2)}</option>
					{/each}
				</select>
				{#if $errors.visaType}
					<p class="text-sm text-red-500">{$errors.visaType}</p>
				{/if}
			</fieldset>
			{#if $form.visaType}
				<fieldset
					class="flex flex-col gap-2"
					transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
				>
					<label for="visa" class="font-medium">Visas</label>
					<select
						name="visa"
						id="visa"
						class="w-full rounded-md"
						bind:value={$form.visa}
						{...$constraints.visa}
					>
						{#each config.de.visas as visa}
							{#each visa[$form.visaType] as service}
								{@const key = Object.keys(service)}
								<optgroup label={key[0]}>
									{#each service[key[0]] as option}
										<option value={option}>{option.slice(0, -1)}</option>
									{/each}
								</optgroup>
							{/each}
						{/each}
						{#if $errors.visa}
							<p class="text-sm text-red-500">{$errors.visa}</p>
						{/if}
					</select>
				</fieldset>
			{/if}
			{#if $form.familyMember === 'yes'}
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
						bind:value={$form.cizitenshipOfFamilyMember}
						{...$constraints.cizitenshipOfFamilyMember}
					>
						{#each config.de.citizenship as citizenship}
							<option value={citizenship}>{citizenship}</option>
						{/each}
					</select>
					{#if $errors.cizitenshipOfFamilyMember}
						<p class="text-sm text-red-500">{$errors.cizitenshipOfFamilyMember}</p>
					{/if}
				</fieldset>
			{/if}
			<div class="h-[1px] w-full bg-neutral-200" />
			<fieldset class="flex flex-col gap-2">
				<label for="firstName" class="font-medium">First Name</label>
				<input
					type="text"
					name="firstName"
					id="firstName"
					class="rounded-md"
					bind:value={$form.firstName}
					{...$constraints.firstName}
				/>
				{#if $errors.firstName}
					<p class="text-sm text-red-500">{$errors.firstName}</p>
				{/if}
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="lastName" class="font-medium">Last Name</label>
				<input
					type="text"
					name="lastName"
					id="lastName"
					class="rounded-md"
					bind:value={$form.lastName}
					{...$constraints.lastName}
				/>
				{#if $errors.lastName}
					<p class="text-sm text-red-500">{$errors.lastName}</p>
				{/if}
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="email" class="font-medium">Email</label>
				<input
					type="email"
					name="email"
					id="email"
					class="rounded-md"
					bind:value={$form.email}
					{...$constraints.email}
				/>
				{#if $errors.email}
					<p class="text-sm text-red-500">{$errors.email}</p>
				{/if}
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="birthDate" class="font-medium">Birth Date</label>
				<input
					type="date"
					name="birthDate"
					id="birthDate"
					class="rounded-md"
					bind:value={$form.birthDate}
					{...$constraints.birthDate}
				/>
				{#if $errors.birthDate}
					<p class="text-sm text-red-500">{$errors.birthDate}</p>
				{/if}
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="currentVisa" class="font-medium">Current Visa</label>
				<select
					name="currentVisa"
					class="rounded-md"
					id="currentVisa"
					bind:value={$form.currentVisa}
					{...$constraints.currentVisa}
				>
					<option value="no">no</option>
					<option value="yes">yes</option>
				</select>
				{#if $errors.currentVisa}
					<p class="text-sm text-red-500">{$errors.currentVisa}</p>
				{/if}
			</fieldset>
			{#if $form.currentVisa === 'yes'}
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
						bind:value={$form.numberOfCurrentVisa}
						{...$constraints.numberOfCurrentVisa}
					/>
					{#if $errors.numberOfCurrentVisa}
						<p class="text-sm text-red-500">{$errors.numberOfCurrentVisa}</p>
					{/if}
				</fieldset>
			{/if}
		</div>
		<div
			class=" sticky bottom-0 z-20 mt-10 flex w-full justify-between rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"
		>
			<button
				type="button"
				class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100"
				on:click={() => ($isBookingFormOpen = false)}>Cancel</button
			>
			<button
				form="booking-form"
				type="submit"
				class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900"
				>Submit</button
			>
		</div>
	</div>
</form>
