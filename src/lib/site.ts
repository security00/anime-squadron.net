export const site = {
  name: 'Anime Squadron Guide Hub',
  shortName: 'Anime Squadron Guide',
  domain: 'anime-squadron.net',
  url: 'https://anime-squadron.net',
  description: 'Unofficial Anime Squadron guide for codes, tier list notes, traits, and beginner progression on Roblox.',
  checkedAt: '2026-06-15',
  email: 'support@anime-squadron.net',
};

export const nav = [
  { href: '/', label: 'Hub' },
  { href: '/codes/', label: 'Codes' },
  { href: '/tier-list/', label: 'Tier List' },
  { href: '/traits/', label: 'Traits' },
  { href: '/beginner-guide/', label: 'Beginner Guide' },
];

export const pages = [
  { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
  { path: '/codes/', priority: 0.95, changeFrequency: 'daily' as const },
  { path: '/tier-list/', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/traits/', priority: 0.85, changeFrequency: 'weekly' as const },
  { path: '/beginner-guide/', priority: 0.8, changeFrequency: 'weekly' as const },
];

export const disclaimers = {
  short: 'Unofficial fan guide. Not affiliated with Roblox, Komplex Studio, Anime Squadron developers, or any anime/game rights holders.',
  full: 'Anime Squadron Guide Hub is an unofficial fan-made guide for Anime Squadron on Roblox. We are not affiliated with, endorsed by, or sponsored by Roblox, Komplex Studio, Anime Squadron developers, or any anime/game rights holders. Codes, rewards, units, traits, and game details may change without notice.',
};

export const pageMeta = {
  home: { title: 'Anime Squadron Guide Hub — Codes, Tier List, Traits & Beginner Guide', description: 'A fast unofficial Anime Squadron guide hub for Roblox players: codes, tier list notes, traits, beginner progression, and verification-first updates.' },
  codes: { title: 'Anime Squadron Codes — Last Checked & Redeem Help', description: 'Check Anime Squadron codes with last-checked status, redeem steps, source notes, and honest troubleshooting when codes need verification.' },
  tier: { title: 'Anime Squadron Tier List — Units, Roles & Meta Notes', description: 'Unofficial Anime Squadron tier list framework with role notes, methodology, and verification labels before you spend rare resources.' },
  traits: { title: 'Anime Squadron Traits Guide — Reroll Priority & Source Notes', description: 'Understand Anime Squadron traits, reroll priorities, verification status, and safe spending rules without invented rates.' },
  beginner: { title: 'Anime Squadron Beginner Guide — Day 1 Progression Path', description: 'Start Anime Squadron with a clear beginner route for codes, gems, units, traits, modes, and common mistakes.' },
};
