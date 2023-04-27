import { e as error, r as redirect } from "../../../../../chunks/index.js";
import { p as prisma } from "../../../../../chunks/prisma.js";
const load = async ({ params }) => {
  const { slug } = params;
  const user = await prisma.user.findUnique({
    where: {
      id: slug
    }
  });
  if (!user)
    throw error(404, "Not found");
  if (user.emailVerified)
    throw redirect(302, "/");
  await prisma.user.update({
    where: {
      id: slug
    },
    data: {
      emailVerified: /* @__PURE__ */ new Date()
    }
  });
  throw redirect(302, "/");
};
export {
  load
};
