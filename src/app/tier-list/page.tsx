import type { Metadata } from 'next';
import { CardGrid, Faq, Freshness, Hero, Notice, VerificationTable } from '@/components/PageBlocks';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, site } from '@/lib/site';

export const metadata: Metadata = { title: pageMeta.tier.title, description: pageMeta.tier.description, alternates: { canonical: '/tier-list/' } };

export default function TierListPage() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: pageMeta.tier.title, dateModified: site.checkedAt }} />
      <Hero eyebrow="Units / meta decisions" title="Anime Squadron Tier List" description="A cautious tier-list page for unit decisions, focused on roles, update dates, and methodology before publishing exact rankings." />
      <Freshness label="Last updated" />
      <section className="section">
        <h2>Tier list status</h2>
        <Notice tone="warn">Exact S/A/B/C rankings are not shown until unit names, modes, acquisition paths, and current patch context are verified.</Notice>
        <VerificationTable rows={[
          { item: 'Unit names', status: 'Needs verification', note: 'Confirm against in-game, Roblox page, developer channels, or reliable cross-sources.' },
          { item: 'Rankings', status: 'Needs verification', note: 'Separate community opinion from tested performance.' },
          { item: 'Best units', status: 'Needs verification', note: 'Do not label a unit best without date, mode, and reasoning.' },
        ]} />
      </section>
      <section className="section">
        <h2>How rankings will be judged</h2>
        <CardGrid items={[
          { title: 'Wave clear', text: 'How well a unit handles lane pressure and repeated waves.', tag: 'Role' },
          { title: 'Boss pressure', text: 'Single-target value against high-health enemies or raid-style content.', tag: 'Role' },
          { title: 'Cost curve', text: 'Whether a unit is strong early or only after expensive upgrades.', tag: 'Economy' },
          { title: 'Trait fit', text: 'Whether common traits meaningfully improve the unit role.', tag: 'Synergy' },
        ]} />
      </section>
      <Faq items={[
        { q: 'Why is there no final S-tier list yet?', a: 'Publishing a fake tier list would mislead players. Exact rankings require current-game verification and source notes.' },
        { q: 'Can community tier lists be used?', a: 'They can inform the page, but the site must label them as community opinion unless independently tested.' },
      ]} />
    </>
  );
}
