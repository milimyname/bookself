<script lang="ts">
	import { config } from '$lib/config/config';
	import { superForm } from 'sveltekit-superforms/client';
	import { anmeldungSchema } from '$lib/config/zodSchema.js';
	import {
		isBookingFormOpen,
		bookingDrawerSlide,
		editBooking,
		bookingType
	} from '$lib/stores/stores';
	import toast from 'svelte-french-toast';
	import { LL } from '$lib/i18n/i18n-svelte';

	export let anmeldungForm;

	// Super Anmeldung Form
	const {
		form: anmeldungFormData,
		enhance: anmeldungEnhance,
		errors: anmeldungErrors,
		constraints: anmeldungConstraints
	} = superForm(anmeldungForm, {
		taintedMessage: null,
		validators: anmeldungSchema,
		onSubmit: () => {
			if ($anmeldungErrors._errors) return;
			// Close the user drawer

			$isBookingFormOpen = false;
			// Toaster success
			if (!$editBooking) toast.success($LL.bookingRequest());
			else toast.success($LL.editBookingRequest());
		}
	});

	// Keep Booking Form Open
	$: {
		if ($isBookingFormOpen) $bookingDrawerSlide = 0;
		else $bookingDrawerSlide = 100;
 	}
</script>

{#if $bookingType === 'anmeldung'}
	<form
		class="bookingDrawer {$bookingDrawerSlide === 100 &&
			'opacity-0'} absolute left-0 top-0 z-40 h-full w-11/12 overflow-hidden rounded-r-3xl bg-white dark:text-black md:fixed md:h-full md:w-2/3"
		style="transform: translateX({-$bookingDrawerSlide}%)"
		method="POST"
		action="?/addAnmeldung"
		use:anmeldungEnhance
	>
		<h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">{$LL.newBooking()}</h2>
		<div class="h-full">
			<div class="relative flex h-full flex-col gap-5 px-5 pr-10 md:pl-28">
				{#if $editBooking}
					<fieldset class="flex flex-col gap-2">
						<label for="status" class="font-medium">Status</label>
						<input
							type="text"
							name="status"
							id="status"
							class="rounded-md"
							bind:value={$anmeldungFormData.status}
							readonly
						/>
					</fieldset>
				{:else}
					<fieldset class="flex flex-col gap-2">
						<label for="bookingType" class="font-medium">{$LL.bookingType()}</label>
						<select
							name="bookingType"
							class="rounded-md"
							id="bookingType"
							bind:value={$bookingType}
							on:change={() => {
								if ($bookingType === 'anmeldung') $bookingType = 'auslanderbehorde';
								else $bookingType = 'anmeldung';
							}}
						>
							<option value="anmeldung">{$LL.anmeldung()}</option>
							<option value="auslanderbehorde">{$LL.auslanderbehorde()}</option>
						</select>
					</fieldset>
				{/if}
				<fieldset class="flex flex-col gap-2">
					<label for="firstName" class="font-medium">{$LL.firstName()}</label>
					<input
						type="text"
						name="firstName"
						id="firstName"
						class="w-full rounded-md"
						bind:value={$anmeldungFormData.firstName}
						{...$anmeldungConstraints.firstName}
					/>
					{#if $anmeldungErrors.firstName}
						<p class="text-sm text-red-500">{$anmeldungErrors.firstName}</p>
					{/if}
				</fieldset>
				<fieldset class="flex flex-col gap-2">
					<label for="lastName" class="font-medium">{$LL.lastName()}</label>
					<input
						type="text"
						name="lastName"
						id="lastName"
						class="w-full rounded-md"
						bind:value={$anmeldungFormData.lastName}
						{...$anmeldungConstraints.lastName}
					/>
					{#if $anmeldungErrors.lastName}
						<p class="text-sm text-red-500">{$anmeldungErrors.lastName}</p>
					{/if}
				</fieldset>
				<fieldset class="flex flex-col gap-2">
					<label for="email" class="font-medium">{$LL.email()}</label>
					<input
						type="text"
						name="email"
						id="email"
						class="w-full rounded-md"
						bind:value={$anmeldungFormData.email}
						{...$anmeldungConstraints.email}
					/>
					{#if $anmeldungErrors.email}
						<p class="text-sm text-red-500">{$anmeldungErrors.email}</p>
					{/if}
				</fieldset>

				<fieldset class="flex flex-col gap-2">
					<label for="place" class="font-medium">{$LL.placeAnmeldung()}</label>
					<select
						name="place"
						id="place"
						class="w-full rounded-md"
						bind:value={$anmeldungFormData.place}
						{...$anmeldungConstraints.place}
					>
						{#each config.de.offices as office}
							{@const key = Object.keys(office)[0]}
							{@const value = Object.values(office)[0]}
							<option value={key}>{value}</option>
						{/each}
						{#if $anmeldungErrors.place}
							<p class="text-sm text-red-500">{$anmeldungErrors.place}</p>
						{/if}
					</select>
				</fieldset>
			</div>
			<div
				class=" sticky bottom-0 z-20 flex w-full justify-between rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"
			>
				<button
					type="button"
					class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100"
					on:click={() => ($isBookingFormOpen = false)}>{$LL.cancel()}</button
				>
				{#if $editBooking}
					<button
						formaction="?/editAnmeldung"
						type="submit"
						class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900"
						>{$LL.edit()}</button
					>
				{:else}
					<button
						type="submit"
						class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900"
						>{$LL.book()}</button
					>
				{/if}
			</div>
		</div>
	</form>
{/if}
