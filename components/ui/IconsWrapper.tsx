import * as React from "react"
import { cn } from "../../lib/utils"

export interface IconsWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

/**
 * Standardized sizing, color, and background for displaying icons.
 */
export const IconsWrapper = React.forwardRef<HTMLDivElement, IconsWrapperProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8 p-1.5",
      md: "h-12 w-12 p-2.5",
      lg: "h-16 w-16 p-4",
    }

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-accent/10 text-accent",
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
IconsWrapper.displayName = "IconsWrapper"
