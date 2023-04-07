/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'negative-lg': '0 -25px 50px -12px rgb(0 0 0 / 0.10);'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
