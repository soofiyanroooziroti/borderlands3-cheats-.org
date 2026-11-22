/** ISO date (YYYY-MM-DD) — edit when you publish a status refresh. */
export const STATUS_LAST_UPDATED = '2026-11-23';

export type StatusTone = 'green' | 'red' | 'blue';

export interface StatusLegendItem {
  tone: StatusTone;
  label: string;
  meaning: string;
}

export interface StatusUpdateEntry {
  title: string;
  /** Display range or date, e.g. 8 Aug 2024 */
  when: string;
  summary: string;
}

export interface StatusLogEntry {
  date: string;
  state: StatusTone;
  note: string;
}

/** Current store state. Green = updated and usable. */
export const status: { state: StatusTone; checkedDate: string } = {
  state: 'green',
  checkedDate: '23 Nov 2026',
};

export const STATUS_TONE: StatusTone = status.state;

const STATUS_PAGE_LABEL: Record<StatusTone, string> = {
  green: 'Borderlands 3 Cheats: Active',
  blue: 'Borderlands 3 Cheats: Updating',
  red: 'Borderlands 3 Cheats: Not updated',
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

/** Confirm these before you launch Borderlands 3 with the loader. */
export const STATUS_BEFORE_LAUNCH: string[] = [
  'HVCI on',
  'Core isolation on',
  'TPM on',
  'Secure Boot on',
  'Windows 10 or 11',
  'Steam / official client',
  'Cloud DMA needed',
];

export const STATUS_GAME_NOTES_HEADING = 'Game notes, 8 Aug 2024 (latest update)';

export const STATUS_GAME_NOTES: StatusUpdateEntry[] = [
  {
    title: 'Character creation',
    when: '8 Aug 2024',
    summary:
      'Players who have beaten the main story and own a max-level character can create new max-level characters from the main menu.',
  },
  {
    title: 'Gear',
    when: '8 Aug 2024',
    summary:
      'A new main menu setting auto-sells picked-up gear below a chosen rarity, and excludes cosmetics.',
  },
  {
    title: 'Steam Deck',
    when: '8 Aug 2024',
    summary: 'In-game text sizes were increased for readability.',
  },
];

export const STATUS_PREVIOUS_UPDATE =
  'Previous update: 18 Jul 2024 (free cosmetics and Crazy Earl\'s Shop additions).';

/** Newest first. */
export const STATUS_LOG: StatusLogEntry[] = [
  { date: '23 Nov 2026', state: 'green', note: 'Status checked.' },
];

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