import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { p as public_env } from "./shared-server.js";
import { B as Button, H as Hr } from "./Hr.js";
import { H as Html, a as Head, P as Preview, S as Section, C as Container, T as Text } from "./render.js";
const Hello = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<title>Welcome to Bookself || Verification Email</title>
		<meta name="description" content="Help book you an appointment in the foreigners authority in Berlin">`;
        }
      })}
	${validate_component(Preview, "Preview").$$render($$result, { preview: "Welcome to Bookself" }, {}, {})}
	${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Welcome to Bookself`;
                }
              })}
			${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Confirm your email to book your appointment.`;
                }
              })}
			${validate_component(Button, "Button").$$render(
                $$result,
                {
                  style: {
                    color: "white",
                    padding: "1rem 2rem 1rem 2rem",
                    backgroundColor: "black"
                  },
                  href: `${public_env.PUBLIC_PROD}/confirm/${id}`
                },
                {},
                {
                  default: () => {
                    return `Confirm your email`;
                  }
                }
              )}
			${validate_component(Hr, "Hr").$$render($$result, {}, {}, {})}
			${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Best Regards`;
                }
              })}
			${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Bookself Team`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export {
  Hello as H
};
