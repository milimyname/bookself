// lib/trpc/context.ts
import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

// we're not using the event parameter is this example,
// hence the eslint-disable rule
export async function createContext(event: RequestEvent) {
	const session = await event.locals.getSession();
	return {
		session
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
