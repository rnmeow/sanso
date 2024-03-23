import { createMiddleware } from 'hono/factory'

import type { Env, MiddlewareHandler } from 'hono/types'

/**
 * Trim the trailing slash from the URL if it does have one. This is only used when the route is set without a trailing slash.
 * @example const app = new Hono()
 *
 * app.use(trimTrailingSlash())
 *
 * // routes ...
 */
export function trimTrailingSlash(): MiddlewareHandler {
	return createMiddleware(async (ctx, next) =>
		ctx.req.path[ctx.req.path.length - 1] === '/' && ctx.req.path !== '/'
			? ctx.redirect(ctx.req.url.substring(0, ctx.req.url.length - 1), 301)
			: await next(),
	)
}

/**
 * Append a trailing slash to the URL if it does not have one. This is only used when the route is set with a trailing slash.
 * @example const app = new Hono()
 *
 * app.use(trimTrailingSlash())
 *
 * // routes ...
 */
export function appendTrailingSlash(): MiddlewareHandler {
	return createMiddleware(async (ctx, next) =>
		ctx.req.path[ctx.req.path.length - 1] !== '/'
			? ctx.redirect(`${ctx.req.url}/`, 301)
			: await next(),
	)
}
