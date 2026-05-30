export function GoldOrnament({ className = "", width = 60 }) {
  return (
    <svg
      viewBox="0 0 120 24"
      width={width}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="42" y2="12" />
      <line x1="78" y1="12" x2="120" y2="12" />
      <circle cx="60" cy="12" r="3.5" />
      <circle cx="48" cy="12" r="1.2" fill="currentColor" />
      <circle cx="72" cy="12" r="1.2" fill="currentColor" />
      <path d="M52 6 Q60 12 52 18" />
      <path d="M68 6 Q60 12 68 18" />
    </svg>
  );
}

export function GoldDivider({ className = "" }) {
  return (
    <svg viewBox="0 0 320 16" className={className} fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
      <line x1="0" y1="8" x2="130" y2="8" />
      <line x1="190" y1="8" x2="320" y2="8" />
      <path d="M140 8 Q160 0 180 8 Q160 16 140 8 Z" fill="currentColor" fillOpacity="0.15" />
      <circle cx="160" cy="8" r="2" fill="currentColor" />
      <circle cx="135" cy="8" r="1" fill="currentColor" />
      <circle cx="185" cy="8" r="1" fill="currentColor" />
    </svg>
  );
}

export function MonogramOrnament({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="10" />
      <path d="M20 6 L22 14 L20 12 L18 14 Z" fill="currentColor" />
      <path d="M20 34 L22 26 L20 28 L18 26 Z" fill="currentColor" />
      <path d="M6 20 L14 22 L12 20 L14 18 Z" fill="currentColor" />
      <path d="M34 20 L26 22 L28 20 L26 18 Z" fill="currentColor" />
    </svg>
  );
}

export function PalmSide({ side }) {
  const transform = side === "right" ? "scale(-1,1)" : "";
  return (
    <svg
      viewBox="0 0 260 900"
      className={`pointer-events-none absolute top-0 ${side === "left" ? "left-0" : "right-0"} h-full w-[260px] opacity-[0.6]`}
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      <g transform={transform} style={{ transformOrigin: "130px 450px", overflow: "visible" }}>
        <Frond cx={-15} cy={80} rot={-28} scale={2.1} />
        <Frond cx={-30} cy={270} rot={22} scale={1.9} />
        <Frond cx={-10} cy={460} rot={-38} scale={2.25} />
        <Frond cx={-35} cy={650} rot={18} scale={1.95} />
        <Frond cx={-15} cy={840} rot={-22} scale={2.05} />
      </g>
    </svg>
  );
}

function Frond({ cx, cy, rot, scale }) {
  const stemLength = 110;
  const leafletCount = 16;
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot}) scale(${scale})`}>
      <defs>
        <radialGradient id={`f-${cx}-${cy}`} cx="0.3" cy="0.5">
          <stop offset="0%" stopColor="#9caf94" stopOpacity="0.55" />
          <stop offset="70%" stopColor="#8aa183" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#6f8a6a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line x1="0" y1="0" x2={stemLength} y2="0" stroke="#7d9577" strokeWidth="1.2" opacity="0.75" />
      {Array.from({ length: leafletCount }).map((_, i) => {
        const t = (i + 1) / (leafletCount + 1);
        const x = t * stemLength;
        const len = 10 + Math.sin(t * Math.PI) * 26;
        const angle = 55 - t * 15;
        return (
          <g key={i} transform={`translate(${x} 0)`}>
            <g transform={`rotate(${-angle})`}>
              <ellipse cx={len / 2} cy={0} rx={len / 2} ry={3} fill={`url(#f-${cx}-${cy})`} />
            </g>
            <g transform={`rotate(${angle})`}>
              <ellipse cx={len / 2} cy={0} rx={len / 2} ry={3} fill={`url(#f-${cx}-${cy})`} />
            </g>
          </g>
        );
      })}
    </g>
  );
}
