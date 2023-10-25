import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerData } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { userSchema } from '$lib/config/zodSchema';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(302, '/');

	// Get all bookings from db
	const bookings = prisma.booking.findMany();

	const anmeldungs = prisma.anmeldung.findMany();

	// Validate form
	const userForm = await superValidate(event, userSchema, {
		id: 'userForm'
	});

	return {
		bookings,
		anmeldungs,
		userForm
	};
}) satisfies PageServerData;

export const actions = {
	updateUser: async ({ locals, request }) => {
		const userForm = await superValidate(request, userSchema, {
			id: 'userForm'
		});

		if (!userForm.valid) return fail(400, { userForm });

		// Update user in db
		const session = await locals.getSession();

		// If there is no image url, return
		if (!userForm.data.name && !userForm.data.email) return;

		await prisma.user.update({
			where: {
				email: session?.user?.email as string
			},
			data: {
				name: userForm.data.name,
				email: userForm.data.email
			}
		});

		return { userForm };
	},
	deleteAcc: async ({ locals }) => {
		const session = await locals.getSession();

		// Delete all bookings
		await prisma.booking.deleteMany({
			where: {
				email: session?.user?.email as string
			}
		});

		// Delete user
		await prisma.user.delete({
			where: {
				email: session?.user?.email as string
			}
		});

		throw redirect(303, '/');
	}
} satisfies Actions;
