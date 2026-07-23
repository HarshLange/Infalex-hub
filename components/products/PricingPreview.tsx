import { ProductPricing } from "../../lib/products/types";
import { Container } from "../layout";
import { Button } from "../ui/Button";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export function PricingPreview({ pricing }: { pricing?: ProductPricing[] }) {
  if (!pricing || pricing.length === 0) return null;

  return (
    <section className="py-24 bg-bg border-b border-border relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full max-w-3xl h-full bg-accent/5 blur-[150px] pointer-events-none -z-10" />
      
      <Container>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text tracking-tight mb-4">
            Simple, Scalable Pricing
          </h2>
          <p className="text-lg text-text-muted">
            Start free, upgrade when you need to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricing.map((plan, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col p-8 rounded-3xl border transition-all duration-300",
                plan.highlighted 
                  ? "bg-surface border-accent shadow-xl shadow-accent/10 relative" 
                  : "bg-surface border-border2 hover:border-border"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-text mb-2">{plan.planName}</h3>
              <p className="text-sm text-text-muted mb-6 min-h-[40px]">{plan.description}</p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-text tracking-tight">{plan.price}</span>
                {plan.price !== "$0" && <span className="text-text-muted">/month</span>}
              </div>
              
              <Button 
                variant={plan.highlighted ? "default" : "outline"} 
                size="lg" 
                className="w-full mb-8"
              >
                {plan.ctaText}
              </Button>
              
              <ul className="flex flex-col gap-4 mt-auto">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-text-muted">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
