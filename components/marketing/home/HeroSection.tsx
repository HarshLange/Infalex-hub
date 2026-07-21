"use client";

import { motion } from "framer-motion";
import { variants } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Container, Section } from "@/components/layout";
import { Users, Code, Zap } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { MotionIcon } from "@/components/ui/MotionIcon";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-40 pb-32 text-center min-h-[90vh] flex flex-col justify-center" id="hero">
      <AnimatedBackground />
      
      <Container className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <Badge variant="outline" className="border-accent/50 text-accent bg-accent/10 px-4 py-1.5 text-sm">
            Infalex Ecosystem v1.0
          </Badge>
        </motion.div>
        
        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          <Heading level={1} className="mb-6 text-balance">
            Intelligence for the <span className="text-accent">modern career.</span>
          </Heading>
        </motion.div>
        
        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <p className="text-body-lg text-text-muted mb-12 max-w-2xl mx-auto">
            Infalex is a premium ecosystem of AI utilities designed to give you an unfair advantage in the job market. Not just a tool, but a platform for your entire career journey.
          </p>
        </motion.div>
        
        <motion.div
          variants={variants.fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="relative mt-2"
        >
          <div className="absolute inset-0 bg-surface/60 dark:bg-transparent backdrop-blur-md rounded-3xl -m-4 border border-border/80 dark:border-transparent shadow-sm dark:shadow-none -z-10" />
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
            <MagneticButton variant="default" size="lg" className="w-full sm:w-auto px-8 py-6 rounded-xl" onClick={() => window.open('https://resumetra.infalex.com', '_blank')}>
              Explore Ecosystem
              <MotionIcon icon={Zap} animation="pulse" className="ml-1 w-4 h-4" />
            </MagneticButton>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 rounded-xl group bg-surface hover:bg-surface-hover" onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}>
              Read Our Vision
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={variants.fade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
          className="mt-24 pt-10 border-t border-border w-full grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-60"
        >
          <div className="flex items-center justify-center gap-3">
            <MotionIcon icon={Users} animation="lift" className="w-5 h-5 text-text-muted" />
            <span className="text-body-sm font-medium text-text-muted">10k+ Early Users</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MotionIcon icon={Zap} animation="rotate" className="w-5 h-5 text-text-muted" />
            <span className="text-body-sm font-medium text-text-muted">Sub-second AI Inference</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <MotionIcon icon={Code} animation="pulse" className="w-5 h-5 text-text-muted" />
            <span className="text-body-sm font-medium text-text-muted">Modern Architecture</span>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
