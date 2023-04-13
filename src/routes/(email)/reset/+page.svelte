<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { goto } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms/client';
	import { userSchema } from '$lib/config/zodSchema';
	import toast, { Toaster } from 'svelte-french-toast';

	// Redirect if logged in
	if ($page.data.session) goto('/');

	export let data;

	// Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?',
		validators: userSchema,
		onResult: ({ result }) => {
			if (result.type === 'success') toast.success('Password reset link sent to your email.');
		}
	});
</script>

<Toaster />

<main class="flex w-full pt-52 lg:h-screen lg:overflow-hidden lg:pt-0">
	<div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
	<section
		class="flex w-full flex-col items-center justify-center gap-7 px-5 md:gap-10 md:px-10 lg:w-1/2 lg:px-0"
	>
		<div class="flex w-full flex-col gap-5 md:w-2/3 lg:gap-10">
			<div class="flex items-center gap-5">
				<a href="/login" class="cursor-pointer">
					<Icon src={icons.chevronRight} className="w-5 h-5 rotate-180" /></a
				>
				<div class="flex flex-col gap-2 text-left">
					<h1 class="text-3xl font-bold">Reset password.</h1>
					<p class="text-gray-500">Let's make it quick</p>
				</div>
			</div>
		</div>
		<form class="flex w-full flex-col gap-7 md:w-2/3" method="POST" use:enhance>
			<fieldset class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input
					type="text"
					name="email"
					class="rounded-md"
					bind:value={$form.email}
					{...$constraints.email}
				/>
				{#if $errors.email}
					<p class="text-sm text-red-500">{$errors.email}</p>
				{/if}
			</fieldset>

			<button type="submit" class="w-full rounded-md bg-black p-4 text-white">Reset password</button
			>
		</form>
	</section>
</main>
