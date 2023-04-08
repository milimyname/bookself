/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'negative-lg': '0 -25px 50px -12px rgb(0 0 0 / 0.10);'
			},
			colors: {
				pending: '#ff9100',
				'light-pending': '#ff91000f',
				draft: '#c5c5c5',
				'light-draft': '#9d9d9d1a',
				done: 'green-400',
				'light-done': '#373b53'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
