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

const cheats = link('Rust Cheats', productPath('rust-cheat'));
const productsHub = link('products page', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('spoofer'));
const ugc = link('UGC Account recovery', productPath('ugc'));

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What are the three prices, and are the keys shared?',
    a: `${cheats} and ${ugc} are $35 for 30 days or $150 lifetime. ${hwid} is $50 for 30 days or $150 lifetime. The ${productsHub} lists them as three checkouts, not one bundle.`,
  },
  {
    id: 'plans-same-price',
    topic: 'plans',
    icon: 'faqComparePlans',
    q: 'Does a lifetime menu key also cover the hardware tool?',
    a: 'No. Lifetime on Rust Cheats covers that product only. The HWID spoofer and UGC recovery are separate keys. The spoofer is $50 monthly or $150 lifetime. The menu and UGC are $35 monthly or $150 lifetime. Paying for a month does not create a credit toward lifetime.',
    scopes: ['rust-cheat', 'hwid-spoofer', 'ugc'],
  },
  {
    id: 'license-move',
    topic: 'products',
    icon: 'faqLicenseMove',
    q: 'Can support move the menu key onto another computer for free?',
    a: 'Write support with the order email. If new accounts fail on that machine, the next purchase is the HWID Spoofer. That is not a free transfer of the menu key.',
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which operating systems and Windows switches are required?',
    a: 'Windows 10 or 11 on Intel or AMD. HVCI, core isolation, TPM, and secure boot stay on. macOS and Linux are not supported.',
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What shows up in the portal after payment?',
    a: 'The portal for the product you paid for, with that product’s loader. Tune the menu, then store a config. Leave HVCI, core isolation, TPM, and secure boot on.',
  },
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What do the green, red, and blue status labels mean?',
    a: 'Green means the build is updated and can be used. Red means it is not updated and should stay closed. Blue means developers are still updating it.',
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can EasyAnti-Cheat still act on the account?',
    a: 'Yes. EasyAnti-Cheat can penalize the account. Nothing on this site promises that a session will avoid a penalty.',
  },
  {
    id: 'hwid-ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'New accounts fail on this PC and work on another. Is that the menu key?',
    a: `That pattern is a hardware flag on the PC. The matching product is the ${hwid}, sold on its own. It does not lift an account-only restriction, and lifetime on ${cheats} does not include it.`,
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
    q: 'Does this checkout include a DMA card?',
    a: 'No. Rust Cheats is a Windows loader from the portal. A DMA device is a different product and is not what this key delivers. Do not run a file you found in a search result.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'aim-vs-camera',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Do camera FOV and aim FOV share one slider?',
    a: 'No. Camera FOV sets how wide the view is. Aim FOV is only the cone the assist searches. Set the camera first, then adjust aim FOV again.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'visible-check',
    topic: 'scripts',
    icon: 'faqWhatIsEsp',
    q: 'Does visible check stop boxes from drawing through cover?',
    a: 'No. Visible check only decides when aim assist may engage: in line of sight, not through solid cover. Skeleton and box ESP are separate toggles and can still draw while that check is on.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'ignore-knocked',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Aim keeps sticking to a downed player. Which toggle changes that?',
    a: 'Turn on Ignore Knocked so aim assist skips players who are already down. Show Knocked only keeps those bodies on the overlay. Turning one on does not turn the other off.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'bone-and-filter',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'The aim filter is already on. What does bone selection still do?',
    a: 'The filter limits which models the assist may pick. Bone selection then prefers Closest, Head, Neck, or Chest on those models. Set the filter first, then the bone.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'controller-binds',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Can one of the aim keys be a controller button without a remap app?',
    a: 'Yes. This build has two aim keys, and one of them can be a native controller bind. You do not install a separate remap app for that second key.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'esp-clutter',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Player labels cover the fight. What should stay on first?',
    a: 'Leave box or skeleton, health, and distance. Add gear levels only if you actually read them. A max distance drops far players. Weapon options are another menu, not a substitute for those labels.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'squad-read',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'How do I separate groups without adding more boxes?',
    a: 'Use team number, hero name, and view direction. A head circle marks the head hitbox. Snaplines run from your view to a player. Leave helmet, armor, and chest-bag levels off until you read them.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'loot-price-floor',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'Item names still fill every container. What do I change first?',
    a: 'Set a minimum price so cheaper items drop off. Keep player corpses, AI corpses, and computers as their own markers instead of hiding the whole loot group. Color, size, transparency, and brightness sit on the player visual group, not on that price floor.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'stickiness-vs-smooth',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Are smooth, stickiness, and speed the same slider?',
    a: 'No. Smooth slows how fast the crosshair closes the gap. Stickiness holds the assist on the current player a little longer when they strafe or leave the edge of the cone. Speed is a third slider: how fast the assist moves once a target is already inside that cone. Change one, then save the config.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'scale-and-crosshair',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Do arm scale and weapon scale move the same mesh?',
    a: 'No. Arms scale offset moves the arms on X, Y, and Z. Weapon scale offset moves the gun on its own axes. Enable Crosshair only draws a fixed center mark. Third person is a separate hotkey and does not change either scale.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'combat-mode',
    topic: 'scripts',
    icon: 'faqExternalLoader',
    q: 'Does combat mode switch aim off?',
    a: 'No. Combat mode hides the markers you pick: player, AI, item, dead container, or computer. Aim and misc options stay on until you toggle those groups yourself.',
    scopes: ['rust-cheat'],
  },
  {
    id: 'encryption-bypass',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'What is the encryption bypass line under Misc?',
    a: 'It is one Misc menu option in this build. It is not a second product and it is not a hardware card. Leave it off unless the current note on cheatsforrust.net says to use it for this client.',
    scopes: ['rust-cheat'],
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
  subtitle: 'Prices, labels, the loader, the hardware tool, appeals, and Windows setup.',
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
    q: 'Do these articles replace the product page?',
    a: `They explain a workflow and link to ${cheats}. The names on that page are the list that matches checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'The steps in a post did not match my loader. Who do I write?',
    a: 'Open support with the order email and the article title. If the loader printed a line, paste that line exactly.',
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Should I copy slider numbers from an older post after a patch?',
    a: 'Read the site again after every Rust or EasyAnti-Cheat update. Load the config you saved instead of copying numbers out of an article.',
  },
];

export function getBlogFaqs(_tag: string, _slug: string): SiteFaqItem[] {
  return defaultBlogFaqs;
}

export const compareRows = [
  { feature: 'Aimbot options', icon: 'comparePlayerEsp' as const, lite: true, pro: true, elite: true },
  { feature: 'Player ESP', icon: 'compareWardLocator' as const, lite: true, pro: true, elite: true },
  { feature: 'Loot filter', icon: 'compareRuneTimer' as const, lite: true, pro: true, elite: true },
  { feature: 'Weapon options', icon: 'compareZoomHack' as const, lite: true, pro: true, elite: true },
  { feature: 'Camera FOV', icon: 'compareStreamproof' as const, lite: true, pro: true, elite: true },
  { feature: 'Config save', icon: 'compareCloudBackup' as const, lite: true, pro: true, elite: true },
];
