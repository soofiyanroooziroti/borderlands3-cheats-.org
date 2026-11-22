/** Primary keyword per core URL (null = no dedicated keyword). */
export const PAGE_KEYWORDS: Record<string, string | string[] | null> = {
  '/': ['borderlands 3 cheats', 'bl3 cheats'],
  '/products/': null,
  '/product/borderlands-3-cheat/': ['borderlands 3 cheat', 'bl3 cheat'],
  '/product/spoofer/': ['borderlands 3 hwid spoofer', 'bl3 hwid spoofer'],
  '/product/ugc/': ['borderlands 3 unban tool', 'bl3 unban tool'],
  '/features/': null,
  '/blog/': null,
  '/blog/borderlands-3-cheat-engine/': 'borderlands 3 cheat engine',
  '/blog/borderlands-3-cheat-table/': 'borderlands 3 cheat table',
  '/blog/borderlands-3-cheat-codes/': 'borderlands 3 cheat codes',
  '/blog/borderlands-3-mods-vs-cheat-menu/': 'borderlands 3 mods',
  '/blog/borderlands-3-mayhem-mode-farming/': 'borderlands 3 mayhem mode',
  '/blog/borderlands-3-aimbot/': 'borderlands 3 aimbot',
  '/blog/borderlands-3-esp/': 'borderlands 3 esp',
  '/blog/borderlands-3-loot-esp/': 'borderlands 3 loot esp',
  '/blog/borderlands-3-cheats-requirements/': 'borderlands 3 cheat requirements',
  '/blog/borderlands-3-cheat-ban-risks/': 'borderlands 3 cheat ban risks',
  '/blog/borderlands-3-cheats-price/': 'borderlands 3 cheat price',
  '/blog/borderlands-3-hacks/': 'borderlands 3 hacks',
  '/forum/': null,
  '/faq/': null,
  '/support/': null,
  '/about/': null,
  '/privacy/': null,
  '/terms/': null,
  '/status/': null,
};

/** noindex routes — not in the indexable keyword map; overlap with home primaries is fine. */
export const NOINDEX_CANNIBALISM_SKIP = new Set(['/status/', '/404/']);

export const PRODUCT_H1: Record<string, string> = {
  'borderlands-3-cheat': 'Borderlands 3 cheat loader for Windows PC',
  spoofer: 'Borderlands 3 hwid spoofer for Windows PC',
  ugc: 'Borderlands 3 unban tool for Windows PC',
};

export const PRODUCT_PAGE_KEYWORDS: Record<string, string> = {
  'borderlands-3-cheat': 'borderlands 3 cheat',
  spoofer: 'borderlands 3 hwid spoofer',
  ugc: 'borderlands 3 unban tool',
};

export function primaryKeywords(): string[] {
  const out: string[] = [];
  for (const value of Object.values(PAGE_KEYWORDS)) {
    if (!value) continue;
    if (Array.isArray(value)) out.push(...value);
    else out.push(value);
  }
  return out;
}

export function keywordsForPath(pathname: string): string[] {
  const entry = PAGE_KEYWORDS[pathname];
  if (!entry) return [];
  return Array.isArray(entry) ? entry : [entry];
}