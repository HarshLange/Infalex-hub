import * as React from "react"
import { cn } from "../../lib/utils"
import { Container } from "./Container"
import { Heading } from "../ui/Heading"

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

/**
 * Reusable PageHeader for sub-routes like /blog, /pricing, /about
 */
export function PageHeader({ title, description, className, ...props }: PageHeaderProps) {
  return (
    <header className={cn("pt-32 pb-16 bg-bg border-b border-border", className)} {...props}>
      <Container className="flex flex-col items-start gap-4">
        <Heading level={1} className="text-4xl md:text-5xl">{title}</Heading>
        {description && <p className="text-lg text-text-muted max-w-2xl">{description}</p>}
      </Container>
    </header>
  )
}
