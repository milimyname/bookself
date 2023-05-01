import type { Translation } from '../i18n-types';

const de = {
	// this is an example Translation, just rename or delete this folder if you want
	bookings: 'Buchungen',
	amountOfBookings: 'Es gibt {amountOfBookings:number} Buchung{{en}}',
	newBooking: 'Neue Buchung',
	citizenship: 'Staatsangehörigkeit',
	amountOfApplicants: 'Anzahl der Antragsteller',
	familyMember:
		'Leben Sie in Berlin zusammen mit einem Familienangehörigen (z.B. Ehepartner, Kind)?',
	citizenshipOfFamilyMember: 'Staatsangehörigkeit des Familienmitglieds',
	firstName: 'Vorname',
	lastName: 'Nachname',
	fullName: 'Vollständiger Name',
	email: 'E-Mail',
	birthDate: 'Geburtsdatum',
	currentVisa: 'Aktuelles Visum',
	numberOfcurrentVisa: 'Nummer des aktuellen Visums',
	no: 'Nein',
	yes: 'Ja',
	visaType: 'Visumtyp',
	visas: 'Visa',
	cancel: 'Abbrechen',
	book: 'Buchen',
	goBack: 'Zurück',
	delete: 'Löschen',
	profileImage: 'Wählen Sie ein Profilfoto aus',
	signOut: 'Abmelden',
	nofile: 'Keine Datei ausgewählt',
	file: 'Datei auswählen',
	submit: 'Absenden',
	verifyEmail: 'Bitte verifizieren Sie zuerst Ihre E-Mail-Adresse',
	bookingRequest: 'Ihre Buchungsanfrage wird gesendet...',
	updateProfile: 'Ihr Profil wurde aktualisiert!',
	confirmEmail: 'Sie haben Ihre E-Mail-Adresse bereits bestätigt.',
	sendEmail: 'E-Mail gesendet!',
	resetPassword: 'Passwort erfolgreich zurückgesetzt!',
	deleteAcc: 'Lösche mein Konto',
	deleteAccModal: 'Sind Sie sicher, dass Sie Ihr Konto löschen möchten?'
} satisfies Translation;

export default de;
