import Reveal from '../components/Reveal.jsx';

// Abstract partner marks (decorative) - no partner names are claimed.
const MARKS = [
  'mark-1', 'mark-2', 'mark-3', 'mark-4', 'mark-5', 'mark-6', 'mark-7', 'mark-8',
];

export default function PartnersStrip() {
  return (
    <section className="section section--deep partners" aria-label="Our partners">
      <div className="container">
        <Reveal className="partners__head">
          <span className="partners__label">Our partners</span>
        </Reveal>
        <div className="partners__row">
          {MARKS.map((m) => (
            <span key={m} className={`partners__mark ${m}`} aria-hidden="true" />
          ))}
        </div>
      </div>
    </section>
  );
}
