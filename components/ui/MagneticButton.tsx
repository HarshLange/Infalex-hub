"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button, ButtonProps } from "./Button";
import { cn } from "../../lib/utils";

export const MagneticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current || prefersReducedMotion) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      // Subtle magnetism (divisor controls strength, higher = weaker)
      setPosition({ x: middleX / 8, y: middleY / 8 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
      <motion.div
        className="inline-block"
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      >
        <Button
          ref={(node) => {
            (buttonRef as React.MutableRefObject<HTMLButtonElement | null>).current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
          }}
          className={cn("relative overflow-hidden group", className)}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          {...props}
        >
          {/* Subtle background glow element */}
          <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </Button>
      </motion.div>
    );
  }
);
MagneticButton.displayName = "MagneticButton";
