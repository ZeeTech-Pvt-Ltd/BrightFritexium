import useMeta from '../hooks/useMeta.js';
import BelowTheFold from '../components/BelowTheFold.jsx';
import Hero from '../sections/Hero.jsx';
import MarketTicker from '../sections/MarketTicker.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Benefits from '../sections/Benefits.jsx';
import StressBand from '../sections/StressBand.jsx';
import Global from '../sections/Global.jsx';
import PartnersStrip from '../sections/PartnersStrip.jsx';
import ThreeSteps from '../sections/ThreeSteps.jsx';
import PaymentStrip from '../sections/PaymentStrip.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import AboutSummary from '../sections/AboutSummary.jsx';
import Features from '../sections/Features.jsx';
import FinalCta from '../sections/FinalCta.jsx';

export default function Home() {
  useMeta({
    title: 'BrightFritexium: Secure Digital Wealth Platform for Australia',
    description:
      "BrightFritexium is Australia's secure digital wealth platform. Segregated vaults, cold storage, managed portfolios and staking - protected at every layer.",
    path: '/',
    keywords: [
      'crypto investing Australia',
      'staking Australia',
      'managed crypto portfolios',
      'cold storage custody',
      'digital wealth management Australia',
    ],
  });

  return (
    <>
      <Hero />
      <MarketTicker />
      {/* Below the fold: batches mount on idle, staggered so no single long task */}
      <BelowTheFold>
        <StatsBand />
        <Benefits />
      </BelowTheFold>
      <BelowTheFold delay={120}>
        <StressBand />
        <Global />
        <PartnersStrip />
      </BelowTheFold>
      <BelowTheFold delay={240}>
        <ThreeSteps />
        <PaymentStrip />
        <Testimonials />
      </BelowTheFold>
      <BelowTheFold delay={360}>
        <FaqSection />
        <AboutSummary />
        <Features />
        <FinalCta />
      </BelowTheFold>
    </>
  );
}
