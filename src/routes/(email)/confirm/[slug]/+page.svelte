<script lang="ts">
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	onMount(() => toast.success('You already confirmed your email'));
</script>

<Toaster />
<main class="flex h-screen w-full flex-col items-center justify-center">
	<h1>You already confirmed your email</h1>
</main>
