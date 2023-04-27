import { c as create_ssr_component, a as subscribe, v as validate_component, f as spread, g as escape_object, d as add_attribute, e as escape } from "../../../../chunks/index3.js";
import { p as page } from "../../../../chunks/stores.js";
import { i as icons, l as loading, I as Icon } from "../../../../chunks/stores2.js";
import { s as superForm, g as goto } from "../../../../chunks/index5.js";
import { l as loginSchema } from "../../../../chunks/zodSchema.js";
import { S as Spinner } from "../../../../chunks/Spinner.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_loading;
  let $page, $$unsubscribe_page;
  let $errors, $$unsubscribe_errors;
  let $constraints, $$unsubscribe_constraints;
  let $form, $$unsubscribe_form;
  $$unsubscribe_loading = subscribe(loading, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  if ($page.data.session)
    goto("/");
  let { data } = $$props;
  const { form, enhance, errors, constraints } = superForm(data.form, {
    taintedMessage: null,
    validators: loginSchema
  });
  $$unsubscribe_form = subscribe(form, (value) => $form = value);
  $$unsubscribe_errors = subscribe(errors, (value) => $errors = value);
  $$unsubscribe_constraints = subscribe(constraints, (value) => $constraints = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_loading();
  $$unsubscribe_page();
  $$unsubscribe_errors();
  $$unsubscribe_constraints();
  $$unsubscribe_form();
  return `${validate_component(Spinner, "Spinner").$$render($$result, { errors: $errors }, {}, {})}

<main class="flex w-full lg:h-screen lg:overflow-hidden"><div class="hidden w-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 lg:block"></div>
	<section class="flex h-screen w-full flex-col items-center justify-center gap-7 px-5 md:gap-10 md:px-10 lg:h-full lg:w-1/2 lg:px-0"><div class="flex w-full flex-col gap-5 md:w-2/3 lg:gap-10"><div class="flex flex-col gap-2 text-left"><h1 class="text-3xl font-bold">Welcome back.</h1>
				<p class="text-gray-500">Log in to access your account</p></div>
			<div class="flex flex-col justify-between gap-5 md:flex-row"><button class="group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.google,
      className: "h-7 w-7 group-hover:fill-white"
    },
    {},
    {}
  )}
					<span class="group-hover:text-white">Continue with Google </span></button>
				<button class="group flex flex-1 justify-center gap-2 rounded-md border p-4 transition-all duration-500 hover:border-white hover:bg-black">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.github,
      className: "h-7 w-7 group-hover:fill-white"
    },
    {},
    {}
  )}
					<span class="group-hover:text-white">Continue with Github </span></button></div>
			<div class="flex items-center gap-5"><div class="h-[1px] w-full bg-neutral-200"></div>
				<span>or</span>
				<div class="h-[1px] w-full bg-neutral-200"></div></div></div>
		<form class="flex w-full flex-col gap-7 md:w-2/3" method="POST"><fieldset class="flex flex-col gap-2"><label for="email">Email</label>
				<input${spread(
    [
      { type: "text" },
      { name: "email" },
      { class: "rounded-md" },
      escape_object($constraints.email)
    ],
    {}
  )}${add_attribute("value", $form.email, 0)}>
				${$errors.email ? `<p class="text-sm text-red-500">${escape($errors.email)}</p>` : ``}</fieldset>
			<fieldset class="flex flex-col gap-2"><label for="password">Password</label>
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
			<fieldset class="flex flex-col gap-2"><span>Don&#39;t have an account yet? <a href="/signup" class="font-semibold underline">Sing up</a></span>
				<a href="/reset" class="underline">Forgot password?</a></fieldset>
			<button type="submit" class="w-full rounded-md bg-black p-4 text-white">Log in</button></form></section></main>`;
});
export {
  Page as default
};
