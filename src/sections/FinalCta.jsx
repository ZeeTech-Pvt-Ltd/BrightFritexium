import { Link } from 'react-router';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { CTA_BAND } from '../data/content.js';

export default function FinalCta() {
  return (
    <section className="section section--deep final-cta">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Ready when you are</h2>
          <p className="section-lead">
            Join 31,000+ members who keep their digital wealth structured, secure and easy to see.
          </p>
          <Link className="btn btn--cyan" to={CTA_BAND.cta.to}>
            {CTA_BAND.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
          <p className="form__note" style={{ marginTop: 18, fontFamily: "'IBM Plex Mono', monospace" }}>
            {CTA_BAND.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
