import Link from "next/link";
import { cn } from "../../../lib/utils";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
  className?: string;
}

export function FooterColumn({ title, links, className }: FooterColumnProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-[11px] font-semibold tracking-widest uppercase text-foreground-subtle mb-4">
        {title}
      </p>
      <ul className="flex flex-col gap-2.5 m-0 p-0 list-none">
        {links.map((link) => (
          <li key={link.name}>
            {link.external ? (
              <a 
                href={link.href} 
                target="_blank" 
                rel="noreferrer" 
                className="text-sm text-foreground-muted hover:text-foreground transition-colors flex items-center gap-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                {link.name} 
                <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            ) : (
              <Link 
                href={link.href} 
                className="text-sm text-foreground-muted hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
