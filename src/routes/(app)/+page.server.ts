import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerData } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { prisma } from '$lib/db/prisma';
import { bookingSchema, userSchema } from '$lib/config/zodSchema';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { transporter } from '$lib/emails/nodemailer';
import { render } from 'svelte-email';
import Hello from '$lib/emails/Hello.svelte';
import { ZOHO_SENT_FROM } from '$env/static/private';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(302, '/');

	// Validate form
	const bookingForm = await superValidate(event, bookingSchema, {
		id: 'bookingForm'
	});

	// Validate form
	const userForm = await superValidate(event, userSchema, {
		id: 'userForm'
	});

	// Get bookings from router
	const bookings = router.createCaller(await createContext(event)).bookings.getBookings();

	// Get user from db
	const user = await prisma.user.findUnique({
		where: {
			email: session?.user?.email as string
		}
	});

	// Check if user has verified email, if not send emailt
	if (!user?.emailVerified && user?.id && user?.email) {
		// Send email
		const emailHtml = render({
			template: Hello,
			props: {
				id: user.id
			}
		});

		const options = {
			from: ZOHO_SENT_FROM,
			to: user.email,
			subject: 'Welcome to Bookself || Verification Email',
			html: emailHtml
		};

		await transporter.sendMail(options);
	}

	return {
		bookingForm,
		userForm,
		user,
		bookings
	};
}) satisfies PageServerData;

export const actions = {
	addBooking: async ({ request, locals }) => {
		// Same syntax as in the load function
		const bookingForm = await superValidate(request, bookingSchema, {
			id: 'bookingForm'
		});

		// Convenient validation check:
		if (!bookingForm.valid)
			// Again, always return { bookingForm } and things will just work.
			return fail(400, { bookingForm });

		// Get user from session
		const session = await locals.getSession();

		// Find user in db
		const user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email as string
			}
		});

		// Set status to draft
		bookingForm.data.status = 'draft';

		// Check if user has verified email
		if (!user?.emailVerified) throw redirect(302, '/');

		// Create a booking in db
		await prisma.booking.create({
			data: {
				userId: user?.id,
				...bookingForm.data
			}
		});

		// Yep, return { bookingForm } here too
		return { bookingForm };
	},
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
	}
} satisfies Actions;
