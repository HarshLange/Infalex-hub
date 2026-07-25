const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\\\Infalex\\\\infalex-hub';

const files = {
  'components/ui/Button.tsx': `import * as React from "react"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

/**
 * Enterprise Button component with multiple variants.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default: "bg-accent text-white hover:bg-accent/90 shadow-glow",
      secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
      outline: "border border-border bg-transparent hover:bg-surface text-text",
      ghost: "bg-transparent hover:bg-surface text-text",
      link: "bg-transparent underline-offset-4 hover:underline text-text",
    }

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-button font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
`,
  'components/ui/Card.tsx': `import * as React from "react"
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
`,
  'components/ui/Badge.tsx': `import * as React from "react"
import { cn } from "../../lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "danger" | "outline"
}

/**
 * Small visual indicator badge.
 */
function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-accent/10 text-accent border-accent/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    danger: "bg-danger/10 text-danger border-danger/20",
    outline: "text-text border-border",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-caption font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
`,
  'components/ui/Heading.tsx': `import * as React from "react"
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
    const Component = as || (\`h\${level}\` as React.ElementType)
    
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
`,
  'components/ui/IconsWrapper.tsx': `import * as React from "react"
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
`,
  'components/layout/Container.tsx': `import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Standardized max-width container for aligning page content.
 */
export const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-7xl px-container-pad sm:px-6 lg:px-8",
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"
`,
  'components/layout/Section.tsx': `import * as React from "react"
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
`,
  'components/layout/Grid.tsx': `import * as React from "react"
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
`,
  'components/marketing/CTA.tsx': `import * as React from "react"
import { cn } from "../../lib/utils"
import { Container } from "../layout/Container"
import { Heading } from "../ui/Heading"
import { Button } from "../ui/Button"

export interface CTAProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  buttonText: string
  onAction?: () => void
}

/**
 * Reusable Call to Action block.
 */
export const CTA = React.forwardRef<HTMLDivElement, CTAProps>(
  ({ className, title, description, buttonText, onAction, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative py-24 overflow-hidden", className)} {...props}>
        {/* Background elements */}
        <div className="absolute inset-0 bg-surface-2 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-brand-radial blur-3xl opacity-30 -z-10 pointer-events-none" />
        
        <Container className="text-center relative z-10">
          <Heading level={2} className="mb-6 text-white">{title}</Heading>
          {description && (
            <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto mb-10">
              {description}
            </p>
          )}
          <Button size="lg" onClick={onAction}>
            {buttonText}
          </Button>
        </Container>
      </div>
    )
  }
)
CTA.displayName = "CTA"
`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(baseDir, name), content.trim() + '\\n');
}
console.log('Components created.');
