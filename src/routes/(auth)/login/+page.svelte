<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import logo from '$lib/assets/favicon.png';
	import { icons } from '$lib/assets/icons';
	import Icon from 'svelte-icons-pack/Icon.svelte';
</script>

<main class="flex h-full w-full">
	<img
		src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
		alt="Nature"
		class="h-full"
	/>
	<section class="flex w-full flex-col items-center justify-center gap-14">
		<div class="flex flex-col gap-10">
			<div class="flex flex-col gap-2 text-left">
				<h1 class="text-3xl font-bold">Get Started Now</h1>
				<p class="text-gray-500">Create a new acc to ge booked an appointment</p>
			</div>
			<div class="flex justify-between gap-5">
				<button
					on:click={() => signIn('google')}
					class=" group flex gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.google} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Log in with Google </span></button
				>
				<button
					on:click={() => signIn('github')}
					class=" group flex gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black"
				>
					<Icon src={icons.github} className="h-7 w-7 group-hover:fill-white" />
					<span class="group-hover:text-white"> Log in with Github </span></button
				>
			</div>
			<div class="flex items-center gap-5">
				<div class="h-[1px] w-full bg-neutral-200" />
				<span>or</span>
				<div class="h-[1px] w-full bg-neutral-200" />
			</div>
		</div>
		<form class="">
			<fieldset>
				<label for="email">Email</label>
				<input type="text" name="name" />
			</fieldset>
			<fieldset>
				<label for="password">Password</label>
				<input type="password" name="password" />
			</fieldset>
			<fieldset>
				<input type="checkbox" name="privacy" />
				<label for="password"
					>I agree to the
					<a href="/terms-privacy"> Terms & Privacy </a>
				</label>
			</fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white"> Sign UP </button>
		</form>
	</section>
</main>
