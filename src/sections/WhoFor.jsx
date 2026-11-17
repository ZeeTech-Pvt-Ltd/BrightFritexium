import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { WHO_FOR } from '../data/content.js';

// The three audiences the platform is built for.
export default function WhoFor() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={WHO_FOR.title} />
        <div className="cards-grid cards-grid--3" style={{ marginTop: 48 }}>
          {WHO_FOR.items.map((f, i) => (
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
