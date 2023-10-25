<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import { z } from 'zod';
	export let form2;

	const registerSchema = z.object({
		name: z.string().min(1)
	});

	const {
		form: registerForm,
		errors: registerErrors,
		enhance: registerEnhance,
		message: registerMessage
	} = superForm(form2, {
		invalidateAll: false,
		validators: registerSchema
	});
</script>

{#if $registerMessage}<h3>{$registerMessage}</h3>{/if}

<form method="POST" action="?/register" use:registerEnhance class="flex flex-col gap-5">
	Name: <input type="text" name="name" bind:value={$registerForm.name} />
	<button>Submit</button>
	{#if $registerErrors.name}
		<br /><span class="invalid">{$registerErrors.name}</span>
	{/if}
</form>
