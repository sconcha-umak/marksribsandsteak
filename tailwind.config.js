/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Option 1: Steakhouse theme (browns and oranges)
        primary: '#f97316', // orange
        secondary: '#1e40af', // dark brown
        accent: '#dc2626', // red
        
        // Option 2: Modern blue theme (uncomment to use)
        // primary: '#3b82f6', // blue
        // secondary: '#1e40af', // dark blue
        // accent: '#06b6d4', // cyan
        
        // Option 3: Green nature theme (uncomment to use)
        // primary: '#10b981', // emerald
        // secondary: '#065f46', // dark green
        // accent: '#059669', // green
        
        // Option 4: Purple luxury theme (uncomment to use)
        // primary: '#a855f7', // purple
        // secondary: '#581c87', // dark purple
        // accent: '#c026d3', // magenta
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-up-delay': 'fade-in-up 0.8s ease-out 0.2s',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [],
}