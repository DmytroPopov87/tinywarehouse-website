import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Tiny Warehouse — Cozy Parcel Sorting",
  description: "Sort colourful parcels through 60 seasonal warehouse shifts. Tiny Warehouse is coming soon to the App Store.",
  icons: {
    icon: `${basePath}/favicon.png`,
    shortcut: `${basePath}/favicon.png`,
    apple: `${basePath}/apple-touch-icon.png`,
  },
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
