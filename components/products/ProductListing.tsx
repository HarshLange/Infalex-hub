"use client";
import { useState } from "react";
import { Product } from "../../lib/products/types";
import { Container, Page, PageHeader } from "../layout";
import { ProductCard } from "./ProductCard";
import { CategoryFilter } from "./CategoryFilter";
import { Search } from "lucide-react";

export function ProductListing({ products, categories }: { products: Product[], categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory ? product.category === activeCategory : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Page>
      <PageHeader 
        title="AI Ecosystem" 
        description="Explore our suite of intelligent tools designed to accelerate your workflow." 
      />
      
      <Container className="py-12 md:py-20">
        
        {/* Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-foreground-subtle" />
          </div>
          <input
            type="text"
            placeholder="Search products, APIs, and tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-surface border border-border-subtle rounded-2xl text-foreground placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-accent transition-all shadow-sm"
          />
        </div>

        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelect={setActiveCategory} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.slug} product={product} />
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-20 text-center text-foreground-muted">
              No products found matching your criteria.
            </div>
          )}
        </div>
        
      </Container>
    </Page>
  );
}
