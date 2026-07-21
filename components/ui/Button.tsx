import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * Enterprise Button component with premium hover transitions.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-accent text-white shadow-glow hover:shadow-[0_0_32px_rgba(var(--accent-glow),0.4)] border border-transparent hover:border-accent/50 hover:bg-accent hover:-translate-y-[1px]",
      secondary: "bg-surface border border-border2 text-text hover:bg-surface-hover hover:-translate-y-[1px] shadow-sm hover:shadow-md hover:border-border",
      outline: "border border-border2 bg-transparent hover:bg-surface-hover text-text hover:-translate-y-[1px] shadow-sm hover:shadow-md hover:border-border",
      ghost: "bg-transparent hover:bg-surface-hover text-text hover:-translate-y-[1px]",
      link: "bg-transparent underline-offset-4 hover:underline text-text hover:text-accent transition-colors",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-button font-medium transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 group",
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
