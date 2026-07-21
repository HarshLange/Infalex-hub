"use client";

import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export function FeaturedProductSection() {
  return (
    <Section className="py-section-lg" id="featured">
      <Container>
        <Grid className="md:grid-cols-2 items-center gap-16">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4" />
              Flagship Product
            </div>
            
            <Heading level={2} className="mb-6">
              Resumetra. <br />
              <span className="text-neutral-400">The intelligent career engine.</span>
            </Heading>
            
            <p className="text-body-lg text-neutral-300 mb-8">
              Stop guessing what recruiters want. Resumetra uses advanced AI to parse your resume exactly like an enterprise ATS, giving you actionable, line-by-line feedback.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Instant Match Scoring against live job descriptions.",
                "Missing Skill Detection & Keyword Analysis.",
                "Recruiter-ready bullet point generation."
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-body text-neutral-300">{benefit}</span>
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
          </div>

          {/* Realistic SaaS Mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-50" />
            <div className="relative glass-card rounded-2xl overflow-hidden border border-border">
              {/* Fake Window Header */}
              <div className="bg-surface/80 border-b border-border px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-danger/80" />
                <div className="w-3 h-3 rounded-full bg-warning/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <div className="ml-4 text-xs text-neutral-500 font-medium">resumetra.infalex.com/analysis</div>
              </div>
              
              {/* Fake Interface Body */}
              <div className="p-6 bg-surface">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-text font-semibold mb-1">Senior Frontend Engineer</h4>
                    <p className="text-xs text-neutral-400">Stripe • San Francisco, CA</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">86/100</div>
                    <p className="text-xs text-neutral-400">Match Score</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-surface-2 p-3 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text">Missing Keywords</span>
                      <span className="text-xs font-semibold text-danger">High Priority</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-danger/10 text-danger text-xs rounded">WebGL</span>
                      <span className="px-2 py-1 bg-danger/10 text-danger text-xs rounded">Framer Motion</span>
                    </div>
                  </div>

                  <div className="bg-surface-2 p-3 rounded-lg border border-border/50">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-text">Recruiter Insights</span>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      "Your experience at Vercel is highly relevant, but you should quantify the performance improvements in your third bullet point to better align with Stripe's expectations."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
