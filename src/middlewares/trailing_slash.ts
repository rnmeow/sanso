import { createMiddleware } from 'hono/factory'

import type { Env, MiddlewareHandler } from 'hono/types'

/**
 * Trim the trailing slash from the URL if it does have one. This is only used when the route is set without a trailing slash.
 * @example hono.use(trimTrailingSlash())
 */
export function trimTrailingSlash(): MiddlewareHandler<Env, never, {}> {
	return createMiddleware(async (ctx, next) =>
		ctx.req.path.endsWith('/') && ctx.req.path !== '/'
			? ctx.redirect(ctx.req.url.replace(/\/$/, ''))
			: await next(),
	)
}

/**
 * Append a trailing slash to the URL if it does not have one. This is only used when the route is set with a trailing slash.
 * @example hono.use(appendTrailingSlash())
 */
export function appendTrailingSlash(): MiddlewareHandler<Env, never, {}> {
	return createMiddleware(async (ctx, next) =>
		!ctx.req.url.endsWith('/') ? ctx.redirect(`${ctx.req.url}/`) : await next(),
	)
}