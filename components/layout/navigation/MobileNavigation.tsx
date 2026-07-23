"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { navigation } from "../../../config/navigation";
import { siteConfig } from "../../../config/site";
import { NavigationItem } from "./NavigationItem";
import { Button } from "../../ui/Button";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll and trap focus when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center z-50">
      <button
        className="p-2 text-text-muted hover:text-text focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 top-[76px] z-[90] bg-bg/95 backdrop-blur-2xl flex flex-col pt-8 px-6 pb-6 overflow-y-auto border-t border-border shadow-2xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, pointerEvents: "none" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-2 pl-3">Navigate</div>
              {navigation.main.map((link) => (
                <NavigationItem key={link.name} name={link.name} href={link.href} isMobile onClick={() => setIsOpen(false)} />
              ))}

              <div className="text-xs font-semibold uppercase tracking-widest text-text-subtle mt-6 mb-2 pl-3">External</div>
              <a href={siteConfig.links.blog} target="_blank" rel="noreferrer" className="px-4 py-3 text-lg font-medium text-text-muted hover:bg-surface-hover hover:text-text rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
                Blog ↗
              </a>
              <a href={siteConfig.links.tools} target="_blank" rel="noreferrer" className="px-4 py-3 text-lg font-medium text-text-muted hover:bg-surface-hover hover:text-text rounded-xl transition-colors" onClick={() => setIsOpen(false)}>
                Tools ↗
              </a>

              <Button 
                variant="default" 
                size="lg" 
                className="mt-8 py-6 w-full shadow-lg"
                onClick={() => { setIsOpen(false); window.open(siteConfig.links.resumetra, '_blank'); }}
              >
                Try Resumetra Free →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
