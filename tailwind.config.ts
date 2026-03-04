import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17181C",
        slate: "#5A5E68",
        mist: "#E8E6E1",
        warm: "#F5F3EF",
        line: "#D7D2C8",
        coal: {
          950: "#0D0D0F",
          900: "#111114",
          800: "#1A1A1F",
          700: "#25262D"
        },
        amber: {
          DEFAULT: "#C9A84C",
          dark: "#AE8E35"
        },
        brand: {
          DEFAULT: "#D93E3E",
          dark: "#BC2E2E"
        }
      },
      boxShadow: {
        soft: "0 22px 40px -28px rgba(10, 10, 15, 0.72)",
        glow: "0 0 0 1px rgba(217, 62, 62, 0.35), 0 20px 36px -28px rgba(217, 62, 62, 0.6)",
        card: "0 16px 35px -24px rgba(10, 10, 15, 0.85)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.4rem"
      }
    }
  },
  plugins: []
};

export default config;
