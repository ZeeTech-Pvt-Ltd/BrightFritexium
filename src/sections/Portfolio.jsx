import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { PORTFOLIO } from '../data/content.js';

export default function Portfolio() {
  const { points } = PORTFOLIO.chart;
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={PORTFOLIO.title} lead={PORTFOLIO.lead} />

        <Reveal className="portfolio">
          <div className="portfolio__chart">
            <div className="portfolio__chart-head">
              <span className="portfolio__chart-label">{PORTFOLIO.chart.label}</span>
              <span className="portfolio__chart-ytd">{PORTFOLIO.chart.ytd}</span>
            </div>
            <svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="area-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2ee6ff" stopOpacity="0.28" />
                  <stop offset="1" stopColor="#2ee6ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* horizontal gridlines */}
              {[30, 60, 90].map((y) => (
                <line key={y} x1="0" y1={y} x2="600" y2={y} className="portfolio__grid" />
              ))}
              {/* area under the line */}
              <polygon points={`0,120 ${points} 600,120`} fill="url(#area-fill)" />
              <polyline points={points} className="portfolio__line" />
              <circle cx="600" cy="4" r="4" className="portfolio__dot" />
            </svg>
            <div className="portfolio__axis">
              <span>5 years ago</span>
              <span>Today</span>
            </div>
          </div>

          <div className="portfolio__cards">
            {PORTFOLIO.cards.map((c, i) => (
              <Reveal className="portfolio__card" delay={i * 90} key={c.label}>
                <span className="portfolio__card-label">{c.label}</span>
                <span className={`portfolio__card-value tone-${c.tone}`}>{c.value}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
