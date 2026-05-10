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
        bg: "#0f0e0c",
        bg2: "#161410",
        surface: "#1e1b16",
        surface2: "#252018",
        accent: "#F59E0B",
        accent2: "#F97316",
        accent3: "#FCD34D",
        text: "#F5F0E8",
        muted: "#9A8F7E",
        border: "rgba(245, 158, 11, 0.12)",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.4)", opacity: "0.3" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounce: "bounce 0.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
