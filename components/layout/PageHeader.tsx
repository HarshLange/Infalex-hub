import * as React from "react"
import { cn } from "../../lib/utils"
import { Container } from "./Container"
import { Heading } from "../ui/Heading"

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: string;
  badge?: string;
  align?: "left" | "center";
}

/**
 * Reusable PageHeader for sub-routes like /blog, /pricing, /about
 */
export function PageHeader({ title, description, badge, align = "left", className, ...props }: PageHeaderProps) {
  return (
    <header className={cn("pt-32 pb-16 bg-bg border-b border-border", className)} {...props}>
      <Container className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left")}>
        {badge && (
          <span className="text-[11px] font-semibold tracking-wider uppercase bg-accent/10 text-accent border border-accent/20 px-3 py-1 rounded-full font-sans mb-2">
            {badge}
          </span>
        )}
        <Heading level={1} className="text-4xl md:text-5xl">{title}</Heading>
        {description && <p className={cn("text-lg text-text-muted", align === "center" ? "max-w-2xl" : "max-w-3xl")}>{description}</p>}
      </Container>
    </header>
  )
}
