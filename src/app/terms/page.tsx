import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Terms of Use', description: 'Terms of Use for Anime Squadron Guide Hub.', robots: { index: false, follow: true }, alternates: { canonical: '/terms/' } };

export default function Page() {
  return <article className="legal"><p className="eyebrow">Legal / support</p><h1>Terms of Use</h1><p>This site is an unofficial fan guide. Game information may change, and players should verify details in-game and through official channels before spending resources.</p><p>{site.name} is not affiliated with Roblox, Komplex Studio, Anime Squadron developers, or anime/game rights holders.</p><p>Last updated: {site.checkedAt}</p></article>;
}
