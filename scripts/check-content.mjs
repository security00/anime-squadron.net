import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'out');
const forbidden = [
  /LOGIN/i,
  /Sign in/i,
  /guaranteed working/i,
  /Roblox-approved/i,
  /authorized by Roblox/i,
  /endorsed by Roblox/i,
  /free Robux claim/i,
];
const requiredCore = ['unofficial', 'not affiliated', 'needs verification'];
const coreRoutes = new Set(['index.html', 'codes/index.html', 'tier-list/index.html', 'traits/index.html', 'beginner-guide/index.html']);
const htmlFiles = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.name.endsWith('.html')) htmlFiles.push(p);
  }
}
walk(out);
let failed = false;
for (const file of htmlFiles) {
  const txt = fs.readFileSync(file, 'utf8');
  const rel = path.relative(out, file);
  for (const re of forbidden) {
    if (re.test(txt)) { console.error(`Forbidden content ${re} in ${file}`); failed = true; }
  }
  if (coreRoutes.has(rel)) {
    const lower = txt.toLowerCase();
    for (const token of requiredCore) {
      if (!lower.includes(token)) { console.error(`Missing ${token} in ${file}`); failed = true; }
    }
  }
}
if (!htmlFiles.length) { console.error('No exported HTML files found'); failed = true; }
if (failed) process.exit(1);
console.log(`Content check passed for ${htmlFiles.length} HTML files.`);
