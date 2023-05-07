<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { config } from '$lib/config/config';
	import { superForm } from 'sveltekit-superforms/client';
	import { bookingSchema } from '$lib/config/zodSchema.js';
	import {
		isBookingFormOpen,
		bookingDrawerSlide,
		editBooking,
		bookingType
	} from '$lib/stores/stores';
	import toast from 'svelte-french-toast';
	import { LL } from '$lib/i18n/i18n-svelte';


	export let auslanderbehordeForm;
	export let locale: string;

	// Super Auslanderbehorde Form
	const { form, enhance, errors, constraints } = superForm(auslanderbehordeForm, {
		taintedMessage: null,
		validators: bookingSchema,
		onSubmit: () => {
			if ($errors._errors) return;
			// Close the user drawer

			$isBookingFormOpen = false;
			// Toaster success
			if (!$editBooking) toast.loading($LL.bookingRequest());
			else toast.success($LL.editBookingRequest());
		}
	});
</script>

{#if $bookingType === 'auslanderbehorde'}
	<form
		class="bookingDrawer {$bookingDrawerSlide === 100 &&
			'opacity-0'} absolute left-0 top-0 z-40 h-fit w-11/12 overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white dark:text-black md:fixed md:h-full md:w-2/3"
		style="transform: translateX({-$bookingDrawerSlide}%)"
		method="POST"
		action="?/addBooking"
		use:enhance
	>
		<h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">{$LL.newBooking()}</h2>
		<div>
			<div class="relative flex flex-col gap-5 px-5 pr-10 md:pl-28">
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

				{#if $editBooking}
					<fieldset class="flex flex-col gap-2">
						<label for="status" class="font-medium">Status</label>
						<input
							type="text"
							name="status"
							id="status"
							class="rounded-md"
							bind:value={$form.status}
							readonly
						/>
					</fieldset>
				{/if}
				<fieldset class="flex flex-col gap-2">
					<label for="citizenship" class="font-medium">{$LL.citizenship()}</label>
					<select
						name="citizenship"
						id="citizenship"
						class="w-full rounded-md"
						bind:value={$form.citizenship}
						{...$constraints.citizenship}
					>
						{#each locale === 'de' ? config.de.citizenship : config.en.citizenship as citizenship}
							{@const key = Object.keys(citizenship)[0]}
							{@const value = Object.values(citizenship)[0]}
							<option value={key}>{value}</option>
						{/each}
						{#if $errors.citizenship}
							<p class="text-sm text-red-500">{$errors.citizenship}</p>
						{/if}
					</select>
				</fieldset>

				<fieldset class="flex flex-col gap-2">
					<label for="applicants" class="font-medium">{$LL.amountOfApplicants()}</label>
					<select
						name="applicants"
						id="applicants"
						class="rounded-md"
						bind:value={$form.applicants}
						{...$constraints.applicants}
					>
						{#each locale === 'de' ? config.de.applicants : config.en.applicants as applicant}
							{@const key = Object.keys(applicant)[0]}
							{@const value = Object.values(applicant)[0]}
							<option value={key}>{value}</option>
						{/each}
						{#if $errors.applicants}
							<p class="text-sm text-red-500">{$errors.applicants}</p>
						{/if}
					</select>
				</fieldset>
				<fieldset class="flex flex-col gap-2">
					<label for="familyMember" class="font-medium">{$LL.familyMember()}</label>
					<select
						name="familyMember"
						class="rounded-md"
						id="familyMember"
						bind:value={$form.familyMember}
						{...$constraints.familyMember}
					>
						<option value="no">{$LL.no()}</option>
						<option value="yes">{$LL.yes()}</option>
					</select>
					{#if $errors.familyMember}
						<p class="text-sm text-red-500">{$errors.familyMember}</p>
					{/if}
				</fieldset>
				{#if $form.familyMember === 'yes'}
					<fieldset
						class="flex flex-col gap-2"
						transition:slide={{ duration: 500, easing: quintOut, axis: 'y' }}
					>
						<label for="cizitenshipOfFamilyMember" class="font-medium">{$LL.familyMember()}</label>
						<select
							name="cizitenshipOfFamilyMember"
							id="cizitenshipOfFamilyMember"
							class="w-full rounded-md"
							bind:value={$form.cizitenshipOfFamilyMember}
							{...$constraints.cizitenshipOfFamilyMember}
						>
							{#each locale === 'de' ? config.de.citizenship : config.en.citizenship as citizenship}
								{@const key = Object.keys(citizenship)[0]}
								{@const value = Object.values(citizenship)[0]}
								<option value={key}>{value}</option>
							{/each}
						</select>
						{#if $errors.cizitenshipOfFamilyMember}
							<p class="text-sm text-red-500">{$errors.cizitenshipOfFamilyMember}</p>
						{/if}
					</fieldset>
				{/if}
				<fieldset class="mb-auto flex flex-col gap-2">
					<label for="visaType" class="font-medium">{$LL.visaType()}</label>
					<select
						name="visaType"
						id="visaType"
						class="w-full rounded-md"
						bind:value={$form.visaType}
						{...$constraints.visaType}
					>
						{#each locale === 'de' ? config.de.visaType : config.en.visaType as visaType}
							{@const key = Object.keys(visaType)[0]}
							{@const value = Object.values(visaType)[0]}
							<option value={key}>{value.slice(0, -2)}</option>
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
						<label for="visa" class="font-medium">{$LL.visas()}</label>
						<select
							name="visa"
							id="visa"
							class="w-full rounded-md"
							bind:value={$form.visa}
							{...$constraints.visa}
						>
							{#each locale === 'de' ? config.de.visas : config.en.visas as visa}
								{@const type = +$form.visaType.slice(-1) - 1}
								{@const values = Object.values(visa)[type]}
								{#each values as service}
									{@const key = Object.keys(service)}
									<optgroup label={key[0]}>
										{#each service[key[0]] as option}
											{@const key = Object.keys(option)[0]}
											{@const value = Object.values(option)[0]}
											<option value={key}>{value.slice(0, -1)}</option>
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
				<div class="h-[1px] w-full bg-neutral-200" />
				<fieldset class="flex flex-col gap-2">
					<label for="firstName" class="font-medium">{$LL.firstName()}</label>
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
					<label for="lastName" class="font-medium">{$LL.lastName()}</label>
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
					<label for="email" class="font-medium">{$LL.email()}</label>
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
					<label for="birthDate" class="font-medium">{$LL.birthDate()}</label>
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
					<label for="currentVisa" class="font-medium">{$LL.currentVisa()}</label>
					<select
						name="currentVisa"
						class="rounded-md"
						id="currentVisa"
						bind:value={$form.currentVisa}
						{...$constraints.currentVisa}
					>
						<option value="no">{$LL.no()}</option>
						<option value="yes">{$LL.yes()}</option>
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
						<label for="numberOfCurrentVisa" class="font-medium"
							>{$LL.numberOfcurrentVisa()}
						</label>
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
					on:click={() => ($isBookingFormOpen = false)}>{$LL.cancel()}</button
				>
				{#if $editBooking}
					<button
						formaction="?/editBooking"
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
