module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    safelist: [
      "bg-submarine",
      "bg-destroyer",
      "bg-battleship",
      "bg-cruiser",
      "bg-hitted",
      "bg-misssed",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        10: "repeat(10, 5vmin)",
      },
      gridTemplateRows: {
        10: "repeat(10, 5vmin)",
      },
      gridRow: {
        "span-10": "span 10 / span 10",
      },
      screens: {
        // lg: { max: "1023px" },
        sm: { max: "639px" },
      },
      spacing: {
        97: "25rem",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        submarine: "#9CA3AF",
        destroyer: "#A78BFA",
        cruiser: "#FBBF24",
        battleship: "#60A5FA",
        missed: "#34D399",
        hitted: "#F87171",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
