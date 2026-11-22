export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  developer?: boolean;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  /** Meta description. Cards keep the shorter excerpt. */
  description: string;
  author: string;
  age: string;
  date: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
  /** Answered threads that should show a closed badge. */
  closed?: boolean;
}

export const FORUM_DEVELOPER = 'borderlands3cheats';

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

/** Stable filter keys — always derived from English category names. */
export const FORUM_CATEGORY_KEYS: Record<string, string> = {
  General: 'general',
  'Guides & Builds': 'guidesbuilds',
  'Patch Talk': 'patchtalk',
  Community: 'community',
};

export function forumCategoryFilterKey(category: string): string {
  return FORUM_CATEGORY_KEYS[category] ?? category.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function countComments(comments: ForumComment[]): number {
  return comments.reduce(
    (total, comment) => total + 1 + (comment.replies ? countComments(comment.replies) : 0),
    0,
  );
}

function withCounts(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export function forumLastReply(comments: ForumComment[]): { author: string; age: string } | null {
  let last: ForumComment | null = null;
  const walk = (list: ForumComment[]) => {
    for (const comment of list) {
      last = comment;
      if (comment.replies?.length) walk(comment.replies);
    }
  };
  walk(comments);
  return last ? { author: last.author, age: last.age } : null;
}

const rawPosts: Array<Omit<ForumPost, 'commentsCount'>> = [
  {
    slug: 'loader-window-after-windows-update',
    category: 'General',
    categoryTone: 'purple',
    title: 'wtf the menu just sits there after windows updated',
    excerpt: 'Clicked in for a Mayhem run, black window, nothing. Status is green. Am I cooked or is this a known thing? 😭',
    description:
      'Blank menu window after a Windows update while Borderlands 3 status is green. Reboot and repeat the portal steps. Send the exact line on the screen.',
    author: 'vaultline',
    age: '6h ago',
    date: 'Nov 12, 2026',
    upvotes: 41,
    flair: 'Setup',
    sourceTitle: 'Borderlands 3 Cheat Requirements: Menu and Setup on PC',
    sourcePath: '/blog/borderlands-3-cheats-requirements/',
    body: [
      'Windows updated overnight and I was about to hop into Mayhem with the boys.',
      'The menu opens a blank window and never gets to the options. Status is green, so I did not want to assume the build was the problem. am I cooked?? 😭',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '5h ago',
        score: 38,
        developer: true,
        body: 'Green means this build can be used for Borderlands 3. A blank window after a Windows update is usually the PC. Reboot, repeat the portal steps, and if it still hangs send support the exact line on the screen.',
      },
      {
        author: 'lootgoblin',
        age: '4h ago',
        score: 19,
        body: 'same thing tuesday, right before co-op. reboot plus the portal steps and it opened. thought i was cooked ngl 💀',
      },
      {
        author: 'vaultline',
        age: '3h ago',
        score: 7,
        body: 'W that actually fixed it. hopped into Mayhem after. thanks both of you 👍🔥',
      },
      {
        author: 'chestmark',
        age: '2h ago',
        score: 4,
        body: 'if it still hangs, screenshot the portal step you are on. “it doesn’t work” is how tickets die lol',
      },
      {
        author: 'keytwice',
        age: '1h ago',
        score: 3,
        body: 'this thread saved me from buying a second key for no reason. appreciate it 🫡',
      },
    ],
  },
  {
    slug: 'what-green-red-blue-mean',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'what green, red, and blue mean before you queue up',
    excerpt: 'The label is green today. I want red and blue before I hop into a Mayhem run. not guessing 😭',
    description:
      'Green means the Borderlands 3 build can be used. Red means leave it closed. Blue means it is still being updated. Read the color before you queue.',
    author: 'coop_queue',
    age: '8h ago',
    date: 'Nov 10, 2026',
    upvotes: 56,
    flair: 'Status',
    sourceTitle: 'Borderlands 3 Hacks: What a Paid Hack Menu Includes',
    sourcePath: '/blog/borderlands-3-hacks/',
    body: [
      'status dropped the big green UPDATED thing today. cool.',
      'before i hop into co-op, what is red and what is blue? i do not want to guess 😭',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '7h ago',
        score: 62,
        developer: true,
        body: 'Green = updated, you can use it on Borderlands 3. Red = not updated, do not use it. Blue = we are still updating it, so it is not ready yet.',
      },
      {
        author: 'coop_queue',
        age: '6h ago',
        score: 9,
        body: 'bet. green today so i am in. ty 🔥',
      },
      {
        author: 'snowball',
        age: '5h ago',
        score: 14,
        body: 'needed this written like i am 5. the old page was a novel 😂',
      },
      {
        author: 'touchgrass',
        age: '4h ago',
        score: 6,
        body: 'saved. if i see blue i am touching grass until it flips 🌿',
      },
      {
        author: 'mobtrain',
        age: '3h ago',
        score: 5,
        body: 'W explanation. linked this to my duo 🫡',
      },
      {
        author: 'sanctkid',
        age: '2h ago',
        score: 2,
        body: 'red last month is why i waited. this layout is way clearer',
      },
      {
        author: 'gunreroll',
        age: '1h ago',
        score: 8,
        body: 'this helped, i was about to launch on a guess. thanks admin 😭',
      },
    ],
  },
  {
    slug: 'secure-boot-and-tpm-stay-on',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Secure Boot and TPM stay on before you launch Borderlands 3',
    excerpt: 'Older board is awkward. Is there a way to open the menu with Secure Boot or TPM off?',
    description:
      'HVCI, core isolation, TPM, and secure boot stay on for Borderlands 3. There is no skip. Do not turn those switches off because of an outside clip.',
    author: 'oldpcandy',
    age: '9h ago',
    date: 'Nov 6, 2026',
    upvotes: 33,
    flair: 'Windows',
    sourceTitle: 'Borderlands 3 Cheat Requirements: Menu and Setup on PC',
    sourcePath: '/blog/borderlands-3-cheats-requirements/',
    body: [
      'The notes say Secure Boot and TPM stay on before Borderlands 3. This older board makes that annoying.',
      'Is there a way in with those switched off, or is this PC simply not a match? 🤷‍♂️',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '8h ago',
        score: 29,
        developer: true,
        body: 'There is no skip. The product page keeps HVCI, core isolation, TPM, and secure boot on. Cloud DMA is needed. If this PC cannot do that, it is the wrong machine. We do not publish a way around the list.',
      },
      {
        author: 'bios_hour',
        age: '6h ago',
        score: 11,
        body: 'yeah i tried to get cute with bios and just wasted an hour. requirements are the requirements 🤷‍♂️',
      },
      {
        author: 'oldpcandy',
        age: '4h ago',
        score: 4,
        body: 'fair. annoying but clear. still queueing once those stay on. thanks 👍',
      },
    ],
  },
  {
    slug: 'spoofer-did-not-unlock-the-name',
    category: 'Community',
    categoryTone: 'green',
    title: 'hardware tool ran but my old Borderlands name stays locked',
    excerpt: 'A new name gets into Borderlands 3. The old one does not. Was the hardware tool the wrong buy? 😬',
    description:
      'The hardware tool clears a PC flag on Borderlands 3. Account-only locks use the appeal workspace, sold separately. It does not unlock that name.',
    author: 'duo_left',
    age: '7h ago',
    date: 'Nov 2, 2026',
    upvotes: 48,
    flair: 'Which product',
    sourceTitle: 'Borderlands 3 Cheat Ban Risks: What Can Still Happen',
    sourcePath: '/blog/borderlands-3-cheat-ban-risks/',
    body: [
      'The hardware pass finished. A new name gets into Borderlands 3. The old name is still locked.',
      'Did I pay for the wrong product? 😬',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '6h ago',
        score: 44,
        developer: true,
        body: 'That pattern is an account restriction, not a PC flag. The hardware tool does not unlock the old name. The appeal workspace is a separate checkout. It organizes the case. It does not promise the platform will restore the account. Bans are possible and no option removes the risk.',
      },
      {
        author: 'pc_vs_name',
        age: '5h ago',
        score: 17,
        body: 'this is the post i needed. spoofer = pc, appeal = the name. do not mix them lol',
      },
      {
        author: 'duo_left',
        age: '4h ago',
        score: 6,
        body: 'ahh. so i bought the pc one for an account problem. my bad 😬',
      },
      {
        author: 'trio_ping',
        age: '3h ago',
        score: 9,
        body: 'W reply. sending this to my trio before they double buy 🔥',
      },
      {
        author: 'nightloot',
        age: '2h ago',
        score: 3,
        body: 'helped. i was one click from a second spoofer key 💀',
      },
    ],
  },
  {
    slug: 'key-mail-not-in-inbox',
    category: 'General',
    categoryTone: 'purple',
    title: 'paid for the menu and the key mail is still missing',
    excerpt: 'The page said the Borderlands 3 order completed. Inbox and spam are empty. where is the key 😭',
    description:
      'No key mail after Borderlands 3 checkout? Send support the order email and portal receipt—not a menu screenshot. Check spam before you open another ticket.',
    author: 'mailbox_zero',
    age: '5h ago',
    date: 'Oct 28, 2026',
    upvotes: 27,
    flair: 'Checkout',
    sourceTitle: 'Borderlands 3 Cheat Price: 30 Days vs Lifetime Plans',
    sourcePath: '/blog/borderlands-3-cheats-price/',
    body: [
      'I paid for 30 days on the Borderlands 3 menu. The page said success. No mail, and spam is empty. hello?? 😭',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '4h ago',
        score: 24,
        developer: true,
        body: 'Open support with the order email and the portal receipt. A menu screenshot does not identify the key. Check the inbox you typed at checkout, including promotions.',
        replies: [
          {
            author: 'mailbox_zero',
            age: '3h ago',
            score: 5,
            body: 'it was in promotions 😭 i am actually stupid. ty 💀',
          },
        ],
      },
      {
        author: 'promo_folder',
        age: '2h ago',
        score: 8,
        body: 'promotions folder got me too. this comment helped more than my duo 😂',
      },
    ],
  },
  {
    slug: 'waited-out-a-blue-status',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Status was blue this morning and it is green again',
    excerpt: 'The label was blue while the build was updating. I waited out a Mayhem queue. It is green now. Was waiting correct? 👀',
    description: 'Blue means the Borderlands 3 build is still being updated. Wait for green before you launch. A morning color change is a reason to leave the menu closed.',
    author: 'cargo_timer',
    age: '10h ago',
    date: 'Oct 22, 2026',
    upvotes: 22,
    flair: 'Status',
    sourceTitle: 'Borderlands 3 Hacks: What a Paid Hack Menu Includes',
    sourcePath: '/blog/borderlands-3-hacks/',
    body: [
      'This morning the label was blue and I was about to load into co-op.',
      'I did not launch. It is green now. Was that the right call? 👀',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '9h ago',
        score: 21,
        developer: true,
        body: 'Yes. Blue means we are still updating it, so leave it closed. Green means that Borderlands 3 build can be used. Waiting was the right call.',
      },
      {
        author: 'cargo_timer',
        age: '8h ago',
        score: 4,
        body: 'W. queued a Mayhem run after it flipped. all good 🔥',
      },
      {
        author: 'blue_once',
        age: '7h ago',
        score: 6,
        body: 'i launched on blue once and felt dumb. this is the reminder 💀',
      },
      {
        author: 'stopped_early',
        age: '5h ago',
        score: 3,
        body: 'helped. i was about to open it when i saw blue and just stopped',
      },
      {
        author: 'bossmark',
        age: '4h ago',
        score: 2,
        body: 'pin this on patch days fr 📌',
      },
      {
        author: 'teabag_bl',
        age: '3h ago',
        score: 7,
        body: 'same morning here. waited, green, loaded into co-op. thanks 👍',
      },
      {
        author: 'coop_morning',
        age: '2h ago',
        score: 1,
        body: 'blue = touch grass. noted 😂',
      },
      {
        author: 'weakpoint',
        age: '1h ago',
        score: 5,
        body: 'this thread is why i check status before I touch the menu. solid 🫡',
      },
    ],
  },
  {
    slug: 'preset-did-not-stick',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'closed the menu and my Borderlands settings were gone',
    excerpt: 'Set aim FOV and loot rarity, closed the menu, and it was default again. Is save a separate step? 😭',
    description: 'Config save / load is its own step. Closing the window does not store the Borderlands 3 preset. Save before you exit if you want those lines next time.',
    author: 'slider_guy',
    age: '6h ago',
    date: 'Oct 18, 2026',
    upvotes: 18,
    flair: 'Config',
    sourceTitle: 'Borderlands 3 Hacks: What a Paid Hack Menu Includes',
    sourcePath: '/blog/borderlands-3-hacks/',
    body: [
      'I spent a while on aim FOV, bone selection, and loot rarity, closed the menu, and came back to defaults.',
      'Is config save a real step, or should it store itself? 😭',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '5h ago',
        score: 16,
        developer: true,
        body: 'Closing the menu is not a save. Use config save / load, then reopen and confirm the name. If that name will not load, write support with the order email.',
      },
      {
        author: 'slider_guy',
        age: '4h ago',
        score: 3,
        body: 'there is an actual save. i am blind. it stuck this time 👍🔥',
      },
      {
        author: 'healthbar',
        age: '3h ago',
        score: 9,
        body: 'lol same. this comment helped. i was rage closing the game 😂',
      },
      {
        author: 'font_slider',
        age: '2h ago',
        score: 2,
        body: 'name the config something you will recognize. “config1” is how you load the wrong aim FOV',
      },
    ],
  },
  {
    slug: 'ticket-needs-the-order-email',
    category: 'Community',
    categoryTone: 'green',
    title: 'discord ticket sat there until the order email was in',
    excerpt: 'The ticket only said the menu failed before co-op. What details does a reply need?',
    description: 'A Borderlands 3 ticket needs the order email, the product name, and the line that failed. A menu screenshot is not a substitute for that order email.',
    author: 'ticket_goblin',
    age: '4h ago',
    date: 'Oct 14, 2026',
    upvotes: 15,
    flair: 'Support',
    sourceTitle: 'Borderlands 3 Cheat Requirements: Menu and Setup on PC',
    sourcePath: '/blog/borderlands-3-cheats-requirements/',
    body: [
      'The ticket has been quiet. I only wrote that the menu failed before we queued. That may be why. 😬',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '3h ago',
        score: 14,
        developer: true,
        body: 'Send the order email, which product (the Borderlands 3 menu, the hardware tool, or the appeal workspace), and the exact line on the screen. A ticket with no detail will sit.',
      },
      {
        author: 'ticket_goblin',
        age: '2h ago',
        score: 2,
        body: 'added the email and the red line. someone replied. i was the problem lol 💀',
      },
    ],
  },
  {
    slug: 'leave-hvci-switched-on',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'HVCI is already on. Leave it on for Borderlands 3?',
    excerpt: 'The product page says HVCI on. A clip said to turn it off before launch. Which one matters?',
    description:
      'Keep HVCI, core isolation, TPM, and secure boot on for Borderlands 3. Do not disable them to launch. Cloud DMA is required, and those switches stay on.',
    author: 'core_iso',
    age: '8h ago',
    date: 'Oct 10, 2026',
    upvotes: 36,
    flair: 'Windows',
    sourceTitle: 'Borderlands 3 Cheat Requirements: Menu and Setup on PC',
    sourcePath: '/blog/borderlands-3-cheats-requirements/',
    body: [
      'The page says HVCI, core isolation, TPM, and secure boot stay on before you launch Borderlands 3.',
      'A clip said to turn HVCI off. I do not want to guess and brick a Mayhem night 😭',
    ],
    comments: [
      {
        author: FORUM_DEVELOPER,
        age: '7h ago',
        score: 31,
        developer: true,
        body: 'Keep them on. The product page is the list that counts. Ignore a clip that tells you to disable HVCI or secure boot. Cloud DMA is needed, and those switches stay on.',
      },
      {
        author: 'core_iso',
        age: '6h ago',
        score: 4,
        body: 'left them on. menu opened. clip was cap 😂',
      },
      {
        author: 'tpm_on',
        age: '5h ago',
        score: 12,
        body: 'this helped. i was one toggle from “fixing” a working pc 💀',
      },
      {
        author: 'secureboot',
        age: '4h ago',
        score: 6,
        body: 'W. bookmark the requirements block not a youtube short 📌',
      },
      {
        author: 'iso_check',
        age: '3h ago',
        score: 3,
        body: 'same question in my discord. sending them here 🫡',
      },
      {
        author: 'win11_guy',
        age: '2h ago',
        score: 5,
        body: 'green status + those switches on. that is the whole pre-flight before I queue now 🔥',
      },
    ],
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
