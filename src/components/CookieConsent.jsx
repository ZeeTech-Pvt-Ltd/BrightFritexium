import { useState } from 'react';
import { Link } from 'react-router';

// Simple consent toast - persisted in localStorage once answered.
export default function CookieConsent() {
  const [answer, setAnswer] = useState(() => localStorage.getItem('bf-cookies'));

  if (answer) return null;

  const decide = (value) => {
    localStorage.setItem('bf-cookies', value);
    setAnswer(value);
  };

  return (
    <div className="cookie" role="dialog" aria-label="Cookie consent">
      <p className="cookie__text">
        We use cookies to keep the site running smoothly and understand how it is used. See our{' '}
        <Link to="/privacy-policy">Privacy Policy</Link> for details.
      </p>
      <div className="cookie__actions">
        <button className="btn btn--cyan btn--sm" onClick={() => decide('accepted')}>
          Accept
        </button>
        <button className="btn btn--ghost btn--sm" onClick={() => decide('declined')}>
          Decline
        </button>
      </div>
    </div>
  );
}
