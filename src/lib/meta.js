import { SITE } from '../data/content.js';

const BASE_KEYWORDS = [
  'BrightFritexium',
  'digital wealth platform',
  'crypto investing Australia',
  'managed portfolios',
  'secure crypto platform',
];

// Server-side replacement for the old useMeta hook: returns a Next.js metadata
// object with the same title/description/keywords/OG/Twitter/canonical fields,
// rendered into the <head> at request time instead of by client-side DOM writes.
export function pageMeta({ title, description, path = '/', keywords = [] }) {
  const url = `${SITE.url.replace(/\/$/, '')}${path}`;
  return {
    title,
    description,
    keywords: [...BASE_KEYWORDS, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: SITE.name,
      locale: 'en_AU',
      images: [{ url: `${SITE.url}og-image.svg` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE.url}og-image.svg`],
    },
  };
}
