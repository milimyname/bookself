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

	// Find a button called "Termin buchen" and click it
	await page.getByRole('link', { name: 'Termin buchen' }).click();

	// Find a checkbox named gelesen and check it
	await page.getByRole('checkbox', { name: 'gelesen' }).check();

	// Find a button called "Weiter" and click it
	await page.getByRole('button', { name: 'Weiter' }).click();

	// Wait for 3000ms
	await page.waitForTimeout(5000);

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

	/* ID main reasons
	 * SERVICEWAHL_DE_332-0-1-3 - Studium oder Ausbildung
	 * SERVICEWAHL_DE_332-0-1-1 - Erwerbstätigkeit
	 * SERVICEWAHL_DE_332-0-1-4 - Familiäre Gründe
	 * SERVICEWAHL_DE_332-0-1-6 - Besondere Aufenthaltsrechte
	 */

	await page.waitForTimeout(1000);

	const services = await page.$$('div.level2 > label');
	for (const service of services) {
		if (!service.serviceForAttr) continue;
		const serviceForAttr = await service.getProperty('htmlFor');
		const serviceFor = await serviceForAttr.jsonValue();
		await page.click(`label[for="${serviceFor}"]`, { force: true });
		await page.waitForTimeout(3000);

		const options = await page.$$('div.level3 > label');
		await Promise.all(
			options.map(async (option) => {
				if (!option) return;
				const optionForAttr = await option.getProperty('htmlFor');
				const optionFor = await optionForAttr.jsonValue();
				await page.click(`label[for="${optionFor}"]`, { force: true });
				await page.getByRole('button', { name: 'Weiter' }).click();
				await page.waitForTimeout(3000);
			})
		);
		await page.waitForTimeout(3000);
	}

	// const nestedLabels = await page.$$('div.level2 > label');

	// left arrow ui-datepicker-prev ui-corner-all
	// right arrow ui-datepicker-next ui-corner-all

	console.log('Choose date');

	await page.waitForTimeout(3000);

	const tables = await page.$$('table');
	console.log(tables);
	const tablesWithAnchors = await Promise.all(
		tables.map(async (table) => {
			const anchors = await table.$$eval('a', (anchors) => anchors.map((anchor) => anchor.href));
			return anchors;
		})
	);

	console.log(tablesWithAnchors);

	// for (const anchor of tds) {
	// 	console.log(anchor);
	// 	const href = await anchor.getProperty('href');
	// 	console.log(await href.jsonValue());
	// }
	// await page.waitForTimeout(2000);

	// await page.selectOption('select[name="dd_zeiten"]', '07:30');
	// await page.getByRole('button', { name: 'Weiter' }).click();
	// await page.waitForTimeout(3000);

	/*
	 * Specific reasons
	 * SERVICEWAHL_DE332-0-1-3-305244 - Aufenthaltserlaubnis zum Studium (§ 16b)
	 */
	// await page.click(`label[for="SERVICEWAHL_DE${selectedOptionValue}-0-1-3-328338"]`, {
	// 	force: true
	// });

	// Find a button called "Weiter" and click it
	// await page.getByRole('button', { name: 'Weiter' }).click();

	// Wait for the page to load
	// await page.waitForLoadState('networkidle');
	// await page.waitForSelector('li.errorMessage');
	// if (await page.isVisible('li.errorMessage'))
	// 	// Close the browser
	// 	await browser.close();

	// console.log(await page.isVisible('li.errorMessage'));

	return {
		status: 200
	};
}) satisfies PageServerLoad;
