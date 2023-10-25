<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { isUserFormOpen, userDrawerSlide, isModalOpen } from '$lib/stores/stores';
	import { supabase } from '$lib/supabase/supabase';
	import { trpc } from '$lib/trpc/client';
	import { page } from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { LL } from '$lib/i18n/i18n-svelte';
	import Modal from '$lib/components/Modal.svelte';

	export let form2;
	export let session;

	// Super Form
	const {
		form: userForm,
		errors: userFormErrors,
		enhance: userFormEnhance,
		constraints: userFormConstraints
	} = superForm(form2, {
		taintedMessage: null,
		onSubmit: async ({ form }) => {
			try {
				// Close the user drawer
				$isUserFormOpen = false;

				// Get form data by name image
				const formData = new FormData(form);
				const image = formData.get('image');

				// If there is image, upload it to supabase storage
				if (image.size > 0) {
					// If there is an existing image, delete it
					const { data: existingImage } = await supabase.storage
						.from('mili-bookself')
						.list('public', {
							filter: (file) => file.name === currentEmail
						});

					if (existingImage?.length > 1) {
						await supabase.storage.from('mili-bookself').remove([`public/${currentEmail}`]);
					}

					// Upload image to supabase storage
					const { error } = await supabase.storage
						.from('mili-bookself')
						.upload(`public/${currentEmail}`, image);

					// Get the image url
					const { data: imageUrl } = await supabase.storage
						.from('mili-bookself')
						.getPublicUrl(`public/${currentEmail}`);

					await trpc($page).users.uploadImage.mutate({
						imageUrl: imageUrl.publicUrl
					});

					if (error) throw error;
				}
			} catch (error) {
				if (error instanceof Error) console.log(error.message);
			}

			// Toaster message
			toast.success($LL.updateProfile());
		}
	});

	let currentEmail = session.user.email ? session.user.email : $userForm.email;
	let currentName = session.user.name ? session.user.name : $LL.userProfile();
</script>

<Toaster />
<Modal />
<form
	class="userDrawer top-0 {$userDrawerSlide === 100 &&
		'opacity-0'} fixed left-0 z-40 flex h-full w-11/12 flex-col overflow-x-hidden scroll-smooth rounded-r-3xl bg-white dark:text-black md:w-2/3"
	style="transform: translateX({-$userDrawerSlide}%)"
	method="POST"
	action="?/updateUser"
	use:userFormEnhance
>
	<header class="flex justify-between px-5 pt-28 md:pl-28 md:pr-10 md:pt-20">
		<h2 class="mb-5 text-3xl">{currentName}</h2>
		<button on:click={() => signOut()}> {$LL.signOut()} </button>
	</header>

	<div class="relative flex h-full flex-col gap-5 px-5 md:pl-28 md:pr-10">
		<div class="h-[1px] w-full bg-neutral-200" />
		<fieldset class="flex flex-col gap-2">
			<label for="name" class="font-medium">{$LL.fullName()}</label>
			<input
				type="text"
				name="name"
				id="name"
				class="rounded-md"
				bind:value={currentName}
				{...$userFormConstraints.name}
			/>
			{#if $userFormErrors.name}
				<p class="text-sm text-red-500">{$userFormErrors.name}</p>
			{/if}
		</fieldset>
		<fieldset class="flex flex-col gap-2">
			<label for="email" class="font-medium">{$LL.email()}</label>
			<input
				type="text"
				name="email"
				id="email"
				class="rounded-md"
				bind:value={currentEmail}
				{...$userFormConstraints.email}
			/>
			{#if $userFormErrors.name}
				<p class="text-sm text-red-500">{$userFormErrors.email}</p>
			{/if}
		</fieldset>
		<fieldset class="flex flex-col gap-2">
			<label for="image" class="font-medium">Avatar</label>
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
				bind:value={$userForm.image}
				{...$userFormConstraints.image}
			/>

			{#if $userFormErrors.image}
				<p class="text-sm text-red-500">{$userFormErrors.image}</p>
			{/if}
		</fieldset>
		<button
			type="button"
			class="mt-auto rounded-md bg-delete px-4 py-2 text-white transition-colors hover:bg-red-600"
			on:click={() => {
				$isUserFormOpen = false;
				$isModalOpen = true;
			}}>{$LL.deleteAcc()}</button
		>
	</div>
	<div
		class=" sticky bottom-0 z-20 mt-10 flex w-full justify-between self-end rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"
	>
		<button
			type="button"
			class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100"
			on:click={() => ($isUserFormOpen = false)}>{$LL.cancel()}</button
		>
		<button
			type="submit"
			class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900"
			>{$LL.submit()}</button
		>
	</div>
</form>
