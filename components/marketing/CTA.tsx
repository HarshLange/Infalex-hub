import * as React from "react"
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
