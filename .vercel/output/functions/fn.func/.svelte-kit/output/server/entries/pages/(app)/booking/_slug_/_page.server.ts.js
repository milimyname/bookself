import { e as error, f as fail } from "../../../../../chunks/index.js";
import { s as superValidate } from "../../../../../chunks/index6.js";
import { p as prisma } from "../../../../../chunks/prisma.js";
import { u as userSchema } from "../../../../../chunks/zodSchema.js";
const load = async ({ params, request }) => {
  const { slug } = params;
  const booking = await prisma.booking.findUnique({
    where: {
      id: slug
    }
  });
  const userForm = await superValidate(request, userSchema, {
    id: "userForm"
  });
  if (!booking)
    throw error(404, "Not found");
  return {
    userForm,
    booking
  };
};
const actions = {
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
