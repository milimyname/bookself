import { c as create_ssr_component, a as subscribe, b as set_store_value, v as validate_component } from "./index3.js";
import { l as loading, I as Icon, i as icons } from "./stores2.js";
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $loading, $$unsubscribe_loading;
  $$unsubscribe_loading = subscribe(loading, (value) => $loading = value);
  let { errors } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  {
    if (errors)
      set_store_value(loading, $loading = false, $loading);
  }
  $$unsubscribe_loading();
  return `${$loading ? `<div class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"><div class="flex items-center gap-5 rounded-md bg-white p-5">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      src: icons.loading,
      className: "h-5 w-5 animate-spin "
    },
    {},
    {}
  )}
			<span class="text-xl font-medium">Pending...</span></div></div>` : ``}`;
});
export {
  Spinner as S
};
