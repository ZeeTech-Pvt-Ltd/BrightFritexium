import Link from 'next/link';
import Icon from '../../components/Icon.jsx';
import BreadcrumbSchema from '../../components/BreadcrumbSchema.jsx';
import { pageMeta } from '../../lib/meta.js';

export const metadata = pageMeta({
  title: 'Sign In | BrightFritexium',
  description:
    'Existing BrightFritexium members sign in through the secure link sent after registration.',
  path: '/sign-in',
  keywords: ['BrightFritexium sign in', 'BrightFritexium login'],
});

export default function SignIn() {
  return (
    <>
      <section className="section section--deep">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="page-hero__glow" />
        </div>
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card" style={{ textAlign: 'center', padding: 48 }}>
            <span className="card__icon" style={{ margin: '0 auto 16px' }}>
              <Icon name="lock" size={26} />
            </span>
            <h1 className="section-title" style={{ fontSize: 26, marginBottom: 12 }}>
              Secure sign-in
            </h1>
            <p className="card__text">
              After registration you receive a secure sign-in link by email. Members sign in
              through that link - there are no passwords to lose or reuse.
            </p>
            <p className="card__text" style={{ marginTop: 12 }}>
              New here? Opening an account takes two minutes.
            </p>
            <Link className="btn btn--cyan" href="/sign-up" style={{ marginTop: 24 }}>
              Sign Up now
              <Icon name="arrow-right" size={17} />
            </Link>
          </div>
        </div>
      </section>
      <BreadcrumbSchema path="/sign-in" />
    </>
  );
}
