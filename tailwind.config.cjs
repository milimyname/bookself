/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				'negative-lg': '0 -25px 50px -12px rgb(0 0 0 / 0.10);',
				'custom-lg': '0 10px 20px -10px rgb(0 0 0 / 0.1);'
			},
			colors: {
				pending: '#ff9100',
				'light-pending': '#ff91000f',
				draft: '#7e7e7e',
				'light-draft': '#9d9d9d1a',
				done: 'green-400',
				'light-done': '#373b53',
				delete: '#EA5455'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
