# Before publishing

The site is complete and deployable, but these two factual details must be added before it becomes the App Store Privacy and Support destination:

1. Replace the temporary legal-identity sentence in `app/privacy/page.tsx` with the developer or organization legal name.
2. Replace “Support email coming before launch” in `app/support/page.tsx` with the final support email and a working `mailto:` link.

After editing, run `pnpm run build`. Netlify is configured by `netlify.toml` to publish `dist/client`.
