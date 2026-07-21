"use client";

import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { FileText, Newspaper, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function EcosystemSection() {
  return (
    <Section className="bg-surface-2 py-section-md border-y border-border" id="ecosystem">
      <Container className="flex flex-col items-center">
        <ScrollReveal animation="fadeUp" className="flex flex-col items-center text-center">
          <Heading level={2} className="mb-4">
            The Infalex Ecosystem
          </Heading>
          <p className="text-body text-text-muted max-w-2xl mb-16">
            A unified suite of products, content, and tools designed to work together seamlessly.
          </p>
        </ScrollReveal>

        {/* Tree Visualization */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Root Node */}
          <ScrollReveal animation="scaleUp" delay={0.2} className="relative z-20 bg-accent/10 border border-accent/20 px-8 py-4 rounded-full mb-8 shadow-glow">
            <span className="font-bold text-accent uppercase tracking-widest text-sm">Infalex Platform</span>
          </ScrollReveal>

          {/* Animated Connecting SVG Paths */}
          <div className="absolute top-14 bottom-0 left-0 right-0 z-0 pointer-events-none overflow-visible">
            <svg className="w-full h-full" preserveAspectRatio="none">
              {/* Vertical Trunk */}
              <motion.line 
                x1="50%" y1="0" x2="50%" y2="40px" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
              
              {/* Desktop Horizontal Branches */}
              <motion.path 
                d="M 16.66% 40px L 83.33% 40px" 
                stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border hidden md:block"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
              />
              
              {/* Vertical Drops to Cards */}
              <motion.line x1="16.66%" y1="40px" x2="16.66%" y2="80px" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border hidden md:block" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1 }} />
              <motion.line x1="50%" y1="40px" x2="50%" y2="80px" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border hidden md:block" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1 }} />
              <motion.line x1="83.33%" y1="40px" x2="83.33%" y2="80px" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" className="text-border hidden md:block" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 1 }} />
            </svg>
          </div>

          {/* Branches */}
          <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <ScrollReveal animation="fadeUp" delay={1.2}>
              <SpotlightCard className="flex flex-col items-center text-center p-8 h-full border-border/50">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                  <MotionIcon icon={FileText} animation="lift" />
                </div>
                <Heading level={4} className="mb-2">Resumetra</Heading>
                <p className="text-body-sm text-text-muted">
                  The flagship AI resume optimization engine.
                </p>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={1.3}>
              <SpotlightCard className="flex flex-col items-center text-center p-8 h-full border-border/50">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-success/10 text-success group-hover:scale-110 transition-transform duration-300">
                  <MotionIcon icon={Newspaper} animation="slideRight" />
                </div>
                <Heading level={4} className="mb-2">Knowledge Hub</Heading>
                <p className="text-body-sm text-text-muted">
                  Engineering insights and career research.
                </p>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal animation="fadeUp" delay={1.4}>
              <SpotlightCard className="flex flex-col items-center text-center p-8 h-full border-border/50">
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-warning/10 text-warning group-hover:scale-110 transition-transform duration-300">
                  <MotionIcon icon={Wrench} animation="rotate" />
                </div>
                <Heading level={4} className="mb-2">AI Tools</Heading>
                <p className="text-body-sm text-text-muted">
                  Free utilities for the modern job seeker.
                </p>
              </SpotlightCard>
            </ScrollReveal>
          </div>

          {/* Future node */}
          <ScrollReveal animation="scaleUp" delay={1.6}>
            <div className="relative z-10 mt-16 bg-surface/50 border border-border/50 border-dashed px-6 py-3 rounded-full hover:border-accent/30 transition-colors">
              <span className="font-medium text-text-subtle text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Future AI Products
              </span>
            </div>
          </ScrollReveal>

        </div>
      </Container>
    </Section>
  );
}
