/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        carbono: '#0D0D0D',
        grafito: '#3D3D3D',
        crema: '#F5F0E8',
        // Accent tones derived from base — quiet on purpose
        'crema-soft': '#EFE9DF',
        'carbono-soft': '#1A1A1A',
        hairline: 'rgba(13, 13, 13, 0.12)',
        'hairline-inv': 'rgba(245, 240, 232, 0.14)',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'eyebrow': ['0.72rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
      },
      letterSpacing: {
        wordmark: '-0.05em',
      },
      animation: {
        'pulse-dot-1': 'pulseDot 1.4s ease-in-out infinite',
        'pulse-dot-2': 'pulseDot 1.4s ease-in-out 0.2s infinite',
        'pulse-dot-3': 'pulseDot 1.4s ease-in-out 0.4s infinite',
        'wave': 'wave 6s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1.1)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.35)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
