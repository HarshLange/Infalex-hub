"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface CardHoverProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  scale?: number;
}

export function CardHover({ children, scale = 1.01, ...props }: CardHoverProps) {
  return (
    <motion.div
      whileHover={{ 
        scale,
        y: -2,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
