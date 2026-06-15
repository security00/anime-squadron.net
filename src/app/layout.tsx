import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: '%s | Anime Squadron Guide' },
  description: site.description,
  applicationName: site.name,
  icons: { icon: [{ url: '/assets/favicon.ico' }, { url: '/assets/favicon.svg', type: 'image/svg+xml' }] },
  openGraph: {
    type: 'website',
    siteName: site.name,
    url: site.url,
    title: site.name,
    description: site.description,
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
