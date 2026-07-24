export const typography = {
  fontFamily: {
    sans: ['var(--font-figtree)', 'var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
  },
  fontSize: {
    // 64-72px desktop
    'hero': ['clamp(3.5rem, 5vw + 1rem, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
    // 48-56px
    'display': ['clamp(2.5rem, 4vw + 1rem, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
    // 36-42px
    'h1': ['clamp(2rem, 3vw + 1rem, 2.625rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
    // 30-36px
    'h2': ['clamp(1.75rem, 2vw + 1rem, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
    // 22-26px (Cards)
    'h3': ['clamp(1.25rem, 1.5vw + 1rem, 1.625rem)', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    
    // Body 16-18px
    'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
    'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
    'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
    'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.02em' }],
    
    // UI elements
    'button': ['0.875rem', { lineHeight: '1.5', fontWeight: '500', letterSpacing: '0.01em' }],
    'label': ['0.875rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.01em' }],
    'code': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0' }],
  },
};