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
	deleteAccModal: 'Sind Sie sicher, dass Sie Ihr Konto löschen möchten?',
	userProfile: 'Benutzerprofil',
	payForBooking: 'Wie bezahle ich für eine Buchung?',
	payForBookingText1:
		'Wie Sie vielleicht schon erraten haben, hängt die Antwort auf diese Frage vom Status der App ab. Wenn es sich um eine Betaversion handelt, verwenden Sie bitte die nächsten Zugangsdaten, um eine Buchung zu bezahlen:',
	creditCard: 'Verwenden Sie die folgende Kreditkartennummer:',
	payForBookingText3:
		"Es dauert eine Sekunde und los geht's. Es wird zurück zur App weitergeleitet und Sie sehen die Buchung. Sie können die Seite aktualisieren, um den Buchungsstatus als ausstehend anzuzeigen.",
	expireDate: 'Verwenden Sie ein beliebiges zukünftiges Ablaufdatum',
	cvv: 'Verwenden Sie beliebige 3 Ziffern',
	anyEmail: 'Verwenden Sie eine beliebige E-Mail',
	anyName: 'Beliebigen Namen verwenden',
	whyCharge: 'Warum benötigen wir eine Zahlung?',
	whyChargeText1:
		'Wie Sie vielleicht bemerkt haben, berechnen wir die Buchung. Wir tun es, weil wir es pflegen und unterstützen müssen. Wir versuchen, die kleinstmögliche Gebühr zu machen. Wir hoffen auf Ihr Verständnis.',
	tooLong: 'Zu lang?',
	tooLongText1:
		'Yeahh ... Wir wünschten, wir würden ohne Probleme und sogar ohne unsere Hilfe einen bekommen, aber es liegt nicht an uns und wir versuchen unser Bestes, um es so schnell wie möglich zu machen. Wenn Sie helfen möchten, unseren Service zu verbessern, kontaktieren Sie uns bitte unter ',
	tooLongText2: 'Wir freuen uns, von Ihnen zu hören.',
	tooLongText3:
		'Andernfalls können Sie versuchen, sie per E-Mail zu erreichen. Weitere Informationen finden Sie unter',
	anotherPlatform: 'Andere Buchungsplattformen?',
	anotherPlatformText1:
		'Wir würden es nicht tun, wenn andere Buchungsplattformen nicht funktionieren. Wir können uns jedoch eine Lösung wie mit der Ausländerbehörde Berlin (in beta) einfallen lassen.',
	anotherPlatformText2: 'Wir denken darüber nach, einen Anmeldetermin in Berlin zu bekommen.'
} satisfies Translation;

export default de;
