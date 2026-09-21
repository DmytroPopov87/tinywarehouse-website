import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiny Warehouse — Cozy Parcel Sorting",
  description: "Sort colourful parcels through 60 seasonal warehouse shifts. Tiny Warehouse is coming soon to the App Store.",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`, shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg` },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <span>© 2026 Tiny Warehouse</span>
          <div><Link href="/privacy">Privacy</Link><Link href="/support">Support</Link></div>
        </footer>
      </body>
    </html>
  );
}
