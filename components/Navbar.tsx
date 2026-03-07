"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add a slight shadow when scrolling for a premium feel
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-white/80 border-b border-slate-100 shadow-sm" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 transition-transform hover:scale-105">
            Infalex<span className="text-blue-600">.</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.path} className={`text-sm font-medium transition-colors hover:text-blue-600 ${pathname === link.path ? "text-blue-600" : "text-slate-600"}`}>
                {link.name}
              </Link>
            ))}
            <a href="https://tools.infalex.com" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Tools</a>
            <a href="https://blog.infalex.com" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Blog</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navLinks.map((link) => (
              <Link key={link.name} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === link.path ? "text-blue-600 bg-blue-50" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"}`}>
                {link.name}
              </Link>
            ))}
             <a href="https://tools.infalex.com" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Tools</a>
             <a href="https://blog.infalex.com" className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">Blog</a>
          </div>
        </div>
      )}
    </nav>
  );
}