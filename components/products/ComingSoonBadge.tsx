import { cn } from "../../lib/utils";

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-warning/10 text-warning border border-warning/20", className)}>
      Coming Soon
    </span>
  );
}
