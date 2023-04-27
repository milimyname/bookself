import { d as dev } from "./environment.js";
import { b as private_env } from "./shared-server.js";
import { Auth } from "@auth/core";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { r as router, c as createContext } from "./router.js";
import { r as redirect } from "./index.js";
import { createTRPCHandle } from "trpc-sveltekit";
import { p as prisma } from "./prisma.js";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
async function getSession(req, config) {
  config.secret ??= private_env.AUTH_SECRET;
  config.trustHost ??= true;
  const url = new URL("/api/auth/session", req.url);
  const request = new Request(url, { headers: req.headers });
  const response = await Auth(request, config);
  const { status = 200 } = response;
  const data = await response.json();
  if (!data || !Object.keys(data).length)
    return null;
  if (status === 200)
    return data;
  throw new Error(data.message);
}
const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AuthHandle(svelteKitAuthOptions) {
  return async function({ event, resolve }) {
    const authOptions = typeof svelteKitAuthOptions === "object" ? svelteKitAuthOptions : await svelteKitAuthOptions(event);
    const { prefix = "/auth" } = authOptions;
    const { url, request } = event;
    event.locals.getSession ??= () => getSession(request, authOptions);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/")) {
      return resolve(event);
    }
    return Auth(request, authOptions);
  };
}
function SvelteKitAuth(options) {
  if (typeof options === "object") {
    options.secret ??= private_env.AUTH_SECRET;
    options.trustHost ??= !!(private_env.AUTH_TRUST_HOST ?? private_env.VERCEL ?? dev);
  }
  return AuthHandle(options);
}
function sequence(...handlers) {
  const length = handlers.length;
  if (!length)
    return ({ event, resolve }) => resolve(event);
  return ({ event, resolve }) => {
    return apply_handle(0, event, {});
    function apply_handle(i, event2, parent_options) {
      const handle2 = handlers[i];
      return handle2({
        event: event2,
        resolve: (event3, options) => {
          const transformPageChunk = async ({ html, done }) => {
            if (options?.transformPageChunk) {
              html = await options.transformPageChunk({ html, done }) ?? "";
            }
            if (parent_options?.transformPageChunk) {
              html = await parent_options.transformPageChunk({ html, done }) ?? "";
            }
            return html;
          };
          return i < length - 1 ? apply_handle(i + 1, event3, { transformPageChunk }) : resolve(event3, { transformPageChunk });
        }
      });
    }
  };
}
const protectedPaths = ["/", "/account"];
async function protect({ event, resolve }) {
  if (event.url.pathname.startsWith("/reminder"))
    return resolve(event);
  if (!protectedPaths.includes(event.url.pathname))
    return resolve(event);
  const session = await event.locals.getSession();
  if (!session)
    throw redirect(303, "/login");
  return resolve(event);
}
const authenticate = SvelteKitAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: private_env.GITHUB_ID,
      clientSecret: private_env.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    Google({
      clientId: private_env.GOOGLE_ID,
      clientSecret: private_env.GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true
    })
  ],
  session: {
    strategy: "database",
    generateSessionToken: () => {
      return crypto.randomUUID();
    }
  }
});
const handle = sequence(
  authenticate,
  protect,
  createTRPCHandle({
    router,
    createContext
  })
);
export {
  handle
};
