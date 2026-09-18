import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { FEATURES } from '../data/content.js';

// Bento grid: the first and last cards span two columns, breaking the uniform grid.
export default function Features() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={FEATURES.title} lead={FEATURES.lead} />
        <div className="bento">
          {FEATURES.items.map((f, i) => {
            const wide = i === 0 || i === FEATURES.items.length - 1;
            return (
              <Reveal
                className={`bento__item${wide ? ' bento__item--wide' : ''}`}
                delay={i * 60}
                key={f.title}
              >
                <span className="card__icon">
                  <Icon name={f.icon} size={24} />
                </span>
                <div>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.text}</p>
                  {f.bullets && (
                    <ul className="bento__bullets">
                      {f.bullets.map((b) => (
                        <li key={b}>
                          <Icon name="check" size={14} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
