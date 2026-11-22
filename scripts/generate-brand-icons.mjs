import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const logoPath = path.join(root, 'public', 'images', 'logo.svg');

if (!fs.existsSync(logoPath)) {
  console.error('Missing public/images/logo.svg — add the site logo there.');
  process.exit(1);
}

console.log('Brand asset is public/images/logo.svg; favicons live in public/.');