import { t } from '$lib/trpc/t';
import { users } from '$lib/trpc/routers/users';

export const router = t.router({
	greeting: t.procedure.query(async () => {
		setTimeout(() => {
			console.log('5 seconds have passed');
		}, 5000);
		return `Hello tRPC v10 @ ${new Date().toLocaleTimeString()}`;
	}),
	log: t.procedure
		.input((input) => {
			if (typeof input !== 'string') throw Error('input must be a string');
			return input;
		})
		.mutation((req) => {
			console.log(req.input);
			return true;
		}),
	users
});

export type Router = typeof router;
