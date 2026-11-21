/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-10';

export type StatusTone = 'green' | 'red' | 'blue';

export interface StatusLegendItem {
  tone: StatusTone;
  label: string;
  meaning: string;
}

export interface StatusUpdateEntry {
  title: string;
  /** Display range or date, e.g. 5 Nov 2026 */
  when: string;
  summary: string;
}

/** Current store state. Green = updated and usable. */
export const status: { state: StatusTone; checkedDate: string } = {
  state: 'green',
  checkedDate: '21 Nov 2026',
};

export const STATUS_TONE: StatusTone = status.state;

const STATUS_PAGE_LABEL: Record<StatusTone, string> = {
  green: 'Rust Cheats: Active',
  blue: 'Rust Cheats: Updating',
  red: 'Rust Cheats: Not updated',
};

const STATUS_BADGE_LABEL: Record<StatusTone, string> = {
  green: 'Active',
  blue: 'Updating',
  red: 'Not updated',
};

export function statusPageLabel(state: StatusTone = status.state): string {
  return STATUS_PAGE_LABEL[state];
}

export function statusBadgeLabel(state: StatusTone = status.state): string {
  return STATUS_BADGE_LABEL[state];
}

export const STATUS_LEGEND: StatusLegendItem[] = [
  { tone: 'green', label: 'Green', meaning: 'Updated. You can use it.' },
  { tone: 'red', label: 'Red', meaning: 'Not updated. Do not use it.' },
  { tone: 'blue', label: 'Blue', meaning: 'Updating. Developers are working. It is not ready yet.' },
];

/** Newest first. */
export const STATUS_RECENT_UPDATES: StatusUpdateEntry[] = [
  {
    title: 'Scripting bans',
    when: '5 Nov 2026',
    summary: 'Coverage of the November 2026 update reports more than 3,000 scripting bans.',
  },
  {
    title: 'Secure Boot and TPM 2.0',
    when: 'Feb-Mar 2026',
    summary:
      'Facepunch announced in February 2026 that from March, server owners can opt in to only allow players with Secure Boot and TPM 2.0 enabled, through Easy Anti-Cheat. Facepunch has said it plans to make this mandatory later, with the timeline shared in its monthly devblog.',
  },
  {
    title: 'EAC enforcement',
    when: 'Ongoing',
    summary:
      "Facepunch's January 2026 devblog says Easy Anti-Cheat has stepped up efforts against recoil cheats (scripting). Bans can be permanent: Facepunch reported 296,000+ permanent bans in 2025.",
  },
];

export const STATUS_GAME_NOTES: StatusUpdateEntry[] = [
  {
    title: 'Progression',
    when: '5 Nov 2026',
    summary: 'Blueprints are reworked into three forms: fragments, pages and books.',
  },
  {
    title: 'Weapons and controls',
    when: '5 Nov 2026',
    summary: 'New Uzi 9mm. Native gamepad support added.',
  },
  {
    title: 'Servers and performance',
    when: '5 Nov 2026',
    summary:
      'Busy servers restart in about 2 minutes instead of 10. Facepunch also shipped a large batch of performance work. The livestock system was reworked.',
  },
];

export const STATUS_NEXT_UPDATE = 'Next monthly update: expected 3 Dec 2026.';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** Format YYYY-MM-DD as "10 Nov 2026". */
export function formatStatusUpdated(isoDate: string = STATUS_LAST_UPDATED): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!match) return isoDate;
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const label = MONTHS[month - 1];
  if (!label) return isoDate;
  return `${day} ${label} ${year}`;
}

/** Shared line for /status/ and the home setup strip. */
export function formatActiveStatusLine(isoDate: string = STATUS_LAST_UPDATED): string {
  return `Updated · ${formatStatusUpdated(isoDate)}`;
}
