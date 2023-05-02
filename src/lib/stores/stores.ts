import { writable } from 'svelte/store';

export const isBookingFormOpen = writable(false);
export const bookingDrawerSlide = writable(0);
export const isUserFormOpen = writable(false);
export const userDrawerSlide = writable(0);
export const loading = writable(false);
export const darkMode = writable(false);
export const isModalOpen = writable(false);
export const deleteAcc = writable(false);
export const sentEmail = writable(false);
