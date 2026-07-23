import { authors } from "../../content/data/authors";
import Image from "next/image";

export function AuthorCard({ authorId }: { authorId: string }) {
  const author = authors[authorId];
  if (!author) return null;

  return (
    <div className="flex items-center gap-3">
      {/* Fallback avatar if Image fails or missing */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-surface-hover border border-border2 flex-shrink-0">
        <div className="absolute inset-0 flex items-center justify-center text-text-subtle font-medium text-sm">
          {author.name.charAt(0)}
        </div>
        {author.avatar && (
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-text">{author.name}</span>
        <span className="text-xs text-text-subtle">{author.role}</span>
      </div>
    </div>
  );
}
