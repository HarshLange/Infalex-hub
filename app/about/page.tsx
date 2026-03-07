import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Infalex AI",
  description: "Learn about Infalex, an MSME-registered Indian software initiative building practical, ethical AI productivity tools.",
  openGraph: {
    title: "About Infalex | The Future of AI Tools",
    description: "Discover how we are building ethical and practical AI solutions for students and professionals.",
    url: "https://infalex.com/about",
    siteName: "Infalex",
    type: "website",
    // Next.js will look for this image in your public/ folder!
    // images: [{ url: "/images/about-og-image.png", width: 1200, height: 630 }], 
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            About <span className="text-blue-600">Infalex</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            An MSME-registered AI software initiative from India.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg prose-blue prose-slate">
        <div className="space-y-12">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Company Identity</h2>
            <p className="text-slate-600 leading-relaxed">
              Infalex is an India-based software initiative focused on building AI-powered productivity and automation tools. The platform is operated as a Micro, Small and Medium Enterprise (MSME) and complies with applicable Indian business regulations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              MSME Registration
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Infalex is registered under the Government of India’s MSME (Udyam) framework. This registration recognizes Infalex as a legitimate technology service provider offering digital and software-based services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Do</h2>
            <p className="text-slate-600 leading-relaxed">
              Our primary focus is on Artificial Intelligence solutions that solve practical problems. Our flagship product is an AI Resume Analyzer and Job Description Matcher designed to help students and professionals improve hiring outcomes through data-driven insights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded in 2026, Infalex aims to become a trusted hub for AI-powered tools, combining ethical AI usage, clear policies, and user-focused design. Additional applications will be launched as independent modules under the Infalex ecosystem.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}