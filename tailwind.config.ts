import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#4338ca"
        }
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(96, 165, 250, 0.12), 0 24px 120px rgba(37, 99, 235, 0.18)"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)"
      }
    }
  },
  plugins: []
};

export default config;
