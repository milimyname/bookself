<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	export let form1;

	const { form, errors, enhance, message } = superForm(form1, {
		invalidateAll: false
	});
</script>

{#if $message}<h3>{$message}</h3>{/if}

<form method="POST" action="?/login" use:enhance class="flex flex-col gap-5">
	Name: <input type="text" name="name" bind:value={$form.name} />
	<button>Submit</button>
	{#if $errors.name}
		<br /><span class="invalid">{$errors.name}</span>
	{/if}
</form>
