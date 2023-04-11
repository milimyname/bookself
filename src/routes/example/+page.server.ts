// import { createContext } from '$lib/trpc/context';
// import { router } from '$lib/trpc/router';
// import type { PageServerLoad } from './$types';

// // 👇 since this is only called on the server, we can bypass HTTP 💡
// export const load: PageServerLoad = async (event) => ({
// 	user: router.users.createCaller(await createContext(event)).getUser()
// });
