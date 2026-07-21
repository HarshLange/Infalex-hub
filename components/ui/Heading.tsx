import * as React from "react"
import { cn } from "../../lib/utils"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  as?: React.ElementType
}

/**
 * Typography wrapper mapping to the typography scale.
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 2, as, ...props }, ref) => {
    const Component = as || (`h${level}` as React.ElementType)
    
    const styles = {
      1: "text-h1 font-bold tracking-tight",
      2: "text-h2 font-semibold tracking-tight",
      3: "text-h3 font-semibold",
      4: "text-body-lg font-medium",
      5: "text-body font-medium",
      6: "text-body-sm font-medium",
    }

    return (
      <Component
        ref={ref}
        className={cn(styles[level], className)}
        {...props}
      />
    )
  }
)
Heading.displayName = "Heading"
