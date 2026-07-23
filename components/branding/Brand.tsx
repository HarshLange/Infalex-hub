import Link from "next/link";
import { cn } from "../../lib/utils";

type BrandProps = {
  variant?: "full" | "compact";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

export function Brand({ variant = "full", size = "md", className, onClick }: BrandProps) {
  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-7 h-7",
    lg: "w-8 h-8",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link 
      href="/" 
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 flex-shrink-0 z-50 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent group",
        className
      )}
      aria-label="Infalex Home"
    >
      <img 
        src="/favicon.svg" 
        alt="Infalex Logo" 
        className={cn("transition-transform group-hover:scale-[1.03]", iconSizes[size])} 
      />
      {variant === "full" && (
        <span className={cn("font-heading font-bold text-text tracking-tight", textSizes[size])}>
          infa<span className="text-accent">lex</span>
        </span>
      )}
    </Link>
  );
}
