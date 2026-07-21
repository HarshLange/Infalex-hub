import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export function NewsletterSection() {
  return (
    <Section className="py-section-lg relative overflow-hidden" id="newsletter">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-full bg-brand-radial blur-3xl opacity-30 -z-10 pointer-events-none" />
      
      <Container className="text-center relative z-10">
        <Heading level={2} className="mb-4">Ready to upgrade your career?</Heading>
        <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto mb-10">
          Join early users testing Resumetra and exploring the Infalex ecosystem. Get early access to new AI tools before they launch.
        </p>
        
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full bg-surface border border-border rounded-full px-6 py-4 text-body text-text focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all placeholder:text-neutral-500"
            required
          />
          <Button variant="default" size="lg" className="w-full sm:w-auto shrink-0 py-4 px-8 rounded-full">
            Join Waitlist
          </Button>
        </form>
      </Container>
    </Section>
  );
}
