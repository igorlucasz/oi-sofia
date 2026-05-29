const EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)";

const base = "inline-flex items-center gap-2 font-sc tracking-widest uppercase text-label transition-colors duration-300 cursor-pointer";

const variants = {
  ghost: "text-sepia-800 border-none bg-transparent",
  outline: "border border-gold-600 px-8 py-3 tracking-wider text-sepia-800 hover:bg-gold-600 hover:text-cream-50 hover:shadow-gold-glow",
};

export default function Button({ variant = "ghost", children, onClick, className = "", href }) {
  const style = { transitionTimingFunction: EASE };
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {variant === "ghost" && (
        <span
          className="text-gold-500 inline-block transition-transform duration-300 group-hover:translate-x-2"
          style={{ transitionTimingFunction: EASE }}
        >
          ——
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${cls}`} style={style}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`group ${cls}`} style={style}>
      {inner}
    </button>
  );
}
