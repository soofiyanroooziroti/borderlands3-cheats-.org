import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const files = [
  'src/i18n/en.json',
  'src/i18n/product/en.json',
  'src/data/product-catalog-en.ts',
  'src/data/faq.ts',
  'src/data/forum.ts',
];

for (const rel of files) {
  const f = path.join(root, rel);
  if (!fs.existsSync(f)) continue;
  let t = fs.readFileSync(f, 'utf8');
  t = t.replace(/Borderlands 3 or  update/gi, 'Borderlands 3 client update');
  t = t.replace(/after an  or/gi, 'after a');
  t = t.replace(/especially after an  or/gi, 'especially after a');
  t = t.replace(/A game, , or/gi, 'A game or');
  t = t.replace(/Windows rust hwid/gi, 'Borderlands 3 hwid');
  t = t.replace(/rust hwid/gi, 'Borderlands 3 hwid');
  t = t.replace(/launching Rust/gi, 'launching Borderlands 3');
  t = t.replace(/"Rust /g, '"Borderlands 3 ');
  t = t.replace(/alt": "Rust /g, 'alt": "Borderlands 3 ');
  if (rel.includes('product/en.json')) {
    t = t.replace(
      /"text": "Monthly \$35 USD or lifetime \$150 USD\."/,
      '"text": "Monthly $50 USD or lifetime $150 USD."',
      1,
    );
  }
  fs.writeFileSync(f, t);
}