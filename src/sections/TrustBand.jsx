import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TRUST } from '../data/content.js';

// Security & transparency: sticky intro with risk note + measure list.
export default function TrustBand() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="security__grid">
          <div className="security__copy">
            <SectionHead align="left" title={TRUST.title} lead={TRUST.lead} />
            <Link className="btn btn--cyan" href={TRUST.cta.to}>
              {TRUST.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
            <p className="trust__risk">{TRUST.riskNote}</p>
          </div>

          <div className="security__list">
            {TRUST.items.map((f, i) => (
              <Reveal className="security__row" delay={i * 60} key={f.title}>
                <span className="security__icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
