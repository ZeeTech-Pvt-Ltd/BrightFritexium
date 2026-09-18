import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import SectionHead from '../components/SectionHead.jsx';
import { CALCULATOR } from '../data/content.js';

const aud = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  maximumFractionDigits: 0,
});

// Compound projection: monthly-compounded growth of the lump sum plus regular top-ups.
const project = ({ deposit, monthly, years, rate }) => {
  const r = rate / 100 / 12;
  const n = years * 12;
  const fv = deposit * Math.pow(1 + r, n) + monthly * ((Math.pow(1 + r, n) - 1) / r);
  const monthlyIncome = fv * (rate / 100) / 12;
  return { balance: Math.round(fv), income: Math.round(monthlyIncome) };
};

export default function Calculator() {
  const [deposit, setDeposit] = useState(CALCULATOR.defaults.deposit);
  const [monthly, setMonthly] = useState(CALCULATOR.defaults.monthly);
  const [years, setYears] = useState(CALCULATOR.defaults.years);
  const [rate, setRate] = useState(CALCULATOR.defaults.rate);

  const { balance, income } = project({ deposit, monthly, years, rate });

  const sliders = [
    { key: 'deposit', label: 'Initial investment', value: deposit, fmt: aud.format(deposit), set: setDeposit, range: CALCULATOR.ranges.deposit },
    { key: 'monthly', label: 'Reinvestment', value: monthly, fmt: `${aud.format(monthly)}/mo`, set: setMonthly, range: CALCULATOR.ranges.monthly },
    { key: 'rate', label: 'Expected annual return', value: rate, fmt: `${rate}%`, set: setRate, range: CALCULATOR.ranges.rate },
    { key: 'years', label: 'Horizon', value: years, fmt: `${years} year${years > 1 ? 's' : ''}`, set: setYears, range: CALCULATOR.ranges.years },
  ];

  return (
    <section className="section section--deep">
      <div className="container">
        <SectionHead title={CALCULATOR.title} lead={CALCULATOR.lead} />

        <Reveal className="calc">
          <div className="calc__controls">
            {sliders.map((s) => (
              <div className="calc__row" key={s.key}>
                <div className="calc__row-head">
                  <label htmlFor={`calc-${s.key}`}>{s.label}</label>
                  <span className="calc__row-value">{s.fmt}</span>
                </div>
                <input
                  id={`calc-${s.key}`}
                  type="range"
                  min={s.range.min}
                  max={s.range.max}
                  step={s.range.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                />
              </div>
            ))}
          </div>

          <div className="calc__output">
            <span className="calc__output-label">Projected monthly income</span>
            <span className="calc__output-value">{aud.format(income)}</span>
            <span className="calc__output-sub">
              from a projected balance of {aud.format(balance)} after {years} year{years > 1 ? 's' : ''}
            </span>
          </div>
        </Reveal>

        <Reveal>
          <p className="calc__note">{CALCULATOR.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
