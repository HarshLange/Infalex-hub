"use client";

import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { RevealOnScroll } from "@/components/ui/motion";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { Lock, Zap, Cpu, Code2 } from "lucide-react";

export function TrustSection() {
  const principles = [
    {
      title: "Privacy-First Architecture",
      desc: "Your data is yours. We process documents securely and do not use personal resumes to train global public models without explicit consent.",
      icon: Lock,
      anim: "lift"
    },
    {
      title: "Performance Optimized",
      desc: "Built on edge infrastructure. Expect sub-second analysis turnaround times and a lightning-fast interface powered by Next.js.",
      icon: Zap,
      anim: "pulse"
    },
    {
      title: "AI-Native Intelligence",
      desc: "We don't just wrap ChatGPT. We orchestrate specialized parsing engines and fine-tuned models specifically for career semantics.",
      icon: Cpu,
      anim: "rotate"
    },
    {
      title: "Modern Engineering",
      desc: "Developed with strict TypeScript, modular Design Systems, and best-in-class open source technologies for ultimate reliability.",
      icon: Code2,
      anim: "slideRight"
    },
  ];

  return (
    <Section className="py-section-lg bg-bg" id="trust">
      <Container>
        <RevealOnScroll  className="text-center mb-16">
          <Heading level={2} className="mb-4">Why Trust Infalex</Heading>
          <p className="text-body-lg text-foreground-muted max-w-2xl mx-auto">
            We are engineers building for engineers and professionals. Our entire ecosystem is rooted in strict principles of quality, speed, and privacy.
          </p>
        </RevealOnScroll>

        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, i) => (
            <RevealOnScroll key={i}  delay={i * 0.1}>
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left group cursor-default">
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-border text-foreground-muted group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                  <MotionIcon icon={principle.icon} animation={principle.anim as any} className="w-5 h-5" />
                </div>
                <Heading level={4} className="mb-3 text-foreground group-hover:text-foreground transition-colors">
                  {principle.title}
                </Heading>
                <p className="text-body-sm text-foreground-muted group-hover:text-foreground transition-colors">
                  {principle.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
