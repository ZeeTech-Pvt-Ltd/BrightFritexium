// All site copy for BrightFritexium - single source of truth.
// Keyword: BrightFritexium. Target market: Australia.

export const SITE = {
  name: 'BrightFritexium',
  url: 'https://brightfritexium.io/',
  email: 'support@brightfritexium.io',
  offerName: 'BrightFritexium-Site',
  formEndpoint: 'https://apexai-experts.com/homeMailAction.php',
  tagline: 'Digital wealth management, built on institutional-grade security',
};

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Why Invest', to: '/why-invest' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact-us' },
];

export const HERO = {
  titleLines: ['See every trade clearly.', 'Stay in charge of every call.'],
  sub: 'One platform for crypto, forex and global assets - with live analytics, assisted automation and real human support behind it.',
  chips: ['ASIC-regulated', 'Segregated funds', '42M+ members', '4.7/5 rating'],
  ctaPrimary: { label: 'Sign Up now', to: '/sign-up' },
  ctaSecondary: { label: 'See how it works', to: '/how-it-works' },
  formNotice: 'Already joined? Your account manager will call you shortly.',
  formButton: 'Create Account',
  steps: [
    'Register in 2 minutes',
    'Verify your identity securely',
  ],
  trust: ['Custody insured', 'Transparent pricing', 'Start with A$250'],
};

// Market ticker - indicative prices, refreshed for display purposes only.
export const MARKET_TICKER = [
  { k: 'BTC', v: 'A$102,480', change: '+2.4%', dir: 'up' },
  { k: 'ETH', v: 'A$5,290', change: '+1.1%', dir: 'up' },
  { k: 'SOL', v: 'A$312', change: '-0.8%', dir: 'down' },
  { k: 'XRP', v: 'A$3.42', change: '+4.2%', dir: 'up' },
  { k: 'BNB', v: 'A$1,180', change: '+0.6%', dir: 'up' },
  { k: 'ADA', v: 'A$1.87', change: '-1.3%', dir: 'down' },
  { k: 'DOGE', v: 'A$0.52', change: '+3.1%', dir: 'up' },
  { k: 'AVAX', v: 'A$58.40', change: '+0.9%', dir: 'up' },
];

// Indicative allocation of the flagship Balanced vault.
export const ALLOCATION = [
  { label: 'Bitcoin', pct: 40, color: '#0896c9' },
  { label: 'Ethereum', pct: 30, color: '#0db4e8' },
  { label: 'Stablecoins', pct: 15, color: '#7dd3fc' },
  { label: 'Alt coins', pct: 10, color: '#d99a06' },
  { label: 'Cash reserve', pct: 5, color: '#94a3b8' },
];

export const STATS = [
  { value: '70+', label: 'Assets supported' },
  { value: '42M+', label: 'Verified users' },
  { value: 'A$440M+', label: 'Transaction turnover' },
  { value: '100+', label: 'Countries served' },
];

export const SECURITY = {
  title: 'Protection woven through every layer',
  lead: 'From the moment you register to the second a withdrawal lands in your bank, every step of your journey is protected by independent safeguards.',
  items: [
    {
      icon: 'shield-check',
      title: 'Qualified custodians',
      text: 'Your assets sit with regulated third-party custodians - never on our own balance sheet.',
    },
    {
      icon: 'key',
      title: 'MPC custody',
      text: 'Multi-party computation splits your keys across independent parties, so no single point of failure exists.',
    },
    {
      icon: 'snowflake',
      title: 'Cold storage',
      text: 'The vast majority of holdings stay offline, out of reach of online threats.',
    },
    {
      icon: 'lock',
      title: 'MFA withdrawals',
      text: 'Every withdrawal demands multi-factor confirmation before a single dollar moves.',
    },
    {
      icon: 'eye',
      title: 'Audited security',
      text: 'Independent firms audit our controls and custody arrangements year-round.',
    },
    {
      icon: 'umbrella',
      title: 'Insurance eligibility',
      text: 'Client holdings may be eligible for insurance cover through our custodial partners.',
    },
  ],
};

