import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { WHY_CHOOSE_US } from '../data/content.js';

// Split layout: sticky intro + CTA on the left, 2x2 compact cards on the right.
export default function WhyChooseUs() {
  return (
    <section className="section section--deep">
      <div className="container">
        <div className="security__grid">
          <div className="security__copy">
            <SectionHead align="left" title={WHY_CHOOSE_US.title} lead={WHY_CHOOSE_US.lead} />
            <Link className="btn btn--cyan" href={WHY_CHOOSE_US.cta.to}>
              {WHY_CHOOSE_US.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>

          <div className="why__grid">
            {WHY_CHOOSE_US.items.map((f, i) => (
              <Reveal className="card card--compact why__card" delay={i * 60} key={f.title}>
                <span className="card__icon">
                  <Icon name={f.icon} size={22} />
                </span>
                <div>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
