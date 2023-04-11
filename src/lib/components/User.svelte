<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { superForm } from 'sveltekit-superforms/client';
	import { userSchema } from '$lib/config/zodSchema.js';
	import Spinner from './Spinner.svelte';
	import { isUserFormOpen, userDrawerSlide } from '$lib/stores/stores';

	export let data;

	// Super Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		validators: userSchema,
		clearOnSubmit: 'none'
	});
</script>

<Spinner errors={''} />
<form
	class="userDrawer absolute z-40 flex h-full w-11/12 flex-col overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white md:w-2/3"
	style="transform: translateX({-$userDrawerSlide}%)"
	method="POST"
	on:submit={() => ($isUserFormOpen = false)}
	action="?/updateUser"
>
	<h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">User Profile</h2>

	<div class="relative mb-auto flex flex-col gap-5 px-5 pr-10 md:pl-28">
		<div class="h-[1px] w-full bg-neutral-200" />
		<fieldset class="flex flex-col gap-2">
			<label for="name" class="font-medium">First Name</label>
			<input
				type="text"
				name="name"
				id="name"
				class="rounded-md"
				bind:value={$form.name}
				{...$constraints.name}
			/>
			{#if $errors.name}
				<p class="text-sm text-red-500">{$errors.name}</p>
			{/if}
		</fieldset>
		<fieldset class="flex flex-col gap-2">
			<label for="image" class="font-medium">Last Name</label>
			<input
				type="file"
				name="image"
				id="image"
				class="rounded-md"
				bind:value={$form.image}
				{...$constraints.image}
			/>
			{#if $errors.image}
				<p class="text-sm text-red-500">{$errors.image}</p>
			{/if}
		</fieldset>
	</div>
	<div
		class=" sticky bottom-0 z-20 mt-10 flex w-full justify-between self-end rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"
	>
		<button
			type="button"
			class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100"
			on:click={() => ($isUserFormOpen = false)}>Cancel</button
		>
		<button
			type="submit"
			class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900"
			>Submit</button
		>
	</div>
</form>
