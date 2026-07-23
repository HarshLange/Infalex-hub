"use client";
import { Button } from "../ui/Button";

export function NewsletterCTA() {
  return (
    <div className="bg-surface border border-border2 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center my-16 shadow-lg">
      <h3 className="text-2xl font-bold text-text mb-4">Join the Infalex Ecosystem</h3>
      <p className="text-text-muted max-w-lg mb-8 leading-relaxed">
        Get the latest updates on AI, platform releases, and deep engineering dives delivered directly to your inbox once a month. No spam.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="flex-grow px-4 py-3 bg-bg border border-border2 rounded-xl text-text placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
          required
        />
        <Button type="submit" size="lg">Subscribe</Button>
      </form>
    </div>
  );
}
