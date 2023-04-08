import { t } from '$lib/trpc/t';
import z from 'zod';
import { auth } from '$lib/trpc/middlewares/auth';
import { prisma } from '$lib/db/prisma';

const userProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const users = t.router({
	getUser: userProcedure.query(async ({ input }) => {
		return {
			id: input.userId
		};
	}),
	updateUser: userProcedure
		.use(auth)
		.input(z.object({ name: z.string() }))
		.output(z.object({ id: z.string(), name: z.string() }))
		.mutation(async (req) => {
			return {
				id: req.input.userId,
				name: req.input.name
			};
		})
});
