import { existsSync, mkdirSync, renameSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const backup = path.join(path.dirname(root), path.basename(root) + '-starter-backup-' + Date.now());
// Only obsolete starter paths; pages, styles and public assets stay in place.
const obsolete = [
  'app/chatgpt-auth.ts', 'db', 'drizzle', 'examples', 'components', 'hooks', 'lib',
  'vendor', 'build', 'cloudflare-env.d.ts', 'drizzle.config.ts', 'vite.config.ts',
  'components.json', 'wrangler.json', 'wrangler.jsonc', 'wrangler.toml',
  'scripts/build-verified.sh', 'scripts/execution-profile.mjs',
  'scripts/install-ci.mjs', 'scripts/install-ci.sh', 'scripts/install-pnpm.sh',
  'scripts/pnpm-install.mjs', 'scripts/run-framework.mjs', 'scripts/sites-env.mjs',
  'scripts/sites-env.sh', '.openai', '.wrangler', '.vinext', 'dist',
  'package-lock.json', 'SECURITY_UPDATE.md',
];
for (const relative of obsolete) {
  const source = path.join(root, relative);
  if (!existsSync(source)) continue;
  const target = path.join(backup, relative);
  mkdirSync(path.dirname(target), { recursive: true });
  renameSync(source, target);
  console.log('Backed up:', relative);
}
console.log('Backup location:', backup);
