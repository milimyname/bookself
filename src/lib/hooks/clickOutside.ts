import type { Spring } from 'svelte/motion';
import { isBookingFormOpen, isUserFormOpen } from '$lib/stores/stores';

export function clickOutside(e: MouseEvent, springValue: Spring<number>) {
	const drawer = document.querySelector('.bookingDrawer');
	const newBookingButton = document.querySelector('.newBookingButton');
	const userButton = document.querySelector('.userButton');

	// If user button is clickded, close the booking drawer
	if (userButton && userButton.contains(<Node>e!.target)) {
		isBookingFormOpen.set(false);
		springValue.set(100, { soft: true });
	}

	// If the user clicks on the aside, don't close the drawer
	const aside = document.querySelector('aside');
	if (aside && aside.contains(<Node>e!.target)) return;

	// If the user clicks on the new booking button, don't close the drawer
	if (newBookingButton && newBookingButton.contains(<Node>e!.target)) return;

	// If the user clicks outside the drawer, close it
	if (drawer && !drawer.contains(<Node>e!.target)) {
		isBookingFormOpen.set(false);
		springValue.set(100, { soft: true });
	}
}

export function userClickOutside(e: MouseEvent, springValue: Spring<number>) {
	const drawer = document.querySelector('.userDrawer');
	const button = document.querySelector('.userButton');
	const aside = document.querySelector('aside');
	if (aside && aside.contains(<Node>e!.target)) return;
	if (button && button.contains(<Node>e!.target)) return;
	if (drawer && !drawer.contains(<Node>e!.target)) {
		isUserFormOpen.set(false);
		springValue.set(100, { soft: true });
	}
}
