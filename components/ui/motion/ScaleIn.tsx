"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { SPRING } from "@/theme/motion";

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  initialScale?: number;
}

export function ScaleIn({ children, delay = 0, initialScale = 0.95, ...props }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ...SPRING.stiff, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
