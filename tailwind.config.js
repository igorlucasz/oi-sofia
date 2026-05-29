/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "Georgia", "serif"],
        body:    ["'Cormorant'",          "Georgia", "serif"],
        sc:      ["'Cormorant SC'",       "Georgia", "serif"],
        script:  ["'Great Vibes'",        "cursive"],
      },
      colors: {
        parchment: {
          50:  "#FBF7EF",
          100: "#F5EEDD",
          200: "#EDE0C4",
          300: "#E0CDA7",
          400: "#CEB98A",
          500: "#B99E6C",
        },
        gold: {
          200: "#E8D5A3",
          300: "#D4B878",
          400: "#C4A455",
          500: "#A88830",
          600: "#8B6A1A",
          700: "#6E5010",
          800: "#4E3808",
        },
        sepia: {
          50:  "#F9F4EC",
          100: "#EFE3CC",
          300: "#C4A070",
          500: "#8B6035",
          700: "#5C3D1E",
          800: "#3D2710",
          900: "#261608",
        },
        cream: {
          50:  "#FEFCF7",
          100: "#FBF7EE",
          200: "#F5EDDA",
        },
      },
      fontSize: {
        "label":      ["0.6875rem", { lineHeight: "1",    letterSpacing: "0.25em" }],
        "caption":    ["0.8125rem", { lineHeight: "1.4",  letterSpacing: "0.1em"  }],
        "body-sm":    ["1rem",      { lineHeight: "1.75"  }],
        "body":       ["1.125rem",  { lineHeight: "1.75"  }],
        "body-lg":    ["1.25rem",   { lineHeight: "1.75"  }],
        "heading-sm": ["1.5rem",    { lineHeight: "1.3"   }],
        "heading-md": ["2rem",      { lineHeight: "1.2"   }],
        "heading-lg": ["2.5rem",    { lineHeight: "1.15"  }],
        "heading-xl": ["3rem",      { lineHeight: "1.1"   }],
        "display-sm": ["4rem",      { lineHeight: "1.02", letterSpacing: "-0.01em"  }],
        "display-md": ["5.5rem",    { lineHeight: "0.98", letterSpacing: "-0.015em" }],
        "display-lg": ["7rem",      { lineHeight: "0.96", letterSpacing: "-0.02em"  }],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra:  "0.4em",
      },
      boxShadow: {
        "warm-sm":   "0 2px 8px 0 rgba(61,39,16,0.10)",
        "warm-md":   "0 4px 16px 0 rgba(61,39,16,0.12)",
        "warm-lg":   "0 8px 32px 0 rgba(61,39,16,0.18)",
        "warm-xl":   "0 16px 48px 0 rgba(61,39,16,0.22)",
        "gold-glow": "0 0 20px 4px rgba(168,136,48,0.25)",
        "frame":     "inset 0 0 0 1px rgba(139,106,26,0.40), 0 4px 20px 0 rgba(61,39,16,0.18)",
      },
    },
  },
  plugins: [],
};
