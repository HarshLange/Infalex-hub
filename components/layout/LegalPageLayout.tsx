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
          <div className="prose prose-invert prose-p:text-text-muted prose-headings:text-text prose-headings:font-heading prose-a:text-accent hover:prose-a:text-accent-glow max-w-none prose-li:text-text-muted">
            {children}
          </div>
        </Container>
      </Section>
    </Page>
  );
}
