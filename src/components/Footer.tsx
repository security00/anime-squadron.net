import Link from 'next/link';
import { disclaimers, site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{site.shortName}</strong>
        <p>{disclaimers.full}</p>
      </div>
      <nav aria-label="Footer navigation">
        <Link href="/privacy/">Privacy</Link>
        <Link href="/terms/">Terms</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
    </footer>
  );
}
