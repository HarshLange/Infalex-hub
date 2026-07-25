"use client";
import { Button } from "../ui/Button";
import { Sparkles } from "lucide-react";

export function NewsletterCTA() {
  return (
    <div className="relative isolate bg-surface border border-border-subtle rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center my-16 shadow-lg overflow-hidden group hover:border-primary/30 transition-colors duration-500">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-[100px] pointer-events-none -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
      
      <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary ring-1 ring-primary/20">
        <Sparkles className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">Join the Infalex Ecosystem</h3>
      <p className="text-foreground-muted max-w-lg mb-8 leading-relaxed text-[17px]">
        Get the latest updates on AI, platform releases, and deep engineering dives delivered directly to your inbox once a month. No spam.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-10" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-grow px-4 py-3 bg-surface-elevated border border-border-subtle rounded-xl text-foreground placeholder:text-foreground-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
          required
        />
        <Button type="submit" variant="primary" size="lg" className="shrink-0 group/btn">
          <span>Subscribe</span>
        </Button>
      </form>
    </div>
  );
}
