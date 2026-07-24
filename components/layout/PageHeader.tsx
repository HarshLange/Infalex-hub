import * as React from "react"
import { cn } from "../../lib/utils"
import { Container } from "./Container"
import { Heading } from "../ui/Heading"
import { SlideUp, RevealOnScroll } from "../ui/motion"

export interface PageHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
}

/**
 * Unified PageHeader for all internal routes (/blog, /pricing, /about, /legal)
 * Standardizes typography, spacing, and animations to maintain enterprise consistency.
 */
export function PageHeader({ title, description, badge, align = "center", className, children, ...props }: PageHeaderProps) {
  return (
    <header className={cn("pt-40 pb-20 bg-bg relative overflow-hidden", className)} {...props}>
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      <Container className={cn("relative z-10 flex flex-col gap-5", align === "center" ? "items-center text-center" : "items-start text-left")}>
        {badge && (
          <SlideUp delay={0.1}>
            <span className="inline-flex items-center text-[12px] font-semibold tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 px-3.5 py-1.5 rounded-full font-sans mb-4">
              {badge}
            </span>
          </SlideUp>
        )}
        
        <SlideUp delay={0.2}>
          <Heading level={1} className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground font-semibold max-w-4xl text-balance">
            {title}
          </Heading>
        </SlideUp>

        {description && (
          <SlideUp delay={0.3}>
            <p className={cn(
              "text-lg md:text-xl text-foreground-muted leading-relaxed text-balance", 
              align === "center" ? "max-w-2xl mx-auto" : "max-w-3xl"
            )}>
              {description}
            </p>
          </SlideUp>
        )}

        {children && (
          <SlideUp delay={0.4}>
            <div className={cn("mt-6 flex justify-center w-full", align === "left" && "justify-start")}>
              {children}
            </div>
          </SlideUp>
        )}
      </Container>
    </header>
  )
}
