"use client";
import { Search } from "lucide-react";
import { openSearch } from "./GlobalSearch";

export function SearchButton() {
  return (
    <button 
      onClick={openSearch}
      className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-text-muted bg-surface border border-border2 hover:border-border hover:bg-surface-hover rounded-lg transition-colors group focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label="Open Search"
    >
      <Search className="w-4 h-4 text-text-subtle group-hover:text-text-muted transition-colors" />
      <span>Search...</span>
      <kbd className="hidden lg:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-medium text-text-subtle bg-bg border border-border2 rounded opacity-70">
        <span className="text-[12px]">⌘</span>K
      </kbd>
    </button>
  );
}
