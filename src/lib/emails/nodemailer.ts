import nodemailer from 'nodemailer';
import { ZOHO_EMAIL, ZOHO_PASSWORD } from '$env/static/private';

export const transporter = nodemailer.createTransport({
	host: 'smtppro.zoho.eu',
	port: 465,
	secure: true,
	auth: {
		user: ZOHO_EMAIL,
		pass: ZOHO_PASSWORD
	}
});

// transporter.sendMail(options);
