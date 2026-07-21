"use client";

import * as React from "react";
import { motion, useReducedMotion, TargetAndTransition, HTMLMotionProps } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";

interface MotionIconProps extends HTMLMotionProps<"div"> {
  icon: LucideIcon;
  animation?: "slideRight" | "rotate" | "pulse" | "lift" | "grow";
  iconClassName?: string;
}

export function MotionIcon({
  icon: Icon,
  animation = "slideRight",
  className,
  iconClassName,
  ...props
}: MotionIconProps) {
  const prefersReducedMotion = useReducedMotion();

  const animations: Record<string, TargetAndTransition> = {
    slideRight: { x: 4 },
    rotate: { rotate: 15 },
    pulse: { scale: [1, 1.1, 1] },
    lift: { y: -2 },
    grow: { scale: 1.1 },
  };

  const hoverAnimation = prefersReducedMotion ? {} : animations[animation];
  const isPulse = animation === "pulse";

  return (
    <motion.div
      className={cn("inline-flex", className)}
      whileHover={hoverAnimation as any}
      transition={isPulse ? { type: "tween", duration: 0.3 } : { type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      <Icon className={iconClassName} />
    </motion.div>
  );
}
