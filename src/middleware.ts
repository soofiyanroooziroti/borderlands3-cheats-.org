import { defineMiddleware } from 'astro:middleware';
import { resolvePathRedirect } from '../scripts/redirects.mjs';

export const onRequest = defineMiddleware((context, next) => {
  const pathname = new URL(context.request.url).pathname;
  const legacy = resolvePathRedirect(pathname);
  if (legacy && legacy !== pathname) {
    return context.redirect(legacy, 301);
  }
  return next();
});