import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
}

/**
 * Premium Card component for data or features, with optional soft gradients.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl border border-border bg-surface text-text shadow-sm overflow-hidden",
        gradient && "glass-card",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
