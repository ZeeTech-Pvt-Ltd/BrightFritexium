import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { COMPARE } from '../data/content.js';

// Side-by-side contrast: trading with vs without the platform.
export default function CompareBand() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={COMPARE.title} />
        <Reveal className="compare">
          <div className="compare__panel compare__panel--without">
            <h3 className="compare__head">{COMPARE.without.label}</h3>
            <ul>
              {COMPARE.without.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare__panel compare__panel--with">
            <h3 className="compare__head">{COMPARE.with.label}</h3>
            <ul>
              {COMPARE.with.items.map((item) => (
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
