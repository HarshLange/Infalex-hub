import { ProductFeature } from "../../lib/products/types";
import { Container } from "../layout";
import { CheckCircle } from "lucide-react";

export function FeatureGrid({ features }: { features: ProductFeature[] }) {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-24 bg-bg border-b border-border">
      <Container>
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text tracking-tight mb-4">
            Core Capabilities
          </h2>
          <p className="text-lg text-text-muted">
            Everything you need to build at the bleeding edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-3xl border border-border2 hover:border-accent/30 transition-colors">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                {/* Fallback Icon */}
                <CheckCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
