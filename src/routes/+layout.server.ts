import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

export const load: LayoutServerLoad = async (event) => {
	return {
		session: await event.locals.getSession()
	};
};
