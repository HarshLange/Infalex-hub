import { Info, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { cn } from "../../lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "success" | "danger";
  children: React.ReactNode;
}

export function Callout({ type = "info", children }: CalloutProps) {
  const styles = {
    info: "bg-info/10 border-info/20 text-info",
    warning: "bg-warning/10 border-warning/20 text-warning",
    success: "bg-success/10 border-success/20 text-success",
    danger: "bg-danger/10 border-danger/20 text-danger",
  };

  const icons = {
    info: Info,
    warning: AlertTriangle,
    success: CheckCircle,
    danger: XCircle,
  };

  const Icon = icons[type];

  return (
    <div className={cn("my-6 flex items-start gap-3 rounded-xl border p-4", styles[type])}>
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm font-medium leading-relaxed [&>p]:m-0 text-foreground">
        {children}
      </div>
    </div>
  );
}
