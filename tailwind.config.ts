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
        ivory: "#FAF8F2",
        "warm-white": "#FFF9F0",
        "soft-gold": "#C9A227",
        "deep-gold": "#A07D10",
        champagne: "#E8D5A3",
        "light-champagne": "#F5EDD4",
        maroon: "#6B1A2A",
        "text-dark": "#2C1810",
        "text-mid": "#5C4033",
        "text-light": "#8B7355",
        "petal-pink": "#F2D2C8",
        "lotus-pink": "#E8A0A0",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        playfair: ["var(--font-playfair)", "serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-med": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "petal-fall-1": "petalFall1 12s linear infinite",
        "petal-fall-2": "petalFall2 15s linear infinite",
        "petal-fall-3": "petalFall3 10s linear infinite",
        "petal-fall-4": "petalFall4 18s linear infinite",
        "petal-fall-5": "petalFall5 13s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        petalFall1: {
          "0%": { transform: "translateY(-10px) translateX(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "90%": { opacity: "0.5" },
          "100%": { transform: "translateY(100vh) translateX(100px) rotate(360deg)", opacity: "0" },
        },
        petalFall2: {
          "0%": { transform: "translateY(-10px) translateX(0) rotate(45deg)", opacity: "0" },
          "10%": { opacity: "0.6" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(100vh) translateX(-80px) rotate(-270deg)", opacity: "0" },
        },
        petalFall3: {
          "0%": { transform: "translateY(-10px) translateX(0) rotate(90deg)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.3" },
          "100%": { transform: "translateY(100vh) translateX(60px) rotate(180deg)", opacity: "0" },
        },
        petalFall4: {
          "0%": { transform: "translateY(-10px) translateX(0) rotate(20deg)", opacity: "0" },
          "10%": { opacity: "0.5" },
          "100%": { transform: "translateY(100vh) translateX(-120px) rotate(400deg)", opacity: "0" },
        },
        petalFall5: {
          "0%": { transform: "translateY(-10px) translateX(0) rotate(-30deg)", opacity: "0" },
          "10%": { opacity: "0.7" },
          "100%": { transform: "translateY(100vh) translateX(90px) rotate(-200deg)", opacity: "0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E8D5A3 50%, #C9A227 100%)",
        "ivory-gradient": "linear-gradient(180deg, #FAF8F2 0%, #FFF9F0 100%)",
        "mandala-overlay": "radial-gradient(ellipse at center, transparent 40%, rgba(201,162,39,0.05) 100%)",
      },
      boxShadow: {
        gold: "0 4px 20px rgba(201, 162, 39, 0.3)",
        "gold-lg": "0 8px 40px rgba(201, 162, 39, 0.25)",
        elegant: "0 2px 30px rgba(44, 24, 16, 0.1)",
        "elegant-lg": "0 8px 60px rgba(44, 24, 16, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
