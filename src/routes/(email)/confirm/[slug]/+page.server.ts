import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { prisma } from '$lib/db/prisma';

export const load = (async ({ params }) => {
	const { slug } = params;

	const user = await prisma.user.findUnique({
		where: {
			id: slug
		}
	});

	if (!user) throw error(404, 'Not found');

	if (user.emailVerified) throw redirect(302, '/');

	// Update user to confirmed
	await prisma.user.update({
		where: {
			id: slug
		},
		data: {
			emailVerified: new Date()
		}
	});

	// Redirect to home
	throw redirect(302, '/');
}) satisfies PageServerLoad;
