import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { userSchema } from '$lib/config/zodSchema';
import { transporter } from '$lib/emails/nodemailer';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import { ZOHO_SENT_FROM } from '$env/static/private';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (session?.user) throw redirect(302, '/');

	// Validate form
	const form = await superValidate(event, userSchema);

	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, userSchema);

		// Convenient validation check:
		if (!form.valid)
			// Again, always return { form } and things will just work.
			return fail(400, { form });

		try {
			// Find user in db
			const user = await prisma.user.findUnique({
				where: {
					email: form.data.email
				}
			});

			// If user is not found, throw error
			if (!user)
				return fail(400, {
					form: {
						...form,
						errors: {
							...form.errors,
							email: 'Email not found'
						}
					}
				});

			// If user is found, check if user got password
			if (!user.password)
				return fail(400, {
					form: {
						...form,
						errors: {
							...form.errors,
							email: 'You logged in with Google or Github in the past. Please use those to login. '
						}
					}
				});

			// Send email
			const emailHtml = render({
				template: Hello,
				props: {
					id: user.id
				}
			});

			const options = {
				from: ZOHO_SENT_FROM,
				to: form.data.email,
				subject: 'Welcome to Bookself || Verification Email',
				html: emailHtml
			};

			await transporter.sendMail(options);

			// Redirect to home page
			throw redirect(302, '/');
		} catch (err) {
			console.log(err);
		}

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
