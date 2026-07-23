import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { productsConfig } from "../../config/products";
import { Product, ProductConfig, ProductContent } from "./types";

const productsDirectory = path.join(process.cwd(), "content/products");

export function getProductConfig(slug: string): ProductConfig | undefined {
  return productsConfig.find(p => p.slug === slug);
}

export function getAllProductConfigs(): ProductConfig[] {
  return productsConfig;
}

export function getCategories(): string[] {
  const categories = new Set(productsConfig.map(p => p.category));
  return Array.from(categories);
}

export function getProductContent(slug: string): ProductContent | null {
  const fullPath = path.join(productsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    overview: data.overview || "",
    heroImage: data.heroImage,
    screenshots: data.screenshots || [],
    features: data.features || [],
    useCases: data.useCases || [],
    pricing: data.pricing,
    faqs: data.faqs,
    content,
  };
}

export function getProduct(slug: string): Product | null {
  const config = getProductConfig(slug);
  if (!config) return null;

  const content = getProductContent(slug);
  
  return {
    ...config,
    ...content,
    // Fallbacks if content is missing
    overview: content?.overview || config.shortDescription,
    features: content?.features || [],
    useCases: content?.useCases || [],
    slug,
  };
}

export function getProducts(): Product[] {
  return productsConfig.map(config => {
    const product = getProduct(config.slug);
    return product as Product; // We know config exists so this won't be null
  });
}

export function getFeaturedProducts(): Product[] {
  return getProducts().filter(p => p.featured);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductConfig(slug);
  if (!product) return [];

  // If manual relationships are defined, use them first
  if (product.relatedSlugs && product.relatedSlugs.length > 0) {
    return product.relatedSlugs
      .map(s => getProduct(s))
      .filter((p): p is Product => p !== null);
  }

  // Otherwise fallback to same category
  return getProducts()
    .filter(p => p.category === product.category && p.slug !== slug)
    .slice(0, 3);
}
