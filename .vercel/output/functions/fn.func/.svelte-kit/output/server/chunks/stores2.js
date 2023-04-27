import BiLogoGoogle from "svelte-icons-pack/bi/BiLogoGoogle.js";
import BiLogoGithub from "svelte-icons-pack/bi/BiLogoGithub.js";
import AiOutlineLoading from "svelte-icons-pack/ai/AiOutlineLoading.js";
import IoLanguage from "svelte-icons-pack/io/IoLanguage.js";
import BiSun from "svelte-icons-pack/bi/BiSun.js";
import BiMoon from "svelte-icons-pack/bi/BiMoon.js";
import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus.js";
import BiChevronRight from "svelte-icons-pack/bi/BiChevronRight.js";
import { c as create_ssr_component, f as spread, o as escape_attribute_value, g as escape_object } from "./index3.js";
import { w as writable } from "./index2.js";
const icons = {
  google: BiLogoGoogle,
  github: BiLogoGithub,
  loading: AiOutlineLoading,
  language: IoLanguage,
  sun: BiSun,
  moon: BiMoon,
  plus: AiOutlinePlus,
  chevronRight: BiChevronRight
};
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { size = "1em" } = $$props;
  let { color = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { className = "" } = $$props;
  let innerHtml;
  let attr;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  {
    {
      attr = {};
      if (color) {
        if (src.a.stroke !== "none") {
          attr.stroke = color;
        }
        if (src.a.fill !== "none") {
          attr.fill = color;
        }
      }
    }
  }
  {
    {
      innerHtml = (title ? `<title>${title}</title>` : "") + src.c;
    }
  }
  return `<svg${spread(
    [
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { "stroke-width": "0" },
      { class: escape_attribute_value(className) },
      escape_object(src.a),
      escape_object(attr),
      { xmlns: "http://www.w3.org/2000/svg" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${innerHtml}<!-- HTML_TAG_END --></svg>`;
});
const isBookingFormOpen = writable(false);
const bookingDrawerSlide = writable(0);
const isUserFormOpen = writable(false);
const userDrawerSlide = writable(0);
const loading = writable(false);
export {
  Icon as I,
  isUserFormOpen as a,
  isBookingFormOpen as b,
  bookingDrawerSlide as c,
  icons as i,
  loading as l,
  userDrawerSlide as u
};
