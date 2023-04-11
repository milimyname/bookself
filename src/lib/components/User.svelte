<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { userSchema } from '$lib/config/zodSchema.js';
	import Spinner from './Spinner.svelte';
	import { isUserFormOpen, userDrawerSlide } from '$lib/stores/stores';
	import { supabase } from '$lib/supabase/supabase';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';

	export let data;

	// Super Form
	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		validators: userSchema,
		clearOnSubmit: 'none'
	});

	let currentEmail = data.session.user.email ? data.session.user.email : $form.email;
	let currentName = data.session.user.name ? data.session.user.name : 'User Profile';

	const handleUserSubmit = async (e: any) => {
		try {
			// Close the user drawer
			$isUserFormOpen = false;

			// Get form data by name image
			const formData = new FormData(e.target);
			const image = formData.get('image');

			// Get email from form
			const email = formData.get('email');

			// Upload image to supabase storage
			const { error } = await supabase.storage
				.from('mili-bookself')
				.upload(`public/user-${email}`, image);

			// Get the image url
			const { data: imageUrl } = await supabase.storage
				.from('mili-bookself')
				.getPublicUrl(`public/user-${email}`);

			await trpc($page).users.uploadImage.mutate({
				imageUrl: imageUrl.publicUrl
			});

			if (error) throw error;
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};
</script>

<Spinner {errors} />
<form
	class="userDrawer absolute z-40 flex h-full w-11/12 flex-col overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white md:w-2/3"
	style="transform: translateX({-$userDrawerSlide}%)"
	method="POST"
	action="?/updateProfile"
	on:submit={handleUserSubmit}
	use:enhance
>
	<h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">{currentName}</h2>

	<div class="relative mb-auto flex flex-col gap-5 px-5 pr-10 md:pl-28">
		<div class="h-[1px] w-full bg-neutral-200" />
		<fieldset class="flex flex-col gap-2">
			<label for="name" class="font-medium">Full Name</label>
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
			<label for="email" class="font-medium">Email</label>
			<input
				type="text"
				name="email"
				id="email"
				class="rounded-md"
				bind:value={currentEmail}
				{...$constraints.email}
			/>
			{#if $errors.name}
				<p class="text-sm text-red-500">{$errors.email}</p>
			{/if}
		</fieldset>
		<fieldset class="flex flex-col gap-2">
			<label for="image" class="font-medium">Choose profile photo</label>
			<input
				type="file"
				name="image"
				id="image"
				class="block w-full text-sm text-slate-500 outline-none
      file:mr-4 file:rounded-full file:border-0
      file:bg-gray-50 file:px-4
      file:py-2 file:text-sm
      file:font-semibold file:text-gray-700
      hover:file:bg-gray-100
    "
				accept="image/*"
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
