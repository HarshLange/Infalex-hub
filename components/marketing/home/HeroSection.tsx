"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Container, Section } from "@/components/layout";
import { Users, Code, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { SlideUp, StaggerChildren, FadeIn, RevealOnScroll } from "@/components/ui/motion";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-28 pb-24 text-center min-h-[90vh] flex flex-col justify-center" id="hero">
      <AnimatedBackground />
      
      <Container className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <StaggerChildren staggerDelay={0.15}>
          
          <SlideUp>
            <div className="mb-8">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-1.5 text-sm backdrop-blur-md">
                Infalex Ecosystem v1.0
              </Badge>
            </div>
          </SlideUp>
          
          <SlideUp>
            <Heading level={1} className="mb-6 text-balance text-hero tracking-tight">
              Intelligence for the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
                modern career.
              </span>
            </Heading>
          </SlideUp>
          
          <SlideUp>
            <p className="text-body-lg text-foreground-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Infalex is a premium ecosystem of AI utilities designed to give you an unfair advantage in the job market. Not just a tool, but a platform for your entire career journey.
            </p>
          </SlideUp>
          
          <SlideUp>
            <div className="relative mt-2">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" onClick={() => window.open('https://resumetra.infalex.com', '_blank')}>
                  Explore Ecosystem
                  <Zap className="ml-1 w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-surface-glass backdrop-blur-md" onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}>
                  Read Our Vision
                </Button>
              </div>
            </div>
          </SlideUp>

        </StaggerChildren>

        <FadeIn delay={0.8}>
          <div className="mt-24 pt-10 border-t border-border-subtle w-full grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-70">
            <div className="flex items-center justify-center gap-3 group">
              <Users className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
              <span className="text-body-sm font-medium text-foreground-muted">10k+ Early Users</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <Zap className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
              <span className="text-body-sm font-medium text-foreground-muted">Sub-second AI Inference</span>
            </div>
            <div className="flex items-center justify-center gap-3 group">
              <Code className="w-5 h-5 text-foreground-muted group-hover:text-primary transition-colors" />
              <span className="text-body-sm font-medium text-foreground-muted">Modern Architecture</span>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
