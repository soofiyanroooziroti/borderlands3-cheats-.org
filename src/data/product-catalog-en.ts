import type { AcquisitionStep, ProductSlide, SystemRequirement } from './product-types';
import type { Block } from './product-locale-types';
import { RUST_CHEAT_FEATURE_GROUPS } from './rust-cheat-feature-groups';
import { SPOOFER_FEATURE_GROUPS } from './spoofer-feature-groups';

const ESP_CAPTION = 'Enemy box ESP in Borderlands 3';

function borderlandsEspSlides(): ProductSlide[] {
  return ([1, 2, 3, 4] as const).map((n) => ({
    src: `/images/borderlands-3-esp-${n}.webp`,
    alt: `Borderlands 3 gameplay with enemy box ESP ${n}`,
    caption: ESP_CAPTION,
    captionDesc: '',
    width: 1280,
    height: 720,
  }));
}

/** Home hero slider captions — image paths come from images.json slots. */
export const cheatHomeHeroSlides: ProductSlide[] = borderlandsEspSlides();

export const acquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Check status',
    desc: 'Read borderlands3cheats.org and confirm the modules are listed before you pay, especially after a Borderlands 3 client update.',
  },
  {
    num: '02',
    title: 'Pick a plan',
    desc: 'Pick 30 days or lifetime. The dollar amount depends on which product you opened, not a shared price for all three.',
  },
  {
    num: '03',
    title: 'Pay on the portal',
    desc: 'Finish payment on the portal. The key is delivered right away.',
  },
  {
    num: '04',
    title: 'Install & verify',
    desc: 'Follow the setup notes, load a modest preset, and try a quiet server before a main session.',
  },
];

export const utilitySlides = {
  spoofer: [
    {
      src: '/images/products/rust-hwid-spoofer-hero.webp',
      alt: 'HWID spoofer on Windows PC',
      caption: 'HWID spoofer',
      captionDesc: 'Hardware fingerprint tools before you relaunch.',
    },
    {
      src: '/images/products/rust-hwid-spoofer-board.webp',
      alt: 'Phoenix Satano HWID spoofer hardware fingerprint rotation on Windows PC',
      caption: 'Phoenix board',
      captionDesc: 'Disk, MAC, and GPU ID rotation.',
    },
    {
      src: '/images/products/rust-hwid-spoofer-wh.webp',
      alt: 'Phoenix WH-Satano spoofer branding on Windows PC',
      caption: 'Phoenix WH',
      captionDesc: 'Spoofer workspace used on every store.',
    },
  ],
  ugc: [
    {
      src: '/images/products/ugc-account-recovery.webp',
      alt: 'Borderlands 3 unban tool workspace preview on Windows PC',
      caption: 'Account recovery',
      captionDesc: 'Templates, evidence lists, and follow-up in one workspace.',
    },
  ],
} as const;

export const cheatsContent = {
  images: borderlandsEspSlides(),
  goodToKnow:
    'Borderlands 3 and  change often. Read borderlands3cheats.org before you launch. After a patch, overlays can look different in menus or while you are spectating.',
  limitations:
    'Third-party software can break the game rules and lead to penalties. You accept that risk. A game or Windows update can change whether the build still runs, without a separate notice.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10/11' },
    { icon: 'reqSteam', text: 'Steam / official client' },
    { icon: 'reqShieldGuide', text: 'HVCI ON' },
    { icon: 'reqSettings', text: 'CORE ISOLATION ON' },
    { icon: 'shieldCheck', text: 'TPM ON' },
    { icon: 'reqShieldAccount', text: 'SECURE BOOT ON' },
  ] as SystemRequirement[],
  featureGroups: RUST_CHEAT_FEATURE_GROUPS,
  overview: {
    title: 'Windows Borderlands 3 cheat loader',
    paragraphs: [
      'This Borderlands 3 cheat loader lists Soft Aim, Enemy / Mob, Loot, Radar, and Misc on this page for Steam and the official client. Updates continue while the key is active. Discord can help with setup.',
      'Read borderlands3cheats.org before you launch, especially after a Borderlands 3 client patch.',
    ],
  },
  body: [
    { type: 'h2', text: 'What the menu groups are' },
    {
      type: 'p',
      text: 'Soft Aim, Enemy / Mob, Loot, Radar, and Misc. Each line in the feature section has the menu name and a short note.',
    },
    { type: 'h2', text: 'What you pay' },
    {
      type: 'p',
      text: '$35 USD for 30 days (P30D) or $150 USD lifetime (P99Y). Delivery is digital after checkout, worldwide.',
    },
  ] as Block[],
};

