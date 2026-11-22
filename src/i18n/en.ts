import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import { productPath } from '../utils/path-core';

const productBase = PRODUCT_BASE;
const rustCheatFeaturesHref = `${productPath('borderlands-3-cheat')}#features`;

export const en: Translations = {
  site: {
    name: 'Borderlands 3 Cheats',
    domain: 'borderlands3cheats.org',
    title: 'Borderlands 3 Cheats',
    description:
      'Borderlands 3 Cheats for Windows PC with aimbot, player ESP, and loot filters. Compare the cheat, HWID spoofer, and UGC recovery on borderlands3cheats.org.',
    discord: PRIMARY_CHECKOUT_PATH,
  },
  nav: [
    { href: '/', label: 'Home' },
    { href: `${productBase}`, label: 'Products' },
    { href: rustCheatFeaturesHref, label: 'Features' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
    { href: '/status/', label: 'Status' },
  ],
  headerNavLabels: {
    home: 'Home',
    products: 'Store',
    features: 'Features',
    blog: 'Blog',
    forum: 'Forum',
    faq: 'FAQ',
    support: 'Help',
    status: 'Status',
  },
  navMore: 'More',
  navShort: {
    home: 'Home',
    products: 'Products',
    features: 'Features',
    blog: 'Blog',
    forum: 'Forum',
    faq: 'FAQ',
    support: 'Support',
    status: 'Status',
  },
  hero: {
    status: 'Borderlands 3 — modules online',
    eyebrow: 'Windows PC',
    titleLine1: 'Borderlands 3 Cheats',
    titleLine2: 'Borderlands 3 Cheats',
    subtitle:
      'Borderlands 3 cheats for Windows PC on Steam and the official client—Soft Aim, Enemy / Mob, Loot, Radar, and Misc with __TOGGLE_COUNT__ toggles, plus Discord support.',
    ctaPrimary: 'View features',
    ctaDiscord: 'Buy now',
    modesLabel: 'Modes',
    modes: ['Operations', 'Warfare', 'Extraction', 'Ranked'],
    metrics: [
      { label: 'Client', strong: '' },
      { label: 'Platform', strong: 'Windows PC' },
      { label: 'Plans', strong: '$35 / $150' },
      { label: 'Support', strong: 'Discord' },
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Aimbot, player ESP, weapon options, misc options, and config options for Borderlands 3 on Windows PC.',
    items: [
      {
        title: 'Aimbot',
        subtitle: 'FOV, smooth, and bone.',
        desc: 'Aim assist with a cone, a speed curve, and a bone choice so the pull stays on the operator you are already fighting.',
        bullets: [
          'FOV, smooth, speed, and stickiness',
          'Bone selection: closest, head, neck, or chest',
          'Visible check and ignore knocked',
          'Two keybinds, including a controller bind',
          'Draw FOV and a target line while you tune',
        ],
        tags: ['aimbot', 'fov', 'smooth'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player visuals',
        subtitle: 'Read a fight without a wall of labels.',
        desc: 'Skeleton, box, health, distance, and gear levels, with a max distance so far operators drop off.',
        bullets: [
          'Skeleton, head circle, box, and health',
          'Name, team number, weapon, and view direction',
          'Helmet, armor, and chest bag level',
        ],
        tags: ['player esp', 'skeleton', 'health'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Loot',
        subtitle: 'Name, rarity, and price.',
        desc: 'Item labels with a minimum price filter, plus player corpses, AI corpses, and computers as separate markers.',
        bullets: ['Item name, rarity, and price', 'Minimum price filter', 'Player and AI corpses'],
        tags: ['loot', 'rarity', 'price filter'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'Weapon options',
        subtitle: 'Recoil, spread, and sway.',
        desc: 'Weapon options cover recoil, spread, sway, and melee reach. ESP labels stay a separate group.',
        bullets: ['Recoil, spread, and sway', 'Melee reach and fire-rate lines', 'Separate from the aimbot group'],
        tags: ['weapon', 'recoil', 'spread'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Camera',
        subtitle: 'View width, not aim width.',
        desc: 'Camera FOV, third person, and arm or weapon scale. Aim FOV stays in the aimbot group.',
        bullets: [
          'Camera FOV changer',
          'Third person on a hotkey',
          'Arm and weapon scale',
          'Crosshair and combat-mode hides',
        ],
        tags: ['camera fov', 'third person', 'scale'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Config',
        subtitle: 'Save the layout you tested.',
        desc: 'Store aimbot, ESP, weapon options, misc options, and config options instead of retuning after every launch.',
        bullets: ['Save and load configs', 'One slider change at a time', 'Reload after an  patch'],
        tags: ['config', 'presets', 'save'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Plans',
        subtitle: '$35 month or $150 lifetime.',
        desc: 'Same two prices on the cheat, the HWID spoofer, and UGC. Each product is its own checkout.',
        bullets: ['Monthly is 30 days', 'Lifetime does not include the spoofer', 'No weekly plan'],
        tags: ['$35', '$150', 'plans'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'HWID and UGC',
        subtitle: 'PC flag versus account case.',
        desc: 'The spoofer is for a machine that fails new accounts. UGC is the appeal workspace. Neither ships inside the cheat key.',
        bullets: ['HWID spoofer is a separate product', 'UGC tracks appeal steps', 'Same $35 and $150 prices'],
        tags: ['hwid', 'ugc', 'separate'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Windows requirements',
        subtitle: 'Leave security features on.',
        desc: 'Windows 10 or 11, Intel or AMD, with HVCI, core isolation, TPM, and secure boot on.',
        bullets: ['Windows 10 and 11', 'HVCI and core isolation on', 'TPM and secure boot on'],
        tags: ['windows', 'secure boot', 'tpm'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Read the build note, then pick one key',
    subtitle:
      'One cheat product, one HWID spoofer, and one UGC recovery workspace. Prices stay $35 monthly or $150 lifetime, and a ban is still possible under .',
    usLabel: 'Borderlands 3 Cheats',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day Menu updates',
        desc: 'Check borderlands3cheats.org after a Borderlands 3 or  update before you open the menu.',
      },
      {
        title: 'Separate aim sliders',
        desc: 'Aim smooth, FOV, and bone choice are separate sliders. Change one at a time and save the config.',
      },
      {
        title: 'Menu and config help',
        desc: 'Setup questions cover the Windows menu, saved configs, and which product matches a hardware flag versus an account case.',
      },
      {
        title: 'Separate product checkouts',
        desc: 'The cheat, the HWID spoofer, and UGC recovery stay separate checkouts. Lifetime on the cheat does not add the spoofer.',
      },
      {
        title: 'Saved configs',
        desc: 'Save aimbot, ESP, weapon options, misc options, and config options instead of rebuilding them each launch.',
      },
      {
        title: 'HWID is its own product',
        desc: 'A machine that fails new accounts is the spoofer case. An account-only restriction is the UGC case. Neither is included with the cheat key.',
      },
    ],
    metrics: [
      {
        value: '',
        title: 'Check after a patch',
        desc: 'Recheck the site after a Borderlands 3 or  update before you launch.',
      },
      {
        value: '2',
        title: 'Plans on every card',
        desc: 'Monthly is $35 for 30 days. Lifetime is $150. There is no weekly plan.',
      },
      {
        value: '3',
        title: 'Separate products',
        desc: 'Borderlands 3 Cheats, the HWID spoofer, and UGC recovery. Each one is its own key.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to ranked queue in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is checkout, the portal menu file, then a saved config. Check the site after an  update before you launch Borderlands 3.',
    ctaPrimary: 'View features',
    ctaSecondary: 'Setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    statusStrip: {
      aceStatusCta: 'Check  status',
      aceStatusHref: '/status/',
      perks: [
        { icon: 'instantDelivery', label: 'Digital delivery' },
        { icon: 'support247', label: 'Discord support' },
        { icon: 'refresh', label: 'Lifetime updates' },
      ],
    },
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download the menu build',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch menu build build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the menu, then tune aimbot, ESP, weapon options, and misc options one slider at a time.',
      },
      {
        step: 'Step 3',
        title: 'Check status, then launch',
        desc: 'Confirm the site is current for this client, then open Borderlands 3 with the config you saved.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the site after a Borderlands 3 or  update before you launch.',
    items: ['Windows 10 & 11', 'Intel or AMD', 'HVCI on', 'Core isolation on', 'TPM on', 'Secure boot on'],
  },
  cheats: {
    eyebrow: 'Game cheat',
    title: 'Borderlands 3 Cheats',
    subtitle: 'Soft Aim, Enemy / Mob, Loot, Radar, and Misc for Steam and the official client.',
    viewAll: 'View details',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        tier: 'Full suite',
        name: 'Borderlands 3',
        title: 'Borderlands 3 Cheats',
        desc: 'Windows menu with Soft Aim, Enemy / Mob, Loot, Radar, and Misc for Steam and the official client.',
        features: [
          'Soft aim · FOV · smoothing · bones',
          'Enemy ESP · health bar · distance',
          'Loot rarity ESP · drop filters',
        ],
        more: 29,
        href: '/product/borderlands-3-cheat/',
        variant: 'popular',
      },
    ],
  },
  products: {
    eyebrow: 'Products',
    title: 'Products & pricing',
    subtitle: 'Borderlands 3 Cheats, HWID spoofer, and UGC Account recovery—same USD plans on Windows PC.',
    viewAll: 'View details',
    get: 'Buy now',
    explore: 'Explore',
    items: [
      {
        badge: 'Active',
        category: 'HWID spoofer',
        title: 'HWID Spoofer',
        subtitle: 'Hardware ID recovery',
        desc: 'HWID spoofer with cleaner—rotate disk, MAC, and GPU IDs before relaunching after hardware flags.',
        features: ['Hardware spoofer + cleaner', 'Compatibility scan', 'Verification steps', 'Portal workflow'],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Active',
        category: 'UGC Account recovery',
        title: 'UGC Account recovery',
        subtitle: 'Appeals & recovery',
        desc: 'UGC Account recovery workspace—custom appeal workflows, templates, and restriction tracking.',
        features: ['Custom appeal workflows', 'Multi-platform profiles', 'Template library', 'Status dashboard'],
        more: 4,
        href: `${productBase}ugc/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'Setup notes, aimbot and ESP guides, loot explainers, and pricing answers for Borderlands 3 on Windows PC.',
    latestTitle: 'Rust guides for aim, ESP, loot and setup',
    latestSubtitle: 'Filter by topic or sort to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    sortLabel: 'Sort by',
    sortNewest: 'Newest first',
    sortOldest: 'Oldest first',
    sortShortRead: 'Shortest read',
    sortLongRead: 'Longest read',
    emptyFilter: 'No articles match this filter.',
    emptyCatalog: 'Guides are coming soon. Browse products or FAQ for help today.',
    viewAll: 'View all articles',
    read: 'Read',
    items: [],
  },
  toolkit: {
    eyebrow: 'Software',
    title: 'Organized, easy to configure',
    subtitle: 'Every module is grouped for quick tuning mid-match without tabbing through chaos.',
    items: [
      { num: '01', label: 'Aim', title: 'Cone, speed, and bone', desc: 'FOV, smooth, speed, stickiness, visible check, and a head, neck, chest, or closest bone.' },
      { num: '02', label: 'Visuals', title: 'Labels you can actually read', desc: 'Skeleton, box, health, gear level, and a max distance so the fight stays clear.' },
      { num: '03', label: 'Loot', title: 'Price filter first', desc: 'Item name, rarity, price, corpses, and computers, with a minimum price so junk drops off.' },
      { num: '04', label: 'Weapon', title: 'Recoil, spread, and sway', desc: 'Weapon options cover recoil, spread, sway, and melee reach. They stay separate from ESP labels.' },
      { num: '05', label: 'Camera', title: 'View width, not aim width', desc: 'Camera FOV, third person, arm and weapon scale, and combat-mode hides.' },
      { num: '06', label: 'Config', title: 'Save the layout', desc: 'Store the sliders you tested so the next launch does not start from zero.' },
    ],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from a status check to a saved Rust config.',
    ctaLabel: 'View products',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check  status',
        desc: 'Read borderlands3cheats.org after a client or  update before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose the product',
        desc: 'Borderlands 3 Cheats, HWID Spoofer, or UGC. Monthly is $35. Lifetime is $150. They are separate keys.',
      },
      {
        num: '03',
        phase: 'Menu',
        title: 'Launch & configure',
        desc: 'Download from the portal. Leave HVCI, core isolation, TPM, and secure boot on.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When the aim cone and the ESP labels feel right, save the config.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Field notes',
    title: 'Built for Borderlands 3 on Windows PC.',
    items: [
      { num: '01', title: 'Patch-day check', desc: 'Read the site after an  or client update. A banner from yesterday is not a current build.' },
      { num: '02', title: 'One slider at a time', desc: 'Change FOV, smooth, or distance alone so you know which setting caused the pull or the clutter.' },
      { num: '03', title: 'Separate products', desc: 'The cheat, the HWID spoofer, and UGC recovery are three checkouts. Lifetime on one does not unlock the others.' },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Borderlands 3 Cheats support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Ask about the cheat, the spoofer, or UGC before you pay.',
        linkLabel: 'Buy now',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'messageCircle',
        title: 'Community forum',
        desc: 'Setup, aim, ESP, and plan questions with marked developer replies.',
        linkLabel: 'Open the forum',
        href: '/forum/',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup—before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord support',
        desc: 'Support is available on Discord.',
        linkLabel: 'Open contact page',
        href: '/support/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on borderlands3cheats.org.' },
      { title: 'Platform', desc: 'Windows 10 or 11, and whether HVCI, core isolation, TPM, and secure boot are on.' },
      { title: 'Error detail', desc: 'The exact menu message, not a paraphrase.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access—no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if Borderlands 3 Cheats are online?',
        a: 'Read borderlands3cheats.org after a Borderlands 3 or  update. A banner from yesterday is not a current build.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Checkout opens the portal with the menu. Save a config after you tune aim and visuals. Leave HVCI, core isolation, TPM, and secure boot on.',
      },
      {
        num: '03',
        q: 'Can I get banned using Borderlands 3 Cheats?',
        a: 'Yes.  can act on the account. Nothing on this site is a guarantee that a session stays clean.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'Windows 10 or 11 on Intel or AMD, with HVCI, core isolation, TPM, and secure boot on. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'A hardware flag is the HWID Spoofer, sold separately. Open a support ticket with the order email if the same key needs another PC.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Borderlands 3 Cheats, HWID Spoofer, and UGC Account recovery are on the products page. Each one is $35 monthly or $150 lifetime.',
      },
    ],
  },
  footer: {
    tagline: 'Borderlands 3 Cheats, HWID spoofer, and UGC recovery for Windows PC. borderlands3cheats.org',
    explore: 'Explore',
    exploreLinks: [
      { href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/product/borderlands-3-cheat/', label: 'Borderlands 3 Cheats', ariaLabel: 'Borderlands 3 Cheats' },
      { href: '/products/', label: 'All products', ariaLabel: 'Products' },
      { href: '/blog/', label: 'Read patch guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Legal',
    moreSites: 'More sites',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About this Borderlands 3 store',
      description:
        'borderlands3cheats.org sells Borderlands 3 Cheats, an HWID spoofer, and UGC account recovery for Windows PC, with setup notes and honest ban risk.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            'borderlands3cheats.org is a Windows PC store for Borderlands 3 Cheats, an HWID spoofer, and UGC account recovery. The cheat is one product: aimbot, ESP, weapon options, misc options, and config options. It is not a ladder of Lite, Pro, and Elite tiers, and it is not a DMA card.',
            'Checkout is $35 for 30 days or $150 lifetime on each product. Those prices match across the three cards. A lifetime key on the cheat does not include the spoofer or the recovery workspace. Starting on a month does not promise a credit toward lifetime.',
            'Product names on this site identify what we sell. They are not a claim that the game publisher endorses the software. Delivery is a portal download for Windows 10 or 11. You keep HVCI, core isolation, TPM, and secure boot on, then open the menu only when the site still matches the current client.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'The [Borderlands 3 Cheats](/product/borderlands-3-cheat/) page lists the menu names and the Windows requirements: Windows 10 or 11, Intel or AMD, with HVCI, core isolation, TPM, and secure boot left on. The [products page](/products/) is where you compare the cheat, the [HWID Spoofer](/product/spoofer/), and [UGC Account recovery](/product/ugc/).',
            'Guides on the [blog](/blog/) explain aim FOV versus camera FOV, how loot filters work, and why a hardware flag is a different buy from an account appeal. The [forum](/forum/) is for those same questions, with developer replies marked on the thread. Read the [terms](/terms/) before checkout. Sales are final, including bans.',
            ' can still act on an account. Nothing here is a guarantee that a session stays clean after the next patch. Check this site after a client update before you open the menu. If the page is not current for that build, leave the software closed.',
            'Status notes on the homepage describe whether the published build still matches the client. They are not a promise that  will ignore the software. If you are unsure, leave the menu closed and read the matching guide on the blog before you queue again.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Menu errors, a key that will not move, and checkout questions go through the [support page](/support/). Include the order email, Windows version, and the exact menu text. Do not turn HVCI, core isolation, TPM, or secure boot off because a chat message from another game said to.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How borderlands3cheats.org handles analytics, cookies, and contact data.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages. We do not store payment card data on borderlands3cheats.org.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for products sold on borderlands3cheats.org.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: October 2026. By using borderlands3cheats.org or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell Borderlands 3 Cheats, an HWID spoofer, and UGC account recovery. Each product is its own license: $35 for 30 days or $150 lifetime, delivered through a portal and menu for Windows PC.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when Borderlands 3 or  updates. A lifetime cheat key does not include the spoofer or UGC.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. borderlands3cheats.org does not process or store payment card numbers.',
            'After purchase, use the portal from your order to download the current menu build before you launch Borderlands 3. Leave HVCI, core isolation, TPM, and secure boot on.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share menu files, portal logins, or license keys. A hardware-ID problem is a separate HWID Spoofer purchase.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans,  penalties, or issues caused by ignoring the setup notes or launching while the site is not current for that patch.',
            'If the product does not work as described on a supported setup—Windows 10 or 11 with HVCI, core isolation, TPM, and secure boot on, and the current menu build from the portal—contact us through the Support page. Include your order email, Windows version, and the exact menu text.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for Borderlands 3 can conflict with game updates and . You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not queue ranked while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or menu questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: 'Borderlands 3 Cheats support',
      description:
        'Menu, HWID spoofer, UGC, and checkout help for borderlands3cheats.org.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheats: 'Buy now',
    browseCheatsMobile: 'Buy now',
    homeAria: 'Borderlands 3 Cheats home',
    checkoutAria: 'Buy now',
    discordAria: 'Buy Borderlands 3 Cheats',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeLight: 'Switch to light mode',
    themeDark: 'Switch to dark mode',
    searchPlaceholder: 'Search products, guides, FAQ…',
    searchEmpty: 'Type to search the site.',
    searchNoResults: 'No results. Try another term.',
    searchCloseAria: 'Close search',
    searchTitle: 'Search',
    searchOpenAria: 'Search site',
  },
};
