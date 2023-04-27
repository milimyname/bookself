import { r as redirect, f as fail } from "../../../../../chunks/index.js";
import { r as resetSchema } from "../../../../../chunks/zodSchema.js";
import { s as superValidate } from "../../../../../chunks/index6.js";
import { p as prisma } from "../../../../../chunks/prisma.js";
import bcrypt from "bcrypt";
const load = async (event) => {
  const session = await event.locals.getSession();
  if (session?.user)
    throw redirect(302, "/");
  const form = await superValidate(event, resetSchema);
  return {
    form
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, resetSchema);
    if (!form.valid)
      return fail(400, { form });
    if (form.data.password !== form.data.confirmPassword) {
      form.errors.confirmPassword = ["Passwords do not match"];
      return fail(400, { form });
    }
    const user = await prisma.user.findUnique({
      where: {
        id: event.params.slug
      }
    });
    if (await bcrypt.compare(form.data.password, user.password)) {
      form.errors.password = ["Password is the same as the old one"];
      return fail(400, { form });
    }
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: event.params.slug
        },
        data: {
          password: await bcrypt.hash(form.data.password, 10)
        }
      });
      const sessionToken = crypto.randomUUID();
      await prisma.session.create({
        data: {
          sessionToken,
          expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
          user: {
            connect: {
              email: updatedUser.email
            }
          }
        }
      });
      event.cookies.set("__Secure-next-auth.session-token", sessionToken, {
        path: "/",
        maxAge: 1e3 * 60 * 60 * 24 * 30,
        secure: true,
        httpOnly: true,
        sameSite: "lax"
      });
      throw redirect(302, "/");
    } catch (err) {
      console.log(err);
    }
    return { form };
  }
};
export {
  actions,
  load
};
