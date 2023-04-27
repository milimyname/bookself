import { initTRPC, TRPCError } from "@trpc/server";
import z, { z as z$1 } from "zod";
import { p as prisma } from "./prisma.js";
import Stripe from "stripe";
import { b as private_env, p as public_env } from "./shared-server.js";
async function createContext(event) {
  const session = await event.locals.getSession();
  return {
    session
  };
}
const t = initTRPC.context().create();
const auth = t.middleware(async ({ next, ctx }) => {
  if (!ctx.session?.user)
    throw new TRPCError({ code: "UNAUTHORIZED" });
  return next();
});
const userProcedure = t.procedure.input(z.object({ userId: z.string() }));
const users = t.router({
  updateUser: userProcedure.use(auth).input(z.object({ name: z.string() })).output(z.object({ id: z.string(), name: z.string() })).mutation(async (req) => {
    return {
      id: req.input.userId,
      name: req.input.name
    };
  }),
  uploadImage: t.procedure.input(z.object({ imageUrl: z.string() })).mutation(async (req) => {
    const { imageUrl } = req.input;
    if (!imageUrl)
      return;
    await prisma.user.update({
      where: {
        email: req.ctx.session?.user?.email
      },
      data: {
        image: imageUrl
      }
    });
  })
});
const stripe = new Stripe(private_env.SECRET_STRIPE_KEY, {
  apiVersion: "2022-11-15"
});
const bookings = t.router({
  getBookings: t.procedure.use(auth).query(async (req) => {
    const email = req.ctx.session.user?.email;
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!user)
      throw new TRPCError({
        code: "NOT_FOUND",
        message: "User does not exist"
      });
    const bookings2 = await prisma.booking.findMany({
      where: {
        userId: user.id
      }
    });
    return {
      bookings: bookings2
    };
  }),
  payForBooking: t.procedure.use(auth).input(
    z$1.object({
      bookingId: z$1.string()
    })
  ).query(async (req) => {
    const { bookingId } = req.input;
    const booking = await prisma.booking.findUnique({
      where: {
        id: bookingId
      }
    });
    const coupon = await stripe.coupons.create({
      percent_off: 90,
      duration: "repeating",
      duration_in_months: 5,
      name: "uzbekBerliner31#"
    });
    const paymentIntent = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Booking",
              images: ["https://i.imgur.com/EHyR2nP.png"]
            },
            unit_amount: 500
          },
          quantity: 1
        }
      ],
      discounts: [
        {
          coupon: coupon.id
        }
      ],
      mode: "payment",
      metadata: {
        bookingId: booking?.id,
        userId: booking?.userId
      },
      success_url: public_env.PUBLIC_PROD,
      cancel_url: public_env.PUBLIC_PROD
    });
    return paymentIntent;
  })
});
const router = t.router({
  greeting: t.procedure.query(async () => {
    setTimeout(() => {
      console.log("5 seconds have passed");
    }, 5e3);
    return `Hello tRPC v10 @ ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}`;
  }),
  log: t.procedure.input((input) => {
    if (typeof input !== "string")
      throw Error("input must be a string");
    return input;
  }).mutation((req) => {
    console.log(req.input);
    return true;
  }),
  users,
  bookings
});
export {
  createContext as c,
  router as r,
  stripe as s
};
