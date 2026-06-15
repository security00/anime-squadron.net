import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact', description: 'Contact for Anime Squadron Guide Hub.', robots: { index: false, follow: true }, alternates: { canonical: '/contact/' } };

export default function Page() {
  return <article className="legal"><p className="eyebrow">Legal / support</p><h1>Contact</h1><p>For corrections, source updates, or rights-holder requests, contact <a href={`mailto:${site.email}`}>{site.email}</a>. Do not send account passwords, Roblox credentials, or private tokens.</p><p>{site.name} is not affiliated with Roblox, Komplex Studio, Anime Squadron developers, or anime/game rights holders.</p><p>Last updated: {site.checkedAt}</p></article>;
}
