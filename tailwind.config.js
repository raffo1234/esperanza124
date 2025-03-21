/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /(text|border)-(info|success|warning|danger|neutral)/,
      variants: ["hover"],
    },
    "bg-uptime",
    "bg-downtime",
    "bg-partial",
  ],
  theme: {
    extend: {
      keyframes: {
        scale: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        scale: "scale 0.3s",
      },
      fontFamily: {
        sans: ["roboto", "sans-serif"],
        serif: ["italiana", "sans-serif"],
      },
      colors: {
        capri: "#f9ece5",
        blue: {
          dark: "#140944",
        },
        neutral: {
          100: "#ccc",
          900: "#372950",
        },
        beige: "#fffaf4",
        green: {
          light: "#e6eded",
        },
        success: "#00cc9f",
        info: "#48a1e7",
        warning: "#fdb80b",
        cream: "#dc9e00",
        danger: "#ff5570",
        whatsapp: {
          500: "#24d366",
          800: "#0AAC4B",
        },
        brown: "#4F3829",
      },
    },
  },
  plugins: [],
};
