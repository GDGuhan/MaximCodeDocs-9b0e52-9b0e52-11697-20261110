import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#dde6ff',
          200: '#c3d0fc',
          300: '#9db2f9',
          400: '#6e87f4',
          500: '#4a5eee',
          600: '#3341e3',
          700: '#2a33cc',
          800: '#1e2a9e',
          900: '#1a3a6e',
          950: '#0f1f47',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#c9a227',
          800: '#92400e',
          900: '#78350f',
        },
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        certificate: '0 8px 40px rgba(26,58,110,0.18), 0 2px 8px rgba(201,162,39,0.10)',
        card: '0 4px 24px rgba(26,58,110,0.10)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
