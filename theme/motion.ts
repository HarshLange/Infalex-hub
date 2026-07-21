import { Variants } from "framer-motion";

export const motion = {
  duration: {
    fast: '200ms',
    normal: '400ms',
    slow: '800ms',
    'very-slow': '1200ms',
  },
  easing: {
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    linear: 'linear',
    'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
  }
};

export const EASING = {
  smooth: [0.25, 0.1, 0.25, 1],
  bounce: [0.175, 0.885, 0.32, 1.275],
  linear: [0, 0, 1, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
};

export const SPRING = {
  stiff: { type: "spring" as const, stiffness: 400, damping: 30 },
  bouncy: { type: "spring" as const, stiffness: 400, damping: 20 },
  slow: { type: "spring" as const, stiffness: 200, damping: 30 },
};

export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.8,
  verySlow: 1.2,
};

export const motionVariants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING.stiff } }
  },
  fadeDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING.stiff } }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { ...SPRING.stiff } }
  },
  fadeRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { ...SPRING.stiff } }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { ...SPRING.stiff } }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  item: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { ...SPRING.stiff } }
  }
};