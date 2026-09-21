import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { ABOUT_SUMMARY } from '../data/content.js';

export default function AboutSummary() {
  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={ABOUT_SUMMARY.title} lead={ABOUT_SUMMARY.lead} />
        <div className="about-summary">
          {ABOUT_SUMMARY.groups.map((g, i) => (
            <Reveal className="about-summary__group" delay={i * 80} key={g.title}>
              <span className="card__icon">
                <Icon name={g.icon} size={22} />
              </span>
              <h3 className="card__title">{g.title}</h3>
              <ul>
                {g.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
