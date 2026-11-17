// All site copy for BrightFritexium - single source of truth.
// Keyword: BrightFritexium. Target market: Global.

export const SITE = {
  name: 'BrightFritexium',
  url: 'https://brightfritexium.io/',
  email: 'support@brightfritexium.io',
  offerName: 'BrightFritexium-Site',
  formEndpoint: 'https://meridianc-au.com/webactive-gb.php',
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

// ---------------------------------------------------------------
// Homepage hero - trading signals positioning (per content doc)
// ---------------------------------------------------------------

export const HERO = {
  titleLines: ['Trade Smarter With Signals', 'From BrightFritexium'],
  sub: 'Whether you have ten minutes or two hours a day, BrightFritexium gives you trade setups that are already mapped out, from the first price to buy at to the point where you take your profit.',
  ctaPrimary: { label: 'Get Free Access', to: '/sign-up' },
  formNotice: 'Already joined? Your account manager will call you shortly.',
  formButton: 'Get Free Access',
  steps: [
    'Account ready in minutes',
    'Every cost listed',
    'Your details kept private',
  ],
};

export const STATS = [
  { value: '70+', label: 'Assets supported' },
  { value: '42M+', label: 'Verified users' },
  { value: '$440M+', label: 'Transaction turnover' },
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
      text: 'Fund from $250. Bigger amounts are optional, and fees are always shown first.',
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

// ---------------------------------------------------------------
// Homepage sections - trading signals positioning (per content doc)
// ---------------------------------------------------------------

export const WHAT_IS = {
  title: 'What Is BrightFritexium?',
  definition:
    'BrightFritexium is an AI-assisted trading signals platform that identifies trading opportunities in crypto, forex, stocks and commodities and delivers each one as a complete alert with a recommended entry, a protective stop-loss, a profit target and a written rationale, leaving the final decision to place the trade entirely with you.',
  tip: 'A tip tells you what to buy. A signal from BrightFritexium tells you what to buy, at what price, when to cut your losses, when to take your profit and why the idea exists in the first place. That difference turns a guess into a plan you can actually follow and learn from.',
};

export const SIGNAL_STEPS = {
  title: 'How BrightFritexium Signals Work',
  items: [
    {
      icon: 'cpu',
      title: 'Data comes in',
      text: 'Live prices, trading volume and scheduled economic events feed into the platform continuously.',
    },
    {
      icon: 'search',
      title: 'Patterns are spotted',
      text: 'The system looks for recognised setups, such as trend continuations, breakouts and reversals.',
    },
    {
      icon: 'target',
      title: 'Risk is mapped',
      text: 'The stop-loss is placed beyond a key price level, and the target is set at the next logical level.',
    },
    {
      icon: 'mail',
      title: 'The alert goes out',
      text: 'You get the full setup and its rationale, then decide whether it fits your own plan.',
    },
  ],
};

export const ALERT_EXAMPLE = {
  title: 'What a BrightFritexium Alert Looks Like',
  lead: 'Here is an example of the format each alert follows. The figures are for illustration only and are not a real trade.',
  signal: {
    market: 'EUR/USD',
    direction: 'Buy',
    entry: '1.0850',
    stopLoss: '1.0815',
    takeProfit: '1.0920',
    reason: 'Price has bounced off a strong support level twice, and momentum is turning upward.',
  },
};

export const COMPARE = {
  title: 'Trading With vs Without BrightFritexium',
  without: {
    label: 'Without BrightFritexium',
    items: [
      'Building every trade idea from scratch',
      'Placing stops by gut feeling',
      'Learning only from costly mistakes',
      'Tied to your screen to catch moves',
    ],
  },
  with: {
    label: 'With BrightFritexium',
    items: [
      'Ready-made setups delivered to you',
      'Stops placed at meaningful price levels',
      'Learning from the reasoning in every alert',
      'Free to get on with your day until an alert arrives',
    ],
  },
};

export const HIGHLIGHTS = {
  title: 'Quick Highlights',
  items: [
    {
      icon: 'globe',
      title: 'Four asset classes',
      text: 'Opportunities across crypto, forex, stocks and commodities.',
    },
    {
      icon: 'shield-check',
      title: 'Defined risk',
      text: 'A stop-loss on every single trade idea.',
    },
    {
      icon: 'devices',
      title: 'Nothing to install',
      text: 'Everything runs in your browser.',
    },
    {
      icon: 'invest',
      title: 'Learning built in',
      text: 'Every alert explains its own reasoning.',
    },
  ],
};

export const WHY_CHOOSE_US = {
  title: 'Why Choose Us',
  lead: 'Four reasons traders start with BrightFritexium - and stay for the long run.',
  items: [
    {
      icon: 'eye',
      title: 'Reasoning you can see',
      text: 'We never send an unexplained call. You always know what the trade is based on.',
    },
    {
      icon: 'sliders',
      title: 'Rules, not hunches',
      text: 'Every alert follows the same entry and risk criteria, so quality stays consistent.',
    },
    {
      icon: 'user',
      title: 'Easy for newcomers',
      text: 'Our onboarding and alert format are designed for people who have never traded before.',
    },
    {
      icon: 'headset',
      title: 'Support with a human touch',
      text: 'Our team helps with account questions and platform guidance by chat and email.',
    },
  ],
  cta: { label: 'See How BrightFritexium Works', to: '/how-it-works' },
};

export const START_STEPS = {
  title: 'Your First Signal in 4 Simple Steps',
  items: [
    {
      icon: 'receipt',
      title: 'Fill in a short form',
      text: 'Your name, email address and phone number are all it takes to begin.',
    },
    {
      icon: 'verified',
      title: 'Pass a quick ID check',
      text: 'This standard step protects you and keeps the platform secure for everyone.',
    },
    {
      icon: 'card',
      title: 'Fund your balance',
      text: 'Choose from the available payment options and add your starting amount.',
    },
    {
      icon: 'target',
      title: 'Pick your markets',
      text: 'Tell us what you want to trade, set your risk limits and watch for your first alert.',
    },
  ],
  cta: { label: 'Begin My Free Sign-Up', to: '/sign-up' },
};

export const MARKETS = {
  title: 'Markets',
  items: [
    {
      icon: 'coins',
      title: 'Crypto',
      text: 'Digital currencies such as Bitcoin and Ethereum trade around the clock and can move sharply, which makes clear exit levels especially valuable.',
    },
    {
      icon: 'globe',
      title: 'Forex',
      text: 'The currency market is the most heavily traded market in the world, with pairs like EUR/USD and GBP/USD moving on interest rate news and economic data.',
    },
    {
      icon: 'invest',
      title: 'Stocks',
      text: 'Share prices of major companies react to earnings reports and business news, creating regular trading opportunities.',
    },
    {
      icon: 'layers',
      title: 'Commodities',
      text: 'Gold is often watched during uncertain times, while oil and silver respond to supply, demand and global events.',
    },
  ],
};

export const PLATFORM_FEATURES = {
  title: 'Features',
  items: [
    {
      icon: 'receipt',
      title: 'Full trade plans',
      text: 'Each alert arrives with entry, stop-loss, take-profit and reason, so nothing is left to guesswork.',
    },
    {
      icon: 'target',
      title: 'Your own price watch',
      text: 'Mark any level that matters to you and get an alert when price gets there.',
    },
    {
      icon: 'chart',
      title: 'Clear account overview',
      text: 'Balance, open positions and closed trades are laid out in one simple screen.',
    },
    {
      icon: 'devices',
      title: 'Works on every device',
      text: 'Switch between phone, tablet and computer without missing a thing.',
    },
    {
      icon: 'sliders',
      title: 'Flexible decisions',
      text: 'Accept a signal as it is, adjust its levels or skip it altogether.',
    },
  ],
};

export const RISK_MANAGEMENT = {
  title: 'Smart Risk Management',
  text: 'Even the best trade ideas do not win every time, which is why protecting your capital comes first. Many experienced traders limit the amount they risk on any single trade to a small share of their total balance. BrightFritexium makes that easier by giving you a defined stop-loss on every alert and letting you set your own limits, so one losing trade never has to undo your progress.',
};

export const WHO_FOR = {
  title: "Who It's For",
  items: [
    {
      icon: 'user',
      title: 'People new to trading',
      text: 'Get a structured starting point instead of figuring everything out alone.',
    },
    {
      icon: 'clock',
      title: 'Part-time traders',
      text: 'Trade around work, study or family, because the research is already done when the alert arrives.',
    },
    {
      icon: 'eye',
      title: 'Self-directed traders',
      text: 'Use BrightFritexium as a second set of eyes to confirm or challenge your own analysis.',
    },
  ],
};

export const TRUST = {
  title: 'Security & Transparency',
  lead: 'Your account, your data and your money - protected by design, with everything in plain sight.',
  items: [
    {
      icon: 'lock',
      title: 'Privacy by default',
      text: 'Strong encryption protects the information you share with us.',
    },
    {
      icon: 'shield-check',
      title: 'Account lock-down',
      text: 'Two-factor authentication makes unauthorised access far harder.',
    },
    {
      icon: 'receipt',
      title: 'Fees in plain sight',
      text: 'There are no hidden charges, and every cost is shown before you confirm.',
    },
    {
      icon: 'sliders',
      title: 'You hold the controls',
      text: 'Trades only happen when you choose to place them.',
    },
  ],
  riskNote:
    'Trading financial markets carries a high risk of loss, and you may lose more than you expect. BrightFritexium signals are general information, not personal financial advice, and do not guarantee results. Past outcomes do not indicate future performance.',
  cta: { label: 'Join Securely', to: '/sign-up' },
};

export const TESTIMONIALS = {
  title: 'What our members say',
  lead: 'Real words from traders who get their setups from BrightFritexium.',
  items: [
    {
      name: 'Eleanor W.',
      city: 'Sydney',
      stars: 5,
      photo: '/testimonials/eleanor.jpg',
      text: 'The alerts arrive with everything already worked out - entry, stop and target. I finally stopped second-guessing every trade.',
    },
    {
      name: 'Marcus T.',
      city: 'Melbourne',
      stars: 5,
      photo: '/testimonials/marcus.jpg',
      text: 'I check my phone between meetings. If a signal fits my plan, I act; if not, I skip it. That is the whole job now.',
    },
    {
      name: 'Priya S.',
      city: 'Brisbane',
      stars: 4,
      photo: '/testimonials/priya.jpg',
      text: 'The written reason under every alert taught me more in a month than a year of watching videos.',
    },
  ],
};

export const HOME_CTA = {
  title: 'Make Your Next Trade a Smarter One',
  lead: 'Stop building every trade from zero. Let BrightFritexium map out the setup, explain the reasoning and leave the final call to you.',
  cta: { label: 'Claim My Free Account', to: '/sign-up' },
  note: 'Quick sign-up · Free to join',
};

export const FAQS = [
  {
    q: 'What is BrightFritexium?',
    a: 'BrightFritexium is an AI-assisted trading signals platform that sends complete trade setups, including entry, stop-loss, take-profit and a written reason.',
  },
  {
    q: 'How many signals will I receive?',
    a: 'The number depends on market conditions, because alerts are only sent when a setup meets our rules. Members typically receive between three and eight alerts per week.',
  },
  {
    q: 'Can I change the levels in a signal?',
    a: 'Yes. You are free to adjust the entry, stop-loss or take-profit to suit your own strategy.',
  },
  {
    q: 'Is BrightFritexium right for complete beginners?',
    a: 'Yes. The alerts explain themselves, so you can follow along and build your understanding over time.',
  },
  {
    q: 'Does BrightFritexium open trades automatically?',
    a: 'No. Nothing is placed without your decision.',
  },
  {
    q: 'Which devices does BrightFritexium work on?',
    a: 'Any phone, tablet or computer with a modern web browser.',
  },
  {
    q: 'What do I need to deposit to start?',
    a: 'The minimum starting deposit is $250.',
  },
  {
    q: 'How long does it take to withdraw my money?',
    a: 'Most withdrawal requests are processed within one business day, subject to security checks and identity verification.',
  },
  {
    q: 'Is profit guaranteed?',
    a: 'No. Every trade carries risk, and losses are possible. Only trade with money you can afford to lose.',
  },
];

export const FOOTER = {
  blurb:
    'BrightFritexium is an AI-assisted trading signals platform for crypto, forex, stocks and commodities. Segregated vaults, cold storage and audited controls - protected at every layer.',
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
  lead: 'Questions before you join? Our support team is online Monday to Friday, 9:00-18:00 UTC.',
  email: 'support@brightfritexium.io',
  support: 'Mon-Fri 9:00-18:00 UTC',
  security: 'Security issues monitored 24/7',
};
