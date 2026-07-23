import { Page, PageHeader, Container } from "../../components/layout";
import { getFeaturedPosts, getAllPosts } from "../../lib/blog/api";
import { FeaturedArticle } from "../../components/blog/FeaturedArticle";
import { ArticleCard } from "../../components/blog/ArticleCard";
import { NewsletterCTA } from "../../components/blog/NewsletterCTA";

export const metadata = {
  title: "Knowledge Hub | Infalex",
  description: "Explore the latest engineering insights, AI research, and updates from the Infalex ecosystem.",
};

export default function BlogIndex() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  // Use first featured post or just the first post if none are featured
  const heroPost = featuredPosts.length > 0 ? featuredPosts[0] : allPosts[0];
  const gridPosts = allPosts.filter(post => post.slug !== heroPost?.slug);

  return (
    <Page>
      <PageHeader 
        title="Knowledge Hub" 
        description="Engineering insights, AI research, tutorials, and product release notes." 
      />
      
      <Container className="py-16 md:py-24">
        {heroPost && <FeaturedArticle post={heroPost} />}

        <div className="flex flex-col gap-8 mb-12">
          <h3 className="font-heading text-2xl font-semibold text-text tracking-tight">Latest Articles</h3>
          <div className="w-12 h-1 bg-accent rounded-full mb-2"></div>
        </div>
        
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-text-muted">
            More articles coming soon.
          </div>
        )}

        <NewsletterCTA />
      </Container>
    </Page>
  );
}
