/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bc-blue": "#00AEC7",
        "bc-denim": "#00263E",
        "bc-black": "#1D1F2a",
        "bc-white": "#ffffff",
        "bc-arctic": "#0CD6E9",
        "bc-sunset": "#FA4C3C",
        "bc-eggplant": "#391E5F",
        "bc-shallot": "#8C4EE8",
        "bc-lagoon": "#006C80",
        "col-head": "#353a47",
        "col-body": "#4f6272",
        "col-bodyhov": "#435361",
        "audio-meter": "#64dca9",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      head: ["Montserrat", "sans-serif"],
      serif: ["Roboto Slab", "serif"],
    },
  },
  plugins: [],
};
