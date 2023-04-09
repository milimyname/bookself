import { prisma } from '$lib/db/prisma';
import cron from 'node-cron';
import playwright from 'playwright';

export const cronJob = cron.schedule('* * * * *', async () => {
	console.log('Start');
	// const browser = await playwright.firefox.launch({
	// 	headless: false
	// });
	// const page = await browser.newPage({
	// 	bypassCSP: true
	// });
	// await page.goto('https://otv.verwalt-berlin.de/ams/TerminBuchen');

	// Save each cron job to the database
	await prisma.cronLogs.create({
		data: {
			message: `Cron job ran ${new Date().toISOString()}}`
		}
	});

	console.log('End');
});

cronJob.start();
