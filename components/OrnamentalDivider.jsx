const lineStyle = {
  background: "linear-gradient(to right, transparent, #C4A455, transparent)",
};

function Line() {
  return <div className="flex-1 h-px" style={lineStyle} />;
}

export default function OrnamentalDivider({ variant = "diamond", className = "" }) {
  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      <Line />

      {variant === "diamond" && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path d="M5 0 L10 5 L5 10 L0 5 Z" stroke="#A88830" strokeWidth="1" />
        </svg>
      )}

      {variant === "dots" && (
        <span className="text-gold-400 text-xs" style={{ letterSpacing: "0.3em" }}>
          · · ·
        </span>
      )}

      <Line />
    </div>
  );
}
