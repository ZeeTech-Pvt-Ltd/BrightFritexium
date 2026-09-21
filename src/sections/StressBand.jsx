import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { STRESS_BAND } from '../data/content.js';

const COINS = [
  { sym: '₿', name: 'Bitcoin', ticker: 'BTC', price: 'A$102,480', change: '+2.4%', up: true, color: '#f7931a' },
  { sym: 'Ξ', name: 'Ethereum', ticker: 'ETH', price: 'A$5,290', change: '+1.1%', up: true, color: '#627eea' },
  { sym: 'Ð', name: 'Dogecoin', ticker: 'DOGE', price: 'A$0.52', change: '+3.1%', up: true, color: '#c2a633' },
];

export default function StressBand() {
  return (
    <section className="section section--deep stress">
      <div className="container">
        <div className="stress__split">
          <Reveal className="stress__copy">
            <h2 className="section-title">{STRESS_BAND.title}</h2>
            <p className="section-lead">{STRESS_BAND.copy}</p>
            <Link className="btn btn--cyan" to={STRESS_BAND.cta.to}>
              {STRESS_BAND.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
          </Reveal>

          <div className="stress__coins">
            {COINS.map((c, i) => (
              <Reveal className="stress__coin" delay={i * 100} key={c.ticker}>
                <span className="stress__coin-sym" style={{ background: `${c.color}22`, color: c.color }}>
                  {c.sym}
                </span>
                <div className="stress__coin-id">
                  <b>{c.name}</b>
                  <small>{c.ticker}</small>
                </div>
                <div className="stress__coin-quote">
                  <b>{c.price}</b>
                  <span className={c.up ? 'up' : 'down'}>{c.change}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
