import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Icon from '../components/Icon.jsx';
import { BENEFITS } from '../data/content.js';

const aud = (n) => `A$${new Intl.NumberFormat('en-AU', { maximumFractionDigits: 0 }).format(n)}`;

// Live-looking demo chart: a random-walk series ticking every ~1.2s.
// Clearly labelled as a demo feed - purely illustrative.
function LiveChart() {
  const [series, setSeries] = useState(() =>
    Array.from({ length: 60 }, (_, i) => 102000 + Math.sin(i / 6) * 900 + (Math.random() - 0.5) * 400)
  );
  const [price, setPrice] = useState(102480);
  const [up, setUp] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setSeries((s) => {
        const last = s[s.length - 1];
        const delta = (Math.random() - 0.47) * 260;
        const next = Math.max(99500, Math.min(106000, last + delta));
        setPrice(Math.round(next));
        setUp(delta >= 0);
        return [...s.slice(1), next];
      });
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const min = Math.min(...series) - 200;
  const max = Math.max(...series) + 200;
  const pts = series
    .map((v, i) => `${(i / (series.length - 1)) * 300},${120 - ((v - min) / (max - min)) * 100}`)
    .join(' ');

  return (
    <div className="livechart" aria-hidden="true">
      <div className="livechart__head">
        <span className="livechart__pair">
          <span className="livechart__dot" />
          BTC/USDT
        </span>
        <span className={`livechart__price ${up ? 'is-up' : 'is-down'}`}>{aud(price)}</span>
        <span className={`livechart__chg ${up ? 'is-up' : 'is-down'}`}>
          {up ? '▲' : '▼'} {up ? '+2.4%' : '-0.3%'}
        </span>
      </div>
      <svg viewBox="0 0 300 120" preserveAspectRatio="none">
        <defs>
          <linearGradient id="live-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0db4e8" stopOpacity="0.25" />
            <stop offset="1" stopColor="#0db4e8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[30, 60, 90].map((y) => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} className="livechart__grid" />
        ))}
        <polygon points={`0,120 ${pts} 300,120`} fill="url(#live-fill)" />
        <polyline points={pts} className={`livechart__line ${up ? 'is-up' : 'is-down'}`} />
      </svg>
      <div className="livechart__foot">
        <span>24h high <b>{aud(Math.max(...series).toFixed(0))}</b></span>
        <span>24h low <b>{aud(Math.min(...series).toFixed(0))}</b></span>
        <span className="livechart__demo">Live demo feed · illustrative</span>
      </div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={BENEFITS.title} lead={BENEFITS.lead} />
        <div className="benefits">
          <div className="benefits__grid">
            {BENEFITS.items.map((f, i) => (
              <Reveal className="benefits__card" delay={i * 60} key={f.title}>
                <span className="card__icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <h3 className="card__title">{f.title}</h3>
                  <p className="card__text">{f.text}</p>
                </div>
              </Reveal>
            ))}
            <Reveal className="benefits__cta" delay={300}>
              <Link className="btn btn--cyan" to="/sign-up">
                Sign Up now
                <Icon name="arrow-right" size={17} />
              </Link>
            </Reveal>
          </div>
          <Reveal className="benefits__visual" delay={120}>
            <LiveChart />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
