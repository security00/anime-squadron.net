import type { MetadataRoute } from 'next';
import { pages, site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(`${site.checkedAt}T00:00:00Z`),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
