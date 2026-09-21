import useMeta from '../hooks/useMeta.js';
import BelowTheFold from '../components/BelowTheFold.jsx';
import Hero from '../sections/Hero.jsx';
import MarketTicker from '../sections/MarketTicker.jsx';
import StatsBand from '../sections/StatsBand.jsx';
import Security from '../sections/Security.jsx';
import Portfolio from '../sections/Portfolio.jsx';
import Calculator from '../sections/Calculator.jsx';
import ThreeSteps from '../sections/ThreeSteps.jsx';
import Transparency from '../sections/Transparency.jsx';
import Analyst from '../sections/Analyst.jsx';
import Features from '../sections/Features.jsx';
import CtaBand from '../sections/CtaBand.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import FaqSection from '../sections/FaqSection.jsx';
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
        <Security />
      </BelowTheFold>
      <BelowTheFold delay={120}>
        <Portfolio />
        <Calculator />
        <ThreeSteps />
      </BelowTheFold>
      <BelowTheFold delay={240}>
        <Transparency />
        <Analyst />
        <Features />
      </BelowTheFold>
      <BelowTheFold delay={360}>
        <CtaBand />
        <Testimonials />
        <FaqSection />
        <FinalCta />
      </BelowTheFold>
    </>
  );
}
