"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, BookOpen } from "lucide-react";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  readingTime: string;
  date: string;
}

export function TableOfContents({ readingTime, date }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState("");
  const [progress, setProgress] = useState(0);

  // Extract number of minutes from "X min read"
  const totalMinutes = parseInt(readingTime) || 1;
  const minutesRemaining = Math.max(1, Math.ceil(totalMinutes * (1 - (progress / 100))));

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".mdx-content h2, .mdx-content h3"));
    const items: TOCItem[] = elements.map((elem) => ({
      id: elem.id || generateId(elem.textContent || ""),
      title: elem.textContent || "",
      level: Number(elem.tagName.charAt(1)),
    }));
    
    elements.forEach((elem, i) => {
      if (!elem.id) elem.id = items[i].id;
    });

    setHeadings(items);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percentage = totalHeight > 0 ? (scrollPosition / totalHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, percentage)));

      let currentActiveId = "";
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            currentActiveId = item.id;
          }
        }
      }
      
      if (currentActiveId) {
        setActiveId(currentActiveId);
      } else if (items.length > 0 && scrollPosition > 0) {
        setActiveId(items[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:flex flex-col gap-8">
      {/* Article Meta Data */}
      <div className="flex flex-col gap-3 p-5 rounded-2xl bg-surface-elevated border border-border-subtle shadow-sm">
        <div className="flex items-center gap-3 text-sm text-foreground-muted">
          <Calendar className="w-4 h-4 text-primary" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground-muted">
          <Clock className="w-4 h-4 text-primary" />
          <span>{readingTime}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground-muted">
          <BookOpen className="w-4 h-4 text-primary" />
          <span>{minutesRemaining} min remaining</span>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 w-full h-1.5 bg-surface-hover rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-150 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Table of Contents */}
      <div className="relative pl-4 border-l-2 border-border-subtle/50">
        <div className="mb-4 text-xs font-semibold text-foreground-subtle tracking-wider uppercase">
          Contents
        </div>
        
        <ul className="space-y-3.5">
          {headings.map((heading) => (
            <li 
              key={heading.id} 
              className={`transition-colors duration-200 text-[14.5px] leading-snug ${heading.level === 3 ? "pl-4" : ""} ${activeId === heading.id ? "text-primary font-medium" : "text-foreground-muted hover:text-foreground"}`}
            >
              <a 
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="block"
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Active Indicator Line */}
        <motion.div 
          className="absolute left-[-2px] w-[2px] bg-primary rounded-full transition-all duration-300"
          initial={false}
          animate={{
            top: headings.length > 0 ? `${Math.max(0, (headings.findIndex(h => h.id === activeId) + 1) * (100 / (headings.length + 1)))}%` : '0%',
            height: '24px',
            translateY: '24px' // Align with the items
          }}
        />
      </div>
    </div>
  );
}

function generateId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}
