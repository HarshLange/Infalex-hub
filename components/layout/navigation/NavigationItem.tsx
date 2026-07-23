"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../../lib/utils";

interface NavigationItemProps {
  name: string;
  href: string;
  isMobile?: boolean;
  onClick?: () => void;
}

export function NavigationItem({ name, href, isMobile, onClick }: NavigationItemProps) {
  const pathname = usePathname();
  // Ensure we match exact for home, but allow subpaths for others
  const isActive = href === "/" ? pathname === href : pathname.startsWith(href);

  if (isMobile) {
    return (
      <Link 
        href={href} 
        className={cn(
          "px-4 py-3 text-lg font-medium rounded-xl transition-colors",
          isActive ? "bg-surface text-text border border-border2 shadow-sm" : "text-text-muted hover:bg-surface-hover hover:text-text"
        )}
        onClick={onClick}
      >
        {name}
      </Link>
    );
  }

  return (
    <Link 
      href={href}
      className={cn(
        "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-text hover:bg-surface-hover",
        isActive ? "text-text" : "text-text-muted"
      )}
    >
      {name}
    </Link>
  );
}
