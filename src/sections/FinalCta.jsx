import Link from 'next/link';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { CTA_BAND } from '../data/content.js';

export default function FinalCta({
  title = 'Ready when you are',
  lead = 'Open your account in two minutes and start trading with confidence.',
  cta = CTA_BAND.cta,
  note = CTA_BAND.note,
}) {
  return (
    <section className="section section--deep final-cta">
      <div className="container">
        <Reveal className="cta-band__inner">
          <h2 className="section-title">{title}</h2>
          <p className="section-lead">{lead}</p>
          <Link className="btn btn--cyan" href={cta.to}>
            {cta.label}
            <Icon name="arrow-right" size={17} />
          </Link>
          <p className="form__note cta-band__note">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}
