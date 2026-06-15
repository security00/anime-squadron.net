import Image from 'next/image';
import Link from 'next/link';
import { nav, site } from '@/lib/site';

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <Image src="/assets/anime-squadron-logo.svg" alt="Anime Squadron Guide Hub" width={240} height={60} priority />
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        {nav.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
    </header>
  );
}
