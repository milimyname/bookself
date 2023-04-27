import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/entry/_layout.svelte.9abe99ed.js","_app/immutable/chunks/index.db2b4dea.js"];
export const stylesheets = ["_app/immutable/assets/_layout.79b5454f.css"];
export const fonts = [];
