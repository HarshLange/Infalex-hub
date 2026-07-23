"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../../lib/utils";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { NavigationCTA } from "./NavigationCTA";
import { SearchButton } from "./SearchButton";
import { ThemeToggle } from "../../ui/ThemeToggle";
import { Brand } from "../../branding/Brand";
import { GlobalSearch } from "./GlobalSearch";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent-glow"
      >
        Skip to content
      </a>
      
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] px-6 lg:px-12 flex items-center justify-between font-body border-b transition-all duration-300",
          isScrolled ? "bg-bg/85 backdrop-blur-xl border-border shadow-sm" : "bg-transparent border-transparent"
        )}
        initial={{ height: "76px" }}
        animate={{ height: isScrolled ? "64px" : "76px" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        role="banner"
      >
        <div className="flex items-center gap-6">
          <Brand size="md" />
          <DesktopNavigation />
        </div>

        <div className="flex items-center gap-2 lg:gap-4 z-50">
          <SearchButton />
          <div className="hidden lg:block">
            <NavigationCTA />
          </div>
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </motion.header>

      <GlobalSearch />
    </>
  );
}
