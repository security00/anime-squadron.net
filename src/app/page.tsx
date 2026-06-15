import type { Metadata } from 'next';
import Link from 'next/link';
import { Faq, Freshness, ModuleCard, Notice } from '@/components/PageBlocks';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, site } from '@/lib/site';

export const metadata: Metadata = { title: pageMeta.home.title, description: pageMeta.home.description, alternates: { canonical: '/' } };

export default function Home() {
  const faqs = [
    { q: 'Is this the official Anime Squadron website?', a: 'No. This is an unofficial fan-made guide hub for Anime Squadron on Roblox and is not affiliated with Roblox or the developers.' },
    { q: 'Why do some game details say needs verification?', a: 'Anime Squadron is update-driven. We only publish exact codes, traits, rewards, and unit claims after source checks instead of inventing details.' },
    { q: 'What should new players read first?', a: 'Start with codes, then the beginner guide, then check tier and trait notes before spending rare resources.' },
  ];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url, description: site.description }} />
      <section className="home-hero grid-bg" aria-labelledby="home-title">
        <div className="scanline" />
        <div className="battle-visual" aria-hidden="true"><span className="crystal-core" /><span className="lane lane-one" /><span className="lane lane-two" /><span className="lane lane-three" /></div>
        <div className="hero-stamps"><span>Unofficial Fan Guide</span><span>Last checked: {site.checkedAt}</span></div>
        <h1 id="home-title">ANIME SQUADRON <span>GUIDE HUB</span></h1>
        <p className="lead hero-lead">Find the Anime Squadron info you need quickly: codes, tier list notes, traits, and beginner progression with clear update dates and source notes.</p>
        <div className="actions center-actions">
          <Link className="button" href="/codes/">CHECK CODES</Link>
          <Link className="button secondary purple" href="/tier-list/">TIER LIST</Link>
          <Link className="button secondary gold" href="/traits/">TRAITS</Link>
          <Link className="button secondary" href="/beginner-guide/">BEGINNER GUIDE</Link>
        </div>
      </section>

      <Freshness />

      <section className="module-grid" aria-label="Anime Squadron guide modules">
        <ModuleCard number="01" tone="cyan" href="/tier-list/" title="Power Scaling" text="Unit role and ranking methodology before publishing verified meta claims." />
        <ModuleCard number="02" tone="purple" href="/codes/" title="Spirit Hunting" text="Codes, rewards, and source checks kept separate from unverified drops." />
        <ModuleCard number="03" tone="gold" href="/traits/" title="Trait Synergy" text="Reroll planning, trait fit, and risk notes for rare resources." />
        <ModuleCard number="04" tone="white" href="/beginner-guide/" title="Raid Tactics" text="A conservative player path for summons, upgrades, modes, and mistakes." />
      </section>

      <section className="section tactical-panel">
        <span className="panel-kicker">Tactical Flow v2.0</span>
        <h2>Suggested Player Path</h2>
        <div className="path-line" aria-hidden="true" />
        <div className="player-path">
          {[
            ['01', 'Redeem Codes', 'Claim only verified codes and separate unknown entries.'],
            ['02', 'Summon Units', 'Spend gems carefully after reading unit role notes.'],
            ['03', 'Check Traits', 'Delay rerolls until effects and rates are verified.'],
            ['04', 'Push Modes', 'Re-check guide notes after game updates.'],
          ].map(([step, title, text]) => <article key={step} className="path-step"><span>{step}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="section status-grid">
        <div className="status-panel">
          <h2>Codes Status</h2>
          <p className="big-status">NEEDS VERIFICATION</p>
          <p>Exact active codes stay out of the page until source review or in-game checks confirm them.</p>
        </div>
        <div className="status-panel">
          <h2>How We Verify Information</h2>
          <Notice tone="warn">We do not publish fake active codes, guaranteed tier rankings, invented trait rates, exploit scripts, Robux promises, or private-server abuse guides.</Notice>
          <ul className="checklist compact">
            <li><strong>Source notes:</strong> exact game data needs public source review or in-game verification.</li>
            <li><strong>Freshness labels:</strong> pages show last checked / updated context.</li>
            <li><strong>Fan-guide boundary:</strong> the site must feel like a game guide without implying official endorsement.</li>
          </ul>
        </div>
      </section>
      <Faq items={faqs} />
    </>
  );
}
