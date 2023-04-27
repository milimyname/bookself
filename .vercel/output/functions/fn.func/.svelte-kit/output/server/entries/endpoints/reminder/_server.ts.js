import { p as prisma } from "../../../chunks/prisma.js";
import { Z as ZOHO_SENT_FROM, t as transporter } from "../../../chunks/nodemailer.js";
import { H as Html, a as Head, P as Preview, S as Section, C as Container, T as Text, r as render } from "../../../chunks/render.js";
import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index3.js";
const ReminderEmail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<title>Reminder Email</title>
		<meta name="description" content="Help book you an appointment in the foreigners authority in Berlin">`;
        }
      })}
	${validate_component(Preview, "Preview").$$render($$result, { preview: "Reminder Email" }, {}, {})}
	${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `Hi ${escape(name)}.`;
                }
              })}
			${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `We&#39;ve been looking for an appointment but unfortunately, we could not find any yet.
				Sometimes it takes time and hopefully, we&#39;ll get soon.`;
                }
              })}
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
async function GET() {
  const bookingsToRemind = await prisma.booking.findMany({
    where: {
      status: "pending"
    }
  });
  bookingsToRemind.forEach(async (booking) => {
    const user = await prisma.user.findUnique({
      where: {
        email: booking.email
      }
    });
    const emailHtml = render({
      template: ReminderEmail,
      props: {
        name: user?.name
      }
    });
    const options = {
      from: ZOHO_SENT_FROM,
      to: booking.email,
      subject: "Bookself || Reminder Email",
      html: emailHtml
    };
    transporter.sendMail(options);
  });
  return new Response(
    "Emails successfully sent to all users who are patienly waiting for an appointment."
  );
}
export {
  GET
};
