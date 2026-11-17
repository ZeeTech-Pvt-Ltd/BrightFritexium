import Hero from '../sections/Hero.jsx';
import SignalsIntro from '../sections/SignalsIntro.jsx';
import HowSignalsWork from '../sections/HowSignalsWork.jsx';
import AlertExample from '../sections/AlertExample.jsx';
import CompareBand from '../sections/CompareBand.jsx';
import Highlights from '../sections/Highlights.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import GettingStarted from '../sections/GettingStarted.jsx';
import Markets from '../sections/Markets.jsx';
import PlatformFeatures from '../sections/PlatformFeatures.jsx';
import RiskManagement from '../sections/RiskManagement.jsx';
import WhoFor from '../sections/WhoFor.jsx';
import TrustBand from '../sections/TrustBand.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import FinalCta from '../sections/FinalCta.jsx';
import { HOME_CTA } from '../data/content.js';
import { pageMeta } from '../lib/meta.js';

export const metadata = pageMeta({
  title: 'BrightFritexium - Trade Smarter With AI Trading Signals',
  description:
    'AI-assisted trading signals for crypto, forex, stocks and commodities - complete alerts with entry, stop-loss, take-profit and a written reason, with the final decision always yours.',
  path: '/',
  keywords: [
    'AI trading signals',
    'trading signals platform',
    'crypto signals',
    'forex signals',
    'stock signals',
    'commodities signals',
  ],
});

// Homepage sections follow the trading-signals content doc:
// hero -> what is -> how signals work -> sample alert -> with/without ->
// highlights -> why choose us -> getting started -> markets -> features ->
// risk management -> who it's for -> security & transparency ->
// testimonials -> FAQs -> final CTA.
export default function Home() {
  return (
    <>
      <Hero />
      <SignalsIntro />
      <HowSignalsWork />
      <AlertExample />
      <CompareBand />
      <Highlights />
      <WhyChooseUs />
      <GettingStarted />
      <Markets />
      <PlatformFeatures />
      <RiskManagement />
      <WhoFor />
      <TrustBand />
      <Testimonials />
      <FaqSection />
      <FinalCta
        title={HOME_CTA.title}
        lead={HOME_CTA.lead}
        cta={HOME_CTA.cta}
        note={HOME_CTA.note}
      />
    </>
  );
}
