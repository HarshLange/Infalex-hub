const fs = require('fs');
const path = require('path');

const themeDir = path.join(__dirname, 'theme');
if (!fs.existsSync(themeDir)) {
  fs.mkdirSync(themeDir, { recursive: true });
}

const files = {
  'colors.ts': `export const colors = {
  brand: {
    50: '#eff4ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
    500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
  },
  neutral: {
    50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8',
    500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617',
    black: '#000000', white: '#ffffff',
  },
  success: '#10b981', warning: '#f59e0b', danger: '#ef4444', info: '#3b82f6',
  background: 'var(--bg)', surface: 'var(--surface)', 'surface-2': 'var(--surface2)',
};`,
  'typography.ts': `export const typography = {
  fontFamily: {
    sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
  },
  fontSize: {
    'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
    'hero': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
    'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
    'h2': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
    'h3': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
    'body-lg': ['1.125rem', { lineHeight: '1.6' }],
    'body': ['1rem', { lineHeight: '1.6' }],
    'body-sm': ['0.875rem', { lineHeight: '1.5' }],
    'caption': ['0.75rem', { lineHeight: '1.5' }],
    'button': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
  },
};`,
  'spacing.ts': `export const spacing = {
  'section-sm': '4rem', 'section-md': '8rem', 'section-lg': '12rem',
  'container-pad': '1.5rem',
  '4xs': '0.125rem', '3xs': '0.25rem', '2xs': '0.375rem', 'xs': '0.5rem',
  'sm': '0.75rem', 'md': '1rem', 'lg': '1.5rem', 'xl': '2rem',
  '2xl': '3rem', '3xl': '4rem', '4xl': '6rem',
};`,
  'radius.ts': `export const radius = {
  none: '0', sm: '0.25rem', md: '0.375rem', lg: '0.5rem', xl: '0.75rem',
  '2xl': '1rem', '3xl': '1.5rem', full: '9999px',
};`,
  'shadows.ts': `export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  none: 'none',
  glow: '0 0 20px rgba(59, 130, 246, 0.5)',
  'glow-lg': '0 0 40px rgba(59, 130, 246, 0.5)',
};`,
  'gradients.ts': `export const gradients = {
  'brand-radial': 'radial-gradient(circle at center, var(--accent-glow) 0%, transparent 70%)',
  'surface-linear': 'linear-gradient(180deg, var(--surface) 0%, var(--bg) 100%)',
  'border-glow': 'linear-gradient(90deg, transparent, var(--accent), transparent)',
};`,
  'opacity.ts': `export const opacity = {
  0: '0', 5: '0.05', 10: '0.1', 20: '0.2', 25: '0.25', 30: '0.3', 40: '0.4',
  50: '0.5', 60: '0.6', 70: '0.7', 75: '0.75', 80: '0.8', 90: '0.9', 95: '0.95', 100: '1',
};`,
  'blur.ts': `export const blur = {
  none: '0', sm: '4px', DEFAULT: '8px', md: '12px', lg: '16px', xl: '24px', '2xl': '40px', '3xl': '64px',
};`,
  'motion.ts': `export const motion = {
  duration: { fast: '150ms', normal: '300ms', slow: '500ms', verySlow: '1000ms' },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)', linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)', out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)', spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }
};`,
  'layout.ts': `export const layout = {
  containerWidths: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
  zIndex: { hide: '-1', auto: 'auto', base: '0', content: '10', overlay: '50', modal: '100', toast: '9999' }
};`,
  'constants.ts': `export const constants = {
  navbarHeight: '80px', heroHeight: 'min(100vh, 900px)', gridGap: '1.5rem', cardRadius: '1rem',
};`,
  'index.ts': `export * from './colors';
export * from './typography';
export * from './spacing';
export * from './motion';
export * from './layout';
export * from './radius';
export * from './shadows';
export * from './gradients';
export * from './opacity';
export * from './blur';
export * from './constants';`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(themeDir, name), content);
}
console.log('Theme directory and modules created successfully.');
