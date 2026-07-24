"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, FileText, Home, Info, Mail, Shield, Command, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchDocument } from "../../../lib/search/types";

const iconMap: Record<string, any> = {
  Home, Info, Mail, Shield, FileText, Command, Search
};

export const openSearch = () => {
  window.dispatchEvent(new Event("open-search"));
};

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<SearchDocument[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await fetch("/api/search");
        const data = await res.json();
        setDocs(data);
      } catch (err) {
        console.error("Failed to load search index", err);
      }
    };
    
    const onOpen = () => {
      setIsOpen(true);
      if (docs.length === 0) fetchDocs();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpen();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("open-search", onOpen);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("open-search", onOpen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [docs.length]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
    }
  }, [isOpen]);

  const filteredDocs = query
    ? docs.filter((d) => 
        d.title.toLowerCase().includes(query.toLowerCase()) || 
        (d.description && d.description.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filteredDocs.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filteredDocs.length > 0) {
      e.preventDefault();
      handleSelect(filteredDocs[selectedIndex]);
    }
  };

  const handleSelect = (doc: SearchDocument) => {
    setIsOpen(false);
    if (doc.href.startsWith("http")) {
      window.open(doc.href, "_blank");
    } else {
      router.push(doc.href);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-start justify-center pt-[10vh] sm:pt-[20vh] px-4 font-body">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-2xl bg-surface border border-border-subtle rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center px-4 py-3 border-b border-border-subtle">
              <Search className="w-5 h-5 text-foreground-subtle mr-3" />
              <input
                ref={inputRef}
                className="flex-grow bg-transparent text-foreground placeholder-text-subtle focus:outline-none text-lg"
                placeholder="Search docs, posts, products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-surface-hover text-foreground-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto bg-surface">
              {query && filteredDocs.length === 0 ? (
                <div className="p-8 text-center text-foreground-muted">
                  No results found for &quot;{query}&quot;
                </div>
              ) : query ? (
                <ul className="py-2" role="listbox">
                  {filteredDocs.map((doc, idx) => {
                    const Icon = iconMap[doc.icon || "FileText"] || FileText;
                    const isSelected = idx === selectedIndex;
                    return (
                      <li key={doc.id} role="option" aria-selected={isSelected}>
                        <button
                          onClick={() => handleSelect(doc)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${isSelected ? 'bg-surface-hover text-foreground' : 'text-foreground-muted'}`}
                        >
                          <div className={`p-2 rounded-md ${isSelected ? 'bg-primary/10 text-primary' : 'bg-bg border border-border-subtle text-foreground-subtle'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-grow">
                            <div className="font-medium leading-none">{doc.title}</div>
                            {doc.description && <div className="text-xs text-foreground-subtle truncate mt-1.5">{doc.description}</div>}
                          </div>
                          <div className="text-[10px] font-semibold text-foreground-subtle uppercase tracking-wider bg-bg px-2 py-1 rounded-sm border border-border-subtle">
                            {doc.category}
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <div className="p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-foreground-subtle border-t border-border-subtle bg-bg/50">
                  <span className="flex items-center gap-2 text-xs"><kbd className="bg-surface border border-border-subtle px-2 py-1 rounded shadow-sm text-foreground font-sans">↑</kbd> <kbd className="bg-surface border border-border-subtle px-2 py-1 rounded shadow-sm text-foreground font-sans">↓</kbd> to navigate</span>
                  <span className="flex items-center gap-2 text-xs"><kbd className="bg-surface border border-border-subtle px-2 py-1 rounded shadow-sm text-foreground font-sans">Enter</kbd> to select</span>
                  <span className="flex items-center gap-2 text-xs"><kbd className="bg-surface border border-border-subtle px-2 py-1 rounded shadow-sm text-foreground font-sans">Esc</kbd> to close</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
