import { prisma } from '$lib/db/prisma';
import cron from 'node-cron';
import playwright from 'playwright';

//*/30 * * * * *
export const cronJob = cron.schedule('*/30 * * * * *', async () => {
	try {
		// Get all pending bookings from the database
		const pendingBookings = await prisma.booking.findMany({
			where: {
				status: 'pending'
			}
		});

		console.log('Start');

		const browser = await playwright.firefox.launch({
			headless: false
		});
		const page = await browser.newPage({
			bypassCSP: true
		});
		await page.goto('https://otv.verwalt-berlin.de/ams/TerminBuchen');

		// Find a button called "Termin buchen" and click it
		await page.getByRole('link', { name: 'Termin buchen' }).click();

		// Find a checkbox named gelesen and check it
		await page.getByRole('checkbox', { name: 'gelesen' }).check();

		// Find a button called "Weiter" and click it
		await page.getByRole('button', { name: 'Weiter' }).click();

		// Wait for 2000ms
		await page.waitForTimeout(2000);

		// For each pending booking
		for (const pendingBooking of pendingBookings) {
			// Find a select element sel_staat
			await page.selectOption('select[name="sel_staat"]', pendingBooking.citizenship);
			// Find a select element personenAnzahl_normal

			await page.selectOption('select[name="personenAnzahl_normal"]', pendingBooking.applicants);
			// Find a select element lebnBrMitFmly
			if (pendingBooking.familyMember === 'ja') {
				await page.selectOption('select[name="lebnBrMitFmly"]', 'ja');
				await page.selectOption(
					'select[name="fmlyMemNationality"]',
					pendingBooking.cizitenshipOfFamilyMember
				);
			} else await page.selectOption('select[name="lebnBrMitFmly"]', 'nein');

			// Visa type
			const selectedOptionValue = await page.$eval('select[name="sel_staat"]', (selectElement) => {
				const htmlSelectElement = selectElement as HTMLSelectElement;
				const selectedOption = htmlSelectElement.options[htmlSelectElement.selectedIndex];
				return selectedOption.value;
			});

			// Wait for 1000ms
			await page.waitForTimeout(1000);

			await page.click(
				`label[for="SERVICEWAHL_DE3${selectedOptionValue}-0-${pendingBooking.visaType.slice(-1)}"]`,
				{ force: true }
			);

			// Visa Type
			await page.waitForTimeout(1000);
			const labels = await page.$$('div.level2 > label');

			if (pendingBooking.visaType.includes('-')) {
				for (const label of labels) {
					const forAttribute = await label.getProperty('htmlFor');
					const value = await forAttribute.jsonValue();
					if (
						value ===
						`SERVICEWAHL_DE_${selectedOptionValue}-0-${pendingBooking.visaType.slice(
							-1
						)}-${pendingBooking.visa.slice(-1)}`
					) {
						await label.click();
						break;
					}
				}

				await page.getByLabel(pendingBooking.visa.slice(0, -1)).click();

				await page.getByRole('button', { name: 'Weiter' }).click();
			}

			// Wait for 1000ms
			await page.waitForTimeout(1000);

			// Find the table element
			const tableElement = await page.$('table');
			await page.waitForSelector('table');
			// If the table element is not found, throw an error
			if (!tableElement) throw new Error('Cron: Table element not found');

			// Find the anchor link within the table
			const anchorLink = await tableElement.$('a');

			if (!anchorLink) throw new Error('Cron: Table element not found');
			// Click on the anchor link
			await anchorLink.click();

			// Find a select element dd_zeiten and select the first option
			await page.selectOption('select[name="dd_zeiten"]', { index: 0 });
			await page.getByRole('button', { name: 'Weiter' }).click();
			await page.waitForTimeout(3000);

			// Fill the input element with the name "antragsteller_vname"
			await page.fill('input[name="antragsteller_vname"]', pendingBooking.firstName);
			await page.fill('input[name="antragsteller_nname"]', pendingBooking.lastName);
			if (pendingBooking.currentVisa === 'nein')
				await page.selectOption('select[name="sel_aufenthaltserlaubnis"]', 'Nein');
			else {
				await page.selectOption('select[name="sel_aufenthaltserlaubnis"]', 'Ja');
				await page.fill('input[name="antragsteller_nrAufenthaltserlaubnis"]', '12345');
			}
			await page.fill('input[name="antragsteller_email"]', 'walterrjohny@gmail.com');
			await page.fill('input[name="antragsteller_gebDatum"]', '11.01.1995');
			await page.keyboard.press('Tab');
			await page.getByRole('button', { name: 'Weiter' }).click();
			await page.waitForTimeout(3000);
			await page.getByRole('button', { name: 'Termin buchen' }).click();

			// Update the status of the booking to "booked"
			await prisma.booking.update({
				where: {
					id: pendingBooking.id
				},
				data: {
					status: 'done'
				}
			});
		}
	} catch (error) {
		console.log(error);
	}

	console.log('End');
});

cronJob.start();
