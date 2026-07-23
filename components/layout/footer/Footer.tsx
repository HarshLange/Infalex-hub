import Link from "next/link";
import { navigation } from "../../../config/navigation";
import { siteConfig } from "../../../config/site";
import { FooterColumn } from "./FooterColumn";
import { Brand } from "../../branding/Brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg2 border-t border-border pt-16 px-6 lg:px-12 pb-10 font-body text-text transition-colors duration-300" role="contentinfo">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Brand size="lg" className="mb-4 inline-flex" />
          <p className="text-sm text-text-muted leading-relaxed max-w-[280px] mb-6">
            {siteConfig.description}
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-border2 rounded-full text-xs text-text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse" />
            Resumetra Beta · Free to try
          </div>
        </div>

        {/* Dynamic Columns from config */}
        {navigation.footer.map((col) => (
          <FooterColumn key={col.title} title={col.title} links={col.links} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto pt-7 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[13px] text-text-subtle text-center md:text-left">
          © {currentYear} {siteConfig.creator} · MSME Registered · All rights reserved.
        </span>
        <div className="flex gap-5 flex-wrap justify-center">
          {navigation.footer.find(c => c.title === "Legal")?.links.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs text-text-subtle hover:text-text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
