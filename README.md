# Tiny Warehouse website

Static marketing, privacy and support pages built with React and Next.js.
See STATIC_UPDATE.md for migration instructions and Netlify deployment.

## Local use

Node 24 is recommended.

```bash
npx --yes pnpm@11.25.0 install --frozen-lockfile
npm run dev
```

Development: http://127.0.0.1:5173

```bash
npm run build
npm start
```

Static preview: http://127.0.0.1:4173
Deploy the generated out folder. No database, authentication service or Cloudflare worker is used.

Edit app/page.tsx, app/privacy/page.tsx, app/support/page.tsx and app/globals.css.
Images belong in public. Keep contact details and legal content accurate before publishing.

Validation: npm run lint and npm run typecheck. Rebuild after changes to regenerate the security headers.
