// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/BaseImage.js",
    "./src/components/OverlayOptions.js",
    "./src/components/Scrollbar.js",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
    "./index.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
