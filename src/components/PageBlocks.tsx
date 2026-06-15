import type { ReactNode } from 'react';
import Link from 'next/link';
import { disclaimers, site } from '@/lib/site';

export function Notice({ tone = 'info', children }: { tone?: 'info' | 'warn' | 'ok'; children: ReactNode }) {
  return <div className={`notice ${tone}`}>{children}</div>;
}

export function Freshness({ label = 'Last checked' }: { label?: string }) {
  return (
    <div className="freshness hud-strip">
      <span>{label}: {site.checkedAt}</span>
      <span>Source status: needs verification before publishing exact game data</span>
      <span>Unofficial / not affiliated</span>
    </div>
  );
}

export function Hero({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: { href: string; label: string }[] }) {
  return (
    <section className="page-hero grid-bg">
      <div className="scanline" />
      <div className="hero-stamps">
        <span>Unofficial Fan Guide</span>
        <span>Needs Verification Data</span>
      </div>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="lead">{description}</p>
      <Notice><strong>Unofficial:</strong> {disclaimers.short}</Notice>
      {actions ? <div className="actions">{actions.map(a => <Link className="button" href={a.href} key={a.href}>{a.label}</Link>)}</div> : null}
    </section>
  );
}

export function ModuleCard({ number, title, text, href, tone = 'cyan' }: { number: string; title: string; text: string; href: string; tone?: 'cyan' | 'purple' | 'gold' | 'white' }) {
  return (
    <Link className={`module-card ${tone}`} href={href}>
      <div className="module-head"><span>Module {number}</span><i>{tone === 'cyan' ? '⚡' : tone === 'purple' ? '★' : tone === 'gold' ? '✦' : '⛓'}</i></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <b className="corner" aria-hidden="true" />
    </Link>
  );
}

export function CardGrid({ items }: { items: { title: string; text: string; href?: string; tag?: string }[] }) {
  return <div className="card-grid">{items.map(item => {
    const body = <><span className="tag">{item.tag ?? 'Guide'}</span><h3>{item.title}</h3><p>{item.text}</p></>;
    return item.href ? <Link className="card bevel-edge" href={item.href} key={item.title}>{body}</Link> : <article className="card bevel-edge" key={item.title}>{body}</article>;
  })}</div>;
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return <section className="section"><h2>FAQ</h2><div className="faq">{items.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</div></section>;
}

export function VerificationTable({ rows }: { rows: { item: string; status: string; note: string }[] }) {
  return <div className="table-wrap"><table><thead><tr><th>Item</th><th>Status</th><th>Note</th></tr></thead><tbody>{rows.map(r => <tr key={r.item}><td>{r.item}</td><td><span className="pill">{r.status}</span></td><td>{r.note}</td></tr>)}</tbody></table></div>;
}
