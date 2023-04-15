<script lang="ts">
	import type { PageData } from './$types';
	import Form1 from '$lib/components/Form1.svelte';
	import Form2 from '$lib/components/Form2.svelte';

	export let data: PageData;
</script>

<div class="flexcol flex h-screen w-full items-center justify-center gap-10 p-10">
	<Form1 form1={data.loginForm} />

	<hr />

	<Form2 form2={data.registerForm} />
</div>
