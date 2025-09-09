/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0f1c',  // Bleu très foncé presque noir
        secondary: '#D4AF37', // Or élégant
        gold: {
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#D4AF37', // Or principal
          600: '#B8941F',
          700: '#9A7A0F',
          800: '#7D6008',
          900: '#5F4604'
        },
        darkblue: {
          50: '#E6E7EA',
          100: '#CDD0D5',
          200: '#9BA1AB',
          300: '#6A7281',
          400: '#384357',
          500: '#0a0f1c', // Bleu très foncé principal
          600: '#080C17',
          700: '#060912',
          800: '#04060D',
          900: '#020308'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      animation: {
        'marquee': 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [],
}