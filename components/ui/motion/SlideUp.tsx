"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { SPRING } from "@/theme/motion";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}

export function SlideUp({ children, delay = 0, yOffset = 20, ...props }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...SPRING.stiff, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
