"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";
import { SPRING } from "@/theme/motion";

interface RevealOnScrollProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  once?: boolean;
}

export function RevealOnScroll({ 
  children, 
  delay = 0, 
  yOffset = 30, 
  once = true,
  ...props 
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ ...SPRING.stiff, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
