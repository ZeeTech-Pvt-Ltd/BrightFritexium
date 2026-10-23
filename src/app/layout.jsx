import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import Script from 'next/script';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ScrollToTop from '../components/ScrollToTop.jsx';
import { SITE } from '../data/content.js';
import '../styles/global.css';
import 'intl-tel-input/dist/css/intlTelInput.min.css';

// Self-hosted via next/font: replaces the Google Fonts preload/link dance from
// the Vite build. Fonts are preloaded automatically with no render-blocking
// stylesheet, and the CSS variables below feed the design tokens in global.css.
const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: 'normal',
  variable: '--font-sora',
  display: 'optional',
});
const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: 'normal',
  variable: '--font-plex-sans',
  display: 'optional',
});
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: 'normal',
  variable: '--font-plex-mono',
  display: 'optional',
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'BrightFritexium: Secure Digital Wealth Platform for Australia',
    template: '%s',
  },
  description:
    "BrightFritexium is Australia's secure digital wealth platform. Segregated vaults, cold storage, managed portfolios and staking - protected at every layer.",
  keywords: [
    'BrightFritexium',
    'digital wealth platform',
    'crypto investing Australia',
    'managed portfolios',
    'staking yields',
    'cold storage',
    'index vaults',
    'secure crypto platform',
  ],
  verification: { google: 'xC7DmGT1OP_BfuGAOPxCMcYikSMBswXMWDTjNtLtur8' },
  icons: { icon: '/favicon.svg' },
  openGraph: {
    siteName: SITE.name,
    locale: 'en_AU',
    type: 'website',
    images: [{ url: `${SITE.url}og-image.svg` }],
  },
};

export const viewport = { themeColor: '#ffffff' };

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BrightFritexium',
  url: 'https://brightfritexium.io/',
  logo: 'https://brightfritexium.io/favicon.svg',
  description:
    "BrightFritexium is Australia's secure digital wealth platform. Segregated vaults, cold storage, managed portfolios and staking - protected at every layer.",
};

const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'BrightFritexium',
  url: 'https://brightfritexium.io/',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-AU"
      className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body>
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WRDM0QVGVK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-WRDM0QVGVK');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </body>
    </html>
  );
}
