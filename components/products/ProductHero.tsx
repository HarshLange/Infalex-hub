"use client";
import { Product } from "../../lib/products/types";
import { Button } from "../ui/Button";
import { ComingSoonBadge } from "./ComingSoonBadge";
import { PageHeader } from "../layout/PageHeader";

export function ProductHero({ product }: { product: Product }) {
  const isLive = product.status === "live" || product.status === "beta";

  const getBadge = () => {
    if (product.comingSoon) return "Coming Soon";
    if (product.status === "beta") return "Public Beta";
    return product.category;
  };

  return (
    <PageHeader
      title={product.name}
      description={product.overview}
      badge={getBadge()}
    >
      <div className="flex flex-col sm:flex-row items-center gap-4">
        {isLive ? (
          <>
            <Button variant="primary" size="lg" className="shadow-lg shadow-primary/20 px-8">
              Start Building Free
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-surface-elevated">
              View Documentation
            </Button>
          </>
        ) : (
          <Button variant="primary" size="lg" className="px-8">
            Join Waitlist
          </Button>
        )}
      </div>
    </PageHeader>
  );
}
