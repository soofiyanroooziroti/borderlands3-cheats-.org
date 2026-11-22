import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES, localizedPath, localizedRoutes, cheatPath } from '../utils/path-core';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('Borderlands 3 Cheats', productPath('borderlands-3-cheat'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('spoofer'));
const ugc = link('UGC Account recovery', productPath('ugc'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What do the three Borderlands 3 products cost, and do keys overlap?',
    a: `${cheats} and ${ugc} are $35 for 30 days or $150 lifetime. ${hwid} is $50 for 30 days or $150 lifetime. Each key is its own checkout on the ${productsHub}, not one bundle for the game menu, the PC tool, and appeals.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does a lifetime Borderlands 3 menu key include the hardware tool?',
    a: 'No. Lifetime on Borderlands 3 Cheats covers the Windows menu only. The HWID spoofer and UGC recovery are separate keys. The spoofer is $50 monthly or $150 lifetime. The menu and UGC are $35 monthly or $150 lifetime. Paying for 30 days does not credit toward lifetime.',
    scopes: ['borderlands-3-cheat', 'hwid-spoofer', 'ugc'],
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can support move my Borderlands 3 menu key to another PC for free?',
    a: 'Write support with the order email. If new Gearbox accounts fail only on that machine, the next purchase is the HWID Spoofer. That is not a free transfer of the menu key.',
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What does Borderlands 3 need on Windows before I open the menu?',
    a: 'Windows 10 or 11 with Borderlands 3 on Steam or the official client. HVCI, core isolation, TPM, and secure boot stay on. Cloud DMA is needed. macOS and Linux are not supported.',
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What is in the portal after I pay for the Borderlands 3 menu?',
    a: `The portal for the product you paid for, with that product’s Windows build. Set the aim key and aim FOV, or loot rarity ESP for a Mayhem run, then use config save / load. Check the ${link('status page', '/status/')} before you launch. Leave HVCI, core isolation, TPM, and secure boot on.`,
  },
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What do green, red, and blue mean before I queue Borderlands 3?',
    a: 'Green means the build is updated and you can open the menu. Red means it is not updated and should stay closed. Blue means the build is still being updated for the current client.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I still get banned while playing Borderlands 3 online?',
    a: 'Yes. Bans are possible and no option removes the risk. Co-op and Mayhem Mode do not change that.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'New Borderlands 3 accounts fail on this PC but work elsewhere. Wrong product?',
    a: `That pattern is a hardware flag on the PC. The matching product is the ${hwid}, sold on its own. It does not unlock an account-only restriction, and lifetime on ${cheats} does not include it.`,
  },
  {
    id: 'ugc-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What does the appeal workspace actually change?',
    a: `${ugc} holds templates, evidence lists, and follow-up reminders. It does not promise the account comes back, and it is not the HWID spoofer.`,
    scopes: ['ugc'],
  },
  {
    id: 'spoofer-scope',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Which product matches a PC that rejects new accounts?',
    a: `Buy ${hwid} when a new account fails on one PC and works on another. That purchase does not clear an account-only restriction. Use ${ugc} for the account case.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'not-dma',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Does Borderlands 3 checkout include a physical DMA card?',
    a: `No. ${cheats} is a Windows menu from the portal. A DMA card is hardware sold elsewhere. Cloud DMA is needed as a Misc setup note, not as part of this key. Do not run a random download from search.`,
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'aim-fov-distance',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'In Borderlands 3 fights, do aim FOV and max aim distance share one slider?',
    a: 'No. Aim FOV sets how wide soft aim searches. Max aim distance stops soft aim past the range you set. Tune FOV first in co-op, then set max distance.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'visible-check',
    topic: 'scripts',
    icon: 'faqWhatIsEsp',
    q: 'Does visible check hide enemy ESP through cover in Borderlands 3?',
    a: 'No. Visible check only gates soft aim when the target is in line of sight. Enemy ESP, health bar, and distance can still draw while that check is on.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'ignore-teammates',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Soft aim pulls toward a co-op partner in Borderlands 3. Which toggle fixes that?',
    a: 'Turn on ignore teammates / allies so soft aim skips friendly teammates / allies. Enemy ESP can still show allies if you leave that group on.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'bone-selection',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What does bone selection change after soft aim is on?',
    a: 'Bone selection picks head, chest, or closest on targets soft aim is allowed to use. Set visible check and max distance first, then pick the bone.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'aim-key',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Where do I bind the key that toggles soft aim in Borderlands 3?',
    a: 'Aim key is in the Soft Aim group. Custom menu key and custom panic key sit under Misc. Bind each before your first Mayhem or co-op session.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'esp-clutter',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Enemy markers clutter a Mayhem fight. What stays on first?',
    a: 'Start with enemy ESP, health bar, and distance. Add elite / boss markers and weak-point highlight only when a boss fight needs them, not all at once.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'loot-filters',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Loot labels flood the screen during Mayhem farming. What do I change first?',
    a: 'Set gear / weapon drop filters and loot rarity ESP together. Chest / cache markers and mission objective markers are separate toggles in the Loot group.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'radar-range',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'For the 2D radar in co-op, do radar range and radar zoom match?',
    a: 'No. Radar range sets how far the 2D radar looks. Radar zoom changes how large the radar panel appears. 2D radar and player markers can stay on while you tune those.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'stream-proof',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'What does stream-proof overlay change while I stream Borderlands 3?',
    a: 'Stream-proof overlay tries to hide the menu and on-screen draws from common capture tools. It does not change soft aim or enemy ESP logic. Bans are still possible.',
    scopes: ['borderlands-3-cheat'],
  },
  {
    id: 'cloud-dma-note',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What does Cloud DMA needed mean for Borderlands 3?',
    a: 'Cloud DMA is needed. It is a setup note in Misc, not a second product. Read borderlands3cheats.org before you change it. Your checkout is still the Windows menu from the portal.',
    scopes: ['borderlands-3-cheat'],
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'hwid-ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Pick a topic',
  subtitle: 'Borderlands 3 prices, status colors, soft aim, loot ESP, the hardware tool, appeals, and Windows setup.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Short answers for this page. The FAQ page holds the full list.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, _kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter((f) => !f.scopes);
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = [...scoped, ...general];
  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Do these Borderlands 3 guides replace the product page?',
    a: `They explain a workflow and link to ${cheats}. Soft Aim, Enemy / Mob, Loot, Radar, and Misc on that page match checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'The guide steps did not match my menu before co-op. Who do I write?',
    a: 'Open support with the order email and the article title. If the menu printed a line on screen, paste that line exactly.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Should I copy aim FOV from an old post after a Gearbox update?',
    a: 'Check the status page after every Borderlands 3 client update. Load the config you saved with config save / load instead of copying numbers from an article.',
  },
];

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return defaultBlogFaqs;
}

export const compareRows = [
  { feature: 'Soft Aim', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Enemy ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot ESP', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: '2D radar', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'No recoil / spread', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save / load', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
