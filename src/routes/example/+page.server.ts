import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';
import { router } from '$lib/trpc/router';
import { createContext } from '$lib/trpc/context.js';

export const load = async (event) => {
	// const loginForm = await superValidate(loginSchema, {
	// 	id: 'loginForm'
	// });

	// Get clientSecret from bookings
	const key = router.createCaller(await createContext(event)).bookings.payForBooking();

	return { key };
};
