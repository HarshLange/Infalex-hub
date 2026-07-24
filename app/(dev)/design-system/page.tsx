import * as React from "react"
import { notFound } from "next/navigation"
import { Container } from "../../../components/layout/Container"
import { Section } from "../../../components/layout/Section"
import { Heading } from "../../../components/ui/Heading"
import { Button } from "../../../components/ui/Button"
import { Card } from "../../../components/ui/Card"
import { Badge } from "../../../components/ui/Badge"
import { Grid } from "../../../components/layout/Grid"

export default function DesignSystemPage() {
  if (process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== 'true') {
    notFound()
  }

  return (
    <main className="min-h-screen bg-bg text-foreground pt-24 pb-12">
      <Container>
        <Heading level={1} className="mb-12">Design System</Heading>
        
        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Typography</Heading>
          <div className="space-y-4">
            <Heading level={1}>Heading 1: Intelligent & Professional</Heading>
            <Heading level={2}>Heading 2: Enterprise Architecture</Heading>
            <Heading level={3}>Heading 3: Seamless Integration</Heading>
            <Heading level={4}>Heading 4: Component Standards</Heading>
            <p className="text-body-lg">Body Large: The quick brown fox jumps over the lazy dog.</p>
            <p className="text-body">Body: The quick brown fox jumps over the lazy dog.</p>
            <p className="text-caption text-neutral-400">Caption: Small text for subtle details.</p>
          </div>
        </Section>

        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Buttons</Heading>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </Section>

        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Cards</Heading>
          <Grid cols={2}>
            <Card className="p-6">
              <Heading level={3} className="mb-2">Standard Card</Heading>
              <p className="text-neutral-400">A clean, minimal card with subtle borders and surface background.</p>
            </Card>
            <Card gradient className="p-6">
              <Heading level={3} className="mb-2">Gradient Card</Heading>
              <p className="text-neutral-300">A premium card with glassmorphism and soft gradient background.</p>
            </Card>
          </Grid>
        </Section>

        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Badges</Heading>
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </Section>

      </Container>
    </main>
  )
}