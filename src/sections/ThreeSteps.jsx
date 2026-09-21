import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { THREE_STEPS } from '../data/content.js';

// Zigzag timeline: numbered circles on a central gradient rail,
// content cards alternating left/right (stacked on mobile).
export default function ThreeSteps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={THREE_STEPS.title} lead={THREE_STEPS.lead} />
        <div className="steps">
          {THREE_STEPS.items.map((s, i) => (
            <Reveal
              className={`steps__item${i % 2 ? ' steps__item--flip' : ''}`}
              delay={i * 100}
              key={s.title}
            >
              <div className="steps__circle">
                <span>{i + 1}</span>
              </div>
              <div className="steps__content">
                <h3 className="card__title">{s.title}</h3>
                <p className="card__text">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
