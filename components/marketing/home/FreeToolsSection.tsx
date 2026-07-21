"use client";

import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { Badge } from "@/components/ui/Badge";
import { FileSearch, AlignLeft, BarChart } from "lucide-react";

export function FreeToolsSection() {
  const tools = [
    { title: "ATS Checker", desc: "Simulate an ATS parse of your resume.", icon: FileSearch },
    { title: "Resume Formatter", desc: "Auto-fix structure and alignment.", icon: AlignLeft },
    { title: "Keyword Analyzer", desc: "Extract requirements from JDs.", icon: BarChart },
  ];

  return (
    <Section className="py-section-md bg-surface-2 border-y border-border" id="tools">
      <Container>
        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center mb-12">
          <Heading level={2} className="mb-4">Free AI Tools</Heading>
          <p className="text-body text-text-muted max-w-2xl">
            A growing collection of free utilities designed to help developers and professionals optimize their career assets.
          </p>
        </ScrollReveal>

        <Grid className="md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
              <SpotlightCard className="bg-surface border-border flex flex-col items-center text-center p-8 h-full relative group">
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="text-xs border-border/50 text-text-subtle">In Development</Badge>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-text-muted group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300 mb-6">
                  <MotionIcon icon={tool.icon} animation="rotate" className="w-6 h-6" />
                </div>
                <Heading level={4} className="mb-2 text-text group-hover:text-text transition-colors">
                  {tool.title}
                </Heading>
                <p className="text-body-sm text-text-muted group-hover:text-text transition-colors">
                  {tool.desc}
                </p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
