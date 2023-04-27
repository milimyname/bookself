import { c as create_ssr_component, a as subscribe, b as set_store_value, d as add_attribute, v as validate_component } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { s as spring } from "../../../chunks/index4.js";
import { i as icons, a as isUserFormOpen, u as userDrawerSlide, I as Icon } from "../../../chunks/stores2.js";
const bookself = "/_app/immutable/assets/white-bookself.16de280a.svg";
const imagePlaceholder = "/_app/immutable/assets/placeholder.ed7a390c.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isUserFormOpen, $$unsubscribe_isUserFormOpen;
  let $springValue, $$unsubscribe_springValue;
  let $userDrawerSlide, $$unsubscribe_userDrawerSlide;
  let $page, $$unsubscribe_page;
  $$unsubscribe_isUserFormOpen = subscribe(isUserFormOpen, (value) => $isUserFormOpen = value);
  $$unsubscribe_userDrawerSlide = subscribe(userDrawerSlide, (value) => $userDrawerSlide = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let springValue = spring(100, { stiffness: 0.03, damping: 0.4 });
  $$unsubscribe_springValue = subscribe(springValue, (value) => $springValue = value);
  set_store_value(userDrawerSlide, $userDrawerSlide = $springValue, $userDrawerSlide);
  {
    if (!$isUserFormOpen)
      springValue.set(100, { soft: true });
  }
  $$unsubscribe_isUserFormOpen();
  $$unsubscribe_springValue();
  $$unsubscribe_userDrawerSlide();
  $$unsubscribe_page();
  return `

<aside class="sticky top-0 z-50 flex items-center justify-between gap-5 bg-black p-4 md:h-screen md:flex-col md:rounded-r-3xl md:p-0"><a href="/" class="md:p-6"><img${add_attribute("src", bookself, 0)} class="h-12 w-12" alt="Bookself Logo"></a>
	<div class="flex w-full justify-end gap-5 md:mb-5 md:mt-auto md:flex-col md:items-center md:border-b md:border-gray-200 md:pb-10"><button>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.language,
      className: "w-5 h-5 fill-white"
    },
    {},
    {}
  )}</button>
		<button>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.sun,
      className: "w-6 h-6 fill-white"
    },
    {},
    {}
  )}</button></div>
	${$page.data.session ? `<button class="userButton"><img${add_attribute(
    "src",
    $page.data.session.user?.image ? $page.data.session.user?.image : imagePlaceholder,
    0
  )}${add_attribute("alt", $page.data.session.user?.name, 0)} class="w-14 cursor-pointer rounded-full transition-transform hover:scale-125 md:mb-5"></button>` : ``}</aside>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
