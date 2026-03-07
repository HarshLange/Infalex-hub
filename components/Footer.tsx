import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900 mb-4 block">
              Infalex<span className="text-blue-600">.</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of AI-driven development and productivity tools. Built with ❤️ in India.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 tracking-tight">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Pricing</Link></li>
              <li><a href="https://blog.infalex.com" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Engineering Blog</a></li>
              <li><Link href="/contact" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4 tracking-tight">Legal</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Refund Policy</Link></li>
              <li><Link href="/delivery" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Delivery Policy</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200/60 flex justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Infalex Ecosystem. All Rights Reserved. MSME Registered.
          </p>
        </div>
      </div>
    </footer>
  );
}