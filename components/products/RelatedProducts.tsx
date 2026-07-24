import { Product } from "../../lib/products/types";
import { Container } from "../layout";
import { ProductCard } from "./ProductCard";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-24 bg-bg border-b border-border">
      <Container>
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-foreground tracking-tight mb-2">
            Explore the Ecosystem
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
