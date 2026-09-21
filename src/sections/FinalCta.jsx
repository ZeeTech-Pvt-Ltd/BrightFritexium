import { Link } from 'react-router';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { CTA_BAND } from '../data/content.js';

export default function FinalCta() {
  return (
    <section className="section section--deep final-cta">
      <div className="container">
        <Reveal className="cta-band__inner">
          <h2 className="section-title">Ready when you are</h2>
          <p className="section-lead">
            Open your account in two minutes and start trading with confidence.
          </p>
          <Link className="btn btn--cyan" to={CTA_BAND.cta.to}>
            {CTA_BAND.cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
          <p className="form__note cta-band__note">{CTA_BAND.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

