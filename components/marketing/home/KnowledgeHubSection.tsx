"use client";

import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { RevealOnScroll } from "@/components/ui/motion";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Cpu, Briefcase } from "lucide-react";

export function KnowledgeHubSection() {
  const articles = [
    { title: "The Architecture of AI Parsing", category: "Engineering", icon: Cpu },
    { title: "Decoding the Modern ATS", category: "Career Research", icon: Briefcase },
    { title: "Building Scalable AI Tools", category: "Open Source", icon: BookOpen },
  ];

  return (
    <Section className="py-section-md bg-bg border-border" id="knowledge">
      <Container>
        <RevealOnScroll className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Heading level={2} className="mb-4">Knowledge Hub</Heading>
            <p className="text-body text-foreground-muted max-w-lg">
              Deep dives into AI engineering, resume parsing mechanics, and the future of hiring technology.
            </p>
          </div>
          <Badge variant="outline" className="text-foreground-subtle border-border">
            Platform Expanding Soon
          </Badge>
        </RevealOnScroll>

        <Grid className="md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <SpotlightCard className="bg-surface border-border p-8 h-full relative group transition-colors">
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="text-xs border-border/50 bg-bg/50 text-foreground-subtle">Coming Soon</Badge>
                </div>
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-elevated text-foreground-subtle group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300">
                  <MotionIcon icon={article.icon} animation="lift" />
                </div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {article.category}
                </div>
                <Heading level={4} className="text-foreground group-hover:text-foreground transition-colors">
                  {article.title}
                </Heading>
              </SpotlightCard>
            </RevealOnScroll>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
