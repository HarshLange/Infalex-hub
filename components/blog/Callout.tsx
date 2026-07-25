import { Info, AlertTriangle, CheckCircle, XCircle, Lightbulb, Sparkles, FileWarning, Users, Star } from "lucide-react";
import { cn } from "../../lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "danger" | "tip" | "ai" | "ats" | "recruiter" | "best-practice";
  children: React.ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "bg-info/10 border-info/20 text-info",
    warning: "bg-warning/10 border-warning/20 text-warning",
    success: "bg-success/10 border-success/20 text-success",
    danger: "bg-danger/10 border-danger/20 text-danger",
    tip: "bg-emerald-500/10 border-emerald-500/20 text-emerald-500",
    ai: "bg-accent/10 border-accent/20 text-accent",
    ats: "bg-orange-500/10 border-orange-500/20 text-orange-500",
    recruiter: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
    "best-practice": "bg-primary/10 border-primary/20 text-primary",
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    danger: XCircle,
    tip: Lightbulb,
    ai: Sparkles,
    ats: FileWarning,
    recruiter: Users,
    "best-practice": Star,
  };

  const Icon = icons[type];

  return (
    <div className={cn("my-8 flex items-start gap-4 rounded-2xl border p-5 shadow-sm", styles[type])}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-[15.5px] font-medium leading-relaxed [&>p]:m-0 text-foreground">
        {children}
      </div>
    </div>
  );
}
