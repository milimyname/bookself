import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component, e as escape, f as spread, g as escape_object, d as add_attribute } from "./index3.js";
import { s as superForm } from "./index5.js";
import { a as isUserFormOpen, u as userDrawerSlide } from "./stores2.js";
import { createClient } from "@supabase/supabase-js";
import { createTRPCClient } from "trpc-sveltekit";
import { p as page } from "./stores.js";
import { t as toast, T as Toaster } from "./Toaster.js";
const PUBLIC_SUPABASE_URL = "https://rhfsanwkrrebgmkrptxk.supabase.co";
const PUBLIC_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZnNhbndrcnJlYmdta3JwdHhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk4NzIxMTUsImV4cCI6MTk5NTQ0ODExNX0.Y73IG1KxOrwo6AM7XU02kBpduT0omXKyQ6igFSt4ikU";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
let browserClient;
function trpc(init) {
  const isBrowser = typeof window !== "undefined";
  if (isBrowser && browserClient)
    return browserClient;
  const client = createTRPCClient({
    init
  });
  if (isBrowser)
    browserClient = client;
  return client;
}
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userForm, $$unsubscribe_userForm;
  let $page, $$unsubscribe_page;
  let $isUserFormOpen, $$unsubscribe_isUserFormOpen;
  let $userDrawerSlide, $$unsubscribe_userDrawerSlide;
  let $userFormConstraints, $$unsubscribe_userFormConstraints;
  let $userFormErrors, $$unsubscribe_userFormErrors;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_isUserFormOpen = subscribe(isUserFormOpen, (value) => $isUserFormOpen = value);
  $$unsubscribe_userDrawerSlide = subscribe(userDrawerSlide, (value) => $userDrawerSlide = value);
  let { form2 } = $$props;
  let { session } = $$props;
  const { form: userForm, errors: userFormErrors, enhance: userFormEnhance, constraints: userFormConstraints } = superForm(form2, {
    taintedMessage: null,
    onSubmit: async ({ form }) => {
      try {
        set_store_value(isUserFormOpen, $isUserFormOpen = false, $isUserFormOpen);
        const formData = new FormData(form);
        const image = formData.get("image");
        if (image.size > 0) {
          const { data: existingImage } = await supabase.storage.from("mili-bookself").list("public", {
            filter: (file) => file.name === currentEmail
          });
          if (existingImage?.length > 1) {
            await supabase.storage.from("mili-bookself").remove([`public/${currentEmail}`]);
          }
          const { error } = await supabase.storage.from("mili-bookself").upload(`public/${currentEmail}`, image);
          const { data: imageUrl } = await supabase.storage.from("mili-bookself").getPublicUrl(`public/${currentEmail}`);
          await trpc($page).users.uploadImage.mutate({ imageUrl: imageUrl.publicUrl });
          if (error)
            throw error;
          toast.success("Updated your profile!");
        }
      } catch (error) {
        if (error instanceof Error)
          console.log(error.message);
      }
    }
  });
  $$unsubscribe_userForm = subscribe(userForm, (value) => $userForm = value);
  $$unsubscribe_userFormErrors = subscribe(userFormErrors, (value) => $userFormErrors = value);
  $$unsubscribe_userFormConstraints = subscribe(userFormConstraints, (value) => $userFormConstraints = value);
  let currentEmail = session.user.email ? session.user.email : $userForm.email;
  let currentName = session.user.name ? session.user.name : "User Profile";
  if ($$props.form2 === void 0 && $$bindings.form2 && form2 !== void 0)
    $$bindings.form2(form2);
  if ($$props.session === void 0 && $$bindings.session && session !== void 0)
    $$bindings.session(session);
  $$unsubscribe_userForm();
  $$unsubscribe_page();
  $$unsubscribe_isUserFormOpen();
  $$unsubscribe_userDrawerSlide();
  $$unsubscribe_userFormConstraints();
  $$unsubscribe_userFormErrors();
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}
<form class="userDrawer fixed z-40 flex h-full w-11/12 flex-col overflow-x-hidden scroll-smooth rounded-r-3xl bg-white md:w-2/3" style="${"transform: translateX(" + escape(-$userDrawerSlide, true) + "%)"}" method="POST" action="?/updateUser"><header class="flex justify-between px-5 pt-28 md:pl-28 md:pr-10 md:pt-20"><h2 class="mb-5 text-3xl">${escape(currentName)}</h2>
		<button>Sign out </button></header>

	<div class="relative mb-auto flex flex-col gap-5 px-5 md:pl-28 md:pr-10"><div class="h-[1px] w-full bg-neutral-200"></div>
		<fieldset class="flex flex-col gap-2"><label for="name" class="font-medium">Full Name</label>
			<input${spread(
    [
      { type: "text" },
      { name: "name" },
      { id: "name" },
      { class: "rounded-md" },
      escape_object($userFormConstraints.name)
    ],
    {}
  )}${add_attribute("value", currentName, 0)}>
			${$userFormErrors.name ? `<p class="text-sm text-red-500">${escape($userFormErrors.name)}</p>` : ``}</fieldset>
		<fieldset class="flex flex-col gap-2"><label for="email" class="font-medium">Email</label>
			<input${spread(
    [
      { type: "text" },
      { name: "email" },
      { id: "email" },
      { class: "rounded-md" },
      escape_object($userFormConstraints.email)
    ],
    {}
  )}${add_attribute("value", currentEmail, 0)}>
			${$userFormErrors.name ? `<p class="text-sm text-red-500">${escape($userFormErrors.email)}</p>` : ``}</fieldset>
		<fieldset class="flex flex-col gap-2"><label for="image" class="font-medium">Choose profile photo</label>
			<input${spread(
    [
      { type: "file" },
      { name: "image" },
      { id: "image" },
      {
        class: "block w-full text-sm text-slate-500 outline-none file:mr-4 file:rounded-full file:border-0 file:bg-gray-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-gray-700 hover:file:bg-gray-100 "
      },
      { accept: "image/*" },
      escape_object($userFormConstraints.image)
    ],
    {}
  )}>

			${$userFormErrors.image ? `<p class="text-sm text-red-500">${escape($userFormErrors.image)}</p>` : ``}</fieldset></div>
	<div class="sticky bottom-0 z-20 mt-10 flex w-full justify-between self-end rounded-tr-3xl bg-white px-5 py-8 shadow-negative-lg md:pl-28 md:pr-10"><button type="button" class="rounded-full border px-8 py-2 transition-colors hover:bg-gray-100">Cancel</button>
		<button type="submit" class="rounded-full bg-black px-8 py-2 text-white transition-colors hover:bg-gray-900">Submit</button></div></form>`;
});
export {
  User as U
};
