import { prisma } from '$lib/db/prisma';
import { transporter } from '$lib/emails/nodemailer';
import { render } from 'svelte-email';
import ReminderEmail from '$lib/emails/ReminderEmail.svelte';
import { ZOHO_SENT_FROM } from '$env/static/private';

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	// Send a reminder email to the users who are waiting for an appointment
	const bookingsToRemind = await prisma.booking.findMany({
		where: {
			status: 'pending'
		}
	});

	bookingsToRemind.forEach(async (booking) => {
		// Get user name from db
		const user = await prisma.user.findUnique({
			where: {
				email: booking.email
			}
		});

		// Send email
		const emailHtml = render({
			template: ReminderEmail,
			props: {
				name: user?.name
			}
		});

		const options = {
			from: ZOHO_SENT_FROM,
			to: booking.email,
			subject: 'Bookself || Reminder Email',
			html: emailHtml
		};

		transporter.sendMail(options);
	});
	return new Response(
		'Emails successfully sent to all users who are patienly waiting for an appointment.'
	);
}
