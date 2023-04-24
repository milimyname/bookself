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
import { stripe } from '$lib/stripe/stripe';

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

	// Check if user has verified email, if not send email
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

	// Get stripe checkout last session
	const stripeCheckoutSession = await stripe.checkout.sessions.list({
		limit: 1
	});

	// If it is paid, update status to pending
	if (stripeCheckoutSession.data[0].payment_status === 'paid') {
		// Update booking status to paid
		await prisma.booking.updateMany({
			where: {
				id: stripeCheckoutSession.data[0].metadata.bookingId,
				userId: stripeCheckoutSession.data[0].metadata.userId
			},
			data: {
				status: 'pending'
			}
		});
	}

	return {
		bookingForm,
		userForm,
		user,
		bookings
	};
}) satisfies PageServerData;

export const actions = {
	addBooking: async (event) => {
		// Same syntax as in the load function
		const bookingForm = await superValidate(event.request, bookingSchema, {
			id: 'bookingForm'
		});

		// Convenient validation check:
		if (!bookingForm.valid)
			// Again, always return { bookingForm } and things will just work.
			return fail(400, { bookingForm });

		// Get user from session
		const session = await event.locals.getSession();

		// Find user in db
		const user = await prisma.user.findUnique({
			where: {
				email: session?.user?.email as string
			}
		});

		// Set status to draft
		bookingForm.data.status = 'draft';

		// Format birth date of the form to dd-mm-yyyy from yyyy-mm-dd
		bookingForm.data.birthDate = bookingForm.data.birthDate.split('-').reverse().join('.');

		// Slice the last 2 letters from visa and visaType
		bookingForm.data.visa = bookingForm.data.visa.slice(0, -1);
		bookingForm.data.visaType = bookingForm.data.visaType.slice(0, -2);

		// Check if user has verified email, don't let them book if not
		if (!user?.emailVerified) return;

		// Create booking in db
		const booking = await prisma.booking.create({
			data: {
				userId: user?.id,
				...bookingForm.data
			}
		});

		// Pay for booking
		const checkout = await router.createCaller(await createContext(event)).bookings.payForBooking({
			bookingId: booking.id
		});

		throw redirect(303, checkout.url);
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
