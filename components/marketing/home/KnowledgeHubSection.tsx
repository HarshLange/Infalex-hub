"use client";

import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <Section className="py-section-md bg-bg border-t border-border" id="knowledge">
      <Container>
        <ScrollReveal animation="fadeUp" className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Heading level={2} className="mb-4">Knowledge Hub</Heading>
            <p className="text-body text-text-muted max-w-lg">
              Deep dives into AI engineering, resume parsing mechanics, and the future of hiring technology.
            </p>
          </div>
          <Badge variant="outline" className="text-text-subtle border-border">
            Platform Expanding Soon
          </Badge>
        </ScrollReveal>

        <Grid className="md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <ScrollReveal key={i} animation="fadeUp" delay={i * 0.1}>
              <SpotlightCard className="bg-surface border-border p-8 h-full relative group transition-colors">
                <div className="absolute top-4 right-4 z-10">
                  <Badge variant="outline" className="text-xs border-border/50 bg-bg/50 text-text-subtle">Coming Soon</Badge>
                </div>
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-surface-2 text-text-subtle group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300">
                  <MotionIcon icon={article.icon} animation="lift" />
                </div>
                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {article.category}
                </div>
                <Heading level={4} className="text-text group-hover:text-text transition-colors">
                  {article.title}
                </Heading>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
