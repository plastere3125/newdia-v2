'use client'

const clients = [
  'HANDOL PUMPS', 'CLARINS', 'NGLE', 'NATIONAL GEOGRAPHIC', 'LIVSMED',
  'SECURITY PLATFORM', 'LINK & LEAVE', '얌샘김밥', 'egg', 'POCARI SWEAT',
  'LE LABO', 'CERAVIDA', 'ELFACE', 'DEPCENT', 'CORE INSIGHT', 'GLUESYS',
  'VITA NATURE', 'T30', '세화식품', 'ECARPLUG',
]

export default function Clients() {
  const doubled = [...clients, ...clients]

  return (
    <div
      style={{
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)',
        background: 'var(--white)',
        overflow: 'hidden',
        padding: '18px 0',
      }}
    >
      <div className="nd-marquee-wrap">
        <div className="nd-marquee-track">
          {doubled.map((name, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0,
              }}
            >
              <span style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gray-400)',
                whiteSpace: 'nowrap',
                padding: '0 40px',
              }}>
                {name}
              </span>
              <span style={{ color: 'var(--lime)', fontSize: 14, fontWeight: 800, lineHeight: 1 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
