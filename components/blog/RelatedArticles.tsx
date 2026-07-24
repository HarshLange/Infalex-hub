import { getAllPosts } from "@/lib/blog/api";
import { Container } from "@/components/layout";
import { ArticleCard } from "./ArticleCard";

export interface RelatedArticlesProps {
  currentSlug: string;
  categoryId: string;
}

export function RelatedArticles({ currentSlug, categoryId }: RelatedArticlesProps) {
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.categoryId === categoryId && p.slug !== currentSlug)
    .slice(0, 3);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-24 bg-surface/50 border-t border-border">
      <Container>
        <h2 className="text-2xl font-bold font-heading mb-10 text-foreground">Related Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((related) => (
            <ArticleCard key={related.slug} post={related} />
          ))}
        </div>
      </Container>
    </section>
  );
}
