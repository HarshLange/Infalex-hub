import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProduct, getAllProductConfigs, getRelatedProducts } from "../../../lib/products/api";
import { Page, Container } from "../../../components/layout";
import { ProductHero } from "../../../components/products/ProductHero";
import { FeatureGrid } from "../../../components/products/FeatureGrid";
import { UseCaseGrid } from "../../../components/products/UseCaseGrid";
import { PricingPreview } from "../../../components/products/PricingPreview";
import { FAQ } from "../../../components/products/FAQ";
import { RelatedProducts } from "../../../components/products/RelatedProducts";
import { ProductCTA } from "../../../components/products/ProductCTA";

export async function generateStaticParams() {
  const configs = getAllProductConfigs();
  return configs.map((config) => ({
    slug: config.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return {};
  }

  return {
    title: `${product.name} | Infalex`,
    description: product.overview,
    openGraph: {
      title: product.name,
      description: product.overview,
      images: [
        {
          url: product.heroImage || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.overview,
      images: [product.heroImage || ""],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug);
  const isLive = product.status === "live" || product.status === "beta";

  return (
    <Page>
      <ProductHero product={product} />
      
      {/* Dynamic Sections Based on Content Availability */}
      {product.features && product.features.length > 0 && (
        <FeatureGrid features={product.features} />
      )}

      {product.useCases && product.useCases.length > 0 && (
        <UseCaseGrid useCases={product.useCases} />
      )}

      {product.pricing && product.pricing.length > 0 && (
        <PricingPreview pricing={product.pricing} />
      )}

      {product.faqs && product.faqs.length > 0 && (
        <FAQ faqs={product.faqs} />
      )}

      {/* Reusable CTA */}
      <Container>
        <ProductCTA productName={product.name} isLive={isLive} />
      </Container>

      {/* Related Products Recommendation Engine */}
      {relatedProducts && relatedProducts.length > 0 && (
        <RelatedProducts products={relatedProducts} />
      )}
    </Page>
  );
}
