import { Button } from "../ui/Button";

export function ProductCTA({ productName, isLive }: { productName: string; isLive: boolean }) {
  return (
    <div className="bg-surface border border-border-subtle rounded-3xl p-10 md:p-16 text-center flex flex-col items-center justify-center my-24 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[100px] pointer-events-none" />
      
      <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
        Ready to scale with {productName}?
      </h3>
      <p className="text-lg text-foreground-muted max-w-xl mb-10 leading-relaxed">
        {isLive 
          ? "Join thousands of developers and teams building the future with Infalex." 
          : "Join the waitlist to get early access before general availability."}
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <Button size="lg" className="px-10 shadow-lg shadow-primary/20">
          {isLive ? "Start Building Free" : "Join Waitlist"}
        </Button>
        {isLive && (
          <Button variant="outline" size="lg" className="px-8">
            Contact Sales
          </Button>
        )}
      </div>
    </div>
  );
}