export const spooferContent = {
  images: [...utilitySlides.spoofer],
  goodToKnow:
    'The hardware tool changes identifiers the PC reports. It does not lift an account penalty by itself. Follow the portal steps before you open Borderlands 3 again.',
  limitations:
    'Changing hardware identifiers has technical risk and can conflict with game rules. Results depend on the penalty type and the drivers. Use it only on a PC you own.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator rights.' },
    { icon: 'reqRestorePoint', text: 'Create a restore point before running hardware tools.' },
    { icon: 'reqWifi', text: 'Stable internet for activation and verification steps.' },
  ] as SystemRequirement[],
  fullFeatures: SPOOFER_FEATURE_GROUPS.flatMap((group) => group.items.map((item) => item.name)),
  featureGroups: SPOOFER_FEATURE_GROUPS,
  overview: {
    title: 'Borderlands 3 hwid ban bypass',
    paragraphs: [
      'This Borderlands 3 hwid ban bypass rotates the hardware profile when a machine flag is why you need a different PC context before you open Borderlands 3 again.',
      'Thirty days and lifetime use the same portal checkout as the other products. The price on this card is its own.',
    ],
  },
  body: [
    { type: 'h2', text: 'When this key matches the problem' },
    {
      type: 'p',
      text: 'Use it when new accounts fail on one PC and work on another. It is the wrong key for an account-only penalty. After the checks pass, start the menu on a modest preset.',
    },
    { type: 'h2', text: 'What you pay' },
    { type: 'p', text: '$50 USD for 30 days (P30D) or $150 USD lifetime (P99Y).' },
  ] as Block[],
};

export const ugcContent = {
  images: [...utilitySlides.ugc],
  goodToKnow:
    'Collect the order details, account facts, and screenshots of the restriction before you open a ticket. This workspace organizes the appeal. It does not skip the platform review.',
  limitations:
    'The workspace does not promise the account will be restored. Outcomes depend on the case and on platform policy.',
  systemRequirements: [
    { icon: 'reqWindows', text: 'Windows 10 or 11 (64-bit).' },
    { icon: 'reqWifi', text: 'Internet access for workflow sync and updates.' },
    { icon: 'reqSettings', text: 'Administrator access for installation.' },
  ] as SystemRequirement[],
  fullFeatures: [
    'Custom appeal workflows',
    'Multi-platform recovery workspace',
    'Template library',
    'Automation for repetitive steps',
    'Restriction tracking dashboard',
    'Secure portal delivery',
    'Monthly and lifetime USD plans',
  ],
  overview: {
    title: 'Windows Borderlands 3 account recovery',
    paragraphs: [
      'This Borderlands 3 account recovery workspace organizes appeals: templates, evidence lists, and reminders to follow up.',
      'Delivery is digital after checkout. Discord can answer setup questions.',
    ],
  },
  body: [
    { type: 'h2', text: 'How a case is laid out' },
    {
      type: 'p',
      text: 'Build a custom appeal path, repeat the routine steps, and track status when a Borderlands 3 account is locked or restricted.',
    },
    { type: 'h2', text: 'What goes in the packet' },
    {
      type: 'p',
      text: 'Checklists keep screenshots, timestamps, and the policy section you are citing inside each appeal packet.',
    },
    { type: 'h2', text: 'What you pay' },
    { type: 'p', text: '$35 USD for 30 days (P30D) or $150 USD lifetime (P99Y).' },
  ] as Block[],
};
