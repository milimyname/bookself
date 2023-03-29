import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async (event) => {
	// If the user is not logged in, redirect to the login page
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/login');
	return {
		session: await event.locals.getSession()
	};
};
