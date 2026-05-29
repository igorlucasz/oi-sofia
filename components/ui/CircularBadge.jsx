export default function CircularBadge({
  topText    = "A BELEZA DO TEMPO",
  bottomText = "A ARTE DE SENTIR",
  centerIcon,
  size       = 120,
  className  = "",
}) {
  const r   = size * 0.42;
  const cx  = size / 2;
  const cy  = size / 2;
  const fs  = size * 0.072;
  const id  = "cb-path";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      style={{ animation: "spin 20s linear infinite" }}
      aria-label={`${topText} / ${bottomText}`}
    >
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>

      {/* circular path shared by both text arcs */}
      <defs>
        <path
          id={id}
          d={`
            M ${cx - r} ${cy}
            A ${r} ${r} 0 1 1 ${cx + r} ${cy}
            A ${r} ${r} 0 1 1 ${cx - r} ${cy}
          `}
        />
      </defs>

      {/* top text */}
      <text
        fontFamily="'Cormorant SC', Georgia, serif"
        fontSize={fs}
        fill="#8B6A1A"
        letterSpacing="0.15em"
      >
        <textPath href={`#${id}`} startOffset="0%">
          {topText}
        </textPath>
      </text>

      {/* bottom text — offset 50% puts it on the lower arc */}
      <text
        fontFamily="'Cormorant SC', Georgia, serif"
        fontSize={fs}
        fill="#8B6A1A"
        letterSpacing="0.15em"
      >
        <textPath href={`#${id}`} startOffset="50%">
          {bottomText}
        </textPath>
      </text>

      {/* center ornament — 4-petal flower from diamond shapes */}
      {centerIcon ?? (
        <g transform={`translate(${cx}, ${cy})`}>
          <path d="M0,-8 L4,0 L0,8 L-4,0 Z"  fill="#A88830" opacity="0.9" />
          <path d="M-8,0 L0,-4 L8,0 L0,4 Z"  fill="#A88830" opacity="0.9" />
          <circle r="2.5" fill="#C4A455" />
        </g>
      )}
    </svg>
  );
}
