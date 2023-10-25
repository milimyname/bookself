import type { LayoutServerLoad } from './$types';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

const langParam = 'lang';

export const load = (async (event) => {
	// Using a GET var "lang" to change locale
	const newLocale = event.url.searchParams.get(langParam);
	if (newLocale) event.cookies.set(langParam, newLocale, { path: '/' });
	// event.url.searchParams.delete(langParam);
	// Redirect to remove the GET var
	// redirect(302, event.url.toString());

	// Get the locale from the cookie
	const locale = detectLocale(() => [event.cookies.get(langParam) ?? '']);
	return { locale, session: await event.locals.getSession() };
}) satisfies LayoutServerLoad;
