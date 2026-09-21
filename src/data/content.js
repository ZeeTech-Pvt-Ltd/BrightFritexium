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
  titleLines: ['BrightFritexium', 'turns digital assets into structured wealth'],
  // Rendered as: BrightFritexium (cyan gradient) turns digital assets into structured wealth
  sub: 'Your money sits apart from ours, guarded in offline vaults and wrapped in bank-grade encryption - while managed portfolios, staking yields and index vaults do the heavy lifting.',
  chips: ['ASIC-regulated', 'Segregated funds', '31,000+ members', '4.6/5 rating'],
  ctaPrimary: { label: 'Sign Up now', to: '/sign-up' },
  ctaSecondary: { label: 'See how it works', to: '/how-it-works' },
  steps: [
    'Register in 2 minutes',
    'Verify your identity securely',
    'Fund from A$250 - your vault starts working',
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
  { value: '31,000+', label: 'Active members' },
  { value: 'A$1.8B+', label: 'Assets overseen' },
  { value: '150+', label: 'Countries served' },
  { value: '4.6/5', label: 'Member rating' },
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
  title: 'Get started in three calm steps',
  lead: 'Three steps from first click to a structured portfolio - each one designed to keep you safe and in control.',
  items: [
    {
      icon: 'user',
      title: 'Create your account',
      text: 'Two minutes, a few details, and your identity check begins.',
    },
    {
      icon: 'card',
      title: 'Fund your vault',
      text: 'Deposit from A$250 by bank transfer or card. Your money sits in segregated accounts.',
    },
    {
      icon: 'chart',
      title: 'Watch it grow',
      text: 'Your portfolio rebalances itself while you check in from any device.',
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
  title: 'Everything your wealth needs, in one account',
  lead: 'Six tools that used to require six different platforms - now under one secure roof.',
  items: [
    {
      icon: 'calendar',
      title: 'Recurring buys',
      text: 'Dollar-cost averaging on autopilot. Set a schedule and let consistency do the rest.',
      bullets: [
        'Pick weekly, fortnightly or monthly',
        'Pause or adjust your plan any time',
        'Builds your position without the guesswork',
      ],
    },
    {
      icon: 'coins',
      title: 'Staking & yield',
      text: 'Earn competitive APY on supported assets while you hold - rates shown before you commit.',
    },
    {
      icon: 'layers',
      title: 'Index vaults',
      text: 'One click buys a diversified basket, rebalanced automatically as markets shift.',
    },
    {
      icon: 'receipt',
      title: 'Tax reports in one click',
      text: 'A clean, export-ready statement your accountant will thank you for.',
    },
    {
      icon: 'snowflake',
      title: 'Cold storage',
      text: 'The bulk of assets stay offline in guarded facilities, away from online threats.',
    },
    {
      icon: 'devices',
      title: 'Mobile app',
      text: 'Your whole portfolio in your pocket on iOS and Android, with biometric login.',
      bullets: [
        'Face ID and fingerprint sign-in',
        'Balances, alerts and statements on the go',
        'Free on iOS and Android',
      ],
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
  title: 'Members across Australia, in their own words',
  lead: 'Rated 4.6 out of 5 across 3,100+ member reviews.',
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
