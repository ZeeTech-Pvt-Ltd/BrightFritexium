import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { STRESS_BAND } from '../data/content.js';

export default function StressBand() {
  return (
    <section className="section section--deep stress">
      <div className="container">
        <Reveal className="stress__inner">
          <h2 className="section-title">{STRESS_BAND.title}</h2>
          <p className="section-lead">{STRESS_BAND.copy}</p>
          <div className="stress__ctas">
            <Link className="btn btn--cyan" to={STRESS_BAND.cta.to}>
              {STRESS_BAND.cta.label}
              <Icon name="arrow-right" size={17} />
            </Link>
            <Link className="btn btn--ghost" to={STRESS_BAND.cta.to}>
              Begin now
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
