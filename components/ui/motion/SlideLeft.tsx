"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { SPRING } from "@/theme/motion";

interface SlideLeftProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  xOffset?: number;
}

export function SlideLeft({ children, delay = 0, xOffset = 20, ...props }: SlideLeftProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ...SPRING.stiff, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
