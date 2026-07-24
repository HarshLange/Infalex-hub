"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
}

export function StaggerChildren({ 
  children, 
  staggerDelay = 0.1, 
  delayChildren = 0,
  ...props 
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delayChildren
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, ...props }: { children: ReactNode } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { type: "spring", stiffness: 400, damping: 30 }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
