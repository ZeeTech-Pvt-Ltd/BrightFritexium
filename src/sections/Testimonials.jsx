import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TESTIMONIALS } from '../data/content.js';

// Three member reviews in a static card grid (sits right before the FAQs).
export default function Testimonials() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={TESTIMONIALS.title} lead={TESTIMONIALS.lead} />
        <div className="cards-grid cards-grid--3" style={{ marginTop: 48 }}>
          {TESTIMONIALS.items.map((t, i) => (
            <Reveal className="card testi" delay={i * 80} key={t.name}>
              <div className="testi__stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, s) => (
                  <Icon
                    key={s}
                    name="star"
                    size={14}
                    style={s < t.stars ? { fill: 'var(--gold)', stroke: 'var(--gold)' } : undefined}
                  />
                ))}
              </div>
              <p className="testi__text">&ldquo;{t.text}&rdquo;</p>
              <div className="testi__meta">
                <img
                  className="testi__avatar"
                  src={t.photo}
                  alt={t.name}
                  width={44}
                  height={44}
                  loading="lazy"
                />
                <div>
                  <b>{t.name}</b>
                  <span>{t.city}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
