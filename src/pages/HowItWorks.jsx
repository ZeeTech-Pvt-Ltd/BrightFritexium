import { Link } from 'react-router';
import useMeta from '../hooks/useMeta.js';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { AnalystFlow } from '../sections/Analyst.jsx';
import { THREE_STEPS, ANALYST } from '../data/content.js';

export default function HowItWorks() {
  useMeta({
    title: 'How It Works | BrightFritexium - Three Steps to Structured Wealth',
    description:
      'Open your BrightFritexium account in two minutes, fund from A$250 and let managed vaults do the heavy lifting - with human oversight on every move.',
    path: '/how-it-works',
    keywords: ['how BrightFritexium works', 'open crypto account Australia', 'crypto vaults explained'],
  });

  return (
    <div className="section section--deep">
      <div className="container">
        <Reveal>
          <span className="section-label">How it works</span>
          <h1 className="section-title" style={{ maxWidth: 720, marginBottom: 20 }}>
            From first click to a <em>structured portfolio</em> in three steps
          </h1>
          <p className="section-lead" style={{ maxWidth: 720 }}>
            No spreadsheets, no jargon, no staring at charts. BrightFritexium handles the
            complexity - you handle the easy part.
          </p>
        </Reveal>

        <div className="hiw-steps" style={{ marginTop: 56 }}>
          {THREE_STEPS.items.map((s, i) => (
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

      <div className="container" style={{ marginTop: 72 }}>
        <Reveal style={{ textAlign: 'center' }}>
          <span className="section-label">Behind the scenes</span>
          <h2 className="section-title" style={{ maxWidth: 720, margin: '0 auto 20px' }}>
            {ANALYST.title}
          </h2>
          <p className="section-lead" style={{ maxWidth: 720, margin: '16px auto 0' }}>
            {ANALYST.lead}
          </p>
        </Reveal>
        <div style={{ marginTop: 40 }}>
          <AnalystFlow />
        </div>

        <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
          <Link className="btn btn--cyan" to="/sign-up">
            Start now - it takes 2 minutes
            <Icon name="arrow-right" size={17} />
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
