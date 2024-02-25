import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        cactus: {
          100: "#FFFFFF",
          200: "#E5EAF0",
          300: "#FAFAF9",
          400: "#E6D6FC",
          500: "#6C727F",
          600: "#20293A",
          700: "#883AE1",
        },
        business: {
          100: "#F2F5F9",
          200: "#677489",
          300: "111729",
        },
        testimonials: {
          100: "#FAFAF9",
          200: "#D4D4D8",
          300: "#52525A",
          400: "#18181B",
          yellow: "#F5C044",
          green: "#4CA154",
        },
        "from-contact": {
          100: "#F8FAFC",
          200: "#CDD5E0",
          300: "#111729",
          400: "#4036A9",
        },
        simple: {
          100: "#F2F9FE",
          200: "#909193",
          300: "#223344",
          400: "#111729",
          green: "#4CA154",
          blue: "#2A4DD0",
        },
        step: {
          100: "#E5E7EB",
          200: "#A1A1A9",
          300: "#4D5562",
          400: "#394150",
          500: "#212936",
          600: "#845EEE",
          700: "#652CD1",
          800: "#121826",
        },
        music: {
          100: "#E5E7EB",
          200: "#4D5562",
          300: "#212936",
          400: "#121826a6",
          500: "#C93B76",
        },
      },
      fontFamily: {
        sora: ["var(--font-sora)"],
        lato: ["var(--font-lato)"],
        poppins: ["var(--font-poppins)"],
        be_vietnam_pro: ["var(--font-be_vietnam_pro)"],
        inter: ["var(--font-inter)"],
      },
      backgroundImage: {
        "overlay-business": "url('/images/white-overlay.svg')",
        "contact-page": "url('/images/bg-image.svg')",
        "radial-step": "url('/images/blur-radial.svg')",
        music: "url('/songs/bg_music.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
