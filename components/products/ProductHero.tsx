"use client";
import { Product } from "../../lib/products/types";
import { Button } from "../ui/Button";
import { ComingSoonBadge } from "./ComingSoonBadge";
import { ArrowRight } from "lucide-react";

export function ProductHero({ product }: { product: Product }) {
  const isLive = product.status === "live" || product.status === "beta";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-accent/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-surface-hover text-text-muted border border-border2">
            {product.category}
          </span>
          {product.comingSoon && <ComingSoonBadge />}
          {product.status === "beta" && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-accent/10 text-accent border border-accent/20">
              Public Beta
            </span>
          )}
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-text tracking-tight mb-8">
          {product.name}
        </h1>
        
        <p className="text-xl text-text-muted max-w-2xl mb-12 leading-relaxed">
          {product.overview}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 z-20">
          {isLive ? (
            <>
              <Button size="lg" className="shadow-lg shadow-accent/20 px-8">
                Start Building Free
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Documentation
              </Button>
            </>
          ) : (
            <Button size="lg" className="px-8">
              Join Waitlist
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
