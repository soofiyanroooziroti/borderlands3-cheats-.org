import type { IconName } from '../components/icons/types';
import type { ProductFeatureEntry } from './product-types';
import { RUST_CHEAT_FEATURE_GROUPS } from './rust-cheat-feature-groups';

export interface RustMenuCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  toneClass: string;
  items: ProductFeatureEntry[];
}

const [softAimGroup, enemyGroup, lootGroup, radarGroup, miscGroup] = RUST_CHEAT_FEATURE_GROUPS;

export const RUST_MENU_CATEGORIES: RustMenuCategory[] = [
  {
    id: 'soft-aim',
    title: 'Soft Aim',
    subtitle: 'FOV, smoothing, bones',
    description:
      'Enable soft aim, set the aim key, then tune FOV, smoothing, and bone selection. Visible check, draw FOV, draw target line, max distance, and ignore teammates stay in this group.',
    icon: 'crosshair',
    toneClass: 'features-cat-icon--aimbot',
    items: softAimGroup?.items ?? [],
  },
  {
    id: 'enemy',
    title: 'Enemy / Mob',
    subtitle: 'ESP & health',
    description:
      'Enemy ESP with health bars, elite and boss markers, weak-point highlights, and distance readouts for fights in Borderlands 3.',
    icon: 'eye',
    toneClass: 'features-cat-icon--visuals',
    items: enemyGroup?.items ?? [],
  },
  {
    id: 'loot',
    title: 'Loot',
    subtitle: 'Rarity & drops',
    description:
      'Loot rarity ESP, gear and weapon drop filters, chest and cache markers, and mission objective markers for farming routes.',
    icon: 'mapHack',
    toneClass: 'features-cat-icon--world',
    items: lootGroup?.items ?? [],
  },
  {
    id: 'radar',
    title: 'Radar',
    subtitle: '2D overview',
    description:
      '2D radar with player markers plus range and zoom controls. Radar sits apart from world ESP so you can run one without cluttering the other.',
    icon: 'featureRadar',
    toneClass: 'features-cat-icon--weapon',
    items: radarGroup?.items ?? [],
  },
  {
    id: 'misc',
    title: 'Misc',
    subtitle: 'Gun lines & keys',
    description:
      'No recoil, no spread, full bright, custom crosshair, stream-proof overlay, menu and panic keys, config save/load, and the cloud DMA note.',
    icon: 'layers',
    toneClass: 'features-cat-icon--misc',
    items: miscGroup?.items ?? [],
  },
];

export function rustMenuFeatureTotal(): number {
  return RUST_MENU_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);
}