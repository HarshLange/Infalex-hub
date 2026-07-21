import * as React from "react"
import { cn } from "../../lib/utils"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4
}

/**
 * Standardized CSS grid layout.
 */
export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 3, ...props }, ref) => {
    const colsStyles = {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    }

    return (
      <div
        ref={ref}
        className={cn("grid gap-6", colsStyles[cols], className)}
        {...props}
      />
    )
  }
)
Grid.displayName = "Grid"
