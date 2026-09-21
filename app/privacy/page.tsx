import Link from "next/link";
import { ArrowLeft, LockKeyhole, Package } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Privacy Policy — Tiny Warehouse",
  description: "Privacy information for the Tiny Warehouse mobile game.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-shell">
      <nav className="legal-nav">
        <Link className="wordmark" href="/"><span className="brand-mark"><Package size={22} /></span><span>TINY WAREHOUSE</span></Link>
        <Link className="back-link" href="/"><ArrowLeft size={17} /> Back to game</Link>
      </nav>
      <article className="legal-card">
        <div className="legal-title">
          <span className="legal-icon"><LockKeyhole /></span>
          <div><span className="section-kicker">PLAIN AND PRIVATE</span><h1>Privacy Policy</h1><p>Last updated: 21 September 2026</p></div>
        </div>
        <div className="legal-copy">
          <section><h2>The short version</h2><p>Tiny Warehouse does not require an account and does not include third-party advertising or analytics. Game progress, settings and reward information are stored locally on your device.</p></section>
          <section><h2>Information stored on your device</h2><p>The game stores progress, stars, coins, boosters, unlocked themes, preferences and daily activity locally so your game can continue between sessions. You can remove this information by deleting the app, subject to your device and backup settings.</p></section>
          <section><h2>Purchases</h2><p>Optional in-app purchases are processed by Apple through the App Store. The developer does not receive your full payment-card details. Apple may process purchase and transaction information under its own privacy policy.</p></section>
          <section><h2>Notifications</h2><p>If you choose to allow notifications, Tiny Warehouse may schedule local reminders on your device. You can change notification permission at any time in iOS Settings.</p></section>
          <section><h2>Data sharing</h2><p>Tiny Warehouse does not sell personal information. The current version does not send gameplay data to advertising networks or third-party analytics services.</p></section>
          <section><h2>Children</h2><p>The game is designed for a general audience and does not knowingly collect personal information from children.</p></section>
          <section><h2>Changes and contact</h2><p>This policy may be updated when the game changes. Privacy questions can be sent through the contact method published on the <Link href="/support">Support page</Link>. Contact us at{" "}
            <a href="mailto:tinywarehousehelp@yahoo.com">
              tinywarehousehelp@yahoo.com
            </a>.
          </p>
          </section>
        </div>
      </article>
    </main>
  );
}
