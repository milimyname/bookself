<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { resetSchema } from '$lib/config/zodSchema.js';
	import { loading } from '$lib/stores/stores';
	import Icon from 'svelte-icons-pack';
	import { goto } from '$app/navigation';
	import { icons } from '$lib/assets/icons.js';
	import { page } from '$app/stores';
	import toast, { Toaster } from 'svelte-french-toast';

	// Redirect if logged in
	if ($page.data.session) goto('/');

	export let data;

	// Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: null,
		validators: resetSchema
	});
</script>

<Toaster />

<main class="flex w-full lg:h-screen lg:overflow-hidden">
	<div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
	<section
		class="flex h-screen w-full flex-col items-center justify-center gap-7 px-5 md:gap-10 md:px-10 lg:h-full lg:w-1/2 lg:px-0"
	>
		<div class="flex w-full items-center gap-5 md:w-2/3">
			<a href="/login" class="cursor-pointer">
				<Icon src={icons.chevronRight} className="w-5 h-5 rotate-180" /></a
			>
			<div class="flex flex-col gap-2 text-left">
				<h1 class="text-3xl font-bold">Reset password</h1>
				<p class="text-gray-500">Let's create a new one</p>
			</div>
		</div>
		<form
			class="flex w-full flex-col gap-7 md:w-2/3"
			method="POST"
			on:submit={() => {
				if (Object.keys($errors).length === 0) return;
				toast.success('Password reset successfully!');
				$loading = true;

				setTimeout(() => {
					$loading = false;
					goto('/');
					// Refresh the page to update the session
					window.location.reload();
				}, 2000);
			}}
			use:enhance
		>
			<fieldset class="flex flex-col gap-2">
				<label for="password">Password</label>
				<input
					type="password"
					name="password"
					class="rounded-md"
					bind:value={$form.password}
					{...$constraints.password}
				/>
				{#if $errors.password}
					<p class="text-sm text-red-500">{$errors.password}</p>
				{/if}
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="confirmPassword">Repeat password</label>
				<input
					type="password"
					name="confirmPassword"
					class="rounded-md"
					bind:value={$form.confirmPassword}
					{...$constraints.confirmPassword}
				/>
				{#if $errors.confirmPassword}
					<p class="text-sm text-red-500">{$errors.confirmPassword}</p>
				{/if}
			</fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Create</button>
		</form>
	</section>
</main>
