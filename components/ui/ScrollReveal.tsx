"use client";

import * as React from "react";
import { motion, useReducedMotion, HTMLMotionProps } from "framer-motion";
import { motionVariants } from "../../theme/motion";
import { cn } from "../../lib/utils";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp";
  delay?: number;
}

export const ScrollReveal = React.forwardRef<HTMLDivElement, ScrollRevealProps>(
  ({ children, animation = "fadeUp", delay = 0, className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();

    const variants = prefersReducedMotion 
      ? {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5, delay } }
        }
      : {
          ...motionVariants[animation],
          visible: {
            ...(motionVariants[animation].visible as any),
            transition: { ...(motionVariants[animation].visible as any)?.transition, delay }
          }
        };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants as any}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
ScrollReveal.displayName = "ScrollReveal";
