import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerData } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { bookingSchema, userSchema } from '$lib/config/zodSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(302, '/');

	// Validate form
	const form = await superValidate(event, bookingSchema);

	// Get bookings from router
	const bookings = router.createCaller(await createContext(event)).bookings.getBookings();

	// Get user from db
	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email as string
		}
	});

	return {
		form,
		user,
		bookings
	};
}) satisfies PageServerData;

export const actions = {
	addBooking: async (event) => {
		// Same syntax as in the load function
		const form = await superValidate(event, bookingSchema);

		// Convenient validation check:
		if (!form.valid)
			// Again, always return { form } and things will just work.
			return fail(400, { form });

		// Get user from session
		const session = await event.locals.getSession();

		// Find user in db
		const user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email as string
			}
		});

		// Set status to draft
		form.data.status = 'draft';

		// Check if user has verified email
		if (!user?.emailVerified) throw redirect(302, '/');

		// Create a booking in db
		await prisma.booking.create({
			data: {
				userId: user?.id,
				...form.data
			}
		});

		// Yep, return { form } here too
		return { form };
	},
	updateProfile: async (event) => {
		const form = await superValidate(event, userSchema);

		if (!form.valid) return fail(400, { form });

		// Update user in db
		const session = await event.locals.getSession();

		// If there is no image url, return
		if (!form.data.name && !form.data.email) return;

		await prisma.user.update({
			where: {
				email: session?.user?.email as string
			},
			data: {
				name: form.data.name,
				email: form.data.email
			}
		});

		return { form };
	}
} satisfies Actions;
