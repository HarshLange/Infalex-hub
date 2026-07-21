import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg2 border-t border-border pt-16 px-6 lg:px-12 pb-10 font-body text-text transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="font-heading text-2xl font-bold text-text tracking-tight mb-4 inline-block">
            infa<span className="text-accent">lex</span>
          </Link>
          <p className="text-sm text-text-muted leading-relaxed max-w-[280px] mb-6">
            AI-powered career tools for modern job seekers. An MSME-registered software initiative built in India.
          </p>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-border2 rounded-full text-xs text-text-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-accent2 animate-pulse" />
            Resumetra Beta · Free to try
          </div>
        </div>

        {/* Resumetra */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-text-subtle mb-4">Resumetra</p>
          <div className="flex flex-col gap-2.5">
            <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="text-sm text-text-muted hover:text-text transition-colors flex items-center gap-1">
              Launch App <span className="text-[10px] opacity-50">↗</span>
            </a>
            <Link href="/#features" className="text-sm text-text-muted hover:text-text transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-sm text-text-muted hover:text-text transition-colors">How it works</Link>
            <Link href="/#pricing" className="text-sm text-text-muted hover:text-text transition-colors">Pricing</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-text-subtle mb-4">Company</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/" className="text-sm text-text-muted hover:text-text transition-colors">Infalex Hub</Link>
            <Link href="/about" className="text-sm text-text-muted hover:text-text transition-colors">About Us</Link>
            <Link href="/pricing" className="text-sm text-text-muted hover:text-text transition-colors">All Plans</Link>
            <Link href="/contact" className="text-sm text-text-muted hover:text-text transition-colors">Contact & Support</Link>
            <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="text-sm text-text-muted hover:text-text transition-colors flex items-center gap-1">
              Blog <span className="text-[10px] opacity-50">↗</span>
            </a>
            <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="text-sm text-text-muted hover:text-text transition-colors flex items-center gap-1">
              Tools <span className="text-[10px] opacity-50">↗</span>
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="text-[11px] font-semibold tracking-widest uppercase text-text-subtle mb-4">Legal</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/privacy" className="text-sm text-text-muted hover:text-text transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-text-muted hover:text-text transition-colors">Terms of Service</Link>
            <Link href="/refund" className="text-sm text-text-muted hover:text-text transition-colors">Refund Policy</Link>
            <Link href="/delivery" className="text-sm text-text-muted hover:text-text transition-colors">Delivery Policy</Link>
            <Link href="/disclaimer" className="text-sm text-text-muted hover:text-text transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-7 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[13px] text-text-subtle text-center md:text-left">
          © {new Date().getFullYear()} Infalex Ecosystem · MSME Registered · All rights reserved.
        </span>
        <div className="flex gap-5 flex-wrap justify-center">
          <Link href="/privacy" className="text-xs text-text-subtle hover:text-text-muted transition-colors">Privacy</Link>
          <Link href="/terms" className="text-xs text-text-subtle hover:text-text-muted transition-colors">Terms</Link>
          <Link href="/refund" className="text-xs text-text-subtle hover:text-text-muted transition-colors">Refunds</Link>
          <Link href="/contact" className="text-xs text-text-subtle hover:text-text-muted transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
}