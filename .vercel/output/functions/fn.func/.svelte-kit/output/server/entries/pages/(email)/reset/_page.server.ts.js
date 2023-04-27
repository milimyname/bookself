import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { u as userSchema } from "../../../../chunks/zodSchema.js";
import { s as superValidate } from "../../../../chunks/index6.js";
import { p as prisma } from "../../../../chunks/prisma.js";
import { H as Html, a as Head, P as Preview, S as Section, C as Container, T as Text, r as render } from "../../../../chunks/render.js";
import { Z as ZOHO_SENT_FROM, t as transporter } from "../../../../chunks/nodemailer.js";
import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index3.js";
import { p as public_env } from "../../../../chunks/shared-server.js";
import { B as Button, H as Hr } from "../../../../chunks/Hr.js";
const Reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<title>Reset password</title>
		<meta name="description" content="Reset password">`;
        }
      })}
	${validate_component(Preview, "Preview").$$render($$result, { preview: "Reset password" }, {}, {})}
	${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Reset password`;
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
                  href: `${public_env.PUBLIC_PROD}/reset/${id}`
                },
                {},
                {
                  default: () => {
                    return `Create a new password`;
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
const load = async (event) => {
  const session = await event.locals.getSession();
  if (session?.user)
    throw redirect(302, "/");
  const form = await superValidate(event, userSchema);
  return {
    form
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, userSchema);
    if (!form.valid)
      return fail(400, { form });
    const user = await prisma.user.findUnique({
      where: {
        email: form.data.email
      }
    });
    if (!user) {
      form.errors.email = ["Email is not found"];
      return fail(400, { form });
    }
    if (!user.password) {
      form.errors.email = ["You used a google/github login to sign up."];
      return fail(400, { form });
    }
    const emailHtml = render({
      template: Reset,
      props: {
        id: user.id
      }
    });
    const options = {
      from: ZOHO_SENT_FROM,
      to: form.data.email,
      subject: "Reset password",
      html: emailHtml
    };
    await transporter.sendMail(options);
    return {
      form
    };
  }
};
export {
  actions,
  load
};
