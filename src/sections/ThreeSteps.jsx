import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { THREE_STEPS, HERO } from '../data/content.js';

// Stepper panel + embedded form side by side - the conversion point sits
// right against the steps instead of waiting for the end of the page.
export default function ThreeSteps() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead title={THREE_STEPS.title} lead={THREE_STEPS.lead} />
        <div className="steps-split">
          <Reveal className="steps">
            {THREE_STEPS.items.map((s, i) => (
              <div className="steps__row" key={s.title}>
                <span className="steps__badge">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="card__title">{s.title}</h3>
                  <p className="card__text">{s.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal className="steps__form" delay={120}>
            <div className="terminal">
              <div className="terminal__bar">
                <span className="terminal__dots">
                  <span className="t--r" />
                  <span className="t--a" />
                  <span className="t--g" />
                </span>
                brightfritexium - create account
              </div>
              <div className="terminal__body">
                <RegistrationForm
                  idPrefix="steps"
                  notice={HERO.formNotice}
                  buttonLabel={HERO.formButton}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
