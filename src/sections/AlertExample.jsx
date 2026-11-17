import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { ALERT_EXAMPLE } from '../data/content.js';

// A mock signal card showing the exact alert format members receive.
// Clearly labelled as an illustration.
export default function AlertExample() {
  const s = ALERT_EXAMPLE.signal;
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={ALERT_EXAMPLE.title} lead={ALERT_EXAMPLE.lead} />
        <Reveal className="alertcard">
          <div className="alertcard__head">
            <span className="alertcard__market">{s.market}</span>
            <span className="alertcard__direction">{s.direction}</span>
          </div>
          <div className="alertcard__grid">
            <div>
              <span className="alertcard__label">Entry</span>
              <span className="alertcard__value">{s.entry}</span>
            </div>
            <div>
              <span className="alertcard__label">Stop-loss</span>
              <span className="alertcard__value alertcard__value--down">{s.stopLoss}</span>
            </div>
            <div>
              <span className="alertcard__label">Take-profit</span>
              <span className="alertcard__value alertcard__value--up">{s.takeProfit}</span>
            </div>
          </div>
          <p className="alertcard__reason">
            <b>Reason:</b> {s.reason}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
