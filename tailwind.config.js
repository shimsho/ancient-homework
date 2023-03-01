/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        fadeGrow: {
          from: { transform: "scale(0.75)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        jello: {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
      },
      animation: {
        fadeGrow: "fadeGrow 1s ease normal forwards 1",
        jello: "jello 1s ease normal forwards 1",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
