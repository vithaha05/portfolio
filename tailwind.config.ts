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
        bg: "#0a0a0f",
        surface: "#111118",
        primary: "#7C6FF7",
        teal: "#2DD4A0",
        "text-primary": "#F0EFF8",
        muted: "#888899",
        border: "rgba(255,255,255,0.07)",
      },
    },
  },
  plugins: [],
};
export default config;
