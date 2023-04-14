<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	// @ts-ignore
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { goto } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms/client';
	import { signUpSchema } from '$lib/config/zodSchema';
	import { loading } from '$lib/stores/stores';
	import Spinner from '$lib/components/Spinner.svelte';

	// Redirect if logged in
	if ($page.data.session) goto('/');

	export let data;

	// Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: null,
		validators: signUpSchema
	});
</script>

<Spinner errors={$errors} />

<main class="flex w-full pt-20 lg:h-screen lg:overflow-hidden lg:pt-0">
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
					<h1 class="text-3xl font-bold">Hi Newbie!</h1>
					<p class="text-gray-500">Let's make it quick</p>
				</div>
			</div>
			<!-- <div class="flex flex-col justify-between gap-5 md:flex-row">
				<button
					on:click={() => handleSignIn('google')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.google} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Log in with Google </span></button
				>
				<button
					on:click={() => handleSignIn('github')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.github} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Log in with Github </span></button
				>
			</div> -->
			<!-- <div class="flex items-center gap-5">
				<div class="h-[1px] w-full bg-neutral-200" />
				<span>or</span>
				<div class="h-[1px] w-full bg-neutral-200" />
			</div> -->
		</div>
		<form
			class=" flex w-full flex-col gap-7 md:w-2/3"
			method="POST"
			use:enhance
			on:submit={() => ($loading = true)}
		>
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
				<label for="confirmPassword">Confirm password</label>
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
			<fieldset class="flex items-center gap-2">
				<input
					type="checkbox"
					name="privacy"
					class="rounded-sm"
					bind:checked={$form.privacy}
					{...$constraints.privacy}
				/>

				<label for="password"
					>I agree to the
					<a href="/terms-privacy" class="underline"> Terms & Privacy </a>
				</label>
				{#if $errors.privacy}
					<p class="text-sm text-red-500">{$errors.privacy}</p>
				{/if}
			</fieldset>

			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Sign up</button>
		</form>
	</section>
</main>
