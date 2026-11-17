import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { PLATFORM_FEATURES } from '../data/content.js';

// Numbered feature list on the left, with a mock account-overview panel on
// the right that echoes feature #3: balance, open positions and closed
// trades laid out in one simple screen.
export default function PlatformFeatures() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={PLATFORM_FEATURES.title} />
        <div className="steps-split" style={{ marginTop: 48 }}>
          <Reveal className="steps">
            {PLATFORM_FEATURES.items.map((f, i) => (
              <div className="steps__row" key={f.title}>
                <span className="steps__badge">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="dashmock" delay={120}>
            <div className="dashmock__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              brightfritexium - dashboard
            </div>
            <div className="dashmock__body">
              <div className="dashmock__balance">
                <span>Total balance</span>
                <b>$12,480.00</b>
              </div>
              <div className="dashmock__row">
                <span className="dashmock__pos is-up">EUR/USD · Buy</span>
                <span className="dashmock__pnl is-up">+$42.10</span>
              </div>
              <div className="dashmock__row">
                <span className="dashmock__pos is-up">BTC/USDT · Buy</span>
                <span className="dashmock__pnl is-up">+$118.55</span>
              </div>
              <div className="dashmock__row">
                <span className="dashmock__pos is-down">XAU/USD · Sell</span>
                <span className="dashmock__pnl is-down">-$23.40</span>
              </div>
              <div className="dashmock__row">
                <span className="dashmock__pos">AAPL · Closed</span>
                <span className="dashmock__pnl is-up">+$61.90</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
