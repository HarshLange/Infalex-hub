"use client";
import { Link as LinkIcon, Share2, Mail, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z" /></svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);

export function ShareRail({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const fullUrl = typeof window !== "undefined" ? window.location.href : `https://infalex.com${url}`;

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

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shareLinks = [
    { name: "Twitter", icon: TwitterIcon, href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}` },
    { name: "LinkedIn", icon: LinkedinIcon, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}` },
    { name: "Facebook", icon: FacebookIcon, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}` },
    { name: "Email", icon: Mail, href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(fullUrl)}` },
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url: fullUrl });
      } catch (err) {}
    } else {
      handleCopy();
    }
  };

  return (
    <>
      {/* Desktop Sticky Rail */}
      <div className="hidden lg:flex flex-col items-center gap-6">
        
        {/* Progress & Back to Top */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="16" fill="none" className="stroke-border-subtle" strokeWidth="3" />
              <circle 
                cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3"
                strokeDasharray="100 100" strokeDashoffset={100 - progress}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.15s ease-out" }}
              />
            </svg>
            <span className="text-[10px] font-bold text-foreground-muted">{Math.round(progress)}%</span>
          </div>
          <button
            onClick={handleScrollTop}
            className={`p-2 rounded-full text-foreground-subtle hover:text-foreground hover:bg-surface-elevated transition-all ${progress > 10 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        <div className="w-px h-8 bg-border-subtle" />

        {/* Share Links */}
        <div className="flex flex-col items-center gap-3">
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full text-foreground-subtle hover:text-primary hover:bg-primary/10 transition-colors tooltip-trigger group"
              aria-label={`Share on ${link.name}`}
            >
              <link.icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            </a>
          ))}
          
          <button
            onClick={handleCopy}
            className="p-2.5 rounded-full text-foreground-subtle hover:text-foreground hover:bg-surface-elevated transition-colors relative group mt-2"
            aria-label="Copy link"
          >
            <LinkIcon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
            <AnimatePresence>
              {copied && (
                <motion.span 
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-surface-floating text-foreground text-xs font-medium rounded-md shadow-floating border border-border-subtle whitespace-nowrap"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Floating Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button 
          onClick={handleNativeShare}
          className="p-4 bg-primary text-white rounded-full shadow-floating hover:brightness-110 active:scale-95 transition-all"
          aria-label="Share article"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
