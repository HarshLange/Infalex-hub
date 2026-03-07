import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Infalex",
  description: "Read the Infalex Privacy Policy to understand how we protect your data and process AI resume matching securely.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-24 pb-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 font-medium">Last Updated: February 2026</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Using Tailwind Typography (prose) makes legal text look premium automatically */}
        <article className="prose prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to Infalex. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>

          <h2>2. Data We Collect</h2>
          <p>
            Uploaded resumes and job descriptions are processed temporarily for analysis and are not stored permanently on our servers.
          </p>
          <p>
            We use Google Analytics to analyze traffic. This service may collect data regarding your device, 
            browser, and location. We do not personally store resume data uploaded to our Resume Matcher tool; 
            it is processed in ephemeral sessions.
          </p>

          <h2>3. Cookies</h2>
          <p>
            We use cookies to improve your experience. You can set your browser to refuse all or some browser cookies, 
            or to alert you when websites set or access cookies.
          </p>
        </article>
      </main>
    </div>
  );
}