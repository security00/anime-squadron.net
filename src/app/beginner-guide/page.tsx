import type { Metadata } from 'next';
import { CardGrid, Faq, Freshness, Hero, Notice } from '@/components/PageBlocks';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, site } from '@/lib/site';

export const metadata: Metadata = { title: pageMeta.beginner.title, description: pageMeta.beginner.description, alternates: { canonical: '/beginner-guide/' } };

export default function BeginnerGuidePage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: pageMeta.beginner.title, dateModified: site.checkedAt }} />
      <Hero eyebrow="New player path" title="Anime Squadron Beginner Guide" description="A practical first-session route for Roblox players: claim verified codes, spend carefully, understand units and traits, then push modes with fewer mistakes." />
      <Freshness label="Last updated" />
      <section className="section">
        <h2>Day 1 path</h2>
        <ul className="checklist">
          <li><strong>1. Check codes carefully.</strong> Only redeem codes that are currently verified and copied exactly.</li>
          <li><strong>2. Learn the core loop.</strong> Summon, deploy, upgrade, clear waves, and avoid spending rare resources before you understand value.</li>
          <li><strong>3. Build around roles.</strong> Think in wave clear, boss damage, support, economy, and trait fit.</li>
          <li><strong>4. Delay risky rerolls.</strong> Trait rerolls can be costly; wait for verified trait effects and unit priorities.</li>
          <li><strong>5. Re-check after updates.</strong> New Roblox games can change rewards, units, and balance quickly.</li>
        </ul>
      </section>
      <section className="section">
        <h2>Beginner mistakes to avoid</h2>
        <CardGrid items={[
          { title: 'Spending before checking', text: 'Do not spend rare currency based on stale tier lists or copied claims.', tag: 'Economy' },
          { title: 'Ignoring code status', text: 'Expired or fake codes waste time; use last-checked labels.', tag: 'Codes' },
          { title: 'Chasing one unit', text: 'A balanced squad often matters more than one hyped pull.', tag: 'Squad' },
          { title: 'Using scripts', text: 'Avoid exploit, auto-farm, or Robux generator claims. They are outside this guide and may risk your account.', tag: 'Safety' },
        ]} />
      </section>
      <Notice tone="ok">This beginner route is intentionally conservative until Roblox/Discord/gameplay sources are verified for exact mode names, rewards, and UI steps.</Notice>
      <Faq items={[
        { q: 'What should I do first in Anime Squadron?', a: 'Check verified codes, learn the basic summon/deploy/upgrade loop, and avoid spending rare resources until you understand units and traits.' },
        { q: 'Does this guide include scripts or free Robux?', a: 'No. This site does not provide exploit scripts, auto-farming, private-server abuse, free Robux, or account-risk advice.' },
      ]} />
    </>
  );
}
