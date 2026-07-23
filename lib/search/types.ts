export type SearchCategory = "Page" | "Blog" | "Product" | "Documentation";

export interface SearchDocument {
  id: string;
  title: string;
  description?: string;
  href: string;
  category: SearchCategory;
  icon?: string;
}
