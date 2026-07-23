"use client";
import { useState } from "react";
import { ProductFAQ } from "../../lib/products/types";
import { Container } from "../layout";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export function FAQ({ faqs }: { faqs?: ProductFAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 bg-surface/30 border-b border-border">
      <Container className="max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={cn(
                  "bg-surface border rounded-2xl overflow-hidden transition-colors duration-200",
                  isOpen ? "border-accent/50 shadow-md" : "border-border2 hover:border-border"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-text">{faq.question}</span>
                  <ChevronDown className={cn(
                    "w-5 h-5 text-text-subtle transition-transform duration-300",
                    isOpen ? "rotate-180" : ""
                  )} />
                </button>
                <div 
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
