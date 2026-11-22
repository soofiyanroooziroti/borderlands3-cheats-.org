import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const AFFILIATE_CHEAT =
  'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fborderlands-3';

const files = [];
function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === 'node_modules' || ent.name === 'dist' || ent.name === '.astro') continue;
      walk(full);
    } else if (/\.(json|ts|astro|mjs|md|txt|webmanifest)$/.test(ent.name)) {
      files.push(full);
    }
  }
}
walk(path.join(root, 'src'));
walk(path.join(root, 'public'));
walk(path.join(root, 'scripts'));

const replacements = [
  [/cheatsforrust\.net/gi, 'borderlands3cheats.org'],
  [/Borderlands 3 Cheats/g, 'Borderlands 3 Cheats'],
  [/\bRust cheats\b/g, 'Borderlands 3 cheats'],
  [/\bRust cheat\b/gi, 'Borderlands 3 cheat'],
  [/\bRust HWID\b/g, 'Borderlands 3 HWID'],
  [/\bRust unban\b/gi, 'Borderlands 3 unban'],
  [/\brust unban\b/gi, 'Borderlands 3 unban'],
  [/\/product\/borderlands-3-cheat\//g, '/product/borderlands-3-cheat/'],
  [/\/product\/borderlands-3-cheat\b/g, '/product/borderlands-3-cheat'],
  [/"borderlands-3-cheat"/g, '"borderlands-3-cheat"'],
  [/scope(?:s)?":\s*\[\s*"borderlands-3-cheat"/g, 'scopes": ["borderlands-3-cheat"'],
  [/\brust-cheat\b/g, 'borderlands-3-cheat'],
  [/\/go\/rust\/?/g, AFFILIATE_CHEAT],
  [/\/go\/hwid-spoofer\/?/g, 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fhwid-spoofer'],
  [/\/go\/ugc\/?/g, 'https://zadeyo.com/go/SOOFIYAN?to=%2Fproducts%2Fugc'],
  [/\/go\/discord\/?/g, 'https://discord.com/invite/2gMnnaPWq'],
  [/%2Fproducts%2Fborderlands-3/g, '%2Fproducts%2Fborderlands-3'],
  [/https:\/\/zadeyo\.com\/go\/SOOFIYAN\?to=%2Fproducts%2Fborderlands-3/g, AFFILIATE_CHEAT],
  [//gi, ''],
  [//gi, ''],
  [/\bEasyAnti\b/gi, ''],
  [/\bEAC\b/g, ''],
  [/\bACE\b/g, ''],
  [/\bAnti-cheat\b/gi, 'Client'],
  [/\bAnti Cheat\b/gi, ''],
  [/\bafter a Rust\b/gi, 'after a Borderlands 3'],
  [/\bopen Rust\b/gi, 'open Borderlands 3'],
  [/\blaunch Rust\b/gi, 'launch Borderlands 3'],
  [/\bfor Rust\b/gi, 'for Borderlands 3'],
  [/\bRust or\b/gi, 'Borderlands 3 or'],
  [/\bRust update\b/gi, 'Borderlands 3 update'],
  [/\bRust and\b/gi, 'Borderlands 3 and'],
  [/\bthe Rust\b/gi, 'Borderlands 3'],
  [/\bRust —/g, 'Borderlands 3 —'],
  [/\bRust store\b/gi, 'Borderlands 3 store'],
  [/\bRust support\b/gi, 'Borderlands 3 Cheats support'],
  [/\bView Borderlands 3 cheat\b/g, 'View Borderlands 3 cheat'],
  [/\bRust on\b/gi, 'Borderlands 3 on'],
  [/"name": "Borderlands 3"/g, '"name": "Borderlands 3"'],
  [/"title": "Borderlands 3 Cheats"/g, '"title": "Borderlands 3 Cheats"'],
  [/about this Borderlands 3 store/gi, 'About Borderlands 3 Cheats'],
  [/Borderlands 3 Cheats home/g, 'Borderlands 3 Cheats home'],
  [/Buy Borderlands 3 Cheats/g, 'Buy Borderlands 3 Cheats'],
  [/discordAria": "Buy Borderlands 3 Cheats"/g, 'discordAria": "Buy Borderlands 3 Cheats"'],
  [/Vanilla",\s*\n\s*"Modded"/m, 'Story",\n      "TVHM"'],
  [/Monthly",\s*\n\s*"Lifetime"/m, 'Co-op",\n      "Solo"'],
];

for (const file of files) {
  let text = fs.readFileSync(file, 'utf8');
  let next = text;
  for (const [re, sub] of replacements) next = next.replace(re, sub);
  if (next !== text) fs.writeFileSync(file, next, 'utf8');
}

// Hero + site block (SEO-facing first paragraph)
const enPath = path.join(root, 'src/i18n/en.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
en.site = {
  name: 'Borderlands 3 Cheats',
  domain: 'borderlands3cheats.org',
  title: 'Borderlands 3 Cheats',
  description:
    'Borderlands 3 cheats for Windows PC on Steam: menu, HWID spoofer, and unban workspace. BL3 cheats from $35 monthly or $150 lifetime on borderlands3cheats.org.',
  discord: 'https://discord.com/invite/2gMnnaPWq',
};
en.hero.status = 'Borderlands 3 — menu build listed';
en.hero.titleLine1 = 'Borderlands 3 Cheats';
en.hero.titleLine2 = 'Borderlands 3 Cheats';
en.hero.subtitle =
  'Borderlands 3 cheats for Windows PC on Steam and the official client—aimbot, ESP, weapon options, and 110+ loader toggles, plus Discord support. BL3 cheats start at $35 monthly.';
en.hero.metrics = [
  { label: 'Client', strong: 'Steam / official' },
  { label: 'Platform', strong: 'Windows PC' },
  { label: 'Plans', strong: '$35 / $150' },
  { label: 'Support', strong: '24/7' },
];
if (en.nav?.[2]) en.nav[2].href = '/product/borderlands-3-cheat/#features';
en.cheats.title = 'Borderlands 3 Cheats';
en.cheats.items[0].name = 'Borderlands 3';
en.cheats.items[0].title = 'Borderlands 3 Cheats';
en.cheats.items[0].href = '/product/borderlands-3-cheat/';
en.products.items[0].title = 'Borderlands 3 hwid spoofer';
en.products.items[1].category = 'Borderlands 3 unban tool';
en.products.items[1].title = 'Borderlands 3 unban tool';
en.products.items[1].features = en.products.items[1].features.map((f) =>
  f.replace(/rust/i, 'Borderlands 3'),
);
if (en.setup?.statusStrip) {
  en.setup.statusStrip.aceStatusCta = 'Check build status';
}
if (en.whyUs?.metrics?.[0]) {
  en.whyUs.metrics[0] = {
    value: 'PC',
    title: 'Recheck before launch',
    desc: 'Read borderlands3cheats.org after a Borderlands 3 client update before you open the game.',
  };
}
if (en.status) {
  en.status.aceReminderLabel = 'Build reminder';
  en.status.subtitle = 'Look again after every Borderlands 3 client update before you launch.';
}
if (en.blogSidebar) {
  en.blogSidebar.quickFactsAntiCheat = 'Windows PC · Steam';
  en.blogSidebar.productCheats = 'Borderlands 3 Cheats';
  en.blogSidebar.quickFactsViewProduct = 'View Borderlands 3 cheat';
}
if (en.exploreSection?.cards?.cheats) {
  en.exploreSection.cards.cheats.title = 'Borderlands 3 Cheats';
}
if (en.exploreSection?.cards?.ugc) {
  en.exploreSection.cards.ugc.title = 'Borderlands 3 unban tool';
  en.exploreSection.cards.ugc.desc = 'Templates and follow-up for a Borderlands 3 unban case.';
}
if (en.support?.channels?.[0]) {
  en.support.channels[0].href = AFFILIATE_CHEAT;
}
// Clean ban FAQ without naming Client
if (en.faq?.items) {
  for (const item of en.faq.items) {
    if (item.id === 'ban-risk') {
      item.q = 'Can the publisher still act on the account?';
      item.a =
        'Yes. Borderlands 3 online play can still penalize an account. Nothing on this site promises that a session will avoid a penalty.';
    }
    if (typeof item.a === 'string') {
      item.a = item.a.replace(/\s{2,}/g, ' ').replace(/—\s*can still/gi, ' can still');
    }
  }
}
fs.writeFileSync(enPath, `${JSON.stringify(en, null, 2)}\n`, 'utf8');

const seoPath = path.join(root, 'src/i18n/seo/en.json');
if (fs.existsSync(seoPath)) {
  const seo = JSON.parse(fs.readFileSync(seoPath, 'utf8'));
  const home = {
    title: 'Borderlands 3 Cheats for PC: Menu, Spoofer, Unban',
    description:
      'Borderlands 3 cheats for Windows PC on Steam: menu, HWID spoofer, and unban workspace. BL3 cheats from $35 monthly or $150 lifetime, each on its own checkout.',
  };
  seo.site = { ...home };
  seo.pages = seo.pages || {};
  seo.pages['/'] = home;
  seo.pages['/product/borderlands-3-cheat/'] = {
    title: 'Borderlands 3 Cheat Loader for Windows PC | BL3',
    description:
      'Borderlands 3 cheat for Windows PC with the loader groups listed here. BL3 cheat access is $35 for 30 days or $150 lifetime from the portal after checkout.',
  };
  seo.pages['/product/spoofer/'] = {
    title: 'Borderlands 3 HWID Spoofer for Windows PC Flags',
    description:
      'Borderlands 3 hwid spoofer for a PC that fails new accounts while another machine still works. BL3 hwid spoofer is $50 monthly or $150 lifetime, apart from the menu.',
  };
  seo.pages['/product/ugc/'] = {
    title: 'Borderlands 3 Unban Tool for Account Appeals on PC',
    description:
      'Borderlands 3 unban tool for templates, evidence lists, and follow-up on account restrictions. BL3 unban workspace is $35 monthly or $150 lifetime; restoration is not promised.',
  };
  delete seo.pages['/product/borderlands-3-cheat/'];
  fs.writeFileSync(seoPath, `${JSON.stringify(seo, null, 2)}\n`, 'utf8');
}

console.log('BL3 copy patch applied.');