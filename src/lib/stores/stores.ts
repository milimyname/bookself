import { writable } from 'svelte/store';

export const isBookingFormOpen = writable(false);
export const bookingDrawerSlide = writable(0);
export const isUserFormOpen = writable(false);
export const userDrawerSlide = writable(0);
export const anyQuestions = writable(false);
export const anyQuestionsDrawerSlide = writable(0);
export const firstQuestionBlock = writable(0);
export const secondQuestionBlock = writable(0);
export const thirdQuestionBlock = writable(0);
export const fourthQuestionBlock = writable(0);
export const loading = writable(false);
export const darkMode = writable(false);
export const isModalOpen = writable(false);
export const deleteAcc = writable(false);
export const sentEmail = writable(false);
export const editBooking = writable(false);
export const bookingType = writable('auslanderbehorde');
