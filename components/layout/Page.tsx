import * as React from "react"
import { cn } from "../../lib/utils"

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

/**
 * Global Page primitive to wrap route content.
 * Prepared for future route transition animations.
 */
export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col min-h-screen w-full flex-grow", className)}
      {...props}
    >
      {children}
    </div>
  )
)
Page.displayName = "Page"
