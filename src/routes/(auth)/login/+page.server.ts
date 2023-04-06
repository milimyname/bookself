import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';

const schema = z.object({
	password: z.string().min(8),
	email: z.string().email()
});

export const load = (async (event) => {
	// Validate user
	const session = await event.locals.getSession();
	if (session?.user) throw redirect(302, '/');

	// Validate form
	const form = await superValidate(event, schema);

	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, schema);
		console.log('POST', form);

		// Convenient validation check:
		if (!form.valid)
			// Again, always return { form } and things will just work.
			return fail(400, { form });

		// TODO: Do something with the validated data

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
