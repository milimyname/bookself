<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { goto } from '$app/navigation';

	if ($page.data.session) goto('/');
	let loading = false;

	const handleSignIn = async (provider: string) => {
		try {
			loading = true;
			await signIn(provider);
			goto('/');
			loading = false;
		} catch (error) {
			console.log(error);
		}
	};
</script>

{#if loading}
	<div
		class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
	>
		<div class="flex items-center gap-5 rounded-md bg-white p-5">
			<Icon src={icons.loading} className="h-5 w-5 animate-spin " />
			<span class="text-xl font-medium">Pending...</span>
		</div>
	</div>
{/if}

<main class="flex h-full w-full">
	<div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
	<section
		class="flex w-full flex-col items-center justify-center gap-7 px-10 md:gap-10 lg:w-1/2 lg:px-0"
	>
		<div class="flex w-full flex-col gap-5 md:w-2/3 lg:gap-10">
			<div class="flex flex-col gap-2 text-left">
				<h1 class="text-3xl font-bold">Welcome back.</h1>
				<p class="text-gray-500">Log in to access your account</p>
			</div>
			<div class="flex flex-col justify-between gap-5 md:flex-row">
				<button
					on:click={() => handleSignIn('google')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.google} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Continue with Google </span></button
				>
				<button
					on:click={() => handleSignIn('github')}
					class=" group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.github} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Continue with Github </span></button
				>
			</div>
			<div class="flex items-center gap-5">
				<div class="h-[1px] w-full bg-neutral-200" />
				<span>or</span>
				<div class="h-[1px] w-full bg-neutral-200" />
			</div>
		</div>
		<form class=" flex w-full flex-col gap-7 md:w-2/3">
			<fieldset class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input type="text" name="email" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<label for="password">Password</label>
				<input type="password" name="password" class="rounded-md" />
			</fieldset>
			<fieldset class="flex flex-col gap-2">
				<span>
					Don't have an account yet? <a href="/signup" class="font-semibold underline">Sing up</a
					></span
				>
				<a href="/forgot-password" class="underline">Forgot password?</a>
			</fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Log in</button>
		</form>
	</section>
</main>
