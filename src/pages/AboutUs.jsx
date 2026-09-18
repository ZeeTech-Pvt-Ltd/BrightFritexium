import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { STATS } from '../data/content.js';

const PILLARS = [
  {
    icon: 'shield-check',
    title: 'Security first',
    text: 'Every decision starts from one question: what keeps member assets safest? Custody, encryption and controls follow from there.',
  },
  {
    icon: 'eye',
    title: 'Radical transparency',
    text: 'Real-time statements, published fees and third-party audits. If we would not show it to our own families, we do not ship it.',
  },
  {
    icon: 'users',
    title: 'Built for humans',
    text: 'Plain English, honest risk notes and support from real people. Wealth platforms should calm you down, not hype you up.',
  },
];

export default function AboutUs() {
  useMeta({
    title: 'About Us | BrightFritexium - Secure Digital Wealth for Australia',
    description:
      'BrightFritexium was built to make digital wealth structured, secure and understandable - for everyone in Australia, not just insiders.',
    path: '/about-us',
    keywords: ['about BrightFritexium', 'Australian digital wealth company', 'secure crypto platform Australia'],
  });

  return (
    <div className="section section--deep">
      <div className="container">
        <Reveal>
          <span className="section-label">About us</span>
          <h1 className="section-title" style={{ maxWidth: 720, marginBottom: 20 }}>
            Digital wealth should feel <em>safe, simple and bright</em> - for everyone
          </h1>
          <p className="section-lead" style={{ maxWidth: 720 }}>
            BrightFritexium was founded on a simple frustration: crypto platforms were either
            complicated casinos or faceless apps. We built the platform we wished existed -
            structured vaults, regulated custodians and copy a normal person can actually read.
          </p>
        </Reveal>

        <div className="stats section--transparent" style={{ paddingTop: 56 }}>
          <div className="stats__grid">
            {STATS.map((s, i) => (
              <Reveal className="stats__cell" delay={i * 80} key={s.label}>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 64 }}>
        <SectionHead title="What we stand on" lead="Three principles run through every product, page and policy." />
        <div className="cards-grid cards-grid--3">
          {PILLARS.map((p, i) => (
            <Reveal className="card" delay={i * 70} key={p.title}>
              <span className="card__icon">
                <Icon name={p.icon} size={24} />
              </span>
              <h3 className="card__title">{p.title}</h3>
              <p className="card__text">{p.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
          <Link className="btn btn--cyan" to="/sign-up">
            Join BrightFritexium
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
