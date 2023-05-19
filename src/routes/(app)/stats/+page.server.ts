import { redirect } from '@sveltejs/kit';
import type { PageServerData } from './$types';
import { prisma } from '$lib/db/prisma';

export const load = (async (event) => {
	const session = await event.locals.getSession();

	if (!session?.user) throw redirect(302, '/');

	// Get all bookings from db
	const bookings = prisma.booking.findMany({
		where: {
			status: {
				in: ['pending', 'done', 'draft']
			}
		}
	});

	const anmeldungs = prisma.anmeldung.findMany({
		where: {
			status: {
				in: ['pending', 'done', 'draft']
			}
		}
	});

	return {
		bookings,
		anmeldungs
	};
}) satisfies PageServerData;
