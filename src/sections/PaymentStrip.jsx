import Reveal from '../components/Reveal.jsx';
import { PAYMENTS } from '../data/content.js';

export default function PaymentStrip() {
  return (
    <section className="section section--surface payments">
      <div className="container">
        <Reveal className="payments__inner">
          <p className="payments__title">{PAYMENTS.title}</p>
          <div className="payments__row">
            {PAYMENTS.methods.map((m) => (
              <span className="payments__chip" key={m}>
                {m}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
