import Link from "next/link";
import { Product } from "../../lib/products/types";
import { ComingSoonBadge } from "./ComingSoonBadge";
import { ArrowRight } from "lucide-react";

export function ProductCard({ product }: { product: Product }) {
  const isLive = product.status === "live" || product.status === "beta";
  const href = `/products/${product.slug}`;

  return (
    <div className="group relative flex flex-col items-start justify-between bg-surface border border-border-subtle rounded-3xl p-8 hover:shadow-xl hover:border-border transition-all duration-300">
      <div className="flex items-center justify-between w-full mb-6">
        <div className="w-12 h-12 rounded-2xl bg-bg border border-border-subtle flex items-center justify-center shadow-sm">
          {/* Placeholder for actual icon mapping */}
          <span className="text-xl">✨</span>
        </div>
        {product.comingSoon && <ComingSoonBadge />}
      </div>
      
      <div className="flex flex-col mb-8 flex-grow">
        <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-foreground-muted leading-relaxed line-clamp-3">
          {product.shortDescription}
        </p>
      </div>

      <div className="w-full pt-6 border-t border-border-subtle flex items-center justify-between mt-auto">
        <span className="text-xs font-medium text-foreground-subtle uppercase tracking-widest">
          {product.category}
        </span>
        
        {isLive ? (
          <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary2 transition-colors before:absolute before:inset-0 z-10">
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
        ) : (
          <Link href={href} className="inline-flex items-center gap-1 text-sm font-medium text-foreground-subtle hover:text-foreground-muted transition-colors before:absolute before:inset-0 z-10">
            Preview <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
