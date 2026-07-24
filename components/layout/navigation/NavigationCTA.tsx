"use client";
import { Button } from "../../ui/Button";
import { ThemeToggle } from "../../ui/ThemeToggle";
import { siteConfig } from "../../../config/site";

export function NavigationCTA() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <Button variant="primary" size="sm" onClick={() => window.open(siteConfig.links.resumetra, '_blank')}>
        Try Resumetra →
      </Button>
    </div>
  );
}
