import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "primary" | "danger" | "success"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * Enterprise Button component with premium hover and active transitions.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-surface-elevated text-foreground border border-border hover:bg-surface-hover shadow-sm hover:shadow-card",
      primary: "bg-gradient-to-r from-primary to-indigo-600 text-white shadow-sm hover:shadow-md hover:brightness-110 hover:scale-[1.01] border border-transparent",
      secondary: "bg-surface-elevated text-foreground border border-transparent hover:bg-surface-hover hover:border-border-subtle shadow-sm",
      outline: "border border-border bg-transparent hover:bg-surface-hover text-foreground shadow-sm hover:shadow-card",
      ghost: "bg-transparent hover:bg-surface-hover text-foreground",
      link: "bg-transparent underline-offset-4 hover:underline text-primary transition-colors",
      danger: "bg-danger text-white hover:brightness-110 shadow-sm border border-transparent",
      success: "bg-success text-white hover:brightness-110 shadow-sm border border-transparent",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3 text-sm",
      lg: "h-12 rounded-lg px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-button font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] group",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
          {children}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
