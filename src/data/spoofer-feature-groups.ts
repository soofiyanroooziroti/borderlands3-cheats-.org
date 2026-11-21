import type { ProductFeatureGroup } from './product-types';

function spooferFeature(name: string, desc: string): ProductFeatureGroup {
  return { name, items: [{ name, desc }] };
}

export const SPOOFER_FEATURE_GROUPS: ProductFeatureGroup[] = [
  spooferFeature(
    'Hardware spoofer with cleaner',
    'Runs the spoofer pass and the cleaner before you sign into Rust on this PC.',
  ),
  spooferFeature(
    'Disk serial and MAC rotation',
    'Rotates disk serials and MAC addresses the PC reports.',
  ),
  spooferFeature(
    'GPU ID profile tools',
    'Adjusts GPU identifiers when the scan flags a graphics profile.',
  ),
  spooferFeature(
    'Compatibility scan',
    'Looks at the Windows build, drivers, and security settings before the pass.',
  ),
  spooferFeature(
    'Verification checklist',
    'Reboot if the list says to, confirm the green steps, then try a spare account.',
  ),
  spooferFeature(
    'Portal step-by-step workflow',
    'The on-screen steps follow the order written in the portal.',
  ),
  spooferFeature(
    'Discord setup support',
    'Discord help when a step errors. Send the order email and the portal message.',
  ),
];
