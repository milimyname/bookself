import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { userSchema } from '$lib/config/zodSchema';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { render } from 'svelte-email';
import { transporter } from '$lib/emails/nodemailer';
import { ZOHO_SENT_FROM } from '$env/static/private';
import Reset from '$lib/emails/Reset.svelte';

export const load = (async (event) => {
	// Validate user
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

		// Find user in db
		const user = await prisma.user.findUnique({
			where: {
				email: form.data.email
			}
		});

		if (!user) {
			form.errors.email = ['Email is not found'];
			return fail(400, { form });
		}

		// Check if there is a password
		if (!user.password) {
			form.errors.email = ['You used a google/github login to sign up.'];
			return fail(400, { form });
		}

		// Send email
		const emailHtml = render({
			template: Reset,
			props: {
				id: user.id
			}
		});

		const options = {
			from: ZOHO_SENT_FROM,
			to: form.data.email,
			subject: 'Reset password',
			html: emailHtml
		};

		await transporter.sendMail(options);
	}
} satisfies Actions;
