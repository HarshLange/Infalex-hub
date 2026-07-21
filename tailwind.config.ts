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
        background: colors.background,
        surface: colors.surface,
        'surface-2': colors['surface-2'],
        accent: 'var(--accent)',
        'accent-glow': 'var(--accent-glow)',
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