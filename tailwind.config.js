/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        urban: {
          100: "#f3f4f6",
          300: "#cbd5e1",
          500: "#64748b",
          700: "#1e293b",
          900: "#0f172a",
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out both",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
