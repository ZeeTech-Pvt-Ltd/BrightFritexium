import Reveal from '../components/Reveal.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { CTA_BAND, HERO } from '../data/content.js';

// Repeated lead form near the footer (mirrors the hero conversion point).
export default function FinalCta() {
  return (
    <section className="section section--deep final-cta">
      <div className="container" style={{ maxWidth: 640 }}>
        <Reveal>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Ready when you are
          </h2>
          <p className="section-lead" style={{ textAlign: 'center', marginBottom: 36 }}>
            Open your account in two minutes and start trading with confidence.
          </p>
          <div className="terminal final-cta__form">
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
                idPrefix="footer"
                notice={HERO.formNotice}
                buttonLabel={HERO.formButton}
              />
            </div>
          </div>
          <p className="form__note" style={{ marginTop: 18, fontFamily: "'IBM Plex Mono', monospace" }}>
            {CTA_BAND.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
