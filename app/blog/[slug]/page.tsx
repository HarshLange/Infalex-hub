import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPostBySlug, getPostSlugs, getAllPosts } from "../../../lib/blog/api";
import { Page, Container } from "../../../components/layout";
import { CategoryBadge } from "../../../components/blog/CategoryBadge";
import { AuthorCard } from "../../../components/blog/AuthorCard";
import { ReadingProgress } from "../../../components/blog/ReadingProgress";
import { MdxContent } from "../../../components/blog/MdxContent";
import { NewsletterCTA } from "../../../components/blog/NewsletterCTA";
import { RelatedArticles } from "../../../components/blog/RelatedArticles";
import Script from "next/script";

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



  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Page>
      <ReadingProgress />
      
      <article className="pt-32 pb-24 relative overflow-hidden">
        <Script
          id="json-ld-article"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "image": [
                `https://infalex.com${post.coverImage}`
              ],
              "datePublished": post.publishedAt,
              "dateModified": post.updatedAt || post.publishedAt,
              "author": [{
                  "@type": "Person",
                  "name": post.authorId,
                  "url": "https://infalex.com/about"
              }]
            })
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <Container className="max-w-3xl">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-8 text-sm text-foreground-subtle font-medium">
              <CategoryBadge categoryId={post.categoryId} />
              <span>•</span>
              <time dateTime={post.publishedAt}>{date}</time>
              <span>•</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <AuthorCard authorId={post.authorId} />
            </div>
          </div>
          
          {post.coverImage && (
            <div className="w-full aspect-[2/1] md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl border border-border-subtle">
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
      <RelatedArticles currentSlug={post.slug} categoryId={post.categoryId} />

      {/* Newsletter */}
      <Container className="pb-24">
         <NewsletterCTA />
      </Container>
    </Page>
  );
}
