import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean;
  interactive?: boolean;
}

/**
 * Premium Card component for data or features, with optional soft gradients and hover effects.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient, interactive = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border-subtle bg-surface-elevated text-foreground shadow-card overflow-hidden transition-all duration-300 ease-out",
        gradient && "bg-gradient-to-b from-surface-elevated to-surface",
        interactive && "hover:shadow-floating hover:-translate-y-1 hover:border-border hover:bg-surface-hover cursor-pointer",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
