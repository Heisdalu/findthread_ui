import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // screens: {},
  theme: {
    padding: {
      1: "1rem",
      2: "2rem",
      "1.5": "1.5rem",
    },
    backgroundImage: {
      "hero-sm-pattern": "url(../../public/bg.svg)",
      "hero-lg-pattern": "url(../../public/bbg.svg)",
    },
    borderWidth: {
      1: "1px",
    },
    borderColor: {
      1: "#000",
    },
  },
  plugins: [],
};
export default config;
