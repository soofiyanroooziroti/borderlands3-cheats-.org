import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoPath = path.join(root, 'public', 'logo.png');

if (!fs.existsSync(logoPath)) {
  console.error('Missing public/logo.png — add the site logo there.');
  process.exit(1);
}

console.log('Brand asset is public/logo.png (navbar, favicon, manifest, schema).');