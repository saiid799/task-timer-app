import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["Alegreya Sans SC", "sans-serif"],
        body: ["Ruda", "sans-serif"],
      },
      colors: {
        background: "#FCF5B8",
        foreground: "#403F3F",
        primary: {
          DEFAULT: "#427A5B",
          foreground: "#FCF5B8",
        },
        secondary: {
          DEFAULT: "#B4CD93",
          foreground: "#403F3F",
        },
        muted: {
          DEFAULT: "#e0e0e0",
          foreground: "#6c6c6c",
        },
        accent: {
          DEFAULT: "#B4CD93",
          foreground: "#403F3F",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#403F3F",
        },
        border: "#d1d1d1",
      },
    },
  },
  plugins: [],
};

export default config;
