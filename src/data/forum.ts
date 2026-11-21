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

export const FORUM_DEVELOPER = 'cheatrust';

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
    title: 'wtf loader just sits there after the windows update',
    excerpt: 'Clicked launch, black window, nothing. Status is green. Am I cooked or is this a known thing?',
    description:
      'Blank loader window after a Windows update while status is green. Staff point at a reboot and the portal steps. Send the exact line on the screen.',
    author: 'nakedsprint',
    age: '6h ago',
    date: 'Nov 12, 2026',
    upvotes: 41,
    flair: 'Setup',
    sourceTitle: 'Portal download with the switches left on',
    sourcePath: '/blog/rust-cheat-loader-setup/',
    body: [
      'Windows updated overnight. The loader now opens a blank window and never reaches the menu.',
      'Status is green, so I did not want to assume the build was the problem.',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '5h ago',
        score: 38,
        developer: true,
        body: 'Green means this build can be used. A blank window after a Windows update is usually the PC. Reboot, repeat the portal steps, and if it still hangs send support the exact line on the screen.',
      },
      {
        author: 'roofcamper',
        age: '4h ago',
        score: 19,
        body: 'same thing tuesday. reboot plus the portal steps and it opened. thought i was cooked ngl 💀',
      },
      {
        author: 'nakedsprint',
        age: '3h ago',
        score: 7,
        body: 'W that actually fixed it. thanks both of you 👍',
      },
      {
        author: 'scrapyard',
        age: '2h ago',
        score: 4,
        body: 'if it still hangs, screenshot the portal step you are on. “it doesn’t work” is how tickets die lol',
      },
      {
        author: 'oilrigtim',
        age: '1h ago',
        score: 3,
        body: 'this thread saved me from buying a second key for no reason. appreciate it',
      },
    ],
  },
  {
    slug: 'what-green-red-blue-mean',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What green, red, and blue mean on the status page.',
    excerpt: 'The label is green today. I want the meaning of red and blue before I launch.',
    description:
      'Green means the build can be used. Red means leave it closed. Blue means it is still being updated. The thread is about reading that color before you launch.',
    author: 'banditcamp',
    age: '8h ago',
    date: 'Nov 10, 2026',
    upvotes: 56,
    flair: 'Status',
    sourceTitle: 'Green, red, and blue before you launch',
    sourcePath: '/blog/rust-cheat-status/',
    body: [
      'status dropped the big green UPDATED thing today (10 nov). cool.',
      'before i hop on, what is red and what is blue? i do not want to guess 😭',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '7h ago',
        score: 62,
        developer: true,
        body: 'Green = updated, you can use it. Red = not updated, do not use it. Blue = we are still updating it, so it is not ready yet.',
      },
      {
        author: 'banditcamp',
        age: '6h ago',
        score: 9,
        body: 'bet. green today so i am in. ty',
      },
      {
        author: 'snowball',
        age: '5h ago',
        score: 14,
        body: 'needed this written like i am 5. the old page was a novel 😂',
      },
      {
        author: 'heli_crash',
        age: '4h ago',
        score: 6,
        body: 'saved. if i see blue i am touching grass until it flips',
      },
      {
        author: 'zergling',
        age: '3h ago',
        score: 5,
        body: 'W explanation. linked this to my duo',
      },
      {
        author: 'boatbase',
        age: '2h ago',
        score: 2,
        body: 'red last month is why i waited. this layout is way clearer',
      },
      {
        author: 'ak_recycler',
        age: '1h ago',
        score: 8,
        body: 'this helped, i was about to launch on a guess. thanks admin',
      },
    ],
  },
  {
    slug: 'secure-boot-and-tpm-stay-on',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Secure Boot and TPM stay on for this Windows loader',
    excerpt: 'An older board is awkward. Is there a way to launch with Secure Boot or TPM off?',
    description:
      'HVCI, core isolation, TPM, and secure boot stay on. The loader does not publish a skip. A chat from another game is not a reason to turn those switches off.',
    author: 'oldpcandy',
    age: '9h ago',
    date: 'Nov 6, 2026',
    upvotes: 33,
    flair: 'Windows',
    sourceTitle: 'Portal download with the switches left on',
    sourcePath: '/blog/rust-cheats-requirements/',
    body: [
      'The notes say Secure Boot and TPM stay on. This older board makes that annoying.',
      'Is there a launch path with those switched off, or is this PC simply not a match?',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '8h ago',
        score: 29,
        developer: true,
        body: 'There is no skip. The product page keeps HVCI, core isolation, TPM, and secure boot on. If this PC cannot do that, it is the wrong machine. We do not publish a way around the list.',
      },
      {
        author: 'compoundkid',
        age: '6h ago',
        score: 11,
        body: 'yeah i tried to get cute with bios and just wasted an hour. requirements are the requirements 🤷‍♂️',
      },
      {
        author: 'oldpcandy',
        age: '4h ago',
        score: 4,
        body: 'fair. annoying but clear. thanks',
      },
    ],
  },
  {
    slug: 'spoofer-did-not-unlock-the-name',
    category: 'Community',
    categoryTone: 'green',
    title: 'Hardware tool ran, and the old name is still locked',
    excerpt: 'A new name works on this PC. The old name does not. Was the hardware tool the wrong card?',
    description:
      'The hardware tool is for a PC flag. An account-only restriction is the appeal workspace, sold separately. Running the tool does not unlock that name.',
    author: 'duo_left',
    age: '7h ago',
    date: 'Nov 2, 2026',
    upvotes: 48,
    flair: 'Which product',
    sourceTitle: 'Discover What an HWID Spoofer Does in Rust',
    sourcePath: '/blog/rust-hwid-ban/',
    body: [
      'The hardware pass finished. A new account gets in. The old name is still locked.',
      'Did I pay for the wrong product?',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '6h ago',
        score: 44,
        developer: true,
        body: 'That pattern is an account restriction, not a PC flag. The hardware tool does not unlock the old name. The appeal workspace is a separate checkout. It organizes the case. It does not promise the platform will restore the account.',
      },
      {
        author: 'launch_site',
        age: '5h ago',
        score: 17,
        body: 'this is the post i needed last wipe. spoofer = pc, unban tool = the name. do not mix them lol',
      },
      {
        author: 'duo_left',
        age: '4h ago',
        score: 6,
        body: 'ahh. so i bought the pc one for an account problem. my bad 😬',
      },
      {
        author: 'quarry_main',
        age: '3h ago',
        score: 9,
        body: 'W reply. sending this to my trio before they double buy',
      },
      {
        author: 'night_farm',
        age: '2h ago',
        score: 3,
        body: 'helped. i was one click from a second spoofer key',
      },
    ],
  },
  {
    slug: 'key-mail-not-in-inbox',
    category: 'General',
    categoryTone: 'purple',
    title: 'Checkout finished and the key mail is still missing',
    excerpt: 'The page said the order completed. Inbox and spam are empty. Where is the key?',
    description: 'Missing key mail after checkout. Staff want the order email and the portal receipt, not a menu screenshot. Check spam before you open a second ticket.',
    author: 'mailbox_zero',
    age: '5h ago',
    date: 'Oct 28, 2026',
    upvotes: 27,
    flair: 'Checkout',
    sourceTitle: 'Where to Find Reliable and Cheap Rust Cheats This Wipe',
    sourcePath: '/blog/rust-cheats-price/',
    body: [
      'I paid for 30 days. The page said success. No mail, and spam is empty.',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '4h ago',
        score: 24,
        developer: true,
        body: 'Open support with the order email and the portal receipt. A menu screenshot does not identify the key. Check the inbox you typed at checkout, including promotions.',
        replies: [
          {
            author: 'mailbox_zero',
            age: '3h ago',
            score: 5,
            body: 'it was in promotions 😭 i am actually stupid. ty',
          },
        ],
      },
      {
        author: 'recycler_rat',
        age: '2h ago',
        score: 8,
        body: 'promotions folder got me too. this comment helped more than my duo',
      },
    ],
  },
  {
    slug: 'waited-out-a-blue-status',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'Status was blue this morning and it is green again',
    excerpt: 'The label was blue while the build was updating. I waited. It is green now. Was waiting correct?',
    description: 'Blue means the build is still being updated. Wait for green before you launch. A morning color change is a reason to leave the loader closed.',
    author: 'cargo_timer',
    age: '10h ago',
    date: 'Oct 22, 2026',
    upvotes: 22,
    flair: 'Status',
    sourceTitle: 'Green, red, and blue before you launch',
    sourcePath: '/blog/rust-cheat-status/',
    body: [
      'This morning the label was blue.',
      'I did not launch. It is green now. Was that the right call?',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '9h ago',
        score: 21,
        developer: true,
        body: 'Yes. Blue means we are still updating it, so leave it closed. Green means that build can be used. Waiting was the right call.',
      },
      {
        author: 'cargo_timer',
        age: '8h ago',
        score: 4,
        body: 'W. queued after it flipped. all good',
      },
      {
        author: 'minicopter',
        age: '7h ago',
        score: 6,
        body: 'i launched on blue once and felt dumb. this is the reminder',
      },
      {
        author: 'tunnel_rat',
        age: '5h ago',
        score: 3,
        body: 'helped. i was mid download when i saw blue and just stopped',
      },
      {
        author: 'bradley',
        age: '4h ago',
        score: 2,
        body: 'pin this during patch days fr',
      },
      {
        author: 'teabag_tc',
        age: '3h ago',
        score: 7,
        body: 'same morning here. waited, green, loaded. thanks',
      },
      {
        author: 'outpost_camper',
        age: '2h ago',
        score: 1,
        body: 'blue = touch grass. noted 😂',
      },
      {
        author: 'samsite',
        age: '1h ago',
        score: 5,
        body: 'this thread is why i check status before the file. solid',
      },
    ],
  },
  {
    slug: 'preset-did-not-stick',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'The menu returned to defaults after I closed the window',
    excerpt: 'I closed the menu and the sliders were default again. Is save a separate step?',
    description: 'Config save is its own step. Closing the window does not store the preset. Open the config group and save before you exit if you want those lines next time.',
    author: 'slider_guy',
    age: '6h ago',
    date: 'Oct 18, 2026',
    upvotes: 18,
    flair: 'Config',
    sourceTitle: 'Rust Cheat Features: Menu, Config and Misc Options Explained',
    sourcePath: '/blog/how-to-use-rust-cheats/',
    body: [
      'I spent a while on colors and distances, closed the menu, and came back to defaults.',
      'Is there a save step, or should it store itself?',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '5h ago',
        score: 16,
        developer: true,
        body: 'Closing the menu is not a save. Use config save, then reopen and confirm the preset name. If that name will not load, write support with the order email.',
      },
      {
        author: 'slider_guy',
        age: '4h ago',
        score: 3,
        body: 'there is an actual save. i am blind. it stuck this time 👍',
      },
      {
        author: 'box_esp',
        age: '3h ago',
        score: 9,
        body: 'lol same. this comment helped. i was rage reinstalling',
      },
      {
        author: 'font_slider',
        age: '2h ago',
        score: 2,
        body: 'name the preset something you will recognize. “config1” is how you load the wrong one',
      },
    ],
  },
  {
    slug: 'ticket-needs-the-order-email',
    category: 'Community',
    categoryTone: 'green',
    title: 'Discord ticket has no reply until the order email is in',
    excerpt: 'The ticket only said the loader failed. What details does a reply need?',
    description: 'A ticket needs the order email, the product name, and the portal sentence that failed. A menu screenshot is not a substitute for that order email.',
    author: 'ticket_goblin',
    age: '4h ago',
    date: 'Oct 14, 2026',
    upvotes: 15,
    flair: 'Support',
    sourceTitle: 'Portal download with the switches left on',
    sourcePath: '/blog/rust-cheat-loader-setup/',
    body: [
      'The ticket has been quiet. I only wrote that the loader failed. That may be why.',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '3h ago',
        score: 14,
        developer: true,
        body: 'Send the order email, which product (menu, hardware tool, or appeal workspace), and the exact portal or loader sentence. A ticket with no detail will sit.',
      },
      {
        author: 'ticket_goblin',
        age: '2h ago',
        score: 2,
        body: 'added the email and the red line. someone replied. i was the problem lol',
      },
    ],
  },
  {
    slug: 'leave-hvci-switched-on',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'HVCI is already on. Should this loader leave it on?',
    excerpt: 'The product page says HVCI on. A clip said to turn it off. Which instruction matters?',
    description: 'Leave HVCI, core isolation, TPM, and secure boot switched on. Disabling them is not part of launch. The loader expects those Windows switches to stay.',
    author: 'core_iso',
    age: '8h ago',
    date: 'Oct 10, 2026',
    upvotes: 36,
    flair: 'Windows',
    sourceTitle: 'Portal download with the switches left on',
    sourcePath: '/blog/rust-cheat-loader-setup/',
    body: [
      'The page says HVCI, core isolation, TPM, and secure boot stay on.',
      'A clip said to turn HVCI off. I do not want to guess.',
    ],
    comments: [
      {
        author: 'cheatrust',
        age: '7h ago',
        score: 31,
        developer: true,
        body: 'Keep them on. The product page is the list that counts. Ignore a clip that tells you to disable HVCI or secure boot.',
      },
      {
        author: 'core_iso',
        age: '6h ago',
        score: 4,
        body: 'left them on. loader opened. clip was cap',
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
        body: 'W. bookmark the requirements block not a youtube short',
      },
      {
        author: 'iso_check',
        age: '3h ago',
        score: 3,
        body: 'same question in my discord. sending them here',
      },
      {
        author: 'win11_guy',
        age: '2h ago',
        score: 5,
        body: 'green status + those switches on. that is the whole pre-flight for me now',
      },
    ],
  },
];

export const forumPosts: ForumPost[] = rawPosts.map(withCounts);

export function getForumPost(slug: string) {
  return forumPosts.find((post) => post.slug === slug);
}
