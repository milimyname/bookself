import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { resetSchema } from '$lib/config/zodSchema';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import bcrypt from 'bcrypt';

export const load = (async (event) => {
	// Validate user
	const session = await event.locals.getSession();
	if (session?.user) throw redirect(302, '/');

	// Validate form
	const form = await superValidate(event, resetSchema);

	return {
		form
	};
}) satisfies PageServerLoad;

export const actions = {
	default: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, resetSchema);

		// Convenient validation check:
		if (!form.valid)
			// Again, always return { form } and things will just work.
			return fail(400, { form });

		// Check if passwords match
		if (form.data.password !== form.data.confirmPassword) {
			form.errors.confirmPassword = ['Passwords do not match'];
			return fail(400, { form });
		}

		// Check if password is the same as the old one
		const user = await prisma.user.findUnique({
			where: {
				id: event.params.slug
			}
		});

		if (await bcrypt.compare(form.data.password, user.password)) {
			form.errors.password = ['Password is the same as the old one'];
			return fail(400, { form });
		}

		try {
			// Update user in db
			const updatedUser = await prisma.user.update({
				where: {
					id: event.params.slug
				},
				data: {
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
							email: updatedUser.email
						}
					}
				}
			});

			// Set cookie session token
			event.cookies.set('__Secure-next-auth.session-token', sessionToken, {
				path: '/',
				maxAge: 1000 * 60 * 60 * 24 * 30,
				secure: true,
				httpOnly: true,
				sameSite: 'lax'
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
