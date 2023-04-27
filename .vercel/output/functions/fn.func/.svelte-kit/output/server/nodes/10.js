import * as server from '../entries/pages/example/_page.server.ts.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/example/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/example/+page.server.ts";
export const imports = ["_app/immutable/entry/example-page.svelte.893f5641.js","_app/immutable/chunks/index.db2b4dea.js"];
export const stylesheets = [];
export const fonts = [];
