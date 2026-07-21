import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { IconsWrapper } from "@/components/ui/IconsWrapper";
import { Lock, Zap, Cpu, Code2 } from "lucide-react";

export function TrustSection() {
  const principles = [
    {
      title: "Privacy-First Architecture",
      desc: "Your data is yours. We process documents securely and do not use personal resumes to train global public models without explicit consent.",
      icon: Lock,
    },
    {
      title: "Performance Optimized",
      desc: "Built on edge infrastructure. Expect sub-second analysis turnaround times and a lightning-fast interface powered by Next.js.",
      icon: Zap,
    },
    {
      title: "AI-Native Intelligence",
      desc: "We don't just wrap ChatGPT. We orchestrate specialized parsing engines and fine-tuned models specifically for career semantics.",
      icon: Cpu,
    },
    {
      title: "Modern Engineering",
      desc: "Developed with strict TypeScript, modular Design Systems, and best-in-class open source technologies for ultimate reliability.",
      icon: Code2,
    },
  ];

  return (
    <Section className="py-section-lg bg-bg" id="trust">
      <Container>
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">Why Trust Infalex</Heading>
          <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
            We are engineers building for engineers and professionals. Our entire ecosystem is rooted in strict principles of quality, speed, and privacy.
          </p>
        </div>

        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, i) => (
            <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <IconsWrapper size="md" className="mb-6 bg-surface border border-border text-text">
                <principle.icon className="w-6 h-6" />
              </IconsWrapper>
              <Heading level={4} className="mb-3 text-neutral-200">
                {principle.title}
              </Heading>
              <p className="text-body-sm text-neutral-400">
                {principle.desc}
              </p>
            </div>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
