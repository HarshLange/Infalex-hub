export type ProductStatus = "live" | "beta" | "coming-soon" | "deprecated" | "archived";

export type ProductType = "Web Application" | "API" | "SDK" | "CLI" | "Plugin" | "AI Model" | "Dataset";

export interface ProductConfig {
  slug: string;
  name: string;
  shortDescription: string;
  status: ProductStatus;
  type: ProductType;
  category: string;
  tags: string[];
  icon: string; // Identifier for UI icon mapping
  featured: boolean;
  comingSoon: boolean;
  // Relationships for the recommendation engine
  relatedSlugs?: string[];
}

export interface ProductFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductUseCase {
  title: string;
  description: string;
  image?: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductPricing {
  planName: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface ProductContent {
  slug: string;
  overview: string;
  features: ProductFeature[];
  useCases: ProductUseCase[];
  pricing?: ProductPricing[];
  faqs?: ProductFAQ[];
  heroImage?: string;
  screenshots?: string[];
  content?: string; // Additional raw MDX
}

export interface Product extends ProductConfig, ProductContent {}
