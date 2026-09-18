import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { THREE_STEPS } from '../data/content.js';

// Timeline: numbered circles joined by a dashed line, text centred under each.
export default function ThreeSteps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={THREE_STEPS.title} lead={THREE_STEPS.lead} />
        <div className="steps">
          {THREE_STEPS.items.map((s, i) => (
            <Reveal className="steps__item" delay={i * 90} key={s.title}>
              <div className="steps__circle">
                <span>{i + 1}</span>
              </div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
