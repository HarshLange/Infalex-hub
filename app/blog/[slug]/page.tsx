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
import { TableOfContents } from "../../../components/blog/TableOfContents";
import { ShareRail } from "../../../components/blog/ShareRail";
import { ArticleFooter } from "../../../components/blog/ArticleFooter";
import Script from "next/script";
import { Clock } from "lucide-react";

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

  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const prevPost = currentIndex < allPosts.length - 1 && currentIndex !== -1 ? allPosts[currentIndex + 1] : null;

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Page>
      <ReadingProgress />
      
      <article className="pt-32 pb-0 relative bg-bg">
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
        {/* Isolate the blur effect to prevent horizontal overflow without breaking sticky */}
        <div className="absolute inset-x-0 top-0 h-[600px] overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full" />
        </div>
        
        {/* Full-width professional documentation layout */}
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[120px_minmax(600px,820px)_280px] justify-center gap-8 xl:gap-16 relative items-start">
            
            {/* Left Sidebar (Share) */}
            <div className="hidden xl:block w-full sticky top-32 h-fit z-10">
              <ShareRail title={post.title} url={`/blog/${post.slug}`} />
            </div>

            {/* Main Content */}
            <div className="min-w-0 w-full mx-auto max-w-3xl xl:max-w-none pb-24">
              <div className="flex flex-col items-center text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-8 text-sm text-foreground-subtle font-medium">
                  <CategoryBadge categoryId={post.categoryId} />
                  <span>•</span>
                  <time dateTime={post.publishedAt}>{date}</time>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground tracking-tight mb-10 leading-[1.15]">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4">
                  <AuthorCard authorId={post.authorId} />
                </div>
              </div>
              
              {post.coverImage && (
                <div className="w-full relative rounded-3xl overflow-hidden mb-16 shadow-floating border border-border-subtle bg-surface-elevated flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={post.coverImage} 
                      alt="" 
                      className="w-full h-full object-cover opacity-40 blur-2xl scale-110" 
                      aria-hidden="true"
                    />
                  </div>
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="relative z-10 w-full h-auto max-h-[70vh] object-contain rounded-3xl" 
                  />
                </div>
              )}

              <MdxContent content={post.content || ""} />
              
              <ArticleFooter prevPost={prevPost} nextPost={nextPost} />
            </div>

            {/* Right Sidebar (TOC) */}
            <aside className="hidden lg:block w-full sticky top-32 h-fit max-h-[calc(100vh-140px)] overflow-y-auto scrollbar-hide z-10">
              <TableOfContents readingTime={post.readingTime} date={date} />
            </aside>
          </div>
        </div>
      </article>
      
      <div className="lg:hidden">
        <ShareRail title={post.title} url={`/blog/${post.slug}`} />
      </div>

      <RelatedArticles currentSlug={post.slug} categoryId={post.categoryId} tags={post.tags || []} />

      <Container className="pb-24 bg-bg">
         <NewsletterCTA />
      </Container>
    </Page>
  );
}
