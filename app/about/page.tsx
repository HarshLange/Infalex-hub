import type { Metadata } from "next";
import { Page, PageHeader, Container, Section } from "../../components/layout";
import { Building2, ShieldCheck, Search, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Infalex AI",
  description: "Learn about Infalex, an MSME-registered Indian software initiative building practical, ethical AI productivity tools.",
};

export default function AboutPage() {
  return (
    <Page>
      <PageHeader 
        title={<>Building <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">AI tools</span><br />that actually work.</>}
        description="An MSME-registered software initiative from India, focused on practical AI for real people."
        badge="Our Story"
      />
      
      <Section className="pt-0">
        <Container size="md">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-border/50 border border-border-subtle rounded-3xl overflow-hidden p-[1px]">
              <div className="bg-surface hover:bg-surface-hover transition-colors p-8 text-center rounded-t-[23px] md:rounded-tr-none md:rounded-l-[23px]">
                <div className="font-heading text-4xl font-bold text-foreground mb-2">2026</div>
                <div className="text-sm text-foreground-subtle font-medium uppercase tracking-wider">Founded</div>
              </div>
              <div className="bg-surface hover:bg-surface-hover transition-colors p-8 text-center rounded-none">
                <div className="font-heading text-4xl font-bold text-foreground mb-2">MSME</div>
                <div className="text-sm text-foreground-subtle font-medium uppercase tracking-wider">Registered in India</div>
              </div>
              <div className="bg-surface hover:bg-surface-hover transition-colors p-8 text-center rounded-b-[23px] md:rounded-bl-none md:rounded-r-[23px]">
                <div className="font-heading text-4xl font-bold text-foreground mb-2">10+</div>
                <div className="text-sm text-foreground-subtle font-medium uppercase tracking-wider">AI Features</div>
              </div>
            </div>

            <div className="bg-surface border border-border-subtle hover:border-border transition-colors rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Building2 className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                Company Identity
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-sans">India</span>
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Infalex is an India-based software initiative focused on building AI-powered productivity and automation tools. The platform is operated as a Micro, Small and Medium Enterprise (MSME) and complies with applicable Indian business regulations. We believe in building tools that are accessible, ethical, and genuinely useful.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle hover:border-border transition-colors rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <ShieldCheck className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                MSME Registration
                <span className="text-[10px] font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-sans">Verified</span>
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Infalex is registered under the Government of India's MSME (Udyam) framework. This registration recognizes Infalex as a legitimate technology service provider offering digital and software-based services. We operate with full transparency and compliance.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle hover:border-border transition-colors rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Search className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                What We Do
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Our primary focus is on Artificial Intelligence solutions that solve practical problems. Our flagship product — Resumetra — is an AI Resume Analyzer and Job Description Matcher designed to help students and professionals improve hiring outcomes through data-driven insights, featuring resume scoring, ATS simulation, AI rewriting, cover letter generation, smart job discovery, and application tracking.
              </p>
            </div>

            <div className="bg-surface border border-border-subtle hover:border-border transition-colors rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Rocket className="w-8 h-8 text-primary mb-6" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4 flex items-center gap-3">
                Our Vision
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Founded in 2026, Infalex aims to become a trusted hub for AI-powered tools — combining ethical AI usage, clear policies, and user-focused design. Additional applications will be launched as independent modules under the Infalex ecosystem: developer utilities, agricultural AI, and more — each built to solve a real problem with craftsmanship.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </Page>
  );
}