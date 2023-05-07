import type { BaseTranslation } from '../i18n-types';

const en = {
	// TODO: your translations go here
	bookings: 'Bookings',
	amountOfBookings: 'There are {amountOfBookings:number} total booking{{s}}',
	newBooking: 'New Booking',
	citizenship: 'Citizenship',
	amountOfApplicants: 'Amount of applicants',
	familyMember: 'Do you live in Berlin together with a family member (e.g. spouse, child)?',
	citizenshipOfFamilyMember: 'Citizenship of family member',
	firstName: 'First Name',
	lastName: 'Last Name',
	fullName: 'Full Name',
	email: 'Email',
	birthDate: 'Date of Birth',
	currentVisa: 'Current Visa',
	numberOfcurrentVisa: 'Number of the current visa',
	no: 'No',
	yes: 'Yes',
	visaType: 'Visa Type',
	visas: 'Visas',
	cancel: 'Cancel',
	book: 'Book',
	goBack: 'Go Back',
	delete: 'Delete',
	edit: 'Edit',
	signOut: 'Sign Out',
	nofile: 'No file chosen',
	file: 'Choose file',
	submit: 'Submit',
	pay: 'Pay',
	verifyEmail: 'Please verify your email first',
	bookingRequest: 'Sending your booking request...',
	editBookingRequest: 'Sending your edit booking request...',
	updateProfile: 'Updated your profile!',
	confirmEmail: 'You already confirmed your email.',
	sendEmail: 'Email sent!',
	resetPassword: 'Password reset successfully!',
	deleteAcc: 'Delete my account',
	deleteAccModal: 'Are you sure you want to delete your account?',
	userProfile: 'User Profile',
	payForBooking: 'How to pay for a booking ?',
	payForBookingText1:
		'As you may have guessed, the answer to this question depends on the status of the app. If it is in beta, please use the next credentials to pay for a booking:',
	creditCard: 'Use the following credit card number: ',
	payForBookingText3:
		"It'll take a second and here you go. It'll redirect back to the app and you'll see the booking. You might refresh the page to see the booking status as pending.",
	expireDate: 'Use any future expire date',
	cvv: 'Use any 3 digits',
	anyEmail: 'Use any email',
	anyName: 'Use any name',
	whyCharge: 'Why do we charge?',
	whyChargeText1:
		'As you might have noticed, we charge for the booking. We do it because we need to maintain and support. We try to make the smallest fee possible. We hope you understand.',
	tooLong: 'Too long?',
	tooLongText1:
		"Yeahh... We wish we'd get one without any issues and even without our help but it ain't upto us and we try to do our best to make it as quick as possible. If you want to helpimprove our service, please contact us at ",
	tooLongText2: "We'll be happy to hear from you.",
	tooLongText3: 'Otherwise, You can try to reach them by email. For more info, please have look at',
	anotherPlatform: 'Another Booking Platforms?',
	anotherPlatformText1:
		"We'd not do it unless other booking platforms are working well. However, we can come up with a solution like with Ausländerbehörde Berlin (in beta).",
	anotherPlatformText2: "We're thinking of possible to get an Anmeldung appointment in Berlin."
} satisfies BaseTranslation;

export default en;