export const PORTFOLIO = {
  title: 'A portfolio you can see into, any time',
  lead: 'Real-time balances, holdings and statements - everything visible in one calm dashboard, not buried in menus.',
  chart: {
    label: 'Balanced vault · 5 years',
    ytd: '+12.4%',
    points: '0,96 40,88 80,90 120,78 160,80 200,66 240,70 280,52 320,58 360,40 400,46 440,26 480,32 520,14 560,22 600,4',
    // Normalised to a 600x100 viewBox; area fill reuses the same points.
  },
  cards: [
    { label: 'Growth vault', value: '+18.2% YTD', tone: 'up' },
    { label: 'Balanced vault', value: '+12.4% YTD', tone: 'up' },
    { label: 'Income mode', value: '6.1% yield', tone: 'gold' },
  ],
};

export const CALCULATOR = {
  title: 'Model your own growth plan',
  lead: 'Move the sliders to see how a structured plan could compound over time. Figures are illustrative - returns are never guaranteed.',
  defaults: { deposit: 180, monthly: 14300, years: 5, rate: 12 },
  ranges: {
    deposit: { min: 180, max: 9000, step: 100 },
    monthly: { min: 0, max: 29000, step: 100 },
  },
  note: 'Illustrative figures. Actual returns vary with market conditions and can be negative.',
};

export const THREE_STEPS = {
  title: 'From signup to your first trade',
  lead: 'Six steps, one clear path - registration, funding, strategy and tools, all in order.',
  items: [
    {
      icon: 'user',
      title: 'Create your account',
      text: 'Just the basics - name, email and a phone number.',
    },
    {
      icon: 'mail',
      title: 'Confirm your email',
      text: 'One click unlocks the charts, tools and dashboard.',
    },
    {
      icon: 'unlock',
      title: 'Enter the platform',
      text: 'Fund from A$250. Bigger amounts are optional, and fees are always shown first.',
    },
    {
      icon: 'card',
      title: 'Add funds your way',
      text: 'Bank transfer, e-wallet or card - whatever suits you.',
    },
    {
      icon: 'sliders',
      title: 'Set your strategy',
      text: 'Pick risk levels and markets. AI signals suggest, never override.',
    },
    {
      icon: 'chart',
      title: 'Explore the markets',
      text: 'Watch live prices and plan your trades in real time.',
    },
  ],
};

export const TRANSPARENCY = {
  title: 'Protection you can see for yourself',
  lead: 'We publish the things most platforms keep quiet: where your money sits, who audits it, and how you can leave whenever you like.',
  items: [
    { icon: 'file', title: 'Real-time statements', text: 'Every position, fee and movement - itemised and downloadable, day or night.' },
    { icon: 'shield', title: 'Segregated client funds', text: 'Your deposits are ring-fenced from company assets, by design and by law.' },
    { icon: 'search', title: 'Annual third-party audits', text: 'Independent auditors review our systems, custody and capital controls each year.' },
    { icon: 'unlock', title: 'No lock-in periods', text: 'Withdraw any time. Most requests complete within one business day.' },
  ],
};

export const ANALYST = {
  title: 'Two minds on every move',
  lead: 'BrightFritexium pairs a market-scanning engine with human judgement - so no position is taken on automation alone.',
  items: [
    {
      icon: 'cpu',
      title: 'The engine spots what matters',
      text: 'Our engine watches markets around the clock and surfaces what deserves attention.',
    },
    {
      icon: 'verified',
      title: 'A qualified analyst reviews it',
      text: 'Every flagged position is checked against your risk limits before it enters your vault.',
    },
    {
      icon: 'check',
      title: 'You stay in control',
      text: 'You set your risk profile and can pause, adjust or withdraw at any time.',
    },
  ],
};

export const FEATURES = {
  title: 'Key features of the platform',
  lead: 'Seven things traders ask for most - all built in from day one.',
  items: [
    {
      icon: 'cpu',
      title: 'AI-driven stack',
      text: 'Technology that keeps your trading fast, accurate and always on.',
    },
    {
      icon: 'card',
      title: 'Flexible funding',
      text: 'Debit cards, bank transfers and PayPal - top up however you like.',
    },
    {
      icon: 'devices',
      title: 'Trade on any device',
      text: 'The full platform on desktop, tablet and mobile.',
    },
    {
      icon: 'target',
      title: 'Up to 85% signal accuracy',
      text: 'Curated signals help you spot the moves worth acting on.',
    },
    {
      icon: 'globe',
      title: 'Every instrument',
      text: 'Forex, equities, crypto and commodities in one place.',
    },
    {
      icon: 'headset',
      title: '24/7 support',
      text: 'Real humans on standby around the clock.',
    },
  ],
};

