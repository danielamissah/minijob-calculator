interface Props {
  label: string;
  value: string;
  accent?: boolean;
  large?: boolean;
  sublabel?: string;
}

export function ResultCard({ label, value, accent, large, sublabel }: Props) {
  return (
    <div style={{
      background: accent ? '#FEF3E2' : 'white',
      border: `1.5px solid ${accent ? '#F4A035' : '#E5E7EB'}`,
      borderRadius: '16px',
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      boxShadow: accent ? '0 2px 12px rgba(244,160,53,0.10)' : '0 1px 4px rgba(0,0,0,0.04)',
    }}>
      <span style={{
        fontSize: '10px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.07em',
        color: accent ? '#C07A1A' : '#9CA3AF',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: large ? '2rem' : '1.35rem',
        fontWeight: 800,
        color: accent ? '#C07A1A' : '#0D5C63',
        lineHeight: 1.15,
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}
      </span>
      {sublabel && (
        <span style={{ fontSize: '11px', color: '#9CA3AF' }}>{sublabel}</span>
      )}
    </div>
  );
}