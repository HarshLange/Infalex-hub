import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";

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
    <Section className="py-section-lg bg-surface-2 border-y border-border overflow-hidden" id="roadmap">
      <Container>
        <Heading level={2} className="text-center mb-16">Platform Roadmap</Heading>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Mobile: Vertical, Desktop: Horizontal) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
          
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
            {milestones.map((milestone, i) => {
              const isDone = milestone.status === "done";
              const isCurrent = milestone.status === "current";
              
              return (
                <div key={i} className="flex md:flex-col items-start md:items-center relative group">
                  {/* Node */}
                  <div className={`
                    w-12 h-12 md:mb-6 rounded-full flex items-center justify-center shrink-0 border-2 transition-colors
                    ${isDone ? 'bg-accent border-accent text-white' : 
                      isCurrent ? 'bg-surface border-accent text-accent' : 
                      'bg-surface border-border text-neutral-500'}
                  `}>
                    {isDone ? (
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <div className={`w-3 h-3 rounded-full ${isCurrent ? 'bg-accent animate-pulse' : 'bg-neutral-600'}`} />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-6 md:ml-0 md:text-center mt-2 md:mt-0">
                    <Heading level={4} className={`mb-1 text-sm md:text-base ${isCurrent ? 'text-text' : isDone ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      {milestone.title}
                    </Heading>
                    <p className="text-xs text-neutral-500 max-w-[140px] md:mx-auto">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
