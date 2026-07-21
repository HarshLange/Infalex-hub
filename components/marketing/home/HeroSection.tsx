"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Container, Section } from "@/components/layout";
import { Users, Code, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-40 pb-32 text-center" id="hero">
      <div className="absolute inset-0 z-0 bg-brand-radial opacity-40 mix-blend-screen" />
      
      <Container className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          variants={variants.slideUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10 px-4 py-1.5 text-sm">
            Infalex Ecosystem v1.0
          </Badge>
        </motion.div>
        
        <motion.div
          variants={variants.slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <Heading level={1} className="mb-6 text-balance">
            Intelligence for the <span className="text-accent">modern career.</span>
          </Heading>
        </motion.div>
        
        <motion.div
          variants={variants.slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p className="text-body-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
            Infalex is a premium ecosystem of AI utilities designed to give you an unfair advantage in the job market. Not just a tool, but a platform for your entire career journey.
          </p>
        </motion.div>
        
        <motion.div
          variants={variants.slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            Explore Ecosystem
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Read Our Vision
          </Button>
        </motion.div>

        <motion.div
          variants={variants.fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-20 pt-10 border-t border-border w-full grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-60"
        >
          <div className="flex items-center justify-center gap-3">
            <Users className="w-5 h-5 text-neutral-400" />
            <span className="text-body-sm font-medium text-neutral-400">10k+ Early Users</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Zap className="w-5 h-5 text-neutral-400" />
            <span className="text-body-sm font-medium text-neutral-400">Sub-second AI Inference</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Code className="w-5 h-5 text-neutral-400" />
            <span className="text-body-sm font-medium text-neutral-400">Modern Architecture</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
