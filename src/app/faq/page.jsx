import Link from 'next/link';
import Reveal from '../../components/Reveal.jsx';
import FaqList from '../../components/FaqList.jsx';
import FaqSchema from '../../components/FaqSchema.jsx';
import BreadcrumbSchema from '../../components/BreadcrumbSchema.jsx';
import { SITE } from '../../data/content.js';
import { pageMeta } from '../../lib/meta.js';

export const metadata = pageMeta({
  title: 'FAQ | BrightFritexium - Your Questions, Answered Plainly',
  description:
    'Deposits, withdrawals, security, KYC, fees and more - the most common BrightFritexium questions answered in plain English.',
  path: '/faq',
  keywords: ['BrightFritexium FAQ', 'crypto platform questions', 'minimum deposit Australia'],
});

export default function Faqs() {
  return (
    <>
      <div className="section section--deep">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <span className="section-label">FAQ</span>
            <h1 className="section-title" style={{ marginBottom: 16 }}>
              Questions, answered plainly
            </h1>
            <p className="section-lead" style={{ marginBottom: 48 }}>
              Everything members ask us most - before you sign up, not after.
            </p>
          </Reveal>
          <Reveal>
            <FaqList />
          </Reveal>
          <FaqSchema />
          <Reveal style={{ textAlign: 'center', marginTop: 56 }}>
            <p className="section-lead" style={{ marginBottom: 20 }}>
              Still curious? Email {SITE.email} - a human replies within one business day.
            </p>
            <Link className="btn btn--cyan" href="/sign-up">
              Sign Up now
            </Link>
          </Reveal>
        </div>
      </div>
      <BreadcrumbSchema path="/faq" />
    </>
  );
}
