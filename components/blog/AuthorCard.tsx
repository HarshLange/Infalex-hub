import { authors } from "../../content/data/authors";
import Image from "next/image";

export function AuthorCard({ authorId }: { authorId: string }) {
  const author = authors[authorId];
  if (!author) return null;

  const colors = [
    "from-blue-500 to-cyan-400",
    "from-purple-500 to-fuchsia-400",
    "from-emerald-500 to-teal-400",
    "from-orange-500 to-amber-400",
    "from-rose-500 to-pink-400",
    "from-indigo-500 to-blue-400",
  ];
  const charCode = author.name.charCodeAt(0) || 0;
  const gradient = colors[charCode % colors.length];

  return (
    <div className="flex items-center gap-3">
      {/* Fallback avatar if Image fails or missing */}
      <div className={`relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-tr ${gradient} border border-border-subtle flex-shrink-0 shadow-sm`}>
        <div className="absolute inset-0 flex items-center justify-center text-white font-heading font-bold text-lg drop-shadow-sm">
          {author.name.charAt(0).toUpperCase()}
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
        <span className="text-sm font-medium text-foreground">{author.name}</span>
        <span className="text-xs text-foreground-subtle">{author.role}</span>
      </div>
    </div>
  );
}
