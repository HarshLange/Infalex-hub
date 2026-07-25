"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Attempt to extract raw code string from children if possible
  const rawCode = extractTextFromNode(children);

  // Attempt to extract language from className if present (e.g. language-typescript)
  const langMatch = className?.match(/language-(\w+)/);
  const language = langMatch ? langMatch[1] : "";

  const handleCopy = async () => {
    if (rawCode) {
      await navigator.clipboard.writeText(rawCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative group my-8">
      {language && (
        <div className="absolute top-0 right-12 px-3 py-1 bg-surface-floating/50 text-foreground-muted text-[11px] font-mono uppercase tracking-wider rounded-b-md border border-t-0 border-border-subtle backdrop-blur-md z-10">
          {language}
        </div>
      )}
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 bg-surface/10 hover:bg-surface/30 backdrop-blur-md border border-border-subtle/20 text-foreground-muted hover:text-foreground rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 shadow-sm"
        aria-label="Copy code"
      >
        {copied ? <Check className="w-4 h-4 text-success" /> : <Copy className="w-4 h-4" />}
      </button>
      <pre 
        className={`overflow-x-auto rounded-2xl border border-border-subtle bg-[#09090b] p-6 text-[14px] leading-[1.7] font-mono shadow-floating ${className || ""}`}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}

function extractTextFromNode(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromNode).join("");
  if (typeof node === "object" && node !== null && "props" in node) {
    return extractTextFromNode((node as any).props.children);
  }
  return "";
}