export const CTA_BAND = {
  title: 'Open your BrightFritexium account today',
  lead: 'Registration takes two minutes. Your capital stays protected from the very first dollar.',
  cta: { label: 'Sign Up now', to: '/sign-up' },
  note: 'Capital at risk. Crypto assets are volatile and past performance is no guide to future returns.',
};

export const TESTIMONIALS = {
  title: 'What our users say',
  lead: '4.7 stars from 124 client reviews, based on 337 ratings.',
  items: [
    {
      name: 'Eleanor W.',
      city: 'Sydney',
      since: '2023',
      stars: 5,
      text: 'I moved part of my savings across in an afternoon. The dashboard made the whole thing feel calm, not complicated.',
    },
    {
      name: 'Marcus T.',
      city: 'Melbourne',
      since: '2024',
      stars: 5,
      text: 'Recurring buys took the emotion out of it. I check once a month and nothing is ever on fire.',
    },
    {
      name: 'Priya S.',
      city: 'Brisbane',
      since: '2023',
      stars: 5,
      text: 'My first withdrawal landed in my bank the same day. That is what convinced me the platform was safe.',
    },
    {
      name: 'Daniel O.',
      city: 'Perth',
      since: '2024',
      stars: 4,
      text: 'Support walked me through verification on a Saturday evening. Genuinely impressed by the patience.',
    },
    {
      name: 'Hannah L.',
      city: 'Adelaide',
      since: '2023',
      stars: 5,
      text: 'The one-click tax report saved my accountant half a day. Worth it for that alone.',
    },
    {
      name: 'Tom B.',
      city: 'Hobart',
      since: '2024',
      stars: 4,
      text: 'Started with A$250, stayed for the staking. My balance grows quietly in the background.',
    },
  ],
};

export const FAQS = [
  {
    q: 'What is the minimum deposit?',
    a: 'You can open an account for free and fund your vault from as little as A$250. There is no obligation to invest further, and you can add funds whenever you like.',
  },
  {
    q: 'How quickly can I withdraw?',
    a: 'Most withdrawal requests are processed within one business day. Every withdrawal requires multi-factor confirmation, and funds are only ever sent to an account in your name.',
  },
  {
    q: 'How is my capital protected?',
    a: 'Client assets are held with regulated third-party custodians, segregated from company funds, with the majority kept in cold storage. Independent auditors review our controls annually.',
  },
  {
    q: 'How long does registration take?',
    a: 'The form takes about two minutes. Identity verification usually completes within the same day, and you can fund your account as soon as it is approved.',
  },
  {
    q: 'What fees does BrightFritexium charge?',
    a: 'Opening an account is free and there are no hidden charges. Fees are shown transparently before you commit to any product - full details are in our Terms of Use.',
  },
  {
    q: 'Is there a minimum age to join?',
    a: 'Yes - you must be at least 18 years old and a verified resident of Australia to open an account.',
  },
  {
    q: 'Which payment methods are accepted?',
    a: 'We accept Australian bank transfers and major debit and credit cards. Deposits are credited once cleared, and withdrawals return to your registered account.',
  },
  {
    q: 'When is support available?',
    a: 'Our Australia-based support team is online Monday to Friday, 9:00-18:00 AEST. Urgent security issues are monitored around the clock.',
  },
  {
    q: 'Am I responsible for my own taxes?',
    a: 'Yes. Any gains or income from your holdings are your responsibility to declare. Our one-click tax reports make that easier, but we cannot give tax advice.',
  },
  {
    q: 'What documents do I need for KYC?',
    a: 'A government-issued photo ID and proof of Australian address, such as a recent utility bill or bank statement. Verification is encrypted and handled in minutes.',
  },
  {
    q: 'Do I need investment experience?',
    a: 'Not at all. Managed vaults are designed for first-timers, and every product page explains its risks in plain English before you invest.',
  },
  {
    q: 'Who manages my portfolio?',
    a: 'Our market-scanning engine flags opportunities and qualified analysts approve them against your risk profile. You always keep the final say.',
  },
  {
    q: 'Is BrightFritexium regulated?',
    a: 'We operate under ASIC-regulated security standards with regulated custodians and audited controls. Full details are published in our Risk Disclosure.',
  },
  {
    q: 'Can I add funds later?',
    a: 'Yes - you can top up your vault any time by bank transfer or card, or set a recurring plan so it happens automatically.',
  },
];

