export const colors = {
  // Neutral foundation (Zinc scale)
  neutral: {
    50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa',
    500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b',
    black: '#000000', white: '#ffffff',
  },
  
  // Brand foundation (Blue/Indigo)
  brand: {
    50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa',
    500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554',
  },

  // Semantic surfaces
  bg: 'rgb(var(--bg) / <alpha-value>)',
  bg2: 'rgb(var(--bg2) / <alpha-value>)',
  surface: 'rgb(var(--surface) / <alpha-value>)',
  'surface-elevated': 'rgb(var(--surface-elevated) / <alpha-value>)',
  'surface-floating': 'rgb(var(--surface-floating) / <alpha-value>)',
  'surface-glass': 'rgb(var(--surface-glass) / <alpha-value>)',
  'surface-hover': 'rgb(var(--surface-hover) / <alpha-value>)',
  
  // Typography
  foreground: 'rgb(var(--foreground) / <alpha-value>)',
  'foreground-secondary': 'rgb(var(--foreground-secondary) / <alpha-value>)',
  'foreground-muted': 'rgb(var(--foreground-muted) / <alpha-value>)',
  'foreground-subtle': 'rgb(var(--foreground-subtle) / <alpha-value>)',
  
  // Text aliases for backward compatibility and semantic naming
  text: 'rgb(var(--foreground) / <alpha-value>)',
  'text-secondary': 'rgb(var(--foreground-secondary) / <alpha-value>)',
  'text-muted': 'rgb(var(--foreground-muted) / <alpha-value>)',
  'text-subtle': 'rgb(var(--foreground-subtle) / <alpha-value>)',
  
  // Borders
  border: 'rgb(var(--border) / <alpha-value>)',
  'border-subtle': 'rgb(var(--border-subtle) / <alpha-value>)',
  'border-strong': 'rgb(var(--border-strong) / <alpha-value>)',
  border2: 'rgb(var(--border-strong) / <alpha-value>)', // backward compat
  
  // Semantic Accents
  primary: 'rgb(var(--primary) / <alpha-value>)',
  secondary: 'rgb(var(--secondary) / <alpha-value>)',
  accent: 'rgb(var(--accent) / <alpha-value>)',
  'accent-glow': 'rgb(var(--accent-glow) / <alpha-value>)',
  
  // Aliases for backward compat
  accent2: 'rgb(var(--secondary) / <alpha-value>)',
  
  // Status
  success: 'rgb(var(--success) / <alpha-value>)', 
  warning: 'rgb(var(--warning) / <alpha-value>)', 
  danger: 'rgb(var(--danger) / <alpha-value>)', 
  info: 'rgb(var(--info) / <alpha-value>)',
};