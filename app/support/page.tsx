import Link from "next/link";
import { ArrowLeft, Bell, CreditCard, Heart, HelpCircle, Package, RotateCcw } from "lucide-react";

export const dynamic = "force-static";

export const metadata = {
  title: "Support — Tiny Warehouse",
  description: "Help and contact information for Tiny Warehouse.",
};

const topics = [
  { icon: Heart, title: "Lives booster", text: "Lives adds one heart when a shift has room for it. It stays inactive while all three hearts are full." },
  { icon: RotateCcw, title: "Restore a purchase", text: "Open Settings in Tiny Warehouse and choose Restore Purchases. Make sure you are signed in with the Apple Account used for the purchase." },
  { icon: Bell, title: "Daily Shift reminders", text: "Notifications are optional. You can enable or disable them from the game’s Settings screen or iOS Settings." },
  { icon: CreditCard, title: "Starter Pack", text: "The Starter Pack is an optional one-time purchase. If a purchase is pending, the game will grant it after Apple confirms the transaction." },
];

export default function SupportPage() {
  return (
    <main className="legal-shell">
      <nav className="legal-nav">
        <Link className="wordmark" href="/"><span className="brand-mark"><Package size={22} /></span><span>TINY WAREHOUSE</span></Link>
        <Link className="back-link" href="/"><ArrowLeft size={17} /> Back to game</Link>
      </nav>
      <article className="legal-card support-card">
        <div className="legal-title">
          <span className="legal-icon"><HelpCircle /></span>
          <div><span className="section-kicker">WE’RE HERE TO HELP</span><h1>Support</h1><p>Quick answers for your next shift.</p></div>
        </div>
        <div className="support-grid">
          {topics.map(({ icon: Icon, title, text }) => (
            <section className="support-topic" key={title}><Icon /><h2>{title}</h2><p>{text}</p></section>
          ))}
        </div>
        <section className="contact-panel">
          <div>
            <span className="section-kicker">STILL STUCK?</span>
            <h2>Send us the details.</h2>
            <p>Please include your device model, iOS version and the level where the issue occurred.</p>
          </div>
          <a
            className="contact-pending"
            href="mailto:tinywarehousehelp@yahoo.com"
          >
            tinywarehousehelp@yahoo.com
          </a>
        </section>
      </article>
    </main>
  );
}
