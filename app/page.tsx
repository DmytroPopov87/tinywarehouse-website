"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Box, CalendarDays, Heart, Package, ScanLine,
  Snowflake, Sparkles, Timer, Trophy, WandSparkles,
} from "lucide-react";

const parcels = [
  { label: "CARGO", tone: "coral" },
  { label: "SEASONAL", tone: "green" },
  { label: "STANDARD", tone: "blue" },
  { label: "EXPRESS", tone: "gold" },
];

export default function Home() {
  return (
    <main>
      <section className="hero-shell">
        <nav className="site-nav" aria-label="Main navigation">
          <Link className="wordmark" href="/" aria-label="Tiny Warehouse home">
            <span className="brand-mark"><Package size={22} strokeWidth={2.6} /></span>
            <span>TINY WAREHOUSE</span>
          </Link>
          <div className="nav-links">
            <a href="#game">The game</a>
            <Link href="/support">Support</Link>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={15} /> Cozy sorting. Busy shifts.</div>
            <h1>Every parcel<br />has its place.</h1>
            <p>
              Step into a tiny seasonal warehouse, sort colourful parcels and
              keep the conveyor moving through sixty handcrafted shifts.
            </p>
            <div className="hero-actions">
              <span className="store-pill">Coming soon to the App Store</span>
              <a className="text-link" href="#game">Explore the warehouse <ArrowRight size={18} /></a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Tiny Warehouse parcel sorting scene">
            <div className="season-label"><Snowflake size={15} /> AUTUMN SHIFTS · WINTER RUSH</div>
            <div className="belt">
              <div className="belt-track">
                {[...parcels, ...parcels].map((parcel, index) => (
                  <div className={`parcel parcel-${parcel.tone}`} key={`${parcel.label}-${index}`}>
                    <Box aria-hidden="true" size={28} strokeWidth={2.2} />
                    <span>{parcel.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-ticket">
              <span>Current shift</span>
              <strong>Night Dispatch</strong>
              <small>Scan, sort, and beat the rush</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro" id="game">
        <div>
          <span className="section-kicker">YOUR NEXT SHIFT</span>
          <h2>Easy to learn.<br />Satisfying to master.</h2>
        </div>
        <p>
          Match every parcel by colour and symbol, protect your lives and use
          clever boosters when the warehouse gets busy. New mechanics arrive
          naturally as the seasons change.
        </p>
      </section>

      <section className="season-showcase reveal">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/warehouse-seasons.png`}
          alt="A warm autumn parcel warehouse transitioning into a snowy winter night"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 1180px"
        />
        <div className="season-overlay">
          <span className="section-kicker light">SIX SEASONAL CHAPTERS</span>
          <h2>From golden afternoons<br />to night dispatch.</h2>
          <p>Every chapter changes the mood—and the pressure on the floor.</p>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading reveal">
          <span className="section-kicker">WHAT ARRIVES NEXT</span>
          <h2>A small game<br />with busy ideas.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card reveal">
            <span className="feature-icon coral"><ScanLine /></span>
            <span className="feature-number">01</span>
            <h3>Read the floor</h3>
            <p>Colour and symbol keep the basics clear. SCAN, glass, heavy and frozen parcels make later shifts demand a little more care.</p>
          </article>
          <article className="feature-card reveal">
            <span className="feature-icon green"><CalendarDays /></span>
            <span className="feature-number">02</span>
            <h3>A reason to return</h3>
            <p>Take on a fresh Daily Shift, chase a new Peak Shift record and collect friendly rewards without punishing streaks.</p>
          </article>
          <article className="feature-card reveal">
            <span className="feature-icon blue"><Trophy /></span>
            <span className="feature-number">03</span>
            <h3>Build your career</h3>
            <p>Earn stars, grow your Warehouse Rank and unlock cosmetic themes as Mara guides you from the first shift to master dispatch.</p>
          </article>
        </div>
      </section>

      <section className="boosters">
        <div className="boosters-copy reveal">
          <span className="section-kicker light">WHEN THINGS GET BUSY</span>
          <h2>Keep calm.<br />Keep sorting.</h2>
          <p>Boosters are there when you want a little breathing room—not because the warehouse forces you to use them.</p>
        </div>
        <div className="booster-stack">
          <div className="booster-card reveal"><Heart /><div><strong>Lives</strong><span>Recover from a mistake</span></div><b>+1</b></div>
          <div className="booster-card reveal"><Timer /><div><strong>Slow Time</strong><span>Give every parcel more room</span></div><b>5 uses</b></div>
          <div className="booster-card reveal"><WandSparkles /><div><strong>Auto Sort</strong><span>Send one parcel home instantly</span></div><b>5 uses</b></div>
        </div>
      </section>

      <section className="launch-card reveal">
        <span className="launch-mark"><Package /></span>
        <div>
          <span className="section-kicker">CLOCK IN SOON</span>
          <h2>Your first shift is waiting.</h2>
          <p>Tiny Warehouse is being prepared for its App Store release.</p>
        </div>
        <span className="store-pill dark">Coming soon</span>
      </section>
    </main>
  );
}
