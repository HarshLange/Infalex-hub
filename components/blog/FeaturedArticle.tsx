import Link from "next/link";
import { BlogPost } from "../../lib/content/types";
import { CategoryBadge } from "./CategoryBadge";
import { AuthorCard } from "./AuthorCard";
import { Button } from "../ui/Button";

export function FeaturedArticle({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <div className="relative isolate overflow-hidden bg-surface border border-border-subtle rounded-3xl px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 mb-16 group hover:border-primary/50 transition-colors duration-500">
      <div className="absolute -z-10 -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50" />
      
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-24 lg:text-left flex flex-col justify-center">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 text-sm text-foreground-subtle">
          <CategoryBadge categoryId={post.categoryId} />
          <span>•</span>
          <time dateTime={post.publishedAt}>{date}</time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-tight">
          {post.title}
        </h2>
        
        <p className="mt-6 text-lg leading-8 text-foreground-muted">
          {post.excerpt}
        </p>

        <div className="mt-8 mb-10 flex items-center justify-center lg:justify-start gap-4 z-20">
          <AuthorCard authorId={post.authorId} />
        </div>
        
        <div className="mt-auto pb-10 lg:pb-0 z-20 flex justify-center lg:justify-start">
          <Link href={`/blog/${post.slug}`}>
            <Button size="lg" className="shadow-lg shadow-primary/20">Read Article →</Button>
          </Link>
        </div>
      </div>
      
      <div className="relative lg:mt-8 h-80 lg:h-auto lg:w-[45rem] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none lg:rounded-br-none border-t border-l border-r lg:border-r-0 border-border-subtle shadow-2xl">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt="App screenshot"
            className="absolute left-0 top-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
           <div className="absolute inset-0 bg-gradient-to-bl from-accent/30 to-bg flex items-center justify-center">
             <span className="text-primary/30 font-heading text-8xl font-bold">infa<span className="opacity-70">lex</span></span>
           </div>
        )}
      </div>
    </div>
  );
}
