import Image from 'next/image';
import Link from 'next/link';
import { nav } from '@/lib/site';

const sideItems = [
  { href: '/', label: 'Home', icon: '⌂' },
  { href: '/codes/', label: 'Codes Matrix', icon: '▣' },
  { href: '/tier-list/', label: 'Meta Analysis', icon: '▲' },
  { href: '/traits/', label: 'Trait Lab', icon: '✦' },
  { href: '/beginner-guide/', label: 'Map Guides', icon: '◆' },
];

export function Header() {
  return (
    <>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Anime Squadron Guide Hub home">
          <span className="wordmark-main">ANIME SQUADRON</span>
          <span className="wordmark-sub">GUIDE HUB</span>
        </Link>
        <nav className="top-nav" aria-label="Primary navigation">
          {nav.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div className="hud-search" aria-hidden="true"><span>SEARCH DATABASE...</span><b>⌕</b></div>
      </header>

      <aside className="hud-sidebar" aria-label="Guide command navigation">
        <div className="command-card">
          <div className="rank-icon"><Image src="/assets/favicon.svg" alt="" width={34} height={34} /></div>
          <div>
            <strong>SQUAD COMMAND</strong>
            <small>Vanguard Division</small>
          </div>
        </div>
        <Link className="update-button" href="/codes/">UPDATE DATABASE</Link>
        <nav>
          {sideItems.map((item) => (
            <Link key={item.href} href={item.href} className="side-link">
              <span>{item.icon}</span><b>{item.label}</b>
            </Link>
          ))}
        </nav>
        <p className="side-disclaimer">Unofficial fan guide. Not affiliated with Roblox or the Anime Squadron developers.</p>
      </aside>
    </>
  );
}
