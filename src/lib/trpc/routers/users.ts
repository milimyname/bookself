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
	uploadImage: t.procedure.input(z.object({ imageUrl: z.string() })).mutation(async (req) => {
		// Uploading a file to Cloud storage
		const { imageUrl } = req.input;

		// If there is no image url, return
		if (!imageUrl) return;

		await prisma.user.update({
			where: {
				email: req.ctx.session?.user?.email
			},
			data: {
				image: imageUrl
			}
		});
	})
});
