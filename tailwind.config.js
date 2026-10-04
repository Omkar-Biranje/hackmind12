/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other paths that contain Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        // Premium SaaS Palette
        brand: {
          darkest: "#050A18", // Deep charcoal/navy foundation
          dark: "#0A0F1E",     // Main background
          muted: "#111827",    // Surface/Card background
          accent: "#06B6D4",   // Electric Cyan (Primary)
          highlight: "#3B82F6", // Electric Blue (Secondary)
          border: "rgba(255, 255, 255, 0.1)",
        },
        surface: {
          glass: "rgba(10, 15, 30, 0.7)",
          glassBorder: "rgba(255, 255, 255, 0.08)",
        }
      },
      borderRadius: {
        'premium': '12px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'premium-glow': 'radial-gradient(circle at center, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
