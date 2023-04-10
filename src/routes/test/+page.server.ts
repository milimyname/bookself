import playwright from 'playwright';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	// Start
	// const start = false;
	const start = true;

	if (!start) return;
	// Open a browser
	const browser = await playwright.firefox.launch({
		headless: false
	});
	const page = await browser.newPage({
		bypassCSP: true
	});
	await page.goto('https://otv.verwalt-berlin.de/ams/TerminBuchen');
	// await page.goto(
	// 	'https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng/c7370d8c-25a1-4df1-9cb8-84f12db1b220?dswid=6185&dsrid=692&st=3&v=1680396726421'
	// );

	// Find a button called "Termin buchen" and click it
	await page.getByRole('link', { name: 'Termin buchen' }).click();

	// Find a checkbox named gelesen and check it
	await page.getByRole('checkbox', { name: 'gelesen' }).check();

	// Find a button called "Weiter" and click it
	await page.getByRole('button', { name: 'Weiter' }).click();

	// Wait for 3000ms
	await page.waitForTimeout(3000);

	// Find a select element sel_staat and select the option "Chile"
	await page.selectOption('select[name="sel_staat"]', 'Chile');

	// Find a select element personenAnzahl_normal and select the option "Chile"
	await page.selectOption('select[name="personenAnzahl_normal"]', 'eine Person');

	// Find a select element lebnBrMitFmly and select the option "nein"
	await page.selectOption('select[name="lebnBrMitFmly"]', 'nein');

	// Find a select element sel_staat and select the option "999-1-1"
	const selectedOptionValue = await page.$eval('select[name="sel_staat"]', (selectElement) => {
		const htmlSelectElement = selectElement as HTMLSelectElement;
		const selectedOption = htmlSelectElement.options[htmlSelectElement.selectedIndex];
		return selectedOption.value;
	});

	// Wait for 1000ms
	await page.waitForTimeout(1000);

	// ID services
	await page.click(`label[for="SERVICEWAHL_DE3${selectedOptionValue}-0-1"]`, { force: true });

	//  ID main reasons
	//   SERVICEWAHL_DE_332-0-1-3 - Studium oder Ausbildung
	//   SERVICEWAHL_DE_332-0-1-1 - Erwerbstätigkeit
	//   SERVICEWAHL_DE_332-0-1-4 - Familiäre Gründe
	//   SERVICEWAHL_DE_332-0-1-6 - Besondere Aufenthaltsrechte

	console.log('Start');
	await page.waitForTimeout(1000);
	const level2Labels = await page.$$('div.level2 > label');
	await Promise.all(
		level2Labels.map(async (level2Label) => {
			const level2LabelForAttr = await level2Label.getProperty('htmlFor');
			const level2LabelFor = await level2LabelForAttr.jsonValue();
			try {
				await page.waitForSelector(`label[for="${level2LabelFor}"]`, { timeout: 5000 });
				await page.click(`label[for="${level2LabelFor}"]`, { force: true });
				await page.waitForTimeout(2000);

				const level3Labels = await page.$$('div.level3 > label');
				await Promise.all(
					level3Labels.map(async (level3Label) => {
						const level3LabelForAttr = await level3Label.getProperty('htmlFor');
						const level3LabelFor = await level3LabelForAttr.jsonValue();
						try {
							await page.waitForSelector(`label[for="${level3LabelFor}"]`, { timeout: 5000 });
							await page.click(`label[for="${level3LabelFor}"]`, { force: true });
							await page.getByRole('button', { name: 'Weiter' }).click();
							await page.waitForTimeout(3000);
						} catch (error) {
							console.error(`Error clicking label with for attribute ${level3LabelFor}: ${error}`);
						}
					})
				);
				await page.waitForTimeout(2000);
			} catch (error) {
				console.error(`Error clicking label with for attribute ${level2LabelFor}: ${error}`);
			}
		})
	);
	console.log('Table');

	// Find the table element
	const tableElement = await page.$('table');
	await page.waitForSelector('table');
	// If the table element is not found, throw an error
	if (!tableElement) throw new Error('Table element not found');

	// Find the anchor link within the table
	const anchorLink = await tableElement.$('a');

	if (!anchorLink) throw new Error('Table element not found');
	// Click on the anchor link
	await anchorLink.click();

	// Find a select element dd_zeiten and select the first option
	await page.selectOption('select[name="dd_zeiten"]', { index: 0 });
	await page.getByRole('button', { name: 'Weiter' }).click();
	await page.waitForTimeout(3000);

	// Fill the input element with the name "antragsteller_vname"
	await page.fill('input[name="antragsteller_vname"]', 'Johny');
	await page.fill('input[name="antragsteller_nname"]', 'Walter');
	await page.selectOption('select[name="sel_aufenthaltserlaubnis"]', 'Nein');
	await page.fill('input[name="antragsteller_email"]', 'walterrjohny@gmail.com');
	await page.fill('input[name="antragsteller_gebDatum"]', '11.01.1995');
	await page.keyboard.press('Tab');
	// await page.fill('input[name="sel_aufenthaltserlaubnis"]', 'Ja');
	// await page.fill('input[name="antragsteller_nrAufenthaltserlaubnis"]', '12345');
	await page.getByRole('button', { name: 'Weiter' }).click();
	await page.waitForTimeout(3000);

	await page.getByRole('button', { name: 'Termin buchen' }).click();

	return {
		status: 200
	};
}) satisfies PageServerLoad;
