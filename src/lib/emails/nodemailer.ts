import nodemailer from 'nodemailer';
// import { ZOHO_EMAIL, ZOHO_PASSWORD } from '$env/static/private';

export const transporter = nodemailer.createTransport({
	host: 'smtppro.zoho.eu',
	port: 465,
	secure: true,
	auth: {
		user: process.env.ZOHO_EMAIL,
		pass: process.env.ZOHO_PASSWORD
	}
});

// transporter.sendMail(options);
