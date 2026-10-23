import Link from 'next/link';
import Icon from '../../components/Icon.jsx';
import BreadcrumbSchema from '../../components/BreadcrumbSchema.jsx';
import { pageMeta } from '../../lib/meta.js';

const NEXT_STEPS = [
  'Check your inbox for a confirmation email',
  'Complete identity verification (usually same-day)',
  'Fund your vault from A$250 and choose your strategy',
];

export const metadata = pageMeta({
  title: 'Thank You | BrightFritexium - Account Request Received',
  description: 'Your BrightFritexium account request has been received. Here is what happens next.',
  path: '/thank-you',
  keywords: ['BrightFritexium account created', 'BrightFritexium next steps'],
});

export default function ThankYou() {
  return (
    <>
      <section className="section section--deep">
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="page-hero__glow" />
        </div>
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card" style={{ textAlign: 'center', padding: 48 }}>
            <span className="card__icon" style={{ margin: '0 auto 16px', color: 'var(--green)' }}>
              <Icon name="check" size={30} />
            </span>
            <h1 className="section-title" style={{ fontSize: 28, marginBottom: 12 }}>
              Account request received
            </h1>
            <p className="card__text">
              Thank you for choosing BrightFritexium. Your details are on their way to our
              onboarding team. What happens next:
            </p>
            <ul className="thankyou__list">
              {NEXT_STEPS.map((s) => (
                <li key={s}>
                  <Icon name="check" size={15} />
                  {s}
                </li>
              ))}
            </ul>
            <Link className="btn btn--cyan" href="/" style={{ marginTop: 24 }}>
              Back to the homepage
            </Link>
          </div>
        </div>
      </section>
      <BreadcrumbSchema path="/thank-you" />
    </>
  );
}
