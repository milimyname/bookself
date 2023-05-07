import { t } from '$lib/trpc/t';
import { auth } from '$lib/trpc/middlewares/auth';
import { prisma } from '$lib/db/prisma';
import { TRPCError } from '@trpc/server';
import { stripe } from '$lib/stripe/stripe';
import { env } from '$env/dynamic/public';
import { z } from 'zod';

// const bookingProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const bookings = t.router({
	getBookings: t.procedure.use(auth).query(async (req) => {
		// Get user id from auth middleware
		const email = req.ctx.session.user?.email as string;

		// Get user from DB
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		// If user doesn't exist, throw error
		if (!user)
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'User does not exist'
			});

		// Get bookings from DB
		const bookings = await prisma.booking.findMany({
			where: {
				userId: user.id
			}
		});

		return {
			bookings
		};
	}),
	getAnmeldungs: t.procedure.use(auth).query(async (req) => {
		// Get user id from auth middleware
		const email = req.ctx.session.user?.email as string;

		// Get user from DB
		const user = await prisma.user.findUnique({
			where: {
				email
			}
		});

		// If user doesn't exist, throw error
		if (!user)
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'User does not exist'
			});

		// Get bookings from DB
		const anmeldungs = await prisma.anmeldung.findMany({
			where: {
				userId: user.id
			}
		});

		return {
			anmeldungs
		};
	}),
	payForBooking: t.procedure
		.use(auth)
		.input(
			z.object({
				bookingId: z.string()
			})
		)
		.query(async (req) => {
			// Get booking id from input
			const { bookingId } = req.input;

			// Get the booking from the DB
			const booking = await prisma.booking.findUnique({
				where: {
					id: bookingId
				}
			});

			// Create coupons
			const coupon = await stripe.coupons.create({
				percent_off: 90,
				duration: 'repeating',
				duration_in_months: 5,
				name: 'uzbekBerliner31#'
			});

			// Create stripe intent
			const paymentIntent = await stripe.checkout.sessions.create({
				payment_method_types: ['card'],
				line_items: [
					{
						price_data: {
							currency: 'eur',
							product_data: {
								name: 'Booking',
								images: ['https://i.imgur.com/EHyR2nP.png']
							},
							unit_amount: 500
						},
						quantity: 1
					}
				],
				discounts: [
					{
						coupon: coupon.id
					}
				],
				mode: 'payment',
				metadata: {
					bookingId: booking?.id as string,
					userId: booking?.userId as string
				},
				success_url: import.meta.env.DEV ? env.PUBLIC_DEV : env.PUBLIC_PROD,
				cancel_url: import.meta.env.DEV ? env.PUBLIC_DEV : env.PUBLIC_PROD
			});

			return paymentIntent;
		})
});
