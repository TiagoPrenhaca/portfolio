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
        backgrounds: {
          main: "#07040E",
          projects: "#F5F3F0",
          "dark-component": "#232121",
          "light-component": "#EDEBE8",
        },
        purple: {
          base: "#6919FF",
          hover: "#894AFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-jost)"],
        monos: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
