import Link from "next/link";
import { BlogPost } from "../../lib/content/types";
import { CategoryBadge } from "./CategoryBadge";
import { AuthorCard } from "./AuthorCard";
import { Button } from "../ui/Button";
import { Clock } from "lucide-react";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="relative isolate overflow-hidden bg-surface-elevated border border-border rounded-3xl px-6 pt-16 shadow-floating sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-16 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-card">
      <Link 
        href={`/blog/${post.slug}`} 
        className="absolute inset-0 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-3xl"
      >
        <span className="sr-only">Read Article: {post.title}</span>
      </Link>

      <div className="absolute -z-10 -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
      
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left flex flex-col justify-center relative z-20">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-sm text-foreground-subtle">
          <CategoryBadge categoryId={post.categoryId} />
          <span>•</span>
          <time dateTime={post.publishedAt}>{date}</time>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readingTime}</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight group-hover:text-primary transition-colors duration-300 font-heading">
          {post.title}
        </h2>
        
        <p className="mt-6 text-lg leading-8 text-foreground-muted line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-8 mb-10 flex items-center justify-center lg:justify-start gap-4">
          <AuthorCard authorId={post.authorId} />
        </div>
        
        <div className="mt-auto pb-10 lg:pb-0 flex justify-center lg:justify-start">
          <div className="group/btn relative">
            <Button size="lg" variant="primary" className="shadow-lg shadow-primary/20 pointer-events-none" tabIndex={-1}>
              Read Article <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Cover Image with Zero-Crop Architecture */}
      <div className="relative lg:mt-8 h-80 lg:h-auto lg:w-[45rem] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-br-none border-t border-l border-r lg:border-r-0 border-border-subtle shadow-2xl flex items-center justify-center bg-surface-hover">
        {post.coverImage ? (
          <>
            <img
              src={post.coverImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-50 blur-xl scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
              aria-hidden="true"
            />
            <img
              src={post.coverImage}
              alt={post.title}
              className="relative z-10 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </>
        ) : (
           <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent flex items-center justify-center group-hover:from-primary/20 transition-colors duration-500">
             <span className="text-primary/30 font-heading text-8xl font-bold">infa<span className="opacity-70">lex</span></span>
           </div>
        )}
      </div>
    </div>
  );
}
