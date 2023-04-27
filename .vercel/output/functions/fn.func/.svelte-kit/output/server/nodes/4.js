import * as server from '../entries/pages/(app)/booking/_slug_/_page.server.ts.js';

export const index = 4;
export const component = async () => (await import('../entries/pages/(app)/booking/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/booking/[slug]/+page.server.ts";
export const imports = ["_app/immutable/entry/(app)-booking-_slug_-page.svelte.0cc30bab.js","_app/immutable/chunks/index.db2b4dea.js","_app/immutable/chunks/index.f5d964d8.js","_app/immutable/chunks/parse.1d2978b5.js","_app/immutable/chunks/singletons.79900e43.js","_app/immutable/chunks/index.3dc40cc0.js","_app/immutable/chunks/stores.8dce5407.js","_app/immutable/chunks/clickOutside.c51b3379.js","_app/immutable/chunks/stores.b4eef40c.js","_app/immutable/chunks/User.65ced62f.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/client.a5bdbce7.js","_app/immutable/chunks/Toaster.35735b00.js"];
export const stylesheets = ["_app/immutable/assets/Toaster.3a6d0da3.css"];
export const fonts = [];
