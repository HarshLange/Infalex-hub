const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\\\Infalex\\\\infalex-hub';

const files = {
  'app/(dev)/design-system/page.tsx': `import * as React from "react"
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
    <main className="min-h-screen bg-bg text-text pt-24 pb-12">
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
`,
  'app/(dev)/motion-lab/page.tsx': `"use client"

import * as React from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Container } from "../../../components/layout/Container"
import { Section } from "../../../components/layout/Section"
import { Heading } from "../../../components/ui/Heading"
import { variants } from "../../../lib/motion"

export default function MotionLabPage() {
  // We can't easily check NEXT_PUBLIC in a client component securely to prevent shipping, 
  // but this is standard for dev pages. If someone manually navigated here in prod it would run, 
  // but they'd have to know the path. It's better to rely on server components or middleware.
  // For demonstration, we just show the motion components.
  
  if (process.env.NEXT_PUBLIC_ENABLE_DEV_PAGES !== 'true') {
    // Return standard 404 text if disabled
    return <div className="p-24 text-center">404 - Not Found</div>
  }

  return (
    <main className="min-h-screen bg-bg text-text pt-24 pb-12">
      <Container>
        <Heading level={1} className="mb-12">Motion Lab</Heading>
        
        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Fade In</Heading>
          <motion.div
            variants={variants.fade}
            initial="hidden"
            animate="visible"
            className="w-32 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center"
          >
            Fade
          </motion.div>
        </Section>

        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Slide Up</Heading>
          <motion.div
            variants={variants.slideUp}
            initial="hidden"
            animate="visible"
            className="w-32 h-32 bg-success/20 border border-success rounded-xl flex items-center justify-center"
          >
            Slide Up
          </motion.div>
        </Section>

        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Hover Interaction</Heading>
          <motion.div
            variants={variants.hoverCard}
            initial="rest"
            whileHover="hover"
            className="w-64 h-32 bg-surface border border-border rounded-xl flex items-center justify-center cursor-pointer shadow-sm"
          >
            Hover Me
          </motion.div>
        </Section>

      </Container>
    </main>
  )
}
`
};

for (const [name, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(baseDir, name), content.trim() + '\\n');
}
console.log('Dev pages created.');
