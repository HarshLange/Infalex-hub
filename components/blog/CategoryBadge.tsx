import { cn } from "../../lib/utils";
import { categories } from "../../content/data/categories";

export function CategoryBadge({ categoryId, className }: { categoryId: string; className?: string }) {
  const category = categories[categoryId];
  if (!category) return null;

  return (
    <span className={cn(
      "inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-surface-hover text-accent border border-border2",
      className
    )}>
      {category.name}
    </span>
  );
}
