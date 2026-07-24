"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Card, CardProps } from "./Card";
import { motion, useReducedMotion } from "framer-motion";

interface SpotlightCardProps extends CardProps {
  spotlightColor?: string;
}

export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ className, spotlightColor = "rgb(var(--accent) / 0.15)", children, ...props }, ref) => {
    const divRef = React.useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [isHovered, setIsHovered] = React.useState(false);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current || prefersReducedMotion) return;
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
      <Card
        ref={(node) => {
          // Assign to both internal and forwarded refs
          (divRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={cn(
          "relative overflow-hidden group transition-all duration-300",
          !prefersReducedMotion && "hover:-translate-y-1 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary/5 hover:border-border-subtle dark:hover:border-primary/30",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Spotlight Effect */}
        {!prefersReducedMotion && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </Card>
    );
  }
);

SpotlightCard.displayName = "SpotlightCard";
