import { t } from '$lib/trpc/t';
import z from 'zod';
import { auth } from '$lib/trpc/middlewares/auth';
import { prisma } from '$lib/db/prisma';

const userProcedure = t.procedure.input(z.object({ userId: z.string() }));

export const users = t.router({
	updateUser: userProcedure
		.use(auth)
		.input(z.object({ name: z.string() }))
		.output(z.object({ id: z.string(), name: z.string() }))
		.mutation(async (req) => {
			return {
				id: req.input.userId,
				name: req.input.name
			};
		}),
	updateProfile: t.procedure.mutation(async (req) => {

		// Uploading a file to Cloud storage
		const file = await req.ctx.file();



		const user = await prisma.user.update({
			where: {
				email: req.ctx.session?.user?.email
			},
			data: {
				name: req.input.name
			}
		});

		return user;
	})
});
