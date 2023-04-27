import { c as create_ssr_component } from "../../chunks/index3.js";
import { inject } from "@vercel/analytics";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  inject({ mode: "production" });
  return `<div class="flex h-full flex-col md:flex-row">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
