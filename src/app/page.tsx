'use client';

import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { LanguageToggle } from '@/components/LanguageToggle';
import { ResultCard } from '@/components/ResultCard';
import { BreakdownRow } from '@/components/BreakdownRow';
import { calculateMinijob, calculateMidijob, formatEur, formatEurRounded } from '@/lib/calculator';
import { BUNDESLAENDER, MINIJOB_2025 } from '@/data/constants';
import { MinijobResult, MidijobResult } from '@/types';

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: '#0D5C63', textDecoration: 'underline' }}
    >
      {label}
    </a>
  );
}

function FooterNote({ note, sources }: { note: string; sources: string }) {
  return (
    <div style={{ textAlign: 'center', paddingTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <p style={{ fontSize: '12px', color: '#9CA3AF', lineHeight: 1.7, maxWidth: '520px', margin: '0 auto' }}>
        {note}
      </p>
      <p style={{ fontSize: '12px', color: '#9CA3AF' }}>
        {sources}{': '}
        <FooterLink href="https://www.minijob-zentrale.de" label="minijob-zentrale.de" />
        {' · '}
        <FooterLink href="https://www.deutsche-rentenversicherung.de" label="deutsche-rentenversicherung.de" />
      </p>
    </div>
  );
}

export default function Home() {
  const { t, lang, toggleLang } = useTranslation();

  const [hourlyRate, setHourlyRate] = useState(13.0);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [isMidijob, setIsMidijob] = useState(false);
  const [bundesland, setBundesland] = useState('nw');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const minijobResult: MinijobResult = calculateMinijob({
    grossHourly: hourlyRate,
    hoursPerWeek,
    employmentType: isMidijob ? 'midijob' : 'minijob',
    hasKirchensteuer: false,
    bundesland,
  });

  const midijobResult: MidijobResult = calculateMidijob(
    minijobResult.grossMonthly,
    hoursPerWeek
  );

  const showMidijob = isMidijob || minijobResult.isOverLimit;
  const activeResult = showMidijob ? midijobResult : minijobResult;

  const hourlyPct = ((hourlyRate - MINIJOB_2025.MIN_WAGE_EUR) / (30 - MINIJOB_2025.MIN_WAGE_EUR)) * 100;
  const hoursPct = ((hoursPerWeek - 1) / (40 - 1)) * 100;

  const sliderStyle = (pct: number): React.CSSProperties => ({
    background: `linear-gradient(to right, #F4A035 ${pct}%, #D1D5DB ${pct}%)`,
  });

  return (
    <div style={{ minHeight: '100vh', background: '#F4F6F7', fontFamily: 'var(--font-open-sans)' }}>

      {/* Navbar */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
      }}>
        <div style={{
          maxWidth: '680px', margin: '0 auto',
          padding: '12px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '20px' }}>🧮</span>
            <span style={{ fontWeight: 700, fontSize: '15px', color: '#0D5C63' }}>
              {t.heroTitle}
            </span>
            <span style={{
              fontSize: '11px', fontWeight: 700,
              padding: '3px 10px', borderRadius: '999px',
              background: '#FEF3E2', color: '#C07A1A',
            }}>
              {t.updatedFor}
            </span>
          </div>
          <LanguageToggle lang={lang} onToggle={toggleLang} label={t.langToggle} />
        </div>
      </nav>

      <main style={{
        maxWidth: '680px', margin: '0 auto',
        padding: '24px 20px 60px',
        display: 'flex', flexDirection: 'column', gap: '20px',
      }}>

        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #0D5C63 0%, #0A4A50 100%)',
          borderRadius: '24px',
          padding: '36px 32px',
          color: 'white',
          boxShadow: '0 4px 24px rgba(13,92,99,0.18)',
        }}>
          <div style={{
            fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.12em',
            opacity: 0.6, marginBottom: '10px',
          }}>
            {t.heroSubtitle}
          </div>
          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '14px' }}>
            {t.heroTitle}
          </h1>
          <p style={{ fontSize: '14px', lineHeight: 1.7, opacity: 0.8, maxWidth: '480px' }}>
            {t.heroDesc}
          </p>
        </div>

        {/* Inputs */}
        <div style={{
          background: 'white', borderRadius: '20px',
          padding: '28px 24px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
          display: 'flex', flexDirection: 'column', gap: '24px',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0D5C63', margin: 0 }}>
            {t.inputsTitle}
          </h2>

          {/* Employment type toggle */}
          <div style={{
            display: 'flex', borderRadius: '12px',
            border: '1.5px solid #E5E7EB', overflow: 'hidden',
          }}>
            {([false, true] as const).map((midi) => (
              <button
                key={String(midi)}
                onClick={() => setIsMidijob(midi)}
                style={{
                  flex: 1, padding: '11px 8px',
                  fontSize: '13px', fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                  background: isMidijob === midi ? '#0D5C63' : 'white',
                  color: isMidijob === midi ? 'white' : '#9CA3AF',
                  fontFamily: 'var(--font-open-sans)',
                }}
              >
                {midi ? t.midijob : t.minijob}
              </button>
            ))}
          </div>

          {/* Hourly rate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>
                {t.grossHourly}
              </label>
              <span style={{
                padding: '4px 14px', borderRadius: '999px',
                fontSize: '14px', fontWeight: 800,
                background: '#FEF3E2', color: '#C07A1A',
              }}>
                {formatEur(hourlyRate)}
              </span>
            </div>
            <input
              type="range"
              min={MINIJOB_2025.MIN_WAGE_EUR}
              max={30}
              step={0.5}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              style={sliderStyle(hourlyPct)}
            />
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{t.grossHourlyHint}</span>
          </div>

          {/* Hours per week */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>
                {t.hoursPerWeek}
              </label>
              <span style={{
                padding: '4px 14px', borderRadius: '999px',
                fontSize: '14px', fontWeight: 800,
                background: '#FEF3E2', color: '#C07A1A',
              }}>
                {hoursPerWeek} hrs
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              step={0.5}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              style={sliderStyle(hoursPct)}
            />
            <span style={{ fontSize: '12px', color: '#9CA3AF' }}>{t.hoursPerWeekHint}</span>
          </div>

          {/* Bundesland */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '14px', fontWeight: 600, color: '#374151' }}>
              {t.bundesland}
            </label>
            <select
              value={bundesland}
              onChange={(e) => setBundesland(e.target.value)}
              style={{
                width: '100%', padding: '11px 14px',
                borderRadius: '12px', fontSize: '14px',
                border: '1.5px solid #E5E7EB',
                color: '#1A1A1A', background: 'white',
                fontFamily: 'var(--font-open-sans)',
                cursor: 'pointer',
              }}
            >
              {BUNDESLAENDER.map((bl) => (
                <option key={bl.id} value={bl.id}>{bl.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Over-limit warning */}
        {minijobResult.isOverLimit && !isMidijob && (
          <div style={{
            background: '#FFFBEB', border: '1.5px solid #F4A035',
            borderRadius: '16px', padding: '18px 20px',
            display: 'flex', gap: '14px', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '22px', flexShrink: 0 }}>⚠️</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: '14px', color: '#B45309', marginBottom: '4px' }}>
                {t.overLimitTitle}
              </p>
              <p style={{ fontSize: '13px', color: '#92400E', lineHeight: 1.6 }}>
                {t.overLimitDesc(formatEur(minijobResult.grossMonthly), formatEur(MINIJOB_2025.MONTHLY_LIMIT_EUR))}
              </p>
            </div>
          </div>
        )}

        {/* Midijob info */}
        {showMidijob && !midijobResult.isOverLimit && (
          <div style={{
            background: '#E6F4F5', border: '1.5px solid #0D5C63',
            borderRadius: '16px', padding: '18px 20px',
            display: 'flex', gap: '14px', alignItems: 'flex-start',
          }}>
            <span style={{ fontSize: '22px', flexShrink: 0 }}>ℹ️</span>
            <div>
              <p style={{ fontWeight: 700, fontSize: '14px', color: '#0D5C63', marginBottom: '4px' }}>
                {t.midijobNoteTitle}
              </p>
              <p style={{ fontSize: '13px', color: '#0D5C63', opacity: 0.8, lineHeight: 1.6 }}>
                {t.midijobNoteDesc}
              </p>
            </div>
          </div>
        )}

        {/* Safe zone */}
        {!minijobResult.isOverLimit && !isMidijob && (
          <div style={{
            background: '#E6F4F5', border: '1.5px solid #0D5C63',
            borderRadius: '16px', padding: '16px 20px',
            display: 'flex', flexDirection: 'column', gap: '6px',
          }}>
            <p style={{ fontSize: '14px', fontWeight: 700, color: '#0D5C63' }}>
              {'✅ '}{t.safeZoneTitle}
            </p>
            {minijobResult.monthsUntilLimit !== null && (
              <p style={{ fontSize: '12px', color: '#0D5C63', opacity: 0.75 }}>
                {t.safeZoneMonths(minijobResult.monthsUntilLimit)}
              </p>
            )}
            {minijobResult.hoursUntilLimitPerMonth !== null && (
              <p style={{ fontSize: '12px', color: '#0D5C63', opacity: 0.75 }}>
                {t.safeZoneHours(minijobResult.hoursUntilLimitPerMonth)}
              </p>
            )}
          </div>
        )}

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0D5C63', margin: 0 }}>
            {t.resultsTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <ResultCard label={t.monthlyGross} value={formatEur(activeResult.grossMonthly)} />
            <ResultCard label={t.monthlyNet} value={formatEur(activeResult.netMonthly)} accent large />
            <ResultCard label={t.annualNet} value={formatEurRounded(activeResult.netAnnual)} sublabel="/year" />
            <ResultCard label={t.hourlyNet} value={formatEur(activeResult.netHourly)} sublabel="/hr net" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <ResultCard label={t.employerCost} value={formatEur(activeResult.employerTotalCost)} />
            <ResultCard label={t.employerCostAnnual} value={formatEurRounded(activeResult.employerTotalCostAnnual)} sublabel="/year" />
          </div>
        </div>

        {/* Breakdown */}
        <div style={{
          background: 'white', borderRadius: '20px',
          padding: '24px', border: '1px solid #E5E7EB',
          boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0D5C63', marginBottom: '16px' }}>
            {t.breakdownTitle}
          </h2>

          <p style={{
            fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            color: '#9CA3AF', marginBottom: '6px',
          }}>
            {t.employeeSection}
          </p>

          {!showMidijob ? (
            <BreakdownRow label={t.noEmployeeDeductions} value="€ 0.00" muted />
          ) : (
            <>
              <BreakdownRow label={t.kvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYEE_KV)} />
              <BreakdownRow label={t.rvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYEE_RV)} />
              <BreakdownRow label={t.pvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYEE_PV)} />
              <BreakdownRow label={t.avContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYEE_AV)} />
            </>
          )}

          <div style={{ height: '1px', background: '#F3F4F6', margin: '14px 0' }} />

          <p style={{
            fontSize: '11px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em',
            color: '#9CA3AF', marginBottom: '6px',
          }}>
            {t.employerSection}
          </p>

          {!showMidijob ? (
            <>
              <BreakdownRow label={t.kvContrib} value={formatEur(minijobResult.employerKV)} />
              <BreakdownRow label={t.rvContrib} value={formatEur(minijobResult.employerRV)} />
              <BreakdownRow label={t.pauschsteuer} value={formatEur(minijobResult.employerPauschsteuer)} />
              <BreakdownRow label={t.u1} value={formatEur(minijobResult.employerU1)} />
              <BreakdownRow label={t.u2} value={formatEur(minijobResult.employerU2)} />
              <BreakdownRow label={t.insolvenzgeld} value={formatEur(minijobResult.employerInsolvenzgeld)} />
            </>
          ) : (
            <>
              <BreakdownRow label={t.kvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYER_KV)} />
              <BreakdownRow label={t.rvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYER_RV)} />
              <BreakdownRow label={t.pvContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYER_PV)} />
              <BreakdownRow label={t.avContrib} value={formatEur(midijobResult.grossMonthly * MINIJOB_2025.MIDIJOB_EMPLOYER_AV)} />
            </>
          )}

          <div style={{ marginTop: '8px' }}>
            <BreakdownRow
              label={t.totalEmployerCost}
              value={formatEur(activeResult.employerTotalCost)}
              total
            />
          </div>
        </div>

        {/* FAQ */}
        <div style={{
          background: 'white', borderRadius: '20px',
          padding: '24px', border: '1px solid #E5E7EB',
          boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0D5C63', marginBottom: '16px' }}>
            {t.faqTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {t.faqs.map((faq, i) => (
              <div
                key={i}
                style={{ borderTop: i === 0 ? 'none' : '1px solid #F3F4F6' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex',
                    justifyContent: 'space-between', alignItems: 'center',
                    padding: '14px 4px', background: 'none', border: 'none',
                    cursor: 'pointer', textAlign: 'left', gap: '12px',
                    fontFamily: 'var(--font-open-sans)',
                  }}
                >
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.4 }}>
                    {faq.q}
                  </span>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%',
                    background: openFaq === i ? '#0D5C63' : '#F3F4F6',
                    color: openFaq === i ? 'white' : '#6B7280',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', fontWeight: 700, flexShrink: 0,
                    transition: 'background 0.2s',
                  }}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <p style={{
                    fontSize: '13px', color: '#6B7280',
                    lineHeight: 1.7, padding: '0 4px 16px',
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <FooterNote note={t.footerNote} sources={t.footerSources} />

      </main>
    </div>
  );
}