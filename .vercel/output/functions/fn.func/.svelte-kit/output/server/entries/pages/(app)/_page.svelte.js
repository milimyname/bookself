import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component, e as escape, f as spread, g as escape_object, h as each, d as add_attribute, i as is_promise, n as noop } from "../../../chunks/index3.js";
import { s as superForm, g as goto } from "../../../chunks/index5.js";
import { p as page } from "../../../chunks/stores.js";
import { s as spring } from "../../../chunks/index4.js";
import { b as isBookingFormOpen, c as bookingDrawerSlide, I as Icon, i as icons, a as isUserFormOpen } from "../../../chunks/stores2.js";
import { b as bookingSchema } from "../../../chunks/zodSchema.js";
import { t as toast, T as Toaster } from "../../../chunks/Toaster.js";
import { S as Spinner } from "../../../chunks/Spinner.js";
import { U as User } from "../../../chunks/User.js";
const config = {
  de: {
    citizenship: [
      "*staatenlos",
      "*ungeklärt (Palästinenser und Kurden aus dem Libanon)",
      "*ungeklärt / Palästinenser aus Syrien (Familienname A – E)",
      "*ungeklärt / Palästinenser aus Syrien (Familienname F – Z)",
      "Afghanistan",
      "Ägypten",
      "Albanien",
      "Algerien",
      "Andorra",
      "Angola",
      "Antigua und Barbuda",
      "Äquatorialguinea",
      "Argentinien",
      "Armenien",
      "Aserbaidschan",
      "Äthiopien",
      "Australien",
      "Bahamas",
      "Bahrain",
      "Bangladesch",
      "Barbados",
      "Belarus",
      "Belize",
      "Benin",
      "Bhutan",
      "Bolivien",
      "Bosnien und Herzegowina",
      "Botsuana",
      "Brasilien",
      "britisches Überseegebiet in Afrika",
      "britisches Überseegebiet in Amerika",
      "britisches Überseegebiet in Asien",
      "britisches Überseegebiet in Australien",
      "britisches Überseegebiet in Europa",
      "Brunei Darussalam",
      "Burkina Faso",
      "Burundi",
      "Chile",
      "China",
      "Costa Rica",
      "Dänemark",
      "Deutschland",
      "Dominica",
      "Dominikanische Republik",
      "Dschibuti",
      "Ecuador",
      "El Salvador",
      "Eritrea",
      "Estland",
      "Fidschi",
      "Finnland",
      "Frankreich",
      "Gabun",
      "Gambia",
      "Georgien",
      "Ghana",
      "Grenada",
      "Griechenland",
      "Guatemala",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Honduras",
      "Indien",
      "Indonesien",
      "Irak",
      "Iran, Islamische Republik",
      "Israel",
      "Jamaika",
      "Japan",
      "Jordanien",
      "Kambodscha",
      "Kamerun",
      "Kanada",
      "Kap Verde",
      "Kasachstan",
      "Kenia",
      "Kirgisistan",
      "Kiribati",
      "Kolumbien",
      "Komoren",
      "Kongo",
      "Kongo, Demokratische Republik",
      "Kongo, Republik",
      "Kroatien",
      "Kuba",
      "Kuwait",
      "Laos, Demokratische Volksrepublik",
      "Lesotho",
      "Lettland",
      "Libanon",
      "Liberia",
      "Libyen",
      "Liechtenstein",
      "Litauen",
      "Luxemburg",
      "Madagaskar",
      "Malawi",
      "Malaysia",
      "Malediven",
      "Mali",
      "Malta",
      "Marokko",
      "Marshallinseln",
      "Mauretanien",
      "Mauritius",
      "Mexiko",
      "Mikronesien, Föderierte Staaten von",
      "Moldawien, Republik",
      "Monaco",
      "Mongolei",
      "Mosambik",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Neuseeland",
      "Nicaragua",
      "Niederlande",
      "Niger",
      "Nigeria",
      "Nordkorea",
      "Norwegen",
      "Oman",
      "Österreich",
      "Pakistan",
      "Palau",
      "Panama",
      "Papua-Neuguinea",
      "Paraguay",
      "Peru",
      "Philippinen",
      "Polen",
      "Portugal",
      "Ruanda",
      "Rumänien",
      "Russische Föderation",
      "Salomonen",
      "Sambia",
      "Samoa",
      "San Marino",
      "São Tomé und Príncipe",
      "Saudi-Arabien",
      "Schweden",
      "Schweiz",
      "Senegal",
      "Serbien und Montenegro",
      "Seychellen",
      "Sierra Leone",
      "Simbabwe",
      "Singapur",
      "Slowakei",
      "Slowenien",
      "Somalia",
      "Spanien",
      "Sri Lanka",
      "St. Kitts und Nevis",
      "St. Lucia",
      "St. Vincent und die Grenadinen",
      "Südafrika",
      "Sudan",
      "Südkorea",
      "Suriname",
      "Swasiland",
      "Syrien, Arabische Republik",
      "Tadschikistan",
      "Tansania, Vereinigte Republik",
      "Thailand",
      "Togo",
      "Tonga",
      "Trinidad und Tobago",
      "Tschad",
      "Tschechische Republik",
      "Tunesien",
      "Turkmenistan",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "Ungarn",
      "Uruguay",
      "Usbekistan",
      "Vanuatu",
      "Vatikanstadt",
      "Venezuela",
      "Vereinigte Arabische Emirate",
      "Vereinigte Staaten von Amerika",
      "Vietnam",
      "Zentralafrikanische Republik"
    ],
    applicants: [
      "eine Person",
      "zwei Personen",
      "drei Personen",
      "vier Personen",
      "fünf Personen",
      "sechs Personen",
      "sieben Personen",
      "acht Personen"
    ],
    visaType: [
      "Aufenthaltstitel - beantragen 1",
      "Aufenthaltstitel - verlängern 2",
      "Aufenthaltstitel in einen neuen Pass eintragen lassen 3",
      "Niederlassungserlaubnis beantragen 4"
      // 'Reiseausweis - Neuausstellung 5'
    ],
    visas: [
      {
        "Aufenthaltstitel - beantragen 1": [
          {
            "Studium oder Ausbildung": [
              "Aufenthaltserlaubnis für eine Berufsausbildung (§ 16a)3",
              "Aufenthaltserlaubnis für eine betriebliche Weiterbildung (§ 16a)3",
              "Aufenthaltserlaubnis zum Besuch eines Sprachkurses (§ 16f Abs. 1)3",
              "Aufenthaltserlaubnis zum Schulbesuch oder zur Teilnahme an einem Schüleraustausch (§ 16f)3",
              "Aufenthaltserlaubnis zum Studium (§ 16b)3",
              "Aufenthaltserlaubnis zur Anerkennung einer ausländischen Berufs-Qualifikation im Rahmen einer Qualifizierungsmaßnahme (§ 16d Abs. 1)3",
              "Aufenthaltserlaubnis zur Anerkennung einer ausländischen Berufs-Qualifikation in einem nicht reglementierten Beruf (§ 16d Abs. 3)3",
              "Aufenthaltserlaubnis zur Aufnahme eines Praktikums (§ 19c Abs. 1)3",
              "Aufenthaltserlaubnis zur Studienvorbereitung (§ 16b Abs. 1)3"
            ]
          },
          {
            Erwerbstätigkeit: [
              "Aufenthaltserlaubnis für die Teilnahme an einem Freiwilligendienst (§§ 19c oder 19e)1",
              "Aufenthaltserlaubnis für Fachkräfte mit akademischer Ausbildung (§ 18b Abs. 1)1",
              "Aufenthaltserlaubnis für Fachkräfte mit Berufsausbildung (§ 18a)1",
              "Aufenthaltserlaubnis für Fachkräfte zur Arbeitsplatzsuche - Erteilung (§ 20)1",
              "Aufenthaltserlaubnis für in anderen EU-Staaten langfristig Aufenthaltsberechtigte (§ 38a)1",
              "Aufenthaltserlaubnis für wissenschaftliche Mitarbeiter und Forscher (§ 18d)1",
              "Aufenthaltserlaubnis zur Aufnahme eines Praktikums (§ 19c Abs. 1)1",
              "Aufenthaltserlaubnis zur freiberuflichen Tätigkeit - Erteilung (§ 21 Abs. 5)1",
              "Aufenthaltserlaubnis zur selbstständigen Tätigkeit - Erteilung (§ 21)1",
              "Blaue Karte EU (§ 18b Abs. 2)1"
            ]
          },
          {
            "Familiäre Gründe": [
              "Aufenthaltserlaubnis für ein neugeborenes Kind - Erteilung (§ 33)4",
              "Aufenthaltserlaubnis für Ehepartner und Kinder von Fachkräften, Studierenden, Auszubildenden, Wissenschaftlern und Lehrkräften (§§ 29-32)4",
              "Aufenthaltserlaubnis für Ehepartner und Kinder von Inhabern einer Blauen Karte EU (§§ 29-32)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von ausländischen Familienangehörigen (§§ 29-34)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von deutschen Familienangehörigen (§ 28)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von subsidiär Schutzberechtigten (§ 36a)4"
            ]
          },
          {
            "Besondere Aufenthaltsrechte": [
              "Aufenthaltserlaubnis für in anderen EU-Staaten langfristig Aufenthaltsberechtigte (§ 38a)5"
            ]
          }
        ],
        "Aufenthaltstitel - verlängern 2": [
          {
            "Studium oder Ausbildung": [
              "Aufenthaltserlaubnis für eine Berufsausbildung (§ 16a)3",
              "Aufenthaltserlaubnis für eine betriebliche Weiterbildung (§ 16a)3",
              "Aufenthaltserlaubnis zum Besuch eines Sprachkurses (§ 16f Abs. 1)3",
              "Aufenthaltserlaubnis zum Schulbesuch oder zur Teilnahme an einem Schüleraustausch (§ 16f)3",
              "Aufenthaltserlaubnis zum Studium (§ 16b)3",
              "Aufenthaltserlaubnis zur Anerkennung einer ausländischen Berufs-Qualifikation im Rahmen einer Qualifizierungsmaßnahme (§ 16d Abs. 1)3",
              "Aufenthaltserlaubnis zur Anerkennung einer ausländischen Berufs-Qualifikation in einem nicht reglementierten Beruf (§ 16d Abs. 3)3",
              "Aufenthaltserlaubnis zur Aufnahme eines Praktikums (§ 19c Abs. 1)3",
              "Aufenthaltserlaubnis zur Studienvorbereitung (§ 16b Abs. 1)3"
            ]
          },
          {
            Erwerbstätigkeit: [
              "Aufenthaltserlaubnis für Fachkräfte mit akademischer Ausbildung (§ 18b Abs. 1)1",
              "Aufenthaltserlaubnis für Fachkräfte mit Berufsausbildung (§ 18a)1",
              "Aufenthaltserlaubnis für Fachkräfte zur Arbeitsplatzsuche - Erteilung (§ 20)1",
              "Aufenthaltserlaubnis für in anderen EU-Staaten langfristig Aufenthaltsberechtigte (§ 38a)1",
              "Aufenthaltserlaubnis für wissenschaftliche Mitarbeiter und Forscher (§ 18d)1",
              "Aufenthaltserlaubnis zur Aufnahme eines Praktikums (§ 19c Abs. 1)1",
              "Aufenthaltserlaubnis zur selbstständigen oder freiberuflichen Tätigkeit - Verlängerung (§ 21)1",
              "Blaue Karte EU (§ 18b Abs. 2)1"
            ]
          },
          {
            "Familiäre Gründe": [
              "Aufenthaltserlaubnis für Ehepartner und Kinder von Fachkräften, Studierenden, Auszubildenden, Wissenschaftlern und Lehrkräften (§§ 29-32)4",
              "Aufenthaltserlaubnis für Ehepartner und Kinder von Inhabern einer Blauen Karte EU (§§ 29-32)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von ausländischen Familienangehörigen (§§ 29-34)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von deutschen Familienangehörigen (§ 28)4",
              "Aufenthaltserlaubnis für Ehepartner, Eltern und Kinder von subsidiär Schutzberechtigten (§ 36a)4"
            ]
          },
          {
            "Humanitäre Gründe": [
              "Aufenthaltserlaubnis aus humanitären Gründen - Verlängerung (§§ 22 - 25)5",
              "Aufenthaltserlaubnis in Härtefällen - Verlängerung (§ 23a)5"
            ]
          },
          {
            "Besondere Aufenthaltsrechte": [
              "Aufenthaltserlaubnis für in anderen EU-Staaten langfristig Aufenthaltsberechtigte (§ 38a)6"
            ]
          }
        ],
        "Aufenthaltstitel in einen neuen Pass eintragen lassen 3": [
          {
            "Besondere Aufenthaltsrechte": [
              "Übertragen einer Aufenthaltserlaubnis auf einen neuen Pass1",
              "Übertragen einer Blauen Karte EU auf einen neuen Pass1",
              "Übertragen einer Niederlassungserlaubnis oder Erlaubnis zum Daueraufenthalt-EU auf einen neuen Pass1",
              "Übertragen eines Aufenthaltsdokument-GB auf einen neuen Pass1"
            ]
          }
        ],
        "Niederlassungserlaubnis beantragen 4": [
          {
            "Familiäre Gründe": [
              "Niederlassungserlaubnis für Familienangehörige von Deutschen (§ 28 Abs. 2)1",
              "Niederlassungserlaubnis für Kinder - Erteilung (§ 35)1"
            ]
          }
        ]
        // 'Reiseausweis - Neuausstellung 5': [
        // 	'Reiseausweis - Neuausstellung1',
        // ]
      }
    ]
  }
};
const BookingForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isBookingFormOpen, $$unsubscribe_isBookingFormOpen;
  let $errors, $$unsubscribe_errors;
  let $bookingDrawerSlide, $$unsubscribe_bookingDrawerSlide;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  $$unsubscribe_isBookingFormOpen = subscribe(isBookingFormOpen, (value) => $isBookingFormOpen = value);
  $$unsubscribe_bookingDrawerSlide = subscribe(bookingDrawerSlide, (value) => $bookingDrawerSlide = value);
  let { form1 } = $$props;
  let { user } = $$props;
  const { form, enhance, errors, constraints } = superForm(form1, {
    taintedMessage: null,
    validators: bookingSchema,
    onSubmit: () => {
      if ($errors._errors)
        return;
      set_store_value(isBookingFormOpen, $isBookingFormOpen = false, $isBookingFormOpen);
      toast.loading("Sending your booking request...");
    }
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  if (!user.emailVerified)
    toast.error("Please verify your email first");
  if ($$props.form1 === void 0 && $$bindings.form1 && form1 !== void 0)
    $$bindings.form1(form1);
  if ($$props.user === void 0 && $$bindings.user && user !== void 0)
    $$bindings.user(user);
  $$unsubscribe_isBookingFormOpen();
  $$unsubscribe_errors();
  $$unsubscribe_bookingDrawerSlide();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}

<form class="bookingDrawer absolute z-40 h-fit w-11/12 overflow-auto overflow-x-hidden scroll-smooth rounded-r-3xl bg-white md:fixed md:h-full md:w-2/3" style="${"transform: translateX(" + escape(-$bookingDrawerSlide, true) + "%)"}" method="POST" action="?/addBooking"><h2 class="mb-5 px-5 pt-28 text-3xl md:pl-28 md:pt-20">New Booking</h2>
	<div class=""><div class="relative flex flex-col gap-5 px-5 pr-10 md:pl-28"><fieldset class="flex flex-col gap-2"><label for="citizenship" class="font-medium">Citizenship</label>
				<select${spread(
    [
      { name: "citizenship" },
      { id: "citizenship" },
      { class: "w-full rounded-md" },
      escape_object($constraints.citizenship)
    ],
    {}
  )}>${each(config.de.citizenship, (citizenship) => {
    return `<option${add_attribute("value", citizenship, 0)}>${escape(citizenship)}</option>`;
  })}${$errors.citizenship ? `<p class="text-sm text-red-500">${escape($errors.citizenship)}</p>` : ``}</select></fieldset>

			<fieldset class="flex flex-col gap-2"><label for="applicants" class="font-medium">Amount of applicants</label>
				<select${spread(
    [
      { name: "applicants" },
      { id: "applicants" },
      { class: "rounded-md" },
      escape_object($constraints.applicants)
    ],
    {}
  )}>${each(config.de.applicants, (applicant) => {
    return `<option${add_attribute("value", applicant, 0)}>${escape(applicant)}</option>`;
  })}${$errors.applicants ? `<p class="text-sm text-red-500">${escape($errors.applicants)}</p>` : ``}</select></fieldset>
			<fieldset class="flex flex-col gap-2"><label for="familyMember" class="font-medium">Do you live in Berlin together with a family member (e.g. spouse, child)?</label>
				<select${spread(
    [
      { name: "familyMember" },
      { class: "rounded-md" },
      { id: "familyMember" },
      escape_object($constraints.familyMember)
    ],
    {}
  )}><option value="no">no</option><option value="yes">yes</option></select>
				${$errors.familyMember ? `<p class="text-sm text-red-500">${escape($errors.familyMember)}</p>` : ``}</fieldset>
			${$form.familyMember === "yes" ? `<fieldset class="flex flex-col gap-2"><label for="cizitenshipOfFamilyMember" class="font-medium">Citizenship of the family member?</label>
					<select${spread(
    [
      { name: "cizitenshipOfFamilyMember" },
      { id: "cizitenshipOfFamilyMember" },
      { class: "w-full rounded-md" },
      escape_object($constraints.cizitenshipOfFamilyMember)
    ],
    {}
  )}>${each(config.de.citizenship, (citizenship) => {
    return `<option${add_attribute("value", citizenship, 0)}>${escape(citizenship)}</option>`;
  })}</select>
					${$errors.cizitenshipOfFamilyMember ? `<p class="text-sm text-red-500">${escape($errors.cizitenshipOfFamilyMember)}</p>` : ``}</fieldset>` : ``}
			<fieldset class="mb-auto flex flex-col gap-2"><label for="visaType" class="font-medium">Visa Type</label>
				<select${spread(
    [
      { name: "visaType" },
      { id: "visaType" },
      { class: "w-full rounded-md" },
      escape_object($constraints.visaType)
    ],
    {}
  )}>${each(config.de.visaType, (visaType) => {
    return `<option${add_attribute("value", visaType, 0)}>${escape(visaType.slice(0, -2))}</option>`;
  })}</select>
				${$errors.visaType ? `<p class="text-sm text-red-500">${escape($errors.visaType)}</p>` : ``}</fieldset>
			${$form.visaType ? `<fieldset class="flex flex-col gap-2"><label for="visa" class="font-medium">Visas</label>
					<select${spread(
    [
      { name: "visa" },
      { id: "visa" },
      { class: "w-full rounded-md" },
      escape_object($constraints.visa)
    ],
    {}
  )}>${each(config.de.visas, (visa) => {
    return `${each(visa[$form.visaType], (service) => {
      let key = Object.keys(service);
      return `
								<optgroup${add_attribute("label", key[0], 0)}>${each(service[key[0]], (option) => {
        return `<option${add_attribute("value", option, 0)}>${escape(option.slice(0, -1))}</option>`;
      })}</optgroup>`;
    })}`;
  })}${$errors.visa ? `<p class="text-sm text-red-500">${escape($errors.visa)}</p>` : ``}</select></fieldset>` : ``}
			<div class="h-[1px] w-full bg-neutral-200"></div>
			<fieldset class="flex flex-col gap-2"><label for="firstName" class="font-medium">First Name</label>
				<input${spread(
    [
      { type: "text" },
      { name: "firstName" },
      { id: "firstName" },
      { class: "rounded-md" },
      escape_object($constraints.firstName)
    ],
    {}
  )}${add_attribute("value", $form.firstName, 0)}>
				${$errors.firstName ? `<p class="text-sm text-red-500">${escape($errors.firstName)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="lastName" class="font-medium">Last Name</label>
				<input${spread(
    [
      { type: "text" },
      { name: "lastName" },
      { id: "lastName" },
      { class: "rounded-md" },
      escape_object($constraints.lastName)
    ],
    {}
  )}${add_attribute("value", $form.lastName, 0)}>
				${$errors.lastName ? `<p class="text-sm text-red-500">${escape($errors.lastName)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="email" class="font-medium">Email</label>
				<input${spread(
    [
      { type: "email" },
      { name: "email" },
      { id: "email" },
      { class: "rounded-md" },
      escape_object($constraints.email)
    ],
    {}
  )}${add_attribute("value", $form.email, 0)}>
				${$errors.email ? `<p class="text-sm text-red-500">${escape($errors.email)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="birthDate" class="font-medium">Birth Date</label>
				<input${spread(
    [
      { type: "date" },
      { name: "birthDate" },
      { id: "birthDate" },
      { class: "rounded-md" },
      escape_object($constraints.birthDate)
    ],
    {}
  )}${add_attribute("value", $form.birthDate, 0)}>
				${$errors.birthDate ? `<p class="text-sm text-red-500">${escape($errors.birthDate)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="currentVisa" class="font-medium">Current Visa</label>
				<select${spread(
    [
      { name: "currentVisa" },
      { class: "rounded-md" },
      { id: "currentVisa" },
      escape_object($constraints.currentVisa)
    ],
    {}
  )}><option value="no">no</option><option value="yes">yes</option></select>
				${$errors.currentVisa ? `<p class="text-sm text-red-500">${escape($errors.currentVisa)}</p>` : ``}</fieldset>
			${$form.currentVisa === "yes" ? `<fieldset class="flex flex-col gap-2"><label for="numberOfCurrentVisa" class="font-medium">Number of the current visa </label>
					<input${spread(
    [
      { type: "text" },
      { name: "numberOfCurrentVisa" },
      { id: "numberOfCurrentVisa" },
      { class: "rounded-md" },
      escape_object($constraints.numberOfCurrentVisa)
    ],
    {}
  )}${add_attribute("value", $form.numberOfCurrentVisa, 0)}>
					${$errors.numberOfCurrentVisa ? `<p class="text-sm text-red-500">${escape($errors.numberOfCurrentVisa)}</p>` : ``}</fieldset>` : ``}</div>
		<div class="sticky bottom-0 z-20 mt-10 flex w-full justify-between rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"><button type="button" class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100">Cancel</button>
			<button type="submit" class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900">Book</button></div></div></form>`;
});
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
const Booking = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isBookingFormOpen, $$unsubscribe_isBookingFormOpen;
  $$unsubscribe_isBookingFormOpen = subscribe(isBookingFormOpen, (value) => $isBookingFormOpen = value);
  let { bookingId } = $$props;
  let { status } = $$props;
  let { firstName } = $$props;
  let { lastName } = $$props;
  let { createdAt } = $$props;
  let { visaType } = $$props;
  const colors = {
    bgLightColor: "bg-light-draft",
    bgColor: "draft",
    borderColor: "draft",
    textColor: "draft"
  };
  if ($$props.bookingId === void 0 && $$bindings.bookingId && bookingId !== void 0)
    $$bindings.bookingId(bookingId);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.firstName === void 0 && $$bindings.firstName && firstName !== void 0)
    $$bindings.firstName(firstName);
  if ($$props.lastName === void 0 && $$bindings.lastName && lastName !== void 0)
    $$bindings.lastName(lastName);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.visaType === void 0 && $$bindings.visaType && visaType !== void 0)
    $$bindings.visaType(visaType);
  {
    switch (status) {
      case "draft":
        colors.bgLightColor = "bg-light-draft";
        colors.bgColor = "bg-draft";
        colors.textColor = "text-draft";
        colors.borderColor = "hover:border-draft";
        break;
      case "pending":
        colors.bgLightColor = "bg-light-pending";
        colors.bgColor = "bg-pending";
        colors.textColor = "text-pending";
        colors.borderColor = "hover:border-pending";
        break;
      case "done":
        colors.bgLightColor = "bg-light-done";
        colors.bgColor = "bg-done";
        colors.textColor = "text-done";
        colors.borderColor = "hover:border-done";
        break;
    }
  }
  $$unsubscribe_isBookingFormOpen();
  return `<a${add_attribute("href", `/booking/${bookingId}`, 0)} class="${"flex items-center justify-between justify-items-end rounded-lg border border-gray-100 bg-white py-5 pl-8 pr-4 shadow-custom-lg transition-colors duration-300 md:grid md:grid-cols-[150px_minmax(100px,_1fr)_150px_minmax(100px,_1fr)] " + escape(colors.borderColor, true) + " " + escape($isBookingFormOpen && "pointer-events-none", true)}"><h3 class="justify-self-start text-sm text-slate-500">${escape(firstName)} ${escape(lastName)}</h3>
	<h3 class="hidden justify-end text-sm font-medium text-slate-500 md:block">${escape(visaType)}</h3>
	<h3 class="hidden text-sm text-slate-500 md:block">${escape(formatDate(createdAt))}</h3>
	<div class="flex items-center justify-end gap-2"><div class="${"flex w-28 items-center justify-center gap-2 rounded-md px-4 py-2 " + escape(colors.bgLightColor, true)}"><div class="relative flex h-3 w-3 items-center">${status === "pending" ? `<span class="${"absolute inline-flex h-2 w-2 animate-ping rounded-full " + escape(colors.bgColor, true)}"></span>` : ``}
				<span class="${"relative inline-flex h-2 w-2 rounded-full " + escape(colors.bgColor, true)}"></span></div>
			<span class="${"font-medium " + escape(colors.textColor, true)}">${escape(status[0].toUpperCase() + status.slice(1))}</span></div>
		${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.chevronRight,
      className: "w-5 h-5 fill-[#1A120B]"
    },
    {},
    {}
  )}</div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isBookingFormOpen, $$unsubscribe_isBookingFormOpen;
  let $springValue, $$unsubscribe_springValue;
  let $bookingDrawerSlide, $$unsubscribe_bookingDrawerSlide;
  let $page, $$unsubscribe_page;
  let $isUserFormOpen, $$unsubscribe_isUserFormOpen;
  $$unsubscribe_isBookingFormOpen = subscribe(isBookingFormOpen, (value) => $isBookingFormOpen = value);
  $$unsubscribe_bookingDrawerSlide = subscribe(bookingDrawerSlide, (value) => $bookingDrawerSlide = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isUserFormOpen = subscribe(isUserFormOpen, (value) => $isUserFormOpen = value);
  if (!$page.data.session)
    goto("/login");
  let { data } = $$props;
  let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });
  $$unsubscribe_springValue = subscribe(springValue, (value) => $springValue = value);
  let amountOfBookings = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  set_store_value(bookingDrawerSlide, $bookingDrawerSlide = $springValue, $bookingDrawerSlide);
  amountOfBookings = data.bookings.bookings.length;
  {
    if (!$isBookingFormOpen)
      springValue.set(100, { soft: true });
  }
  $$unsubscribe_isBookingFormOpen();
  $$unsubscribe_springValue();
  $$unsubscribe_bookingDrawerSlide();
  $$unsubscribe_page();
  $$unsubscribe_isUserFormOpen();
  return `

${$isBookingFormOpen || $isUserFormOpen ? `<div class="fixed z-20 h-full w-full bg-black opacity-50"></div>` : ``}

${validate_component(BookingForm, "BookingForm").$$render($$result, { form1: data.bookingForm, user: data.user }, {}, {})}
${validate_component(User, "User").$$render(
    $$result,
    {
      form2: data.userForm,
      session: data.session
    },
    {},
    {}
  )}

<main class="${escape(
    $isBookingFormOpen || $isUserFormOpen ? "blur" : "blur-0",
    true
  ) + " flex flex-1 flex-col items-center gap-10 py-8 transition-all md:py-20"}"><header class="flex w-full items-center justify-between gap-5 px-4 md:px-10 xl:w-7/12 xl:px-0"><div><h1 class="mb-2 text-4xl font-bold">Bookings</h1>
			<p>There are ${escape(amountOfBookings)} total bookings</p></div>
		<div><button${add_attribute("class", ` newBookingButton flex cursor-pointer items-center gap-2 rounded-xl bg-black px-2 py-2 text-white transition-colors hover:bg-slate-800 md:rounded-full md:pl-2 md:pr-4 ${$isBookingFormOpen && "pointer-events-none"}`, 0)}><div class="rounded-full bg-white p-2">${validate_component(Icon, "Icon").$$render($$result, { src: icons.plus, className: "w-5 h-5" }, {}, {})}</div>
				<span class="hidden font-medium md:block">New Booking</span></button></div></header>
	<section class="flex w-full flex-col gap-2 scroll-auto px-4 md:px-10 xl:w-7/12 xl:px-0">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
			${validate_component(Spinner, "Spinner").$$render($$result, { errors: data.bookings }, {}, {})}
		`;
    }
    return function(data2) {
      return `
			${each(data2.bookings, (booking) => {
        return `${validate_component(Booking, "Booking").$$render(
          $$result,
          {
            bookingId: booking.id,
            status: booking.status,
            lastName: booking.lastName,
            firstName: booking.firstName,
            createdAt: booking.createdAt,
            visaType: booking.visaType
          },
          {},
          {}
        )}`;
      })}
		`;
    }(__value);
  }(data.bookings)}</section></main>`;
});
export {
  Page as default
};
