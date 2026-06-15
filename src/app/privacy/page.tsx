import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Privacy Policy', description: 'Privacy Policy for Anime Squadron Guide Hub.', robots: { index: false, follow: true }, alternates: { canonical: '/privacy/' } };

export default function Page() {
  return <article className="legal"><p className="eyebrow">Legal / support</p><h1>Privacy Policy</h1><p>We collect only minimal operational information needed to run the site. If analytics or ads are added later, this page must be updated before production launch.</p><p>{site.name} is not affiliated with Roblox, Komplex Studio, Anime Squadron developers, or anime/game rights holders.</p><p>Last updated: {site.checkedAt}</p></article>;
}
