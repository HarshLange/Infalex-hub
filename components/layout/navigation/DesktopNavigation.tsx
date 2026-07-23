"use client";
import { navigation } from "../../../config/navigation";
import { siteConfig } from "../../../config/site";
import { NavigationItem } from "./NavigationItem";

export function DesktopNavigation() {
  return (
    <div className="hidden lg:flex items-center gap-1">
      {navigation.main.map((link) => (
        <NavigationItem key={link.name} name={link.name} href={link.href} />
      ))}
      
      <div className="w-px h-5 bg-border mx-2" />
      
      <a href={siteConfig.links.blog} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-hover rounded-lg transition-colors">
        Blog ↗
      </a>
      <a href={siteConfig.links.tools} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium text-text-muted hover:text-text hover:bg-surface-hover rounded-lg transition-colors">
        Tools ↗
      </a>
    </div>
  );
}
