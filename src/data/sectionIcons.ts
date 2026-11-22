import type { IconName } from '../components/icons/types';

export const featureIcons: Record<string, IconName> = {
  'Soft Aim': 'featureAimbot',
  'Enemy / Mob': 'featureEsp',
  Loot: 'lootEsp',
  Radar: 'featureRadar',
  Misc: 'toolkitMovement',
};

export const whyUsIcons: IconName[] = ['whyShield', 'whyUsers', 'whyMonitor', 'whyHeadphones'];

export const setupStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqCheck'];

export const toolkitIcons: Record<string, IconName> = {
  'Soft Aim': 'toolkitCombat',
  'Enemy / Mob': 'toolkitVision',
  Loot: 'lootEsp',
  Radar: 'toolkitRadar',
  Misc: 'toolkitProfiles',
};

export const workflowIcons: IconName[] = [
  'workflowAlert',
  'workflowPackage',
  'workflowSettings',
  'workflowCheck',
];

export const fieldNoteIcons: IconName[] = ['fieldCalendar', 'fieldShield', 'fieldHeadphones'];

export const blogTagIcons: Record<string, IconName> = {
  Guides: 'navBlog',
  Setup: 'settings',
  Features: 'layers',
  Updates: 'refresh',
  Troubleshooting: 'alert',
};

export const heroStatusPills: { icon: IconName; label: string }[] = [
  { icon: 'softAim', label: 'Soft aim' },
  { icon: 'featureAimbot', label: 'Aim FOV' },
  { icon: 'boneSelect', label: 'Bone select' },
  { icon: 'featureEsp', label: 'Enemy ESP' },
  { icon: 'lootEsp', label: 'Loot rarity' },
  { icon: 'featureRadar', label: '2D radar' },
  { icon: 'noRecoil', label: 'No recoil' },
  { icon: 'featureNoRecoil', label: 'No spread' },
  { icon: 'seasonBuild', label: 'Full bright' },
  { icon: 'streamProof', label: 'Stream-proof' },
  { icon: 'instantDelivery', label: 'Config save' },
  { icon: 'shieldCheck', label: 'Visible check' },
];

export const heroStatIcons: IconName[] = [
  'heroStatStream',
  'heroStatClock',
  'heroStatUsers',
  'heroStatHeadphones',
];

export const cheatTierIcons: Record<string, IconName> = {
  Lite: 'tierLite',
  Pro: 'tierPro',
  Elite: 'tierElite',
};

export const productCategoryIcons: Record<string, IconName> = {
  'Core product': 'coreProduct',
  'External suite': 'externalSuite',
  'DMA hardware': 'dmaHardware',
  'System utility': 'systemUtility',
  'Account recovery': 'accountRecovery',
  Cosmetic: 'cosmetic',
};

export const acquisitionStepIcons: IconName[] = ['acqPackage', 'acqSettings', 'acqZap', 'acqCheck'];

export const productAcquisitionStepIcons: IconName[] = [
  'liveStatus',
  'acqPackage',
  'headphones',
  'acqCheck',
];

export const productRequirementIcons: Partial<Record<IconName, IconName>> = {
  reqWindows: 'compatWindows',
  reqSteam: 'compatSteam',
  reqSettings: 'compatPackage',
  reqWifi: 'compatWifi',
  reqCpu: 'compatMonitor',
  reqRestorePoint: 'compatRefresh',
  reqShieldGuide: 'compatShield',
  reqMailOrder: 'mail',
  reqShieldAccount: 'compatShield',
  reqWifiPortal: 'compatWifi',
};

export function requirementDisplayIcon(icon: IconName): IconName {
  return productRequirementIcons[icon] ?? icon;
}

export const compatibilityIcons: IconName[] = [
  'compatWindows',
  'compatSteam',
  'compatPackage',
  'compatMonitor',
  'compatRefresh',
  'compatWifi',
  'compatDiscord',
  'compatShield',
];