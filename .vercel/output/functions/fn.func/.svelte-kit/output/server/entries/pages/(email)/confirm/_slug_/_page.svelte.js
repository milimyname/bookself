import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { T as Toaster } from "../../../../../chunks/Toaster.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}
<main class="flex h-screen w-full flex-col items-center justify-center"><h1>You already confirmed your email</h1></main>`;
});
export {
  Page as default
};
