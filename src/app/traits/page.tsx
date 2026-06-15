import type { Metadata } from 'next';
import { CardGrid, Faq, Freshness, Hero, Notice, VerificationTable } from '@/components/PageBlocks';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, site } from '@/lib/site';

export const metadata: Metadata = { title: pageMeta.traits.title, description: pageMeta.traits.description, alternates: { canonical: '/traits/' } };

export default function TraitsPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: pageMeta.traits.title, dateModified: site.checkedAt }} />
      <Hero eyebrow="Traits / reroll planning" title="Anime Squadron Traits Guide" description="Understand trait decisions before spending reroll resources. This page keeps effects and rates separate from opinion until verified." />
      <Freshness label="Last updated" />
      <section className="section">
        <h2>Trait data status</h2>
        <Notice tone="warn">Trait names, effects, roll rates, and best-trait claims need source review or in-game confirmation before they appear as facts.</Notice>
        <VerificationTable rows={[
          { item: 'Trait names', status: 'Needs verification', note: 'Check exact spelling and source before publishing.' },
          { item: 'Effects / rates', status: 'Needs verification', note: 'Do not invent percentages or effect values.' },
          { item: 'Reroll priority', status: 'Needs verification', note: 'Tie advice to player stage and unit role, not generic hype.' },
        ]} />
      </section>
      <section className="section">
        <h2>Safe reroll rules</h2>
        <CardGrid items={[
          { title: 'Do not reroll blindly', text: 'Wait until you know whether a trait fits the unit role and your progression stage.', tag: 'Resource' },
          { title: 'Keep role synergy in mind', text: 'Damage, economy, range, speed, or support value can matter differently by mode.', tag: 'Synergy' },
          { title: 'Check update date', text: 'Trait values can change after patches; stale guides can cost rare materials.', tag: 'Freshness' },
          { title: 'Avoid exploit advice', text: 'This guide does not cover scripts, auto-farming, or rule-breaking methods.', tag: 'Safety' },
        ]} />
      </section>
      <Faq items={[
        { q: 'What is the best Anime Squadron trait?', a: 'The best trait depends on verified effects, unit role, mode, and progression stage. Exact names need verification before publication.' },
        { q: 'Should beginners reroll traits immediately?', a: 'Usually beginners should avoid spending rare reroll resources until they understand unit value and progression bottlenecks.' },
      ]} />
    </>
  );
}
