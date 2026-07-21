import { Container, Section, Grid } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <Heading level={2} className="mb-4">Knowledge Hub</Heading>
            <p className="text-body text-neutral-400 max-w-lg">
              Deep dives into AI engineering, resume parsing mechanics, and the future of hiring technology.
            </p>
          </div>
          <Badge variant="outline" className="text-neutral-500 border-neutral-700">
            Platform Expanding Soon
          </Badge>
        </div>

        <Grid className="md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <Card key={i} className="bg-surface border-border hover:border-border transition-colors cursor-default relative overflow-hidden group">
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="text-xs border-border/50 bg-bg/50">Coming Soon</Badge>
              </div>
              <article.icon className="w-8 h-8 text-neutral-600 mb-6 group-hover:text-accent transition-colors" />
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                {article.category}
              </div>
              <Heading level={4} className="text-neutral-300">
                {article.title}
              </Heading>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
