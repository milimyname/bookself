import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db/prisma';

export const load = (({ params }) => {
	const { slug } = params;

	const booking = prisma.booking.findUnique({
		where: {
			id: slug
		}
	});

	if (!booking) throw error(404, 'Not found');

	return {
		booking
	};
}) satisfies PageServerLoad;
