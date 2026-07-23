import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getPostSlugs, getAllPosts } from "../../../lib/blog/api";
import { Page, Container } from "../../../components/layout";
import { CategoryBadge } from "../../../components/blog/CategoryBadge";
import { AuthorCard } from "../../../components/blog/AuthorCard";
import { ReadingProgress } from "../../../components/blog/ReadingProgress";
import { MdxContent } from "../../../components/blog/MdxContent";
import { NewsletterCTA } from "../../../components/blog/NewsletterCTA";
import { ArticleCard } from "../../../components/blog/ArticleCard";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.authorId],
      images: [
        {
          url: post.coverImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get 3 related posts based on category (excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.categoryId === post.categoryId && p.slug !== post.slug)
    .slice(0, 3);

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Page>
      <ReadingProgress />
      
      <article className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-8 text-sm text-text-subtle font-medium">
              <CategoryBadge categoryId={post.categoryId} />
              <span>•</span>
              <time dateTime={post.publishedAt}>{date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <AuthorCard authorId={post.authorId} />
            </div>
          </div>
          
          {post.coverImage && (
            <div className="w-full aspect-[2/1] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl border border-border2">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-full object-cover" 
              />
            </div>
          )}

          {/* MDX Content */}
          <div className="mx-auto w-full">
            {post.content && <MdxContent content={post.content} />}
          </div>
        </Container>
      </article>
      
      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-24 bg-surface/50 border-t border-border">
          <Container>
            <h2 className="text-2xl font-bold font-heading mb-10 text-text">Related Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(related => (
                <ArticleCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Newsletter */}
      <Container className="pb-24">
         <NewsletterCTA />
      </Container>
    </Page>
  );
}
