import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { TESTIMONIALS } from '../data/content.js';

// Review slider: 3 cards on desktop, 2 on tablet, 1 on mobile.
// Auto-advances every 5s; pauses on hover and for reduced-motion users.
export default function Testimonials() {
  const items = TESTIMONIALS.items;
  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const hoverRef = useRef(false);

  // Track viewport width to decide how many cards fit.
  useEffect(() => {
    const mqs = [
      window.matchMedia('(max-width: 640px)'),
      window.matchMedia('(max-width: 1080px)'),
    ];
    const compute = () => setVisible(mqs[0].matches ? 1 : mqs[1].matches ? 2 : 3);
    compute();
    mqs.forEach((m) => m.addEventListener('change', compute));
    return () => mqs.forEach((m) => m.removeEventListener('change', compute));
  }, []);

  const maxIndex = Math.max(0, items.length - visible);

  // Clamp index when the visible count changes (resize).
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // Autoplay - paused while the pointer is over the slider.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setIndex((i) => (i >= maxIndex ? 0 : i + 1));
      }
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const prev = () => setIndex((i) => (i === 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={TESTIMONIALS.title} lead={TESTIMONIALS.lead} />

        <Reveal className="quotes">
          <div
            className="quotes__viewport"
            aria-live="polite"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            <div
              className="quotes__track"
              style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
            >
              {items.map((t) => (
                <div className="quotes__item" style={{ flexBasis: `${100 / visible}%` }} key={t.name}>
                  <div className="quotes__card">
                    <div className="quotes__stars" role="img" aria-label={`${t.stars} out of 5 stars`}>
                      {Array.from({ length: 5 }, (_, s) => (
                        <Icon
                          key={s}
                          name="star"
                          size={14}
                          style={{ color: s < t.stars ? 'var(--gold)' : 'var(--line)' }}
                        />
                      ))}
                    </div>
                    <p className="quotes__text">"{t.text}"</p>
                    <div className="quotes__meta">
                      <span className="quotes__avatar">{t.name.charAt(0)}</span>
                      <span>
                        <span className="quotes__name">{t.name}</span>
                        <span className="quotes__city">
                          {t.city} · Member since {t.since}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="quotes__nav">
            <button className="quotes__arrow" onClick={prev} aria-label="Previous reviews">
              <Icon name="chevron" size={18} style={{ transform: 'rotate(90deg)' }} />
            </button>
            <div className="quotes__dots">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  className={`quotes__dot${i === index ? ' is-active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="quotes__arrow" onClick={next} aria-label="Next reviews">
              <Icon name="chevron" size={18} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
