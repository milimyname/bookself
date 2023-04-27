import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { l as loginSchema } from "../../../../chunks/zodSchema.js";
import { s as superValidate } from "../../../../chunks/index6.js";
import { p as prisma } from "../../../../chunks/prisma.js";
import bcrypt from "bcrypt";
const load = async (event) => {
  const session = await event.locals.getSession();
  if (session?.user)
    throw redirect(302, "/");
  const form = await superValidate(event, loginSchema);
  return {
    form
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, loginSchema);
    if (!form.valid)
      return fail(400, { form });
    const user = await prisma.user.findUnique({
      where: {
        email: form.data.email
      }
    });
    if (!user) {
      form.errors.email = ["Email is not registered"];
      return fail(400, { form });
    }
    const passwordMatch = await bcrypt.compare(form.data.password, user.password);
    if (!passwordMatch) {
      form.errors.password = ["Password is incorrect"];
      await prisma.user.update({
        where: {
          id: user.id
        },
        data: {
          failedAttempts: user.failedAttempts + 1,
          lastFailedAttempt: /* @__PURE__ */ new Date()
        }
      });
      return fail(400, { form });
    }
    if (user.failedAttempts >= 5) {
      const now = /* @__PURE__ */ new Date();
      const diff = user.lastFailedAttempt ? now.getTime() - user.lastFailedAttempt.getTime() : 0;
      const minutes = Math.floor(diff / 6e4);
      if (minutes < 5) {
        form.errors.password = [`Account is locked for ${5 - minutes} minutes`];
        return fail(400, { form });
      } else {
        await prisma.user.update({
          where: {
            id: user.id
          },
          data: {
            failedAttempts: 0
          }
        });
      }
      return fail(400, { form });
    }
    try {
      const sessionToken = crypto.randomUUID();
      await prisma.session.create({
        data: {
          sessionToken,
          expires: new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30),
          user: {
            connect: {
              email: form.data.email
            }
          }
        }
      });
      event.cookies.set(
        false ? "next-auth.session-token" : "__Secure-next-auth.session-token",
        sessionToken,
        {
          path: "/",
          maxAge: 1e3 * 60 * 60 * 24 * 30,
          secure: true,
          httpOnly: true,
          sameSite: "lax"
        }
      );
      throw redirect(302, "/");
    } catch (error) {
      console.error(error);
    }
    return { form };
  }
};
export {
  actions,
  load
};
