import Link from "next/link";
import { BlogPost } from "../../lib/content/types";
import { CategoryBadge } from "./CategoryBadge";
import { AuthorCard } from "./AuthorCard";

export function ArticleCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="group relative flex flex-col items-start justify-between bg-bg border border-border2 rounded-2xl overflow-hidden hover:shadow-xl hover:border-border transition-all duration-300 transform hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View Article</span>
      </Link>
      
      {/* Cover Image Placeholder */}
      <div className="w-full aspect-video bg-surface-hover border-b border-border2 overflow-hidden relative">
        {post.coverImage ? (
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-bg flex items-center justify-center">
            <span className="text-accent/40 font-heading text-4xl font-bold">infa<span className="opacity-70">lex</span></span>
          </div>
        )}
      </div>

      <div className="flex flex-col p-6 w-full flex-grow">
        <div className="flex items-center gap-3 mb-4 text-xs text-text-subtle">
          <CategoryBadge categoryId={post.categoryId} />
          <span>•</span>
          <time dateTime={post.publishedAt}>{date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="group relative">
          <h3 className="mt-2 text-xl font-semibold leading-tight text-text group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-text-muted">
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-x-4 border-t border-border2 pt-4 w-full">
          <AuthorCard authorId={post.authorId} />
        </div>
      </div>
    </article>
  );
}
