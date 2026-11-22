/** Affiliate destinations — exact URLs; do not modify or append query params. */
export const AFFILIATE_BORDERLANDS_3_CHEAT =
  'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fborderlands-3';
export const AFFILIATE_HWID_SPOOFER =
  'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fhwid-spoofer';
export const AFFILIATE_UGC = 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fugc';
export const AFFILIATE_DISCORD = 'https://discord.com/invite/2gMnnaPWq';

export const AFFILIATE_LINKS = {
  borderlands3Cheat: AFFILIATE_BORDERLANDS_3_CHEAT,
  hwidSpoofer: AFFILIATE_HWID_SPOOFER,
  ugc: AFFILIATE_UGC,
  discord: AFFILIATE_DISCORD,
} as const;

const AFFILIATE_CHECKOUT_HREFS = new Set<string>([
  AFFILIATE_BORDERLANDS_3_CHEAT,
  AFFILIATE_HWID_SPOOFER,
  AFFILIATE_UGC,
]);

export function isAffiliateCheckoutHref(href: string): boolean {
  return AFFILIATE_CHECKOUT_HREFS.has(href);
}