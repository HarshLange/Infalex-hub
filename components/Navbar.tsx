"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ui/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 flex items-center justify-between font-body border-b transition-all duration-300",
          isScrolled ? "bg-bg/85 backdrop-blur-xl border-border shadow-sm" : "bg-transparent border-transparent"
        )}
        initial={{ height: "76px" }}
        animate={{ height: isScrolled ? "64px" : "76px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Link href="/" className="font-heading text-xl font-bold text-text tracking-tight flex-shrink-0 z-50">
          infa<span className="text-accent">lex</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-text hover:bg-surface-hover",
                isActive(link.href) ? "text-text" : "text-text-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-px h-5 bg-border mx-2" />
          
          <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-hover rounded-lg transition-colors">
            Blog ↗
          </a>
          <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-hover rounded-lg transition-colors">
            Tools ↗
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Button variant="default" size="sm" onClick={() => window.open('https://resumetra.infalex.com', '_blank')}>
            Try Resumetra →
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-4 z-50">
          <ThemeToggle />
          <button
            className="p-2 text-text-muted hover:text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        className="fixed inset-0 z-[90] bg-bg/95 backdrop-blur-2xl lg:hidden flex flex-col pt-24 px-6 pb-6 border-b border-border"
        initial={{ opacity: 0, y: -20, pointerEvents: "none" }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? "auto" : "none" 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex flex-col gap-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-text-subtle mb-2 pl-3">Navigate</div>
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={cn(
                "px-4 py-3 text-lg font-medium rounded-xl transition-colors",
                isActive(link.href) ? "bg-surface-hover text-text" : "text-text-muted hover:bg-surface hover:text-text"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="text-xs font-semibold uppercase tracking-widest text-text-subtle mt-6 mb-2 pl-3">External</div>
          <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="px-4 py-3 text-lg font-medium text-text-muted hover:bg-surface hover:text-text rounded-xl transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Blog ↗
          </a>
          <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="px-4 py-3 text-lg font-medium text-text-muted hover:bg-surface hover:text-text rounded-xl transition-colors" onClick={() => setMobileMenuOpen(false)}>
            Tools ↗
          </a>

          <Button 
            variant="default" 
            size="lg" 
            className="mt-8 py-6 w-full"
            onClick={() => { setMobileMenuOpen(false); window.open('https://resumetra.infalex.com', '_blank'); }}
          >
            Try Resumetra Free →
          </Button>
        </div>
      </motion.div>
    </>
  );
}