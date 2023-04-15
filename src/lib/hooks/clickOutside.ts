import type { Spring } from 'svelte/motion';

export function clickOutside(
	e: MouseEvent,
	springValue: Spring<number>,
	$isBookingFormOpen: boolean
) {
	const drawer = document.querySelector('.bookingDrawer');
	const button = document.querySelector('.newBookingButton');
	const userButton = document.querySelector('.userButton');

	// If user button is clickded, close the booking drawer
	if (userButton && userButton.contains(<Node>e!.target)) {
		$isBookingFormOpen = false;
		springValue.set(100, { soft: true });
	}

	// If the user clicks on the aside, don't close the drawer
	const aside = document.querySelector('aside');
	if (aside && aside.contains(<Node>e!.target)) return;

	if (button && button.contains(<Node>e!.target)) return;
	if (drawer && !drawer.contains(<Node>e!.target)) {
		$isBookingFormOpen = false;
		springValue.set(100, { soft: true });
	}

	// document.body.style.overflow = 'auto';
}
