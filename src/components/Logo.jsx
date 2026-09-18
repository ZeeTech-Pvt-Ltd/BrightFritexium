// B monogram: stem and two lobes drawn as strokes inside a rounded badge.
export default function Logo() {
  return (
    <svg className="logo__mark" viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id="logo-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#7bf3ff" />
          <stop offset="1" stopColor="#0891c4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="#0a1120" stroke="#1d2b45" />
      <path d="M11 9.5v13.5" fill="none" stroke="url(#logo-b)" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M11 9.5h4.5a3.25 3.25 0 0 1 0 6.5H11"
        fill="none"
        stroke="url(#logo-b)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M11 16h5.5a3.5 3.5 0 0 1 0 7H11"
        fill="none"
        stroke="url(#logo-b)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="26.5" cy="6.5" r="1.4" fill="#fbbf24" />
    </svg>
  );
}
