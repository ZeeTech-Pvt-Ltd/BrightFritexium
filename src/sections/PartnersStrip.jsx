const PARTNERS = Array.from({ length: 8 }, (_, i) => i + 1);

export default function PartnersStrip() {
  // Rendered twice so the translateX(-50%) loop is seamless.
  const logos = [...PARTNERS, ...PARTNERS];
  return (
    <section className="section section--deep partners" aria-label="Our partners">
      <div className="partners__viewport">
        <div className="partners__track">
          {logos.map((n, i) => (
            <span className="partners__logo" key={i}>
              <img src={`/partners/partner-${n}.svg`} alt={`Partner ${n}`} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
