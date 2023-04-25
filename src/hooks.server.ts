import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Google from '@auth/core/providers/google';
import { env } from '$env/dynamic/private';
import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { redirect, type Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';
import { sequence } from '@sveltejs/kit/hooks';
import { prisma } from '$lib/db/prisma';
import { PrismaAdapter } from '@next-auth/prisma-adapter';

// Protect all routes in the protectedPaths array
const protectedPaths = ['/', '/account'];

async function protect({ event, resolve }) {
	if (event.url.pathname.startsWith('/reminder')) return resolve(event);

	if (!protectedPaths.includes(event.url.pathname)) return resolve(event);

	const session = await event.locals.getSession();

	if (!session) throw redirect(303, '/login');

	return resolve(event);
}

const authenticate = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET,
			allowDangerousEmailAccountLinking: true
		}),
		Google({
			clientId: env.GOOGLE_ID,
			clientSecret: env.GOOGLE_SECRET,
			allowDangerousEmailAccountLinking: true
		})
	],
	session: {
		strategy: 'database',
		generateSessionToken: () => {
			return crypto.randomUUID();
		}
	}
});

export const handle: Handle = sequence(
	authenticate,
	protect,
	createTRPCHandle({
		router,
		createContext
	})
);
