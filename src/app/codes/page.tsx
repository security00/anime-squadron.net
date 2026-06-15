import type { Metadata } from 'next';
import { Faq, Freshness, Hero, Notice, VerificationTable } from '@/components/PageBlocks';
import { JsonLd } from '@/components/JsonLd';
import { pageMeta, site } from '@/lib/site';

export const metadata: Metadata = { title: pageMeta.codes.title, description: pageMeta.codes.description, alternates: { canonical: '/codes/' } };

export default function CodesPage() {
  const faqs = [
    { q: 'Are these Anime Squadron codes guaranteed to work?', a: 'No. Codes can expire or change at any time. The page uses last-checked labels and does not call a code active until it has been verified.' },
    { q: 'Why is my Anime Squadron code not working?', a: 'Check spelling, capitalization, server age, expiration, account eligibility, and whether the code has already been redeemed.' },
    { q: 'Where should codes be verified?', a: 'Prefer in-game testing and official or developer-controlled channels. Community pages can help discovery but should not be treated as final proof.' },
  ];
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: pageMeta.codes.title, dateModified: site.checkedAt, author: { '@type': 'Organization', name: site.name } }} />
      <Hero eyebrow="Codes / redeem help" title="Anime Squadron Codes" description="A verification-first codes page: copy only after a code is confirmed, keep expired or unknown codes separate, and troubleshoot failures without fake guarantees." />
      <Freshness />
      <section className="section">
        <h2>Current code status</h2>
        <Notice tone="warn"><strong>Needs verification:</strong> no specific active Anime Squadron code is published here until it is checked against reliable sources or in-game. This avoids misleading players with untested rewards.</Notice>
        <VerificationTable rows={[
          { item: 'Active codes', status: 'Needs verification', note: 'Do not fill from snippets or copied lists without source review.' },
          { item: 'Expired codes', status: 'Needs verification', note: 'Keep expired entries separate after confirmation.' },
          { item: 'Redeem path', status: 'Needs verification', note: 'Confirm the exact in-game UI path before publishing step-by-step instructions.' },
        ]} />
      </section>
      <section className="section" id="why-codes-not-working">
        <h2>Why Anime Squadron codes may not work</h2>
        <ul className="checklist">
          <li>The code may be expired or limited to a release/update window.</li>
          <li>Capitalization, spaces, or punctuation may not match the original code.</li>
          <li>The server may need to restart before a new code is accepted.</li>
          <li>The code may already have been redeemed on your account.</li>
          <li>A community list may have copied an unverified or fake code.</li>
        </ul>
      </section>
      <Faq items={faqs} />
    </>
  );
}
