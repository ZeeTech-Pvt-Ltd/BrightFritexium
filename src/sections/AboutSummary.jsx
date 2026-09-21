import { useEffect, useRef, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { ABOUT_SUMMARY } from '../data/content.js';

// Tabbed panel: Markets / Performance / Security. Auto-rotates every 5s,
// pauses on hover and for reduced-motion users.
export default function AboutSummary() {
  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      if (!hoverRef.current) {
        setActive((i) => (i + 1) % ABOUT_SUMMARY.groups.length);
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const group = ABOUT_SUMMARY.groups[active];

  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={ABOUT_SUMMARY.title} lead={ABOUT_SUMMARY.lead} />
        <Reveal className="about">
          <div
            className="about__tabs"
            role="tablist"
            aria-label="Platform details"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            {ABOUT_SUMMARY.groups.map((g, i) => (
              <button
                key={g.title}
                role="tab"
                aria-selected={active === i}
                className={`about__tab${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <Icon name={g.icon} size={16} />
                {g.title}
              </button>
            ))}
          </div>
          <div className="about__content" role="tabpanel">
            <ul key={group.title}>
              {group.items.map((item) => (
                <li key={item}>
                  <Icon name="check" size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
