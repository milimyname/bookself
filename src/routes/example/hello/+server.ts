import { render } from 'svelte-email';

import Hello from '$lib/emails/Hello.svelte';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: 'smtppro.zoho.eu',
	port: 465,
	secure: true,
	auth: {
		user: 'komiljon.maksudov20@gmail.com',
		pass: '!TqRv*ATNmRPn4Z'
	}
});

const emailHtml = render({
	template: Hello,
	props: {
		name: 'Svelte'
	}
});

const options = {
	from: 'kj@mili-my.name',
	to: 'kj@mili-my.name',
	subject: 'hello world',
	html: emailHtml
};

transporter.sendMail(options);
