import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms/server';

const loginSchema = z.object({
	name: z.string().min(1)
});

const registerSchema = z.object({
	name: z.string().min(1)
});

export const load = async () => {
	const loginForm = await superValidate(loginSchema, {
		id: 'loginForm'
	});

	const registerForm = await superValidate(registerSchema, {
		id: 'registerForm'
	});

	return { loginForm, registerForm };
};

export const actions = {
	login: async ({ request }) => {
		const loginForm = await superValidate(request, loginSchema, {
			id: 'loginForm'
		});

		console.log(loginForm);

		if (!loginForm.valid) return fail(400, { loginForm });
		return message(loginForm, 'Login form submitted');
	},
	register: async ({ request }) => {
		const registerForm = await superValidate(request, registerSchema, {
			id: 'registerForm'
		});

		console.log(registerForm);

		if (!registerForm.valid) return fail(400, { registerForm });
		return message(registerForm, 'Register form submitted');
	}
};
