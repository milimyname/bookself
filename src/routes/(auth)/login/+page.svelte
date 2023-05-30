<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { goto } from '$app/navigation';
	import { superForm } from 'sveltekit-superforms/client';
	import { loginSchema } from '$lib/config/zodSchema.js';
	import Spinner from '$lib/components/Spinner.svelte';
	import { loading } from '$lib/stores/stores';
	import { env } from '$env/dynamic/public';

	// Redirect if logged in
	if ($page.data.session) goto('/');

	export let data;

	// Form
	const { form, enhance, errors, constraints } = superForm(data.form, {
		taintedMessage: null,
		validators: loginSchema
	});

	const handleSignIn = async (provider: string) => {
		try {
			$loading = true;
			await signIn(provider);

			setTimeout(() => {
				goto('/');
				$loading = false;
			}, 1500);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDemoLogin = async () => {
		$loading = true;
		// Log in with demo account
		$form.email = env.PUBLIC_EMAIL;
		$form.password = env.PUBLIC_EMAIL_PASSWORD;

		// Click the login button
		const loginButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;

		setTimeout(() => {
			loginButton.click();
			goto('/');
			$loading = false;
		}, 1000);
	};
</script>

<Spinner errors={$errors} />

<main class="flex w-full lg:h-screen lg:overflow-hidden">
	<div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
	<section
		class="flex h-screen w-full flex-col items-center justify-center gap-7 px-5 md:gap-10 md:px-10 lg:h-full lg:w-1/2 lg:px-0"
	>
		<div class="flex w-full flex-col gap-5 md:w-2/3 lg:gap-10">
			<div class="flex flex-col gap-2 text-left">
				<h1 class="text-3xl font-bold">Welcome back.</h1>
				<p class="text-gray-500">Log in to access your account</p>
			</div>
			<div class="flex flex-col flex-wrap justify-between gap-5 md:flex-row">
				<button
					on:click={() => handleSignIn('google')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.google} className="h-7 w-7 md:w-10 group-hover:fill-white" />
					<span class="group-hover:text-white"> Continue with Google </span></button
				>
				<button
					on:click={() => handleSignIn('github')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.github} className="h-7 w-7 md:w-10 group-hover:fill-white" />
					<span class="group-hover:text-white"> Continue with Github </span></button
				>
				<button
					on:click={() => handleDemoLogin()}
					class="group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.user} className="h-7 w-7 md:w-10 group-hover:fill-white" />
					<span class="group-hover:text-white"> Continue with Mili's Acc </span></button
				>
			</div>
			<div class="flex items-center gap-5">
				<div class="h-[1px] w-full bg-neutral-200" />
				<span>or</span>
				<div class="h-[1px] w-full bg-neutral-200" />
			</div>
		</div>
		<form
			class="flex w-full flex-col gap-7 md:w-2/3"
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
				<span>
					Don't have an account yet? <a href="/signup" class="font-semibold underline">Sing up</a
					></span
				>
				<a href="/reset" class="underline">Forgot password?</a>
			</fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Log in</button>
		</form>
	</section>
</main>
