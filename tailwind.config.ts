import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-green": "#8EC341",
        "primary-blue-green": "#175773",
        "primary-blue": "#2E5580",
        "primary-dark-blue": "#131B49",
        "primary-green-alt": "#3C8B3C",
      },
    },
  },
  plugins: [],
};

export default config;

