"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

interface ImageLightboxProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export function ImageLightbox({ src, alt, className, ...props }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div 
        className="relative group my-12 rounded-2xl overflow-hidden cursor-zoom-in border border-border-subtle shadow-card"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={src} 
          alt={alt || "Article image"} 
          className={`w-full object-cover bg-surface-elevated transition-transform duration-500 group-hover:scale-[1.02] ${className || ""}`}
          loading="lazy"
          {...props} 
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 flex items-center justify-center">
          <div className="bg-surface/80 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-border-subtle text-foreground">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl" />
            <button 
              className="absolute top-6 right-6 p-3 bg-surface/50 hover:bg-surface text-foreground rounded-full backdrop-blur-md border border-border-subtle/50 transition-all z-10 shadow-sm"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              src={src}
              alt={alt || "Fullscreen article image"}
              className="relative w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-xl shadow-floating ring-1 ring-border-subtle/50"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
