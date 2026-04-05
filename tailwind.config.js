/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0A0A0A',
        'bg-dark-card': '#141414',
        'bg-light': '#1A1A1A',
        'bg-card': '#1A1A1A',
        'accent': '#E2CE9E',
        'accent-dim': '#B99B66',
        'text-white': '#F5F5F5',
        'text-dark': '#EEEEEE',
        'text-body': '#A3A3A3',
        'text-muted': '#7A7A7A',
        'text-subtle': '#555555',
        'warning': '#FF5C5C',
        'success': '#D0BC93',
        'pending': '#D4AF37',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #E2CE9E 0%, #B99B66 100%)',
        'gradient-gold-text': 'linear-gradient(180deg, #FFFFFF 0%, #D0BC93 100%)',
      }
    },
  },
  plugins: [],
}
