import { getAllPosts } from "@/lib/blog/api";
import { Container } from "@/components/layout";
import { BlogGrid } from "./BlogGrid";

export interface RelatedArticlesProps {
  currentSlug: string;
  categoryId: string;
  tags: string[];
}

export function RelatedArticles({ currentSlug, categoryId, tags }: RelatedArticlesProps) {
  const allPosts = getAllPosts();
  
  const relatedPosts = allPosts
    .filter((p) => p.slug !== currentSlug)
    .map((post) => {
      let score = 0;
      if (post.categoryId === categoryId) score += 2;
      const commonTags = post.tags.filter(t => tags.includes(t));
      score += commonTags.length;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);

  if (relatedPosts.length === 0) return null;

  return (
    <section className="py-24 bg-bg relative">
      <div className="absolute inset-0 bg-surface-hover/50 -z-10" />
      <Container>
        <div className="flex flex-col gap-6 mb-12">
          <h2 className="text-3xl font-bold font-heading text-foreground">Related Reading</h2>
          <div className="w-12 h-1.5 bg-primary rounded-full mb-2"></div>
        </div>
        <BlogGrid posts={relatedPosts} />
      </Container>
    </section>
  );
}
