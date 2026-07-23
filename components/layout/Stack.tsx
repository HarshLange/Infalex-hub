import * as React from "react"
import { cn } from "../../lib/utils"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "row" | "col"
  spacing?: "sm" | "md" | "lg" | "xl" | "none"
}

/**
 * Vertical or Horizontal flex stack primitive
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction = "col", spacing = "md", children, ...props }, ref) => {
    const spacingClasses = {
      none: "gap-0",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
      xl: "gap-12",
    }
    return (
      <div
        ref={ref}
        className={cn(
          "flex",
          direction === "col" ? "flex-col" : "flex-row",
          spacingClasses[spacing],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Stack.displayName = "Stack"
