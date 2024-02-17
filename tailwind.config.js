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
      fontFamily: {
        sans: ["SplineSans", "sans-serif"],
        serif: ["Bebas", "sans-serif"],
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
        beige: "#FBF7EE",
        green: {
          light: "#e6eded",
        },
        success: "#00cc9f",
        info: "#48a1e7",
        warning: "#fdc449",
        cream: "#ebe5dd",
        danger: "#ff5570",
        whatsapp: "#24d366",
        brown: "#4F3829",
      },
    },
  },
  plugins: [],
};
