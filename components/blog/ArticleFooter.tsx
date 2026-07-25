import Link from "next/link";
import { BlogPost } from "../../lib/content/types";
import { Button } from "../ui/Button";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

interface ArticleFooterProps {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

export function ArticleFooter({ prevPost, nextPost }: ArticleFooterProps) {
  return (
    <div className="border-t border-border-subtle pt-12 mt-16">
      {/* Prev / Next Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {prevPost ? (
          <Link 
            href={`/blog/${prevPost.slug}`}
            className="flex flex-col items-start p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:border-primary/50 hover:shadow-sm transition-all group"
          >
            <span className="text-sm font-medium text-foreground-subtle flex items-center gap-2 mb-2 group-hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Previous
            </span>
            <span className="text-lg font-semibold text-foreground line-clamp-2">{prevPost.title}</span>
          </Link>
        ) : <div />}
        
        {nextPost ? (
          <Link 
            href={`/blog/${nextPost.slug}`}
            className="flex flex-col items-end text-right p-6 rounded-2xl border border-border-subtle bg-surface-elevated hover:border-primary/50 hover:shadow-sm transition-all group"
          >
            <span className="text-sm font-medium text-foreground-subtle flex items-center gap-2 mb-2 group-hover:text-primary transition-colors">
              Next <ArrowRight className="w-4 h-4" />
            </span>
            <span className="text-lg font-semibold text-foreground line-clamp-2">{nextPost.title}</span>
          </Link>
        ) : <div />}
      </div>

      {/* Try Resumetra CTA */}
      <div className="relative isolate overflow-hidden rounded-3xl bg-surface-elevated border border-border-subtle p-8 md:p-12 text-center shadow-lg group">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6 text-primary ring-1 ring-primary/20">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="text-3xl font-heading font-bold text-foreground mb-4">Ready to optimize your career?</h3>
        <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
          Join thousands of professionals using Infalex Resumetra to craft ATS-optimized resumes and land more interviews.
        </p>
        <Button size="lg" variant="primary" className="shadow-lg shadow-primary/20">
          Try Resumetra for Free
        </Button>
      </div>
    </div>
  );
}
