import { useState } from 'react';
import { Link } from 'react-router';
import Icon from './Icon.jsx';
import { CHAT } from '../data/content.js';

// Floating onboarding-guide widget. A static greeting panel - not a live chat.
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`chat${open ? ' is-open' : ''}`}>
      {open && (
        <div className="chat__panel" role="dialog" aria-label="Onboarding guide chat">
          <div className="chat__head">
            <span className="chat__avatar">{CHAT.persona.charAt(0)}</span>
            <span>
              <b>{CHAT.persona}</b>
              <small>{CHAT.role}</small>
            </span>
            <button
              className="chat__close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <Icon name="close" size={14} />
            </button>
          </div>
          <p className="chat__bubble">{CHAT.greeting}</p>
          <div className="chat__actions">
            <Link className="btn btn--cyan btn--sm" to="/sign-up" onClick={() => setOpen(false)}>
              Start now
            </Link>
            <Link className="btn btn--ghost btn--sm" to="/contact-us" onClick={() => setOpen(false)}>
              Contact us
            </Link>
          </div>
        </div>
      )}
      <button
        className="chat__fab"
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? 'close' : 'headset'} size={22} />
      </button>
    </div>
  );
}
