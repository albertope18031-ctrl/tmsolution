import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "tm-primary": "#0F2D59",
        "tm-primary-hover": "#0A1F3D",
        "tm-neutral-light": "#F4F6F9",
        "tm-neutral-dark": "#1F242E",
        "tm-white": "#FFFFFF",
        "tm-accent": "#25D366",
        "tm-gray-sub": "#5A6578",
        "tm-border": "#E5E7EB",
        "tm-border-light": "#F0F2F5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-montserrat)", "system-ui", "-apple-system", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "7xl": "1280px",
      },
      boxShadow: {
        "tm-header": "0 4px 14px rgba(15, 45, 89, 0.08)",
        "tm-drawer": "0 10px 20px rgba(0, 0, 0, 0.08)",
        "tm-cta": "0 4px 10px rgba(15, 45, 89, 0.15)",
      },
      height: {
        "header-desktop": "80px",
        "header-mobile": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
