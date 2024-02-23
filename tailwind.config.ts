import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      },
      fontFamily: {
        sora: "var(--font-sora)",
        lato: "var(--font-lato)",
        poppins: "var(--font-poppins)",
      },
      backgroundImage: {
        "overlay-business": "url('/images/white-overlay.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
