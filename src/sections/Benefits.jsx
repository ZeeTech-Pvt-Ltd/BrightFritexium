import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { BENEFITS } from '../data/content.js';

// Benefit cards beside a phone-style product visual with a live chart.
function PhoneVisual() {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="phone__pair">
          <span>BTC/USDT</span>
          <span className="phone__price">A$102,480</span>
          <span className="phone__chg">+2.4%</span>
        </div>
        <svg viewBox="0 0 220 90" preserveAspectRatio="none">
          <polyline
            points="0,70 30,64 60,66 90,48 120,54 150,34 180,42 220,12"
            fill="none"
            stroke="#0896c9"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="phone__book">
          <span>Order book</span>
          <div className="phone__row"><i className="is-buy" /> Buy <b>0.42 BTC</b> <em>A$102,480</em></div>
          <div className="phone__row"><i className="is-sell" /> Sell <b>0.18 BTC</b> <em>A$102,390</em></div>
          <div className="phone__row"><i className="is-buy" /> Buy <b>1.05 BTC</b> <em>A$102,350</em></div>
        </div>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={BENEFITS.title} lead={BENEFITS.lead} />
        <div className="benefits">
          <div className="benefits__grid">
            {BENEFITS.items.map((f, i) => (
              <Reveal className="benefits__card" delay={i * 60} key={f.title}>
                <span className="card__icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className="benefits__cta" delay={300}>
              <Link className="btn btn--cyan" to="/sign-up">
                Sign Up now
                <Icon name="arrow-right" size={17} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="benefits__visual" delay={120}>
            <PhoneVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
