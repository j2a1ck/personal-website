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
        "black-lite": "#171717",
        "white": "#B4B4B4",
        "navy-blue": "#183154",
        "gray-lite": "#727478",
        "indigo": "#10172A",
        "gray": "#1E293B",
        "white-bright": "#CBD5E1",
        "gray-project": "#99A4B1",
        "white-white": "#FFFFFF",
        "black-dark": "#0e0e12"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
