import { AFFILIATE_LINKS, isAffiliateCheckoutHref } from './affiliate-links';

export { isAffiliateCheckoutHref };

export const CHECKOUT = {
  borderlands3Cheat: AFFILIATE_LINKS.borderlands3Cheat,
  hwidSpoofer: AFFILIATE_LINKS.hwidSpoofer,
  ugc: AFFILIATE_LINKS.ugc,
} as const;

export type CheckoutProduct = keyof typeof CHECKOUT;

export const CHECKOUT_SLUGS: Record<CheckoutProduct, string> = {
  borderlands3Cheat: 'borderlands-3',
  hwidSpoofer: 'hwid-spoofer',
  ugc: 'ugc',
};

export const CHECKOUT_SLUG_TO_PRODUCT = Object.fromEntries(
  Object.entries(CHECKOUT_SLUGS).map(([product, slug]) => [slug, product as CheckoutProduct]),
) as Record<string, CheckoutProduct>;

export function checkoutPath(product: CheckoutProduct = 'borderlands3Cheat'): string {
  return CHECKOUT[product];
}

export const PRIMARY_CHECKOUT_PATH = checkoutPath('borderlands3Cheat');

export function checkoutForSlug(slug: string): string {
  switch (slug) {
    case 'spoofer':
    case 'hwid-spoofer':
      return checkoutPath('hwidSpoofer');
    case 'ugc':
    case 'ugc-account-recovery':
      return checkoutPath('ugc');
    case 'borderlands-3-cheat':
    default:
      return checkoutPath('borderlands3Cheat');
  }
}

export function resolveCheckoutHref(href: string): string {
  if (!href.startsWith('http')) {
    return href.startsWith('/') ? href : `/${href}`;
  }
  return href;
}