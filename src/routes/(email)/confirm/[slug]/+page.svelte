<script lang="ts">
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import { LL } from '$lib/i18n/i18n-svelte';

	onMount(() => toast.success($LL.confirmEmail()));
</script>

<Toaster />
<main class="flex h-screen w-full flex-col items-center justify-center">
	<h1>{$LL.confirmEmail()}</h1>
</main>