export const BENEFITS = {
  title: 'Why members stay with BrightFritexium',
  lead: 'Modern traders choose us for protection, clarity, AI tools and a clean interface.',
  items: [
    {
      icon: 'shield-check',
      title: 'Bank-grade protection',
      text: 'Encrypted from login to withdrawal, with your funds held apart from ours.',
    },
    {
      icon: 'user',
      title: 'Trading that fits you',
      text: 'Risk settings, markets and pace - all shaped around your goals.',
    },
    {
      icon: 'cpu',
      title: 'Smarter AI tools',
      text: 'Analytics that surface what matters instead of burying you in noise.',
    },
    {
      icon: 'zap',
      title: 'Automation that runs all day',
      text: 'Bots keep working around the clock, following rules you set.',
    },
    {
      icon: 'chart',
      title: 'Signals you can act on',
      text: 'Clear, timely alerts for the moves worth your attention.',
    },
    {
      icon: 'devices',
      title: 'An interface that never fights you',
      text: 'Clean screens and simple flows, from first click to daily use.',
    },
  ],
};

export const STRESS_BAND = {
  title: 'Trading without the stress',
  copy: 'Hold Bitcoin, Ethereum and Dogecoin with confidence - our tools handle the noise while you keep the controls.',
  cta: { label: 'Get Started', to: '/sign-up' },
};

export const GLOBAL = {
  title: 'Built to grow worldwide',
  lead: 'Speed, precision and reach - wherever you trade from.',
  items: [
    {
      icon: 'globe',
      title: 'One login, every market',
      text: 'Crypto, forex, stocks and commodities together under one roof.',
    },
    {
      icon: 'zap',
      title: 'Orders that fill fast',
      text: 'Low-latency execution keeps your entries and exits sharp.',
    },
    {
      icon: 'chart',
      title: 'Analytics in real time',
      text: 'Live feeds and indicators update as the market moves.',
    },
  ],
};

export const PAYMENTS = {
  title: 'We accept payments from all over the world',
  methods: ['Visa', 'Mastercard', 'PayPal', 'Bank transfer'],
};

export const ABOUT_SUMMARY = {
  title: 'About the platform',
  lead: 'One international platform, one unified workflow - low-latency performance, layered security and a design built for beginners and advanced users alike.',
  groups: [
    {
      icon: 'globe',
      title: 'Markets',
      items: [
        'Top and emerging crypto assets',
        'Forex with live feeds',
        'Global stocks and equity options',
        'Commodities',
      ],
    },
    {
      icon: 'zap',
      title: 'Performance',
      items: [
        'Fast order processing',
        'Continuous market data',
        'Analytics built in',
        'Manual and automated support',
      ],
    },
    {
      icon: 'shield-check',
      title: 'Security',
      items: [
        'Encrypted communication',
        'Identity verification and multi-layer protocols',
        'Monitored transactions',
        'Dependable global infrastructure',
      ],
    },
  ],
};

export const RATING = {
  stars: 4.7,
  meta: '124 client reviews · 337 ratings',
  quote: 'An intuitive platform with automation built in and real learning resources alongside it.',
};

export const CHAT = {
  persona: 'Olivia',
  role: 'Onboarding Guide',
  greeting: "Hi, I'm Olivia - your onboarding guide. Need a hand getting started?",
};

export const FOOTER = {
  blurb:
    'BrightFritexium is a digital wealth platform for verified Australian residents. Segregated vaults, cold storage and audited controls - protected at every layer.',
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms of Use', to: '/terms-of-use' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
  ],
  disclaimer:
    'Capital at risk. Crypto assets are volatile and can fall as well as rise. Past performance is no guide to future returns. Nothing on this site is financial advice.',
};

export const CONTACTS = {
  title: 'Talk to a human',
  lead: 'Questions before you join? Our Australia-based support team is online Monday to Friday, 9:00-18:00 AEST.',
  email: 'support@brightfritexium.io',
  support: 'Mon-Fri 9:00-18:00 AEST',
  security: 'Security issues monitored 24/7',
};
