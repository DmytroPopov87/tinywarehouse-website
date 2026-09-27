"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Box, CalendarDays, Heart, ScanLine,
  Snowflake, Sparkles, Timer, Trophy, WandSparkles,
} from "lucide-react";
import gallery from "./gameplay-gallery.module.css";

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
            <span className="brand-mark">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/tw-logo.png`}
                alt=""
                width={56}
                height={56}
                priority
              />
            </span>
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
              <a className="text-link" href="#gameplay">See the game <ArrowRight size={18} /></a>
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

      <section className={gallery.gameplaySection} id="gameplay" aria-labelledby="gameplay-title">
        <div className={`${gallery.gameplayHeading} reveal`}>
          <div>
            <span className="section-kicker">ACTUAL GAMEPLAY</span>
            <h2 id="gameplay-title">Clock in.<br />Sort it out.</h2>
          </div>
          <p>
            Tiny Warehouse is built around quick, readable sorting. Match each
            parcel to its conveyor, deal with special handling rules and keep
            the floor moving as the shifts get busier.
          </p>
        </div>

        <div className={gallery.galleryGrid}>
          <figure className={`${gallery.featureShot} reveal`}>
            <div className={`${gallery.phoneFrame} ${gallery.featureFrame}`}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gameplay/gameplay-scan.webp`}
                alt="Tiny Warehouse gameplay showing parcels, sorting conveyors, lives and boosters"
                width={720}
                height={1559}
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 56vw, 590px"
              />
            </div>
            <figcaption>
              <span className={gallery.captionKicker}>ON THE FLOOR</span>
              <h3>Read fast. Sort clean.</h3>
              <p>
                Colour and symbol keep every destination readable while SCAN,
                heavy and other special parcels change the rhythm of a shift.
              </p>
            </figcaption>
          </figure>

          <div className={gallery.supportingShots}>
            <figure className={`${gallery.storyCard} reveal`}>
              <div className={`${gallery.cropFrame} ${gallery.homeCrop}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gameplay/home.webp`}
                  alt="Tiny Warehouse main menu with Play, Levels and Shop"
                  width={720}
                  height={1559}
                  sizes="(max-width: 760px) 92vw, 285px"
                />
              </div>
              <figcaption>
                <span className={gallery.captionKicker}>CLOCK IN</span>
                <h3>A clear home base.</h3>
                <p>Jump straight into your current shift, revisit levels or check the shop.</p>
              </figcaption>
            </figure>

            <figure className={`${gallery.storyCard} reveal`}>
              <div className={`${gallery.cropFrame} ${gallery.shiftCrop}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gameplay/select-shift.webp`}
                  alt="Tiny Warehouse shift selection with warehouse rank, Daily Shift, Peak Shift and seasonal levels"
                  width={720}
                  height={1559}
                  sizes="(max-width: 760px) 92vw, 285px"
                />
              </div>
              <figcaption>
                <span className={gallery.captionKicker}>BUILD YOUR CAREER</span>
                <h3>Sixty shifts and more.</h3>
                <p>Seasonal chapters sit alongside Daily Shift and endless Peak Shift challenges.</p>
              </figcaption>
            </figure>

            <figure className={`${gallery.storyCard} ${gallery.maraCard} reveal`}>
              <div className={`${gallery.cropFrame} ${gallery.maraCrop}`}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/gameplay/mara-brief.webp`}
                  alt="Mara giving the player a Tiny Warehouse shift briefing"
                  width={720}
                  height={1559}
                  sizes="(max-width: 760px) 92vw, 590px"
                />
              </div>
              <figcaption>
                <span className={gallery.captionKicker}>MEET MARA</span>
                <h3>Guidance without the clutter.</h3>
                <p>Mara introduces new ideas as they arrive, keeping the first shifts friendly and focused.</p>
              </figcaption>
            </figure>
          </div>
        </div>
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
        <span className="launch-mark">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/tw-logo.png`}
            alt=""
            width={82}
            height={82}
          />
        </span>
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
