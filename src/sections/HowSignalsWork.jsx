import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { SIGNAL_STEPS } from '../data/content.js';

// Four-stage signal generation pipeline, data -> pattern -> risk -> alert.
export default function HowSignalsWork() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={SIGNAL_STEPS.title} />
        <div className="hiw-steps hiw-steps--4" style={{ marginTop: 56 }}>
          {SIGNAL_STEPS.items.map((s, i) => (
            <Reveal className="hiw-steps__item" delay={i * 90} key={s.title}>
              <span className="hiw-steps__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="card__icon">
                <Icon name={s.icon} size={24} />
              </span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
