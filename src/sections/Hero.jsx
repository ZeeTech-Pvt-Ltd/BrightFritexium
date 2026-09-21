import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import RegistrationForm from '../components/RegistrationForm.jsx';
import { HERO } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow hero__glow--one" />
      <div className="hero__glow hero__glow--two" />

      <div className="container">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1 className="hero__title">
              {HERO.titleLines[0]}
              <br />
              {HERO.titleLines[1]}
            </h1>

            <p className="hero__sub">{HERO.sub}</p>

            <div className="hero__chips">
              {HERO.chips.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>

            <div className="hero__cta">
              <Link className="btn btn--cyan" to={HERO.ctaPrimary.to}>
                {HERO.ctaPrimary.label}
                <Icon name="arrow-right" size={17} />
              </Link>
              <Link className="btn btn--ghost" to={HERO.ctaSecondary.to}>
                {HERO.ctaSecondary.label}
              </Link>
            </div>

            <div className="hero__steps">
              {HERO.steps.map((s, i) => (
                <span key={s}>
                  {i > 0 && <span className="hero__steps-sep">→</span>}
                  {s}
                </span>
              ))}
            </div>

            <div className="hero__trust">
              {HERO.trust.map((t) => (
                <span key={t}>
                  <Icon name="check" size={15} />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card hero__card--back1" />
            <div className="hero__card hero__card--back2" />

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
                  idPrefix="hero"
                  notice={HERO.formNotice}
                  buttonLabel={HERO.formButton}
                />
              </div>
            </div>

            <div className="hero__payments">
              {HERO.payments.map((p) => (
                <span className="hero__pay-chip" key={p}>
                  <Icon name="lock" size={12} />
                  {p}
                </span>
              ))}
            </div>

            <div className="hero__float hero__float--rating">
              <Icon name="star" size={14} />
              4.6/5 member rating
            </div>
            <div className="hero__float hero__float--cold">
              <Icon name="snowflake" size={14} />
              95% cold storage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
