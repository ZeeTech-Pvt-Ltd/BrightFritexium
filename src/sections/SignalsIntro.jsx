import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { WHAT_IS } from '../data/content.js';

// "What Is BrightFritexium?" - definition plus the tip-vs-signal contrast.
export default function SignalsIntro() {
  return (
    <section className="section section--surface">
      <div className="container" style={{ maxWidth: 860 }}>
        <SectionHead title={WHAT_IS.title} lead={WHAT_IS.definition} />
        <Reveal>
          <p className="signals-tip">{WHAT_IS.tip}</p>
        </Reveal>
      </div>
    </section>
  );
}
