interface Props {
  label: string;
  value: string;
  highlight?: boolean;
  muted?: boolean;
  total?: boolean;
}

export function BreakdownRow({ label, value, highlight, muted, total }: Props) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 12px',
      borderRadius: '10px',
      background: total ? '#E6F4F5' : highlight ? '#FEF3E2' : 'transparent',
      marginBottom: total ? 0 : '2px',
    }}>
      <span style={{
        fontSize: '13px',
        color: muted ? '#C4C9D4' : total ? '#0D5C63' : '#4B5563',
        fontWeight: total ? 700 : 400,
        fontStyle: muted ? 'italic' : 'normal',
      }}>
        {label}
      </span>
      <span style={{
        fontSize: '13px',
        fontWeight: total ? 800 : 600,
        color: total ? '#0D5C63' : highlight ? '#C07A1A' : '#1A1A1A',
        fontVariantNumeric: 'tabular-nums',
      }}>
        {value}
      </span>
    </div>
  );
}