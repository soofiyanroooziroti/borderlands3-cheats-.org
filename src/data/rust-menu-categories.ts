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

const [visualsGroup, worldGroup, weaponGroup, aimbotGroup, miscGroup, configGroup] =
  RUST_CHEAT_FEATURE_GROUPS;

export const RUST_MENU_CATEGORIES: RustMenuCategory[] = [
  {
    id: 'visuals',
    title: 'Visuals',
    subtitle: 'Players & overlays',
    description:
      'Player, scientist, and animal markers with box, skeleton, name, health, and held-item lines. Color pickers and distance sliders control how much stays on screen during PvP.',
    icon: 'eye',
    toneClass: 'features-cat-icon--visuals',
    items: visualsGroup?.items ?? [],
  },
  {
    id: 'world',
    title: 'World',
    subtitle: 'Map & loot ESP',
    description:
      'Ores, collectables, traps, stashes, cupboards, dropped loot, and vehicles share the world side of the menu. Most rows ship with their own color and draw-range controls.',
    icon: 'mapHack',
    toneClass: 'features-cat-icon--world',
    items: worldGroup?.items ?? [],
  },
  {
    id: 'aimbot',
    title: 'Aimbot',
    subtitle: 'FOV & smoothing',
    description:
      'Aim assist toggle, FOV width, smoothing, bone selection, and aim key live in one group. The FOV circle shows the search cone while you tune pull speed.',
    icon: 'crosshair',
    toneClass: 'features-cat-icon--aimbot',
    items: aimbotGroup?.items ?? [],
  },
  {
    id: 'weapon',
    title: 'Weapon',
    subtitle: 'Guns & melee',
    description:
      'Recoil, spread, sway, instant bow rows, peek binds, and rapid-fire helpers sit under weapon options. They do not replace aim assist sliders in the aimbot group.',
    icon: 'target',
    toneClass: 'features-cat-icon--weapon',
    items: weaponGroup?.items ?? [],
  },
  {
    id: 'misc',
    title: 'Misc',
    subtitle: 'Movement & view',
    description:
      'Movement aids, brightness, zoom, camera FOV, and flyhack-style toggles are optional misc lines. Keybind rows only run while you hold the bind.',
    icon: 'layers',
    toneClass: 'features-cat-icon--misc',
    items: miscGroup?.items ?? [],
  },
  {
    id: 'config',
    title: 'Config',
    subtitle: 'Overlay & performance',
    description:
      'Watermark, font and ESP size sliders, overlay width, and update or render FPS caps fine-tune how the menu draws. Save config work until combat groups feel stable.',
    icon: 'settings',
    toneClass: 'features-cat-icon--config',
    items: configGroup?.items ?? [],
  },
];

export function rustMenuFeatureTotal(): number {
  return RUST_MENU_CATEGORIES.reduce((sum, cat) => sum + cat.items.length, 0);
}