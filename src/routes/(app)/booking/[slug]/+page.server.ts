import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { userSchema, bookingSchema } from '$lib/config/zodSchema';

export const load = (async ({ params, request }) => {
	const { slug } = params;

	const booking = await prisma.booking.findUnique({
		where: {
			id: slug
		}
	});

	if (!booking) throw error(404, 'Not found');

	// Validate form
	const userForm = await superValidate(request, userSchema, {
		id: 'userForm'
	});

	// Validate form
	const bookingForm = await superValidate(request, bookingSchema, {
		id: 'bookingForm'
	});

	// Booking form data is the booking data
	bookingForm.data = {
		applicants: booking.applicants,
		firstName: booking.firstName,
		lastName: booking.lastName,
		birthDate: booking.birthDate.split('.').reverse().join('-'),
		email: booking.email,
		citizenship: booking.citizenship,
		visaType: booking.visaType,
		visa: booking.visa,
		familyMember: booking.familyMember,
		cizitenshipOfFamilyMember: booking.cizitenshipOfFamilyMember || '',
		currentVisa: booking.currentVisa || '',
		numberOfCurrentVisa: booking.numberOfCurrentVisa || '',
		status: booking.status
	};

	return {
		bookingForm,
		userForm,
		booking
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
	deleteBooking: async ({ params }) => {
		const { slug } = params;

		// Delete booking
		await prisma.booking.delete({
			where: {
				id: slug
			}
		});

		throw redirect(303, '/');
	},
	editBooking: async ({ params, request }) => {
		const { slug } = params;

		// Validate form
		const bookingForm = await superValidate(request, bookingSchema, {
			id: 'bookingForm'
		});

		if (!bookingForm.valid) return fail(400, { bookingForm });

		// Update booking in db
		await prisma.booking.update({
			where: {
				id: slug
			},
			data: {
				...bookingForm.data
			}
		});

		return { bookingForm };
	}
} satisfies Actions;
