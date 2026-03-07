export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-24 pb-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Disclaimer</h1>
          <p className="text-slate-500 font-medium">Information and AI Tool Usage Limitations</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
          <h2>General Information</h2>
          <p>
            The information provided by Infalex ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind regarding accuracy or completeness.
          </p>

          <h2>AI Tools Disclaimer</h2>
          <p>
            Our tools (Resume Matcher, AgroScan, etc.) utilize Artificial Intelligence. AI can make mistakes. Suggestions provided by our tools should be verified by human judgment. We are not responsible for any career or agricultural decisions made based on our tool outputs.
          </p>

          <h2>External Links</h2>
          <p>
            The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us.
          </p>
        </article>
      </main>
    </div>
  );
}