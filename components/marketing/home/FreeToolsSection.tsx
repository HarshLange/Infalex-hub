import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FileSearch, AlignLeft, BarChart } from "lucide-react";

export function FreeToolsSection() {
  const tools = [
    { title: "ATS Checker", desc: "Simulate an ATS parse of your resume.", icon: FileSearch },
    { title: "Resume Formatter", desc: "Auto-fix structure and alignment.", icon: AlignLeft },
    { title: "Keyword Analyzer", desc: "Extract requirements from JDs.", icon: BarChart },
  ];

  return (
    <Section className="py-section-md bg-surface-2 border-y border-border" id="tools">
      <Container>
        <div className="flex flex-col items-center text-center mb-12">
          <Heading level={2} className="mb-4">Free AI Tools</Heading>
          <p className="text-body text-neutral-400 max-w-2xl">
            A growing collection of free utilities designed to help developers and professionals optimize their career assets.
          </p>
        </div>

        <Grid className="md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, i) => (
            <Card key={i} className="bg-surface border-border flex flex-col items-center text-center p-8 relative">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-border/50">In Development</Badge>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                <tool.icon className="w-6 h-6" />
              </div>
              <Heading level={4} className="mb-2 text-neutral-200">
                {tool.title}
              </Heading>
              <p className="text-body-sm text-neutral-400">
                {tool.desc}
              </p>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
