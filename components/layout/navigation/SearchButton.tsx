"use client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { openSearch } from "./GlobalSearch";

export function SearchButton() {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
    }
  }, []);

  return (
    <button 
      onClick={openSearch}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-foreground-muted bg-surface border border-border-subtle hover:border-border hover:bg-surface-hover rounded-lg transition-colors group focus:outline-none focus:ring-2 focus:ring-accent shadow-sm hover:shadow-card"
      aria-label="Open Search"
    >
      <Search className="w-4 h-4 text-foreground-subtle group-hover:text-foreground-muted transition-colors" />
      <span>Search...</span>
      <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium text-foreground-subtle bg-bg border border-border-subtle rounded opacity-70">
        <span className={isMac ? "text-[12px]" : ""}>{isMac ? "⌘" : "Ctrl +"}</span> K
      </kbd>
    </button>
  );
}
