import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { userSchema, bookingSchema, anmeldungSchema } from '$lib/config/zodSchema';

export const load = (async ({ params, request }) => {
	const { slug } = params;

	const anmeldung = await prisma.anmeldung.findUnique({
		where: {
			id: slug
		}
	});

	if (!anmeldung) throw error(404, 'Not found');

	// Validate form
	const userForm = await superValidate(request, userSchema, {
		id: 'userForm'
	});

	// Validate Anmeldung form
	const anmeldungForm = await superValidate(request, anmeldungSchema, {
		id: 'anmeldungForm'
	});

	// Booking form data is the booking data
	anmeldungForm.data = {
		firstName: anmeldung.firstName,
		lastName: anmeldung.lastName,
		place: anmeldung.place,
		email: anmeldung.email,
		status: anmeldung.status
	};

	return {
		anmeldungForm,

		userForm,
		anmeldung
	};
}) satisfies PageServerLoad;

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
	deleteAnmeldung: async ({ params }) => {
		const { slug } = params;

		// Delete booking
		await prisma.anmeldung.delete({
			where: {
				id: slug
			}
		});

		throw redirect(303, '/');
	},
	editAnmeldung: async ({ params, request }) => {
		const { slug } = params;

		// Validate form
		const anmeldungForm = await superValidate(request, anmeldungSchema, {
			id: 'anmeldungForm'
		});

		if (!anmeldungForm.valid) return fail(400, { anmeldungForm });

		// Update booking in db
		await prisma.anmeldung.update({
			where: {
				id: slug
			},
			data: {
				...anmeldungForm.data
			}
		});

		return { anmeldungForm };
	}
} satisfies Actions;
