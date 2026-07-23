"use client";
import { cn } from "../../lib/utils";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
          activeCategory === null
            ? "bg-text text-bg border-text"
            : "bg-surface text-text-muted border-border2 hover:border-text hover:text-text"
        )}
      >
        All Products
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
            activeCategory === category
              ? "bg-text text-bg border-text"
              : "bg-surface text-text-muted border-border2 hover:border-text hover:text-text"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
