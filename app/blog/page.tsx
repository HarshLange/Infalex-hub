import { Container } from "../../components/layout";
import { getFeaturedPosts, getAllPosts } from "../../lib/blog/api";
import { FeaturedArticle } from "../../components/blog/FeaturedArticle";
import { ArticleCard } from "../../components/blog/ArticleCard";
import { NewsletterCTA } from "../../components/blog/NewsletterCTA";
import { Sparkles, Activity, Layers, CalendarSync } from "lucide-react";
import { BlogGrid } from "../../components/blog/BlogGrid";

export const metadata = {
  title: "Knowledge Platform | Infalex",
  description: "Master AI Resume Optimization, Career Growth & ATS Intelligence with the Infalex Knowledge Platform.",
};

export default function BlogIndex() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  
  // Use first featured post or just the first post if none are featured
  const heroPost = featuredPosts.length > 0 ? featuredPosts[0] : allPosts[0];
  const gridPosts = allPosts.filter(post => post.slug !== heroPost?.slug);

  return (
    <div className="min-h-screen bg-bg relative">
      {/* Premium Custom Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-border-subtle/50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.08)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] -z-10 opacity-30 dark:opacity-20" />
        
        <Container className="text-center relative z-10 flex flex-col items-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20 shadow-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            INFALEX Knowledge Platform
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground tracking-tight mb-6 leading-[1.1] max-w-4xl animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Master AI Resume Optimization,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Career Growth & ATS Intelligence</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Engineering insights, resume research, AI tutorials, career guidance, and product deep dives from the experts building the future of work.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <Layers className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">{allPosts.length}+</span> Articles
            </div>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <CalendarSync className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Updated Weekly</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-secondary">
              <Activity className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">Expert Guides</span>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p className="text-sm font-medium text-foreground-subtle mb-4 uppercase tracking-wider">Popular Topics</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['ATS Systems', 'Resume Optimization', 'Interview Prep', 'LinkedIn', 'Career Growth', 'AI Tools'].map((topic) => (
                <span key={topic} className="px-4 py-2 rounded-full bg-surface-elevated border border-border-subtle text-sm text-foreground-muted hover:text-foreground hover:border-border transition-colors cursor-pointer shadow-sm">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <Container className="py-20 md:py-28 relative z-20">
        {heroPost && <FeaturedArticle post={heroPost} />}

        <div className="flex flex-col gap-8 mb-12">
          <h3 className="font-heading text-3xl font-semibold text-foreground tracking-tight">Latest Articles</h3>
          <div className="w-12 h-1.5 bg-primary rounded-full mb-2"></div>
        </div>
        
        {gridPosts.length > 0 ? (
          <BlogGrid posts={gridPosts} />
        ) : (
          <div className="py-24 text-center text-foreground-muted bg-surface-elevated rounded-3xl border border-border-subtle border-dashed">
            <p className="text-lg">More articles coming soon.</p>
          </div>
        )}

        <NewsletterCTA />
      </Container>
    </div>
  );
}
