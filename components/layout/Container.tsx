import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Standardized max-width container for aligning page content.
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-7xl",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-container-pad sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"
