import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { RISK_MANAGEMENT } from '../data/content.js';

// Smart risk management - a single focused statement.
export default function RiskManagement() {
  return (
    <section className="section section--deep">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHead title={RISK_MANAGEMENT.title} />
        <Reveal>
          <p className="section-lead" style={{ maxWidth: 720, margin: '24px auto 0' }}>
            {RISK_MANAGEMENT.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
