"use client";

import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { RevealOnScroll } from "@/components/ui/motion";

export function NewsletterSection() {
  return (
    <Section className="py-section-lg relative overflow-hidden" id="newsletter">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-brand-radial blur-[120px] opacity-20 -z-10 pointer-events-none" />
      
      <Container className="text-center relative z-10">
        <RevealOnScroll >
          <Heading level={2} className="mb-4">Ready to upgrade your career?</Heading>
        </RevealOnScroll>
        
        <RevealOnScroll  delay={0.1}>
          <p className="text-body-lg text-foreground-muted max-w-2xl mx-auto mb-10">
            Join early users testing Resumetra and exploring the Infalex ecosystem. Get early access to new AI tools before they launch.
          </p>
        </RevealOnScroll>
        
        <RevealOnScroll  delay={0.2}>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto relative group">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-surface/50 backdrop-blur-md border border-border rounded-xl px-6 py-4 text-body text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-foreground-subtle hover:border-border/80"
              required
            />
            <MagneticButton variant="primary" size="lg" className="w-full sm:w-auto shrink-0 py-4 px-8 rounded-xl">
              Join Waitlist
            </MagneticButton>
          </form>
        </RevealOnScroll>
      </Container>
    </Section>
  );
}
