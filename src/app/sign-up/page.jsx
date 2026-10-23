import RegistrationForm from '../../components/RegistrationForm.jsx';
import BreadcrumbSchema from '../../components/BreadcrumbSchema.jsx';
import { SITE } from '../../data/content.js';
import { pageMeta } from '../../lib/meta.js';

export const metadata = pageMeta({
  title: 'Sign Up | Open a BrightFritexium Account Today',
  description:
    'Open your BrightFritexium account in minutes. Join 31,000+ members, fund from A$250 and let managed vaults do the heavy lifting.',
  path: '/sign-up',
  keywords: [
    'BrightFritexium sign up',
    'open crypto account Australia',
    'digital wealth registration',
    'BrightFritexium register',
  ],
});

export default function SignUp() {
  return (
    <>
      <section className="section section--deep">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="page-hero__glow" />
        </div>
        <div className="container" style={{ maxWidth: 520 }}>
          <h1 className="section-title" style={{ textAlign: 'center', fontSize: 28, marginBottom: 32 }}>
            Open your BrightFritexium account
          </h1>
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dots">
                <span className="t--r" />
                <span className="t--a" />
                <span className="t--g" />
              </span>
              brightfritexium - sign up
            </div>
            <div className="terminal__body">
              <RegistrationForm idPrefix="signup" />
            </div>
          </div>
          <p className="form__note" style={{ marginTop: 20 }}>
            {SITE.tagline} · Minimum deposit A$250
          </p>
        </div>
      </section>
      <BreadcrumbSchema path="/sign-up" />
    </>
  );
}
