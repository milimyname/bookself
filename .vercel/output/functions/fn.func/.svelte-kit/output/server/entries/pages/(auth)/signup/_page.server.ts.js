import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { s as superValidate } from "../../../../chunks/index6.js";
import { p as prisma } from "../../../../chunks/prisma.js";
import bcrypt from "bcrypt";
import { s as signUpSchema } from "../../../../chunks/zodSchema.js";
import { Z as ZOHO_SENT_FROM, t as transporter } from "../../../../chunks/nodemailer.js";
import { r as render } from "../../../../chunks/render.js";
import { H as Hello } from "../../../../chunks/Hello.js";
const load = async (event) => {
  const session = await event.locals.getSession();
  if (session?.user)
    throw redirect(302, "/");
  const form = await superValidate(event, signUpSchema);
  return {
    form
  };
};
const actions = {
  default: async (event) => {
    const form = await superValidate(event, signUpSchema);
    if (!form.valid)
      return fail(400, { form });
    if (form.data.password !== form.data.confirmPassword) {
      form.errors.confirmPassword = ["Passwords do not match"];
      return fail(400, { form });
    }
    const user = await prisma.user.findUnique({
      where: {
        email: form.data.email
      }
    });
    if (user) {
      form.errors.email = ["Email exists"];
      return fail(400, { form });
    }
    try {
      const user2 = await prisma.user.create({
        data: {
          email: form.data.email,
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
      const emailHtml = render({
        template: Hello,
        props: {
          id: user2.id
        }
      });
      const options = {
        from: ZOHO_SENT_FROM,
        to: form.data.email,
        subject: "Welcome to Bookself || Verification Email",
        html: emailHtml
      };
      await transporter.sendMail(options);
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
