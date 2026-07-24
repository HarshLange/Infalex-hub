import { Page } from "./Page";
import { PageHeader } from "./PageHeader";
import { Container } from "./Container";
import { Section } from "./Section";
import React from "react";

type LegalPageLayoutProps = {
  title: string;
  description: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export function LegalPageLayout({ title, description, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <Page>
      <PageHeader 
        title={title} 
        description={description} 
        badge={lastUpdated ? `Last updated: ${lastUpdated}` : "Legal"}
        align="left"
      />
      <Section className="pt-0">
        <Container size="sm">
          <div className="prose prose-invert prose-p:text-foreground-muted prose-headings:text-foreground prose-headings:font-heading prose-a:text-primary hover:prose-a:text-primary-glow max-w-none prose-li:text-foreground-muted">
            {children}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
