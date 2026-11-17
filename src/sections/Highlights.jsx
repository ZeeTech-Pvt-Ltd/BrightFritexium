import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { HIGHLIGHTS } from '../data/content.js';

// Quick highlights - four compact cards.
export default function Highlights() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={HIGHLIGHTS.title} />
        <div className="cards-grid cards-grid--4" style={{ marginTop: 48 }}>
          {HIGHLIGHTS.items.map((f, i) => (
            <Reveal className="card" delay={i * 70} key={f.title}>
              <span className="card__icon">
                <Icon name={f.icon} size={24} />
              </span>
              <h3 className="card__title">{f.title}</h3>
              <p className="card__text">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
