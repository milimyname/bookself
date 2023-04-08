import { t } from '$lib/trpc/t';
import { TRPCError } from '@trpc/server';

export const auth = t.middleware(async ({ next, ctx }) => {
	// Check if user is authenticated
	if (!ctx.session?.user) throw new TRPCError({ code: 'UNAUTHORIZED' });

	return next();
});
