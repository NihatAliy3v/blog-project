import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1DA1F2",
      secondary: "#14171A",
      accent: "#FFAD1F",
      background: "#F5F8FA",
      text: "#657786",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      fontSize: {
        xs: ".75rem", // 12px
        sm: ".875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
    container: {
      center: true, // Containerin ortalanması
      screens: {
        xs: "400px",
        sm: "500px", // Small screens üçün (640px-dən yuxarı)
        md: "700px", // Medium screens üçün (768px-dən yuxarı)
        lg: "900px", // Large screens üçün (1024px-dən yuxarı)
        xl: "1200px", // Extra large screens üçün (1280px-dən yuxarı)
        "2xl": "1400px", // 2x Extra large screens üçün (1536px-dən yuxarı)
      },
    },
  },
  plugins: [lineClamp],
};
