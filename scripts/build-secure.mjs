import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const build = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build", "--webpack"], {
  cwd: root, stdio: "inherit",
});
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);

const output = path.join(root, "out");
const hashes = new Set();
let pages = 0;
function inspect(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) inspect(filename);
    else if (entry.name.endsWith(".html")) {
      pages++;
      const html = readFileSync(filename, "utf8");
      for (const script of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
        if (!/\bsrc\s*=/i.test(script[1]) && script[2].trim()) {
          hashes.add("'sha256-" + createHash("sha256").update(script[2]).digest("base64") + "'");
        }
      }
    }
  }
}
inspect(output);
if (pages < 3) throw new Error("Expected exported Home, Privacy and Support pages.");
for (const name of ["index.html", "privacy.html", "support.html"]) {
  readFileSync(path.join(output, name));
}
const policy = [
  "default-src 'self'",
  "script-src 'self' " + [...hashes].sort().join(" "),
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'none'",
].join("; ");
const headers = [
  "/*",
  "  Content-Security-Policy: " + policy,
  "  X-Content-Type-Options: nosniff",
  "  X-Frame-Options: DENY",
  "  Referrer-Policy: strict-origin-when-cross-origin",
  "  Permissions-Policy: camera=(), microphone=(), geolocation=()",
  "",
  "/_next/static/*",
  "  Cache-Control: public, max-age=31536000, immutable",
  "",
].join("\n");
writeFileSync(path.join(output, "_headers"), headers);
console.log("Security headers generated for " + pages + " pages; " + hashes.size + " inline script hashes.");
