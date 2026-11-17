import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { START_STEPS } from '../data/content.js';

// Four-step onboarding path, capped with a sign-up CTA.
export default function GettingStarted() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={START_STEPS.title} />
        <Reveal className="steps" style={{ maxWidth: 680, margin: '48px auto 0' }}>
          {START_STEPS.items.map((s, i) => (
            <div className="steps__row" key={s.title}>
              <span className="steps__badge">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="card__title">
                  <Icon name={s.icon} size={18} style={{ marginRight: 8, verticalAlign: '-3px' }} />
                  {s.title}
                </h3>
                <p className="card__text">{s.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <Reveal style={{ textAlign: 'center', marginTop: 48 }}>
          <Link className="btn btn--cyan" href={START_STEPS.cta.to}>
            {START_STEPS.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
