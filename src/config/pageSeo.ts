export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Borderlands 3 Cheats for Windows PC Steam | BL3 cheats',
    description:
      'Borderlands 3 cheats for Windows PC on Steam with soft aim (aimbot), enemy ESP, loot ESP and radar. BL3 cheats from $35 monthly or $150 lifetime.',
  },
  '/products/': {
    title: 'Borderlands 3 Products: Menu, Spoofer, and Unban Keys',
    description:
      'Three Windows PC checkouts on borderlands3cheats.org: the cheat menu, HWID spoofer, and unban workspace. Compare $35 and $150 plans before you pay.',
  },
  '/product/borderlands-3-cheat/': {
    title: 'Borderlands 3 Cheat Menu for Windows PC on Steam | BL3',
    description:
      'Borderlands 3 cheat for Windows PC with Soft Aim, Enemy / Mob, Loot, Radar, and Misc. BL3 cheat is $35 for 30 days or $150 lifetime from the portal.',
  },
  '/product/spoofer/': {
    title: 'Borderlands 3 HWID Spoofer for Windows PC Hardware',
    description:
      'Borderlands 3 hwid spoofer when new accounts fail on one PC but work elsewhere. BL3 hwid spoofer is $50 monthly or $150 lifetime, sold on its own.',
  },
  '/product/ugc/': {
    title: 'Borderlands 3 Unban Tool for Account Appeals on PC',
    description:
      'Borderlands 3 unban tool for templates, evidence lists, and follow-up. BL3 unban workspace is $35 monthly or $150 lifetime; restoration is not promised.',
  },
  '/blog/': {
    title: 'BL3 Windows Setup Guides, Status Colors, and Plans',
    description:
      'Published Windows PC guides on menu setup, status colors, hardware flags, and plan pricing when new Borderlands 3 guides are added to this archive.',
  },
  '/forum/': {
    title: 'Borderlands 3 Forum: Menu, Status, Setup and Support',
    description:
      'Borderlands 3 threads on a stuck menu, status colors, Secure Boot, a missing key email, configs, and HVCI. Developer replies are marked on the thread.',
  },
  '/faq/': {
    title: 'Borderlands 3 FAQ: Plans, Menu Setup, and Penalties',
    description:
      'Borderlands 3 menu prices, soft aim and loot ESP setup, Windows switches that stay on, status colors, and PC flags versus account restrictions.',
  },
  '/support/': {
    title: 'Borderlands 3 Support: Order Email, Menu Text, Discord',
    description:
      'Discord help for the Windows menu, the hardware tool, and the appeal workspace on borderlands3cheats.org. Send the order email and the exact menu line.',
  },
  '/about/': {
    title: 'About This Borderlands 3 Store: Products, and Risk',
    description:
      'About this Borderlands 3 store: three Windows products, portal delivery and the penalty risk that stays with you. Lifetime on one key covers one product.',
  },
  '/privacy/': {
    title: 'Privacy Notes on Analytics, Cookies, and Card Data',
    description:
      'Privacy policy for borderlands3cheats.org: how analytics and cookies are used, and why card numbers stay with the checkout provider, not this site.',
  },
  '/terms/': {
    title: 'Borderlands 3 Terms: Licenses, Final Sales, and Keys',
    description:
      'Personal-use licenses, the no-refund rule, and acceptable use for the menu, hardware tool, and appeal workspace sold on borderlands3cheats.org.',
  },
  '/status/': {
    title: 'Borderlands 3 Cheat Status: Green, Blue or Red Today',
    description:
      'Check the current Borderlands 3 cheat status: green, blue or red, the date it was last checked and the settings to confirm before you launch.',
  },
  '/features/': {
    title: 'Borderlands 3 Menu Feature Groups on Windows Steam',
    description:
      'Every menu line in Soft Aim, Enemy / Mob, Loot, Radar, and Misc, with the short note beside each control name. Names match the portal build.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function seoForPath(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}