import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { IconsWrapper } from "@/components/ui/IconsWrapper";
import { FileText, Newspaper, Wrench } from "lucide-react";

export function EcosystemSection() {
  return (
    <Section className="bg-surface-2 py-section-md border-y border-border" id="ecosystem">
      <Container className="flex flex-col items-center">
        <Heading level={2} className="text-center mb-4">
          The Infalex Ecosystem
        </Heading>
        <p className="text-body text-neutral-400 text-center max-w-2xl mb-16">
          A unified suite of products, content, and tools designed to work together seamlessly.
        </p>

        {/* Tree Visualization */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Root Node */}
          <div className="relative z-10 bg-accent/10 border border-accent/20 px-8 py-4 rounded-full mb-8">
            <span className="font-bold text-accent uppercase tracking-widest text-sm">Infalex Platform</span>
          </div>

          {/* Trunk */}
          <div className="absolute top-12 bottom-0 left-1/2 w-px bg-border -translate-x-1/2 z-0" />

          {/* Branches */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            {/* Horizontal connecting line for desktop */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-border -translate-y-px z-0" style={{ left: '16.66%', right: '16.66%' }} />

            <Card className="relative z-10 bg-surface border-border flex flex-col items-center text-center p-8 hover:border-accent/50 transition-colors">
              <IconsWrapper size="md" className="mb-4">
                <FileText className="w-6 h-6" />
              </IconsWrapper>
              <Heading level={4} className="mb-2">Resumetra</Heading>
              <p className="text-body-sm text-neutral-400">
                The flagship AI resume optimization engine.
              </p>
            </Card>

            <Card className="relative z-10 bg-surface border-border flex flex-col items-center text-center p-8 hover:border-accent/50 transition-colors">
              <IconsWrapper size="md" className="mb-4 bg-success/10 text-success">
                <Newspaper className="w-6 h-6" />
              </IconsWrapper>
              <Heading level={4} className="mb-2">Knowledge Hub</Heading>
              <p className="text-body-sm text-neutral-400">
                Engineering insights and career research.
              </p>
            </Card>

            <Card className="relative z-10 bg-surface border-border flex flex-col items-center text-center p-8 hover:border-accent/50 transition-colors">
              <IconsWrapper size="md" className="mb-4 bg-warning/10 text-warning">
                <Wrench className="w-6 h-6" />
              </IconsWrapper>
              <Heading level={4} className="mb-2">AI Tools</Heading>
              <p className="text-body-sm text-neutral-400">
                Free utilities for the modern job seeker.
              </p>
            </Card>
          </div>

          {/* Future node */}
          <div className="relative z-10 mt-16 bg-surface/50 border border-border/50 border-dashed px-6 py-3 rounded-full">
            <span className="font-medium text-neutral-500 text-sm">Future AI Products</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
