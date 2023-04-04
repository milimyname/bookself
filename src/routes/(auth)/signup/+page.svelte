<script>
	import { page } from '$app/stores';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { goto } from '$app/navigation';
	if ($page.data.session) goto('/');
</script>

<main class="flex h-full w-full">
	<div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block" />
	<section
		class="flex w-full flex-col items-center justify-center gap-7 px-10 md:gap-10 lg:w-1/2 lg:px-0"
	>
		<div class="flex w-full flex-col gap-5 md:w-2/3 lg:gap-10">
			<div class="flex items-center gap-5">
				<a href="/login"> <Icon src={icons.chevronRight} className="w-5 h-5 rotate-180" /></a>
				<div class="flex flex-col gap-2 text-left">
					<h1 class="text-3xl font-bold">Welcome back.</h1>
					<p class="text-gray-500">Log in to access your account</p>
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
				<label for="repeat-password">Repeat password</label>
				<input type="password" name="epeat-password" class="rounded-md" />
			</fieldset>
			<fieldset class="flex items-center gap-2">
				<input type="checkbox" name="privacy" class="rounded-sm" />
				<label for="password"
					>I agree to the
					<a href="/terms-privacy" class="underline"> Terms & Privacy </a>
				</label>
			</fieldset>

			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Log in</button>
		</form>
	</section>
</main>
