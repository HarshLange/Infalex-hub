"use client"

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
    <main className="min-h-screen bg-bg text-foreground pt-24 pb-12">
      <Container>
        <Heading level={1} className="mb-12">Motion Lab</Heading>
        
        <Section spacing="sm">
          <Heading level={2} className="mb-6 border-b border-border pb-2">Fade In</Heading>
          <motion.div
            variants={variants.fade}
            initial="hidden"
            animate="visible"
            className="w-32 h-32 bg-primary/20 border border-primary rounded-xl flex items-center justify-center"
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