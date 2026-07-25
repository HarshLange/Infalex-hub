"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  useEffect(() => {
    const updateProgress = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, percentage)));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <motion.div 
      className="fixed left-0 w-full h-1 z-[90] bg-transparent"
      initial={{ top: "76px" }}
      animate={{ top: isScrolled ? "64px" : "76px" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div 
        className="h-full bg-primary transition-all duration-150 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </motion.div>
  );
}
