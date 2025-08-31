/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#1F4E79',    // Dark Blue
          light: '#4A7BA8',     // Lighter Blue
          dark: '#0F2A42',      // Darker Blue
        },
        // Accent Colors
        accent: {
          red: '#E63946',       // Red
          yellow: '#F4A300',    // Yellow
          green: '#2CA24D',     // Green
        },
        // Text Colors
        text: {
          primary: '#2D3748',   // Dark Gray
          secondary: '#4A5568', // Medium Gray
          light: '#F7FAFC',     // Off White
        },
        // Background Colors
        background: {
          light: '#F8F9FA',     // Light Gray
          dark: '#1A202C',      // Dark Background
        },
        // Status Colors
        status: {
          success: '#2CA24D',   // Green
          warning: '#F4A300',   // Yellow
          error: '#E63946',     // Red
          info: '#1F4E79',      // Blue
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1F4E79 0%, #4A7BA8 100%)',
        'gradient-accent': 'linear-gradient(135deg, #E63946 0%, #F4A300 100%)',
        'gradient-success': 'linear-gradient(135deg, #2CA24D 0%, #4CAF50 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
