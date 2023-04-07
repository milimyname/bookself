import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import bcrypt from 'bcrypt';

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
			form.errors.email = ['Email is not registered'];
			return fail(400, { form });
		}

		// Check if password is correct
		const passwordMatch = await bcrypt.compare(form.data.password, user.password);

		if (!passwordMatch) {
			form.errors.password = ['Password is incorrect'];

			// Update to failed attempts
			await prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					failedAttempts: user.failedAttempts + 1,
					lastFailedAttempt: new Date()
				}
			});

			fail(400, { form });
		}

		// after 5 failed attempts, lock the account for 5 minutes
		if (user.failedAttempts >= 5) {
			const now = new Date();
			const diff = user.lastFailedAttempt ? now.getTime() - user.lastFailedAttempt.getTime() : 0;
			const minutes = Math.floor(diff / 60000);

			if (minutes < 5) {
				form.errors.password = [`Account is locked for ${5 - minutes} minutes`];
				return fail(400, { form });
			} else {
				// reset failed attempts
				await prisma.user.update({
					where: {
						id: user.id
					},
					data: {
						failedAttempts: 0
					}
				});
			}
		}

		try {
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
		} catch (error) {
			console.error(error);
		}

		// Yep, return { form } here too
		return { form };
	}
} satisfies Actions;
