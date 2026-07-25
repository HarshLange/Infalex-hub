import Link from "next/link";
import { BlogPost } from "../../lib/content/types";
import { CategoryBadge } from "./CategoryBadge";
import { AuthorCard } from "./AuthorCard";
import { Clock } from "lucide-react";

export function ArticleCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="group relative flex flex-col items-start justify-between bg-surface-elevated border border-border rounded-2xl overflow-hidden hover:shadow-card hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
      <Link 
        href={`/blog/${post.slug}`} 
        className="absolute inset-0 z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-2xl"
      >
        <span className="sr-only">View Article: {post.title}</span>
      </Link>
      
      {/* Cover Image with Zero-Crop Architecture */}
      <div className="w-full aspect-video bg-surface-hover border-b border-border-subtle overflow-hidden relative flex items-center justify-center">
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
              className="relative z-10 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent flex items-center justify-center group-hover:from-primary/20 transition-colors duration-500">
            <span className="text-primary/40 font-heading text-4xl font-bold">infa<span className="opacity-70">lex</span></span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-6 w-full flex-grow relative z-20">
        <div className="flex items-center gap-3 mb-4 text-xs text-foreground-subtle">
          <CategoryBadge categoryId={post.categoryId} />
          <span>•</span>
          <time dateTime={post.publishedAt}>{date}</time>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readingTime}</span>
        </div>

        <div className="group/text relative">
          <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-foreground group-hover:text-primary transition-colors font-heading">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-foreground-muted">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 w-full border-t border-border-subtle/50">
          <AuthorCard authorId={post.authorId} />
          <span className="text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sm font-medium">Read →</span>
        </div>
      </div>
    </article>
  );
}
