"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface FloatingProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  duration?: number;
  yOffset?: number;
}

export function Floating({ children, duration = 4, yOffset = 10, ...props }: FloatingProps) {
  return (
    <motion.div
      animate={{ 
        y: [0, -yOffset, 0],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
