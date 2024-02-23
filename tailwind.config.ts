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
      },
      fontFamily: {
        sora: "var(--font-sora)",
      },
    },
  },
  plugins: [],
};
export default config;
