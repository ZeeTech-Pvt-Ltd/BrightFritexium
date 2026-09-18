import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { ANALYST } from '../data/content.js';

export default function Analyst() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={ANALYST.title} lead={ANALYST.lead} />
        <div className="analyst">
          {ANALYST.items.map((s, i) => (
            <Reveal className="analyst__step" delay={i * 90} key={s.title}>
              <span className="card__icon">
                <Icon name={s.icon} size={24} />
              </span>
              <div>
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </div>
              {i < ANALYST.items.length - 1 && (
                <span className="analyst__arrow" aria-hidden="true">
                  →
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
