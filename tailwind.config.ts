import type { Config } from "tailwindcss";
import {
  colors,
  typography,
  spacing,
  radius,
  shadows,
  gradients,
  opacity,
  blur,
  motion,
  layout,
  constants
} from "./theme";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
        neutral: colors.neutral,
        success: colors.success,
        warning: colors.warning,
        danger: colors.danger,
        info: colors.info,
        bg: colors.bg,
        bg2: colors.bg2,
        surface: colors.surface,
        'surface-2': colors['surface-2'],
        'surface-hover': colors['surface-hover'],
        text: colors.text,
        'text-muted': colors['text-muted'],
        'text-subtle': colors['text-subtle'],
        border: colors.border,
        border2: colors.border2,
        accent: colors.accent,
        'accent-glow': colors['accent-glow'],
        accent2: colors.accent2,
      },
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize as any,
      spacing: spacing,
      borderRadius: radius,
      boxShadow: shadows,
      backgroundImage: gradients,
      opacity: opacity,
      blur: blur,
      transitionDuration: motion.duration,
      transitionTimingFunction: motion.easing,
      zIndex: layout.zIndex,
      screens: layout.breakpoints,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;