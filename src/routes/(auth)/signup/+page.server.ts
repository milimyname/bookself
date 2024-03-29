import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import bcrypt from 'bcrypt';
import { signUpSchema } from '$lib/config/zodSchema';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (session?.user) throw redirect(302, '/');

	// Validate form
	const form = await superValidate(event, signUpSchema);

	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, signUpSchema);

		// Convenient validation check:
		if (!form.valid)
			// Again, always return { form } and things will just work.
			return fail(400, { form });

		// Check if passwords match
		if (form.data.password !== form.data.confirmPassword) {
			form.errors.confirmPassword = ['Passwords do not match'];
			return fail(400, { form });
		}

		// Check if email is already in use
		const user = await prisma.user.findUnique({
			where: {
				email: form.data.email
			}
		});

		if (user) {
			form.errors.email = ['Email exists'];
			return fail(400, { form });
		}

		try {
			// Create user in db
			await prisma.user.create({
				data: {
					email: form.data.email,
					password: await bcrypt.hash(form.data.password, 10)
				}
			});

			// Create session in db
			const sessionToken = crypto.randomUUID();

			await prisma.session.create({
				data: {
					sessionToken,
					expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
					user: {
						connect: {
							email: form.data.email
						}
					}
				}
			});

			// Set cookie session token
			event.cookies.set('next-auth.session-token', sessionToken, {
				path: '/',
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
				sameSite: 'lax',
				secure: true
			});

			// Redirect to home page
			throw redirect(302, '/');
		} catch (err) {
			console.log(err);
		}

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
