export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.176acdcb.js","app":"_app/immutable/entry/app.68948966.js","imports":["_app/immutable/entry/start.176acdcb.js","_app/immutable/chunks/index.db2b4dea.js","_app/immutable/chunks/singletons.79900e43.js","_app/immutable/chunks/index.3dc40cc0.js","_app/immutable/chunks/parse.1d2978b5.js","_app/immutable/entry/app.68948966.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.db2b4dea.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js'),
			() => import('../output/server/nodes/7.js'),
			() => import('../output/server/nodes/8.js'),
			() => import('../output/server/nodes/9.js'),
			() => import('../output/server/nodes/10.js')
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(app)/booking/[slug]",
				pattern: /^\/booking\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(email)/confirm/[slug]",
				pattern: /^\/confirm\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			},
			{
				id: "/example",
				pattern: /^\/example\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 10 },
				endpoint: null
			},
			{
				id: "/example/hello",
				pattern: /^\/example\/hello\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/example/hello/_server.ts.js')
			},
			{
				id: "/(auth)/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/reminder",
				pattern: /^\/reminder\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/reminder/_server.ts.js')
			},
			{
				id: "/(email)/reset",
				pattern: /^\/reset\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(email)/reset/[slug]",
				pattern: /^\/reset\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(auth)/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
