# Tiny Warehouse static website update

This patch retains React and Next.js for the existing pages, but uses Next.js static export directly. No Cloudflare account, database, authentication service or production Node server is required. Your app pages, email, CSS and public images are not included in this patch, so your edits stay in place.

## Apply on Windows

1. Stop the running website with Ctrl+C. Back up your project folder.
2. Copy this ZIP's files into the TinyWarehouse project root, overwriting the matching files. Merge the scripts folder; do not replace the whole folder.
3. In Git Bash, run the following commands one at a time. Stop if any command fails.

```bash
cd ~/Desktop/TinyWarehouse
node scripts/cleanup-starter.mjs
rm -rf node_modules .next
npx --yes pnpm@11.25.0 install --frozen-lockfile
npm run build
npm run dev
```

Open http://127.0.0.1:5173 for development.

The cleanup script moves known unused starter files to a timestamped sibling backup folder. It also moves the old npm package-lock.json: pnpm-lock.yaml is the authoritative lockfile. Keep that backup until you have checked the website. If you added your own components, hooks, database features or imports beyond the page/email/CSS edits discussed, review the cleanup list before running it.

For a preview of the actual static build, stop the development server and run `npm start`, then open http://127.0.0.1:4173. Rebuild after editing content. This preview server listens only on your computer.

## Netlify

Commit the cleaned project and its pnpm lockfile to GitHub. Build command: `pnpm run build`. Publish directory: `out`. Node version: 24. The included netlify.toml sets these values. Remove any previously configured dist/client publish override or Cloudflare/Next server adapter plugin in your hosting dashboard. For manual drag-and-drop deployment, upload the generated out folder, including its _headers file.

The build generates security headers with hashes for the exported inline scripts. Leave HTML post-processing disabled so those hashes stay valid. Rebuilding regenerates them automatically.

Check Home, Privacy and Support, all contact links, and mobile layout before publishing. This patch does not update your legal text or claim to validate its accuracy.

## What changed

- 42 direct dependencies reduced to 12.
- Removed database, auth helper, Cloudflare, Wrangler, vinext/Vite and unused UI starter packages.
- Kept React, Next.js static export, Lucide icons, Tailwind and TypeScript/lint tooling.
- Preserved dependency release-age checks and build-generated security headers.
- `npm start` now previews an existing static build instead of starting a Cloudflare worker.
- Netlify serves out instead of dist/client.

Use pnpm for dependency installation and updates; npm run commands still work normally. No pnpm installation is needed globally when using the npx command above.
