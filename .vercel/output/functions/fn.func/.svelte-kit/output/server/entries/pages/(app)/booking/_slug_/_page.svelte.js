import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component, e as escape } from "../../../../../chunks/index3.js";
import { g as goto } from "../../../../../chunks/index5.js";
import { p as page } from "../../../../../chunks/stores.js";
import { s as spring } from "../../../../../chunks/index4.js";
import { i as icons, c as bookingDrawerSlide, a as isUserFormOpen, I as Icon } from "../../../../../chunks/stores2.js";
import { U as User } from "../../../../../chunks/User.js";
import { T as Toaster } from "../../../../../chunks/Toaster.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $springValue, $$unsubscribe_springValue;
  let $bookingDrawerSlide, $$unsubscribe_bookingDrawerSlide;
  let $page, $$unsubscribe_page;
  let $isUserFormOpen, $$unsubscribe_isUserFormOpen;
  $$unsubscribe_bookingDrawerSlide = subscribe(bookingDrawerSlide, (value) => $bookingDrawerSlide = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isUserFormOpen = subscribe(isUserFormOpen, (value) => $isUserFormOpen = value);
  if (!$page.data.session)
    goto("/login");
  let { data } = $$props;
  let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });
  $$unsubscribe_springValue = subscribe(springValue, (value) => $springValue = value);
  const colors = {
    bgLightColor: "bg-light-draft",
    bgColor: "draft",
    borderColor: "draft",
    textColor: "draft"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  set_store_value(bookingDrawerSlide, $bookingDrawerSlide = $springValue, $bookingDrawerSlide);
  {
    switch (data.booking?.status) {
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
  $$unsubscribe_springValue();
  $$unsubscribe_bookingDrawerSlide();
  $$unsubscribe_page();
  $$unsubscribe_isUserFormOpen();
  return `

${$isUserFormOpen ? `<div class="fixed z-20 h-full w-full bg-black opacity-50"></div>` : ``}

${validate_component(User, "User").$$render(
    $$result,
    {
      session: data.session,
      form2: data.userForm
    },
    {},
    {}
  )}
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}

<main class="${escape($isUserFormOpen ? "blur" : "blur-0", true) + " flex w-full flex-1 flex-col items-center gap-5 px-4 py-8 transition-all md:px-10 md:py-20 xl:w-7/12 xl:px-0"}"><header class="flex w-full flex-col justify-between gap-5 xl:w-7/12 xl:px-0"><a class="group flex items-center gap-3" href="/">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.chevronRight,
      className: "h-6 w-6 rotate-180 group-hover:-translate-x-1 transition-transform"
    },
    {},
    {}
  )}
			<span class="text-sm font-semibold">Go Back</span></a>

		<div class="flex justify-between rounded-md border border-gray-100 bg-white p-5 shadow-custom-lg"><div class="flex items-center gap-4"><h4 class="text-gray-500">Status</h4>
				<div class="${"flex w-28 items-center justify-center gap-2 rounded-md px-4 py-2 " + escape(colors.bgLightColor, true)}"><div class="relative flex h-3 w-3 items-center">${data.booking?.status === "pending" ? `<span class="${"absolute inline-flex h-2 w-2 animate-ping rounded-full " + escape(colors.bgColor, true)}"></span>` : ``}
						<span class="${"relative inline-flex h-2 w-2 rounded-full " + escape(colors.bgColor, true)}"></span></div>
					<span class="${"font-medium " + escape(colors.textColor, true)}">${escape(data.booking?.status[0].toUpperCase() + data.booking?.status.slice(1))}</span></div></div>
			${data.booking?.status === "draft" ? `<button class="rounded-md bg-delete px-4 py-2 text-white transition-colors hover:bg-red-600">Delete
				</button>` : ``}</div></header>
	<section class="grid w-full justify-between gap-5 rounded-md border border-gray-100 bg-white p-5 py-10 shadow-custom-lg drop-shadow-sm md:auto-cols-fr md:auto-rows-max md:px-14 md:py-10 xl:w-7/12"><h2 class="col-span-2 md:col-span-3"><span class="text-xl font-semibold">#${escape(data.booking?.id.slice(14, -1))}</span></h2>
		<div><h4 class="text-gray-500">First Name</h4>
			<span class="font-medium">${escape(data.booking?.firstName)}</span></div>
		<div><h4 class="text-gray-500">Last Name</h4>
			<span class="font-medium">${escape(data.booking?.lastName)}</span></div>
		<div><h4 class="text-gray-500">Birth Date</h4>
			<span class="font-medium">${escape(data.booking?.birthDate)}</span></div>
		<div><h4 class="text-gray-500">Email</h4>
			<span class="break-all font-medium">${escape(data.booking?.email)}</span></div>
		<div><h4 class="text-gray-500">Citizenship</h4>
			<span class="break-all font-medium">${escape(data.booking?.citizenship)}</span></div>
		<div><h4 class="text-gray-500">Applicants</h4>
			<span class="font-medium">${escape(data.booking?.applicants)}</span></div>
		<div><h4 class="text-gray-500">Visa Type</h4>
			<span class="break-all font-medium">${escape(data.booking?.visaType.slice(0, -2))}</span></div>
		<div><h4 class="text-gray-500">Visa</h4>
			<span class="break-all font-medium">${escape(data.booking?.visa.slice(0, -2))}</span></div>
		<div><h4 class="text-gray-500">Family Member</h4>
			<span class="font-medium">${escape(data.booking?.familyMember)}</span></div>
		${data.booking?.cizitenshipOfFamilyMember ? `<div><h4 class="text-gray-500">Citizenship of Family Member</h4>
				<span class="font-medium">${escape(data.booking?.cizitenshipOfFamilyMember)}</span></div>` : ``}
		<div><h4 class="text-gray-500">Current Visa</h4>
			<span class="font-medium">${escape(data.booking?.currentVisa)}</span></div>
		${data.booking?.numberOfCurrentVisa ? `<div><h4 class="text-gray-500">Number of current visa</h4>
				<span class="font-medium">${escape(data.booking?.numberOfCurrentVisa)}</span></div>` : ``}</section></main>`;
});
export {
  Page as default
};
