/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8307",
        "surface-dim": "#dbd9dc",
        "surface-bright": "#fbf9fb",
        "surface-container-lowest": "#ffffff",
        "outline-variant": "#dec1af",
        "on-background": "#1b1c1d",
        "surface": "#ffffff",
        "outline": "#8b7263",
        "on-surface": "#1b1c1d",
        "background": "#ffffff",
        "secondary": "#5e5e60",
        "tertiary": "#4f6073",
      },
      fontFamily: {
        headline: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
