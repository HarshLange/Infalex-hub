import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans | Infalex",
  description: "Simple, transparent, and pay-as-you-go pricing for Infalex's AI-powered Resume Analyzer. Get started with 5 free credits today.",
  keywords: ["Infalex pricing", "AI resume matcher cost", "buy AI credits", "SaaS pricing"],
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-24 pb-16 lg:pt-32 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
          Simple, Transparent <span className="text-blue-600">Pricing</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Pay-as-you-go pricing for our AI-powered Resume Analyzer. 1 credit = 1 resume scan.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6">Perfect for trying out the platform.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">₹49</span>
              <span className="text-slate-500 font-medium ml-2">/ $1.99</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-700 gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                10 AI Credits
              </li>
              <li className="flex items-center text-slate-700 gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Standard Support
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="bg-blue-600 rounded-3xl p-8 shadow-2xl shadow-blue-500/20 transform md:-translate-y-4 flex flex-col relative text-white border-2 border-blue-400">
            <div className="absolute top-0 right-8 transform -translate-y-1/2">
              <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Pro</h3>
            <p className="text-blue-100 text-sm mb-6">Best for active job seekers.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">₹149</span>
              <span className="text-blue-200 font-medium ml-2">/ $4.99</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                50 AI Credits
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Priority Processing
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-blue-600 font-bold rounded-xl transition-colors">Choose Pro</button>
          </div>

          {/* Unlimited Plan */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-300 hover:shadow-xl transition-all flex flex-col relative">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Weekly Pass</h3>
            <p className="text-slate-500 text-sm mb-6">For heavy usage and bulk scanning.</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold text-slate-900">₹199</span>
              <span className="text-slate-500 font-medium ml-2">/ $6.99</span>
              <span className="block text-sm text-slate-400 mt-1">per week</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-slate-700 gap-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Unlimited Scans (Fair Use)
              </li>
            </ul>
            <button className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors">Subscribe</button>
          </div>
        </div>
      </main>
    </div>
  );
}