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
        serif: ["Melodrama", "sans-serif"],
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
        success: "#00cc9f",
        info: "#48a1e7",
        warning: "#fdc449",
        danger: "#ff5570",
        whatsapp: "#24d366",
      },
    },
  },
  plugins: [],
};
