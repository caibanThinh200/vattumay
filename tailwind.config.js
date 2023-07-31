/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "begonia-gradient": "linear-gradient(131deg, #F96C7F 0%, #B42A3D 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "bright-gray": "#E5E7EB",
        "anti-flash-white": "#F3F4F6",
        "auto-metal-saurus": "#6B7280",
        begonia: "#F96C7F",
        lotion: "#FDFDFD",
        "ghost-white": "#F9FAFB",
        charcoal: "#374151",
      },
    },
  },
  plugins: [],
};
