import { getBlogPost } from '../data/blog';
import type { Locale } from '../i18n/locales';
import { defaultLocale } from '../i18n/locales';

/** Link label for forum “Based on” — uses the live blog post title when sourcePath is /blog/{slug}/. */
export function forumGuideTitle(
  sourcePath: string | undefined,
  fallback: string | undefined,
  locale: Locale = defaultLocale,
): string | undefined {
  if (!sourcePath) return fallback;
  const match = sourcePath.match(/^\/blog\/([^/]+)\/?$/);
  if (match) {
    const blog = getBlogPost(match[1], locale);
    if (blog?.title?.trim()) return blog.title.trim();
  }
  return fallback?.trim() || undefined;
}