"use client";

import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { RevealOnScroll } from "@/components/ui/motion";
import { motion } from "framer-motion";

export function RoadmapSection() {
  const milestones = [
    { status: "done", title: "Foundation", desc: "Design System & Core Architecture" },
    { status: "current", title: "Homepage", desc: "Ecosystem Hub Deployment" },
    { status: "next", title: "Knowledge Hub", desc: "Blog & Content Engine" },
    { status: "next", title: "Free Tools", desc: "Utility Tooling Expansion" },
    { status: "next", title: "Resumetra", desc: "Flagship Product Integration" },
    { status: "next", title: "Future Vision", desc: "Developer APIs & New Products" },
  ];

  return (
    <Section className="py-section-lg bg-surface-elevated overflow-hidden" id="roadmap">
      <Container>
        <RevealOnScroll >
          <Heading level={2} className="text-center mb-16">Platform Roadmap</Heading>
        </RevealOnScroll>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Animated Connecting Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px md:hidden z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.line x1="0" y1="0" x2="0" y2="100%" stroke="currentColor" className="text-border" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </svg>
          </div>
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <motion.line x1="0" y1="0" x2="100%" y2="0" stroke="currentColor" className="text-border" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeInOut" }} />
            </svg>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {milestones.map((milestone, i) => {
              const isDone = milestone.status === "done";
              const isCurrent = milestone.status === "current";
              
              return (
                <RevealOnScroll key={i}  delay={0.2 + (i * 0.1)}>
                  <div className="flex md:flex-col items-start md:items-center relative group">
                    {/* Node */}
                    <div className={`
                      w-12 h-12 md:mb-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors duration-500
                      ${isDone ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(59,107,255,0.3)]' : 
                        isCurrent ? 'bg-surface border-primary text-primary shadow-[0_0_15px_rgba(59,107,255,0.3)]' : 
                        'bg-surface border-border text-foreground-subtle group-hover:border-border'}
                    `}>
                      {isDone ? (
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <motion.path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5 + (i * 0.1) }} />
                        </svg>
                      ) : (
                        <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-primary animate-pulse' : 'bg-border group-hover:bg-surface-hover transition-colors'}`} />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-6 md:ml-0 md:text-center mt-2 md:mt-0">
                      <Heading level={4} className={`mb-1 text-sm md:text-base transition-colors ${isCurrent ? 'text-foreground' : isDone ? 'text-foreground' : 'text-foreground-subtle group-hover:text-foreground'}`}>
                        {milestone.title}
                      </Heading>
                      <p className="text-xs text-foreground-subtle max-w-[140px] md:mx-auto transition-colors group-hover:text-foreground-muted">
                        {milestone.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
