import { r as redirect, f as fail } from "../../../chunks/index.js";
import { s as superValidate } from "../../../chunks/index6.js";
import { p as prisma } from "../../../chunks/prisma.js";
import { b as bookingSchema, u as userSchema } from "../../../chunks/zodSchema.js";
import { r as router, c as createContext, s as stripe } from "../../../chunks/router.js";
import { Z as ZOHO_SENT_FROM, t as transporter } from "../../../chunks/nodemailer.js";
import { H as Html, a as Head, P as Preview, S as Section, C as Container, T as Text, r as render } from "../../../chunks/render.js";
import { H as Hello } from "../../../chunks/Hello.js";
import { c as create_ssr_component, v as validate_component } from "../../../chunks/index3.js";
import { p as public_env } from "../../../chunks/shared-server.js";
import { B as Button, H as Hr } from "../../../chunks/Hr.js";
const BookingConfirmation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `${validate_component(Html, "Html").$$render($$result, { lang: "en" }, {}, {
    default: () => {
      return `${validate_component(Head, "Head").$$render($$result, {}, {}, {
        default: () => {
          return `<title>Booking Confirmation</title>
		<meta name="description" content="Help book you an appointment in the foreigners authority in Berlin">`;
        }
      })}
	${validate_component(Preview, "Preview").$$render($$result, { preview: "Booking confirmation" }, {}, {})}
	${validate_component(Section, "Section").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Container, "Container").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                default: () => {
                  return `We&#39;re looking for you an appointment. We&#39;ll keep updating you.`;
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
                  href: `${public_env.PUBLIC_PROD}/booking/${id}`
                },
                {},
                {
                  default: () => {
                    return `Here is your booking details.`;
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
  if (!session?.user)
    throw redirect(302, "/");
  const bookingForm = await superValidate(event, bookingSchema, {
    id: "bookingForm"
  });
  const userForm = await superValidate(event, userSchema, {
    id: "userForm"
  });
  const bookings = router.createCaller(await createContext(event)).bookings.getBookings();
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email
    }
  });
  if (!user?.emailVerified && user?.id && user?.email) {
    const emailHtml = render({
      template: Hello,
      props: {
        id: user.id
      }
    });
    const options = {
      from: ZOHO_SENT_FROM,
      to: user.email,
      subject: "Welcome to Bookself || Verification Email",
      html: emailHtml
    };
    await transporter.sendMail(options);
  }
  const stripeCheckoutSession = await stripe.checkout.sessions.list({
    limit: 1
  });
  if (stripeCheckoutSession.data[0].payment_status === "paid" && stripeCheckoutSession.data[0].created > Date.now() - 3e5) {
    await prisma.booking.updateMany({
      where: {
        id: stripeCheckoutSession.data[0].metadata.bookingId,
        userId: stripeCheckoutSession.data[0].metadata.userId
      },
      data: {
        status: "pending"
      }
    });
  }
  if (stripeCheckoutSession.data[0].payment_status === "paid" && stripeCheckoutSession.data[0].created > Date.now() - 3e4) {
    const emailHtml = render({
      template: BookingConfirmation,
      props: {
        id: stripeCheckoutSession.data[0].metadata.bookingId
      }
    });
    const options = {
      from: ZOHO_SENT_FROM,
      to: user?.email,
      subject: "Booking Confirmation",
      html: emailHtml
    };
    await transporter.sendMail(options);
  }
  return {
    bookingForm,
    userForm,
    user,
    bookings
  };
};
const actions = {
  addBooking: async (event) => {
    const bookingForm = await superValidate(event.request, bookingSchema, {
      id: "bookingForm"
    });
    if (!bookingForm.valid)
      return fail(400, { bookingForm });
    const session = await event.locals.getSession();
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email
      }
    });
    bookingForm.data.status = "draft";
    bookingForm.data.birthDate = bookingForm.data.birthDate.split("-").reverse().join(".");
    if (!user?.emailVerified)
      return;
    const booking = await prisma.booking.create({
      data: {
        userId: user?.id,
        ...bookingForm.data
      }
    });
    const checkout = await router.createCaller(await createContext(event)).bookings.payForBooking({
      bookingId: booking.id
    });
    throw redirect(303, checkout.url);
  },
  updateUser: async ({ locals, request }) => {
    const userForm = await superValidate(request, userSchema, {
      id: "userForm"
    });
    if (!userForm.valid)
      return fail(400, { userForm });
    const session = await locals.getSession();
    if (!userForm.data.name && !userForm.data.email)
      return;
    await prisma.user.update({
      where: {
        email: session?.user?.email
      },
      data: {
        name: userForm.data.name,
        email: userForm.data.email
      }
    });
    return { userForm };
  }
};
export {
  actions,
  load
};
