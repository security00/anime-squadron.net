import type { Metadata } from 'next';
import { CardGrid, Faq, Freshness, Hero, Notice } from '@/components/PageBlocks';
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
      <Hero eyebrow="Unofficial Roblox fan guide" title="Anime Squadron Guide Hub" description="Find the Anime Squadron info you need quickly: codes, tier list notes, traits, and beginner progression with clear update dates and source notes." actions={[{ href: '/codes/', label: 'Check codes' }, { href: '/beginner-guide/', label: 'Start beginner path' }]} />
      <Freshness />
      <section className="section">
        <h2>Choose your next squad action</h2>
        <CardGrid items={[
          { title: 'Codes', text: 'Active, expired, and unknown code states with redeem help and last-checked context.', href: '/codes/', tag: 'Fast task' },
          { title: 'Tier list', text: 'Unit roles and ranking methodology without pretending unverified meta claims are facts.', href: '/tier-list/', tag: 'Decision' },
          { title: 'Traits', text: 'Trait reroll priorities, risk notes, and source labels before spending rare items.', href: '/traits/', tag: 'Optimize' },
          { title: 'Beginner guide', text: 'A first-session route for codes, gems, summons, upgrades, and common mistakes.', href: '/beginner-guide/', tag: 'Day 1' },
        ]} />
      </section>
      <section className="section">
        <h2>Trust rules for this hub</h2>
        <Notice tone="warn">We do not publish fake active codes, guaranteed tier rankings, invented trait rates, exploit scripts, Robux promises, or private-server abuse guides.</Notice>
        <ul className="checklist">
          <li><strong>Source notes:</strong> exact game data needs public source review or in-game verification.</li>
          <li><strong>Freshness labels:</strong> pages show last checked / updated context.</li>
          <li><strong>Fan-guide boundary:</strong> the site must feel like a game guide without implying official endorsement.</li>
        </ul>
      </section>
      <Faq items={faqs} />
    </>
  );
}
