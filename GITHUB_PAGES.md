# Publishing Tiny Warehouse

In Settings > Pages, choose GitHub Actions as the source. The Publish website workflow builds and publishes every push to main; it can also be run manually from Actions.

Website: https://dmytropopov87.github.io/tinywarehouse-website/
Privacy: https://dmytropopov87.github.io/tinywarehouse-website/privacy/
Support: https://dmytropopov87.github.io/tinywarehouse-website/support/

The workflow uses Node 24, installs the pinned pnpm lockfile, runs lint and builds fresh static files. The checked-in out folder is not used as a prebuilt deployment.

Local development still uses npm run dev at the root URL. Deployment sets NEXT_PUBLIC_BASE_PATH and GITHUB_PAGES to prefix assets and export directory indexes for direct page navigation.

GitHub Pages does not consume the Netlify _headers file. The build embeds script-hash CSP and referrer policy in HTML for Pages. Header-only protections including frame-ancestors, X-Frame-Options and Permissions-Policy are not supplied by that HTML fallback.

For a future custom domain, update NEXT_PUBLIC_BASE_PATH to an empty string and configure the domain in Settings > Pages before rebuilding.
