import { c as create_ssr_component, a as subscribe, v as validate_component, f as spread, g as escape_object, d as add_attribute, e as escape } from "../../../../../chunks/index3.js";
import { s as superForm, g as goto } from "../../../../../chunks/index5.js";
import { r as resetSchema } from "../../../../../chunks/zodSchema.js";
import { i as icons, l as loading, I as Icon } from "../../../../../chunks/stores2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { T as Toaster } from "../../../../../chunks/Toaster.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $errors, $$unsubscribe_errors;
  let $$unsubscribe_loading;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  if ($page.data.session)
    goto("/");
  let { data } = $$props;
  const { form, enhance, errors, constraints } = superForm(data.form, {
    taintedMessage: null,
    validators: resetSchema
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  $$unsubscribe_errors();
  $$unsubscribe_loading();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}

<main class="flex w-full lg:h-screen lg:overflow-hidden"><div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block"></div>
	<section class="flex h-screen w-full flex-col items-center justify-center gap-7 px-5 md:gap-10 md:px-10 lg:h-full lg:w-1/2 lg:px-0"><div class="flex w-full items-center gap-5 md:w-2/3"><a href="/login" class="cursor-pointer">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.chevronRight,
      className: "w-5 h-5 rotate-180"
    },
    {},
    {}
  )}</a>
			<div class="flex flex-col gap-2 text-left"><h1 class="text-3xl font-bold">Reset password</h1>
				<p class="text-gray-500">Let&#39;s create a new one</p></div></div>
		<form class="flex w-full flex-col gap-7 md:w-2/3" method="POST"><fieldset class="flex flex-col gap-2"><label for="password">Password</label>
				<input${spread(
    [
      { type: "password" },
      { name: "password" },
      { class: "rounded-md" },
      escape_object($constraints.password)
    ],
    {}
  )}${add_attribute("value", $form.password, 0)}>
				${$errors.password ? `<p class="text-sm text-red-500">${escape($errors.password)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="confirmPassword">Repeat password</label>
				<input${spread(
    [
      { type: "password" },
      { name: "confirmPassword" },
      { class: "rounded-md" },
      escape_object($constraints.confirmPassword)
    ],
    {}
  )}${add_attribute("value", $form.confirmPassword, 0)}>
				${$errors.confirmPassword ? `<p class="text-sm text-red-500">${escape($errors.confirmPassword)}</p>` : ``}</fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white">Create</button></form></section></main>`;
});
export {
  Page as default
};
