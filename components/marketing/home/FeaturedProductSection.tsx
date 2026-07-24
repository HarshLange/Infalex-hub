"use client";

import { useEffect, useState } from "react";
import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { SlideRight, SlideLeft } from "@/components/ui/motion";
import { MotionIcon } from "@/components/ui/MotionIcon";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function FeaturedProductSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const target = 86;
      const duration = 1500;
      const stepTime = duration / target;
      
      const timer = setInterval(() => {
        current += 1;
        setScore(current);
        if (current >= target) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <Section className="py-section-lg overflow-hidden" id="featured">
      <Container>
        <Grid className="md:grid-cols-2 items-center gap-16">
          {/* Text Content */}
          <SlideRight>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <MotionIcon icon={ShieldCheck} animation="pulse" className="w-4 h-4" />
              Flagship Product
            </div>
            
            <Heading level={2} className="mb-6">
              Resumetra. <br />
              <span className="text-foreground-muted">The intelligent career engine.</span>
            </Heading>
            
            <p className="text-body-lg text-foreground mb-8">
              Stop guessing what recruiters want. Resumetra uses advanced AI to parse your resume exactly like an enterprise ATS, giving you actionable, line-by-line feedback.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Instant Match Scoring against live job descriptions.",
                "Missing Skill Detection & Keyword Analysis.",
                "Recruiter-ready bullet point generation."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-body text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="default" 
              size="lg" 
              onClick={() => window.open('https://resumetra.infalex.com', '_blank', 'noopener,noreferrer')}
            >
              Analyze Resume Free →
            </Button>
          </SlideRight>

          {/* Realistic SaaS Mockup */}
          <SlideLeft delay={0.2}>
            <div className="relative group" ref={ref}>
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:bg-primary/30 transition-colors duration-700" />
              
              <div className="relative bg-surface-glass backdrop-blur-md rounded-2xl overflow-hidden border border-border-subtle shadow-2xl shadow-black/20 hover:shadow-floating transition-all duration-500 hover:-translate-y-2">
                {/* Fake Window Header */}
                <div className="bg-surface-elevated/80 border-b border-border-subtle px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-danger/80" />
                  <div className="w-3 h-3 rounded-full bg-warning/80" />
                  <div className="w-3 h-3 rounded-full bg-success/80" />
                  <div className="ml-4 text-xs text-foreground-subtle font-medium">resumetra.infalex.com/analysis</div>
                </div>
                
                {/* Fake Interface Body */}
                <div className="p-6 bg-surface/90">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h4 className="text-foreground font-semibold mb-1">Senior Frontend Engineer</h4>
                      <p className="text-xs text-foreground-muted">Stripe • San Francisco, CA</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-success flex items-baseline justify-end gap-1">
                        {score}<span className="text-sm text-foreground-subtle font-normal">/100</span>
                      </div>
                      <p className="text-xs text-foreground-muted">Match Score</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.div 
                      className="bg-surface-elevated p-3 rounded-lg border border-border-subtle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-foreground">Requirements Match</span>
                        <span className="text-xs font-semibold text-primary">86%</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-primary rounded-full"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: "86%" } : {}}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-surface-elevated p-3 rounded-lg border border-border-subtle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Missing Keywords</span>
                        <span className="text-xs font-semibold text-danger">High Priority</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.0 }}
                          className="px-2 py-1 bg-danger/10 text-danger text-xs rounded border border-danger/20"
                        >
                          WebGL
                        </motion.span>
                        <motion.span 
                          initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 1.2 }}
                          className="px-2 py-1 bg-danger/10 text-danger text-xs rounded border border-danger/20"
                        >
                          Framer Motion
                        </motion.span>
                      </div>
                    </motion.div>

                    <motion.div 
                      className="bg-surface-elevated p-3 rounded-lg border border-border-subtle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">Recruiter Insights</span>
                      </div>
                      <p className="text-xs text-foreground-muted leading-relaxed">
                        "Your experience at Vercel is highly relevant, but you should quantify the performance improvements in your third bullet point to better align with Stripe's expectations."
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SlideLeft>
        </Grid>
      </Container>
    </Section>
  );
}
