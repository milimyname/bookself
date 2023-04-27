import { darkMode } from '$lib/stores/stores';


export function handleSwitchDarkMode() {
	let mode;
	darkMode.update((n) => {
		mode = !n;
		return (n = !n);
	});

	mode
		? document.documentElement.classList.add('dark')
		: document.documentElement.classList.remove('dark');
}
