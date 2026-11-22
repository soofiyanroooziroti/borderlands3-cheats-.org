import type { ProductFeatureGroup } from './product-types';

const notes: Record<string, string> = {
  'Enable soft aim': 'Turns soft aim on or off',
  'Aim key': 'Hotkey that holds or toggles soft aim',
  'Aim FOV': 'Sets how wide the soft aim cone searches',
  'Aim smoothing': 'Slows how fast the crosshair closes on a target',
  'Bone selection (head, chest, closest)': 'Picks head, chest, or the closest bone',
  'Visible check': 'Soft aim only engages when the target is visible',
  'Draw FOV': 'Draws the aim FOV circle while you tune',
  'Draw target line': 'Draws a line to the current soft aim target',
  'Max aim distance': 'Stops soft aim past the distance you set',
  'Ignore teammates / allies': 'Skips friendly Vault Hunters and allies',
  'Enemy ESP': 'Highlights enemies and hostile mobs',
  'Health bar': 'Shows health on enemies you mark',
  'Elite / boss markers': 'Tags elite enemies and named bosses',
  'Weak-point highlight': 'Marks crit and weak-point locations',
  Distance: 'Shows how far the target is from you',
  'Loot rarity ESP': 'Shows loot with color by rarity tier',
  'Gear / weapon drop filters': 'Limits drops to the gear types you pick',
  'Chest / cache markers': 'Marks chests, caches, and red chests',
  'Mission objective markers': 'Highlights active mission objectives',
  '2D radar': 'Top-down radar separate from world ESP',
  'Player markers': 'Shows players on the radar panel',
  'Radar range': 'Sets how far the radar reaches',
  'Radar zoom': 'Zooms the radar panel in or out',
  'No recoil': 'Reduces weapon kick',
  'No spread': 'Tightens bullet spread',
  'Full bright': 'Brightens dark areas for readability',
  'Custom crosshair': 'Draws a center crosshair overlay',
  'Stream-proof overlay': 'Hides overlay from common capture tools',
  'Custom menu key': 'Opens the menu',
  'Custom panic key': 'Closes the menu and overlays quickly',
  'Config system (save / load)': 'Stores and reloads your preset',
  'Cloud DMA needed': 'Notes whether cloud DMA is required for this build',
};

function menuOption(name: string) {
  return { name, desc: notes[name] ?? name };
}

const softAimOptions = [
  'Enable soft aim',
  'Aim key',
  'Aim FOV',
  'Aim smoothing',
  'Bone selection (head, chest, closest)',
  'Visible check',
  'Draw FOV',
  'Draw target line',
  'Max aim distance',
  'Ignore teammates / allies',
];

const enemyMobOptions = [
  'Enemy ESP',
  'Health bar',
  'Elite / boss markers',
  'Weak-point highlight',
  'Distance',
];

const lootOptions = [
  'Loot rarity ESP',
  'Gear / weapon drop filters',
  'Chest / cache markers',
  'Mission objective markers',
];

const radarOptions = ['2D radar', 'Player markers', 'Radar range', 'Radar zoom'];

const miscOptions = [
  'No recoil',
  'No spread',
  'Full bright',
  'Custom crosshair',
  'Stream-proof overlay',
  'Custom menu key',
  'Custom panic key',
  'Config system (save / load)',
  'Cloud DMA needed',
];

export const BL3_FEATURE_COUNT =
  softAimOptions.length +
  enemyMobOptions.length +
  lootOptions.length +
  radarOptions.length +
  miscOptions.length;

export const RUST_CHEAT_FEATURE_GROUPS: ProductFeatureGroup[] = [
  { name: 'Soft Aim', items: softAimOptions.map(menuOption) },
  { name: 'Enemy / Mob', items: enemyMobOptions.map(menuOption) },
  { name: 'Loot', items: lootOptions.map(menuOption) },
  { name: 'Radar', items: radarOptions.map(menuOption) },
  { name: 'Misc', items: miscOptions.map(menuOption) },
];

export const RUST_HOME_FEATURE_TILES: { title: string; subtitle: string }[] = [
  {
    title: 'Soft Aim',
    subtitle: 'Soft aim, aim key, FOV, smoothing, bones, visible check, and max distance.',
  },
  {
    title: 'Enemy / Mob',
    subtitle: 'Enemy ESP, health bars, elite and boss markers, weak points, and distance.',
  },
  {
    title: 'Loot',
    subtitle: 'Loot rarity ESP, gear filters, chest markers, and mission objectives.',
  },
  {
    title: 'Radar',
    subtitle: '2D radar, player markers, range, and zoom on a separate panel.',
  },
  {
    title: 'Misc',
    subtitle: 'No recoil, no spread, full bright, crosshair, stream-proof, keys, and configs.',
  },
];