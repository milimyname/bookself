import { t } from '$lib/trpc/t';
import { auth } from '$lib/trpc/middlewares/auth';
import { prisma } from '$lib/db/prisma';
import { TRPCError } from '@trpc/server';

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
	})
});
