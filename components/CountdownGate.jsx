import { useEffect, useState } from "react";

function getTimeLeft(unlockDate) {
  const total = unlockDate - new Date();
  if (total <= 0) return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    total,
    days:    Math.floor(total / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((total % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((total % (1000 * 60)) / 1000),
  };
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function CountdownGate({ unlockDate, onUnlock }) {
  // null on server — populated only after mount to avoid hydration mismatch
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(getTimeLeft(unlockDate));
    const id = setInterval(() => {
      const left = getTimeLeft(unlockDate);
      setTime(left);
      if (left.total <= 0) {
        clearInterval(id);
        onUnlock();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [unlockDate, onUnlock]);

  // Serve-side and pre-hydration: plain black screen, no numbers
  if (!time) {
    return <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "#000" }} />;
  }

  const units = [
    { value: pad(time.days),    label: "dias"     },
    { value: pad(time.hours),   label: "horas"    },
    { value: pad(time.minutes), label: "minutos"  },
    { value: pad(time.seconds), label: "segundos" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "0.25rem",
        }}
      >
        {units.map((u, i) => (
          <div key={u.label} style={{ display: "flex", alignItems: "flex-start" }}>
            {/* number + label block */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(3rem, 14vw, 7rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {u.value}
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(0.6rem, 2vw, 0.8rem)",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                {u.label}
              </span>
            </div>

            {/* separator (not after last) */}
            {i < units.length - 1 && (
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(3rem, 14vw, 7rem)",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.2)",
                  lineHeight: 1,
                  padding: "0 0.1em",
                  userSelect: "none",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
