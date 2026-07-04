// Renders a technical, blueprint-style line illustration for each product type.
// This keeps the site looking intentional and premium even before real product
// photography is added — simply set `image` in src/data/products.js to switch
// any product over to a real photo.

const strokeProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Grid() {
  const lines = []
  for (let i = 0; i <= 10; i++) {
    lines.push(<line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="400" />)
    lines.push(<line key={`h${i}`} x1="0" y1={i * 40} x2="400" y2={i * 40} />)
  }
  return (
    <g stroke="currentColor" strokeWidth="0.5" opacity="0.08">
      {lines}
    </g>
  )
}

const illustrations = {
  jaffri: (
    <g {...strokeProps}>
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={90 + col * 45}
            y={90 + row * 45}
            width="45"
            height="45"
            transform={`rotate(45 ${90 + col * 45 + 22.5} ${90 + row * 45 + 22.5})`}
          />
        ))
      )}
      <rect x="80" y="80" width="240" height="240" strokeWidth="2" />
    </g>
  ),
  clock: (
    <g {...strokeProps}>
      <circle cx="200" cy="200" r="130" strokeWidth="2" />
      <circle cx="200" cy="200" r="112" strokeDasharray="1 11" />
      {Array.from({ length: 4 }).map((_, i) => {
        const angle = (i * 90 * Math.PI) / 180
        const x1 = 200 + Math.sin(angle) * 100
        const y1 = 200 - Math.cos(angle) * 100
        const x2 = 200 + Math.sin(angle) * 118
        const y2 = 200 - Math.cos(angle) * 118
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" />
      })}
      <line x1="200" y1="200" x2="200" y2="120" strokeWidth="2.5" />
      <line x1="200" y1="200" x2="255" y2="200" strokeWidth="2" />
      <circle cx="200" cy="200" r="5" fill="currentColor" />
    </g>
  ),
  keychain: (
    <g {...strokeProps}>
      <rect x="90" y="140" width="220" height="24" strokeWidth="2" />
      {Array.from({ length: 6 }).map((_, i) => (
        <g key={i}>
          <line x1={110 + i * 36} y1="164" x2={110 + i * 36} y2="200" />
          <circle cx={110 + i * 36} cy="216" r="16" />
        </g>
      ))}
    </g>
  ),
  basket: (
    <g {...strokeProps}>
      <path d="M120 160 L280 160 L255 300 L145 300 Z" strokeWidth="2" />
      {Array.from({ length: 6 }).map((_, i) => (
        <path
          key={`d${i}`}
          d={`M${132 + i * 25} 160 Q${140 + i * 25} 230 ${150 + i * 22} 300`}
          opacity="0.7"
        />
      ))}
      {Array.from({ length: 4 }).map((_, i) => (
        <path key={`w${i}`} d={`M125 ${185 + i * 30} Q200 ${200 + i * 30} 275 ${185 + i * 30}`} opacity="0.7" />
      ))}
      <path d="M150 160 Q200 100 250 160" strokeWidth="2" />
    </g>
  ),
  mobileholder: (
    <g {...strokeProps}>
      <path d="M140 280 L140 240 L180 200 L280 200 L280 250 L240 250" strokeWidth="2" />
      <rect x="176" y="150" width="70" height="130" rx="4" transform="rotate(0 0 0)" strokeWidth="2" />
      <line x1="140" y1="280" x2="280" y2="280" strokeWidth="2" />
    </g>
  ),
  grill: (
    <g {...strokeProps}>
      <rect x="100" y="150" width="200" height="90" rx="4" strokeWidth="2" />
      {Array.from({ length: 7 }).map((_, i) => (
        <line key={i} x1={115 + i * 26} y1="160" x2={115 + i * 26} y2="230" />
      ))}
      <line x1="130" y1="240" x2="110" y2="300" strokeWidth="2" />
      <line x1="270" y1="240" x2="290" y2="300" strokeWidth="2" />
      <line x1="150" y1="240" x2="140" y2="300" strokeWidth="2" />
      <line x1="250" y1="240" x2="260" y2="300" strokeWidth="2" />
    </g>
  ),
  custom: (
    <g {...strokeProps}>
      <path d="M140 260 C140 180 260 180 260 260" strokeWidth="2" />
      <path d="M120 260 L280 260" strokeWidth="2" />
      <circle cx="200" cy="150" r="26" strokeWidth="2" />
      <path d="M200 176 L200 260" />
      <path d="M160 220 L240 220" opacity="0.6" />
    </g>
  ),
  panels: (
    <g {...strokeProps}>
      <rect x="90" y="90" width="220" height="220" strokeWidth="2" />
      {Array.from({ length: 3 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={140 + col * 60} cy={140 + row * 60} r="18" />
        ))
      )}
    </g>
  ),
  nameplate: (
    <g {...strokeProps}>
      <rect x="90" y="160" width="220" height="80" rx="3" strokeWidth="2" />
      <line x1="115" y1="190" x2="285" y2="190" strokeWidth="2" />
      <line x1="115" y1="210" x2="230" y2="210" strokeWidth="1" opacity="0.6" />
    </g>
  ),
}

export default function ProductBlueprint({ type, className }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={`${type} technical illustration`}
    >
      <rect x="0" y="0" width="400" height="400" fill="var(--grey-50)" />
      <Grid />
      <g transform="translate(0,0)" color="var(--black)">
        {illustrations[type] || illustrations.custom}
      </g>
    </svg>
  )
}
