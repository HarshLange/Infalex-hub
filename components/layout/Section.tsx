import * as React from "react"
import { cn } from "../../lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg"
}

/**
 * Standardized vertical spacing block.
 */
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", ...props }, ref) => {
    const spacingStyles = {
      sm: "py-section-sm",
      md: "py-section-md",
      lg: "py-section-lg",
    }

    return (
      <section
        ref={ref}
        className={cn("w-full relative", spacingStyles[spacing], className)}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"
