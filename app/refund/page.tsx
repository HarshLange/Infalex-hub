export default function RefundPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-24 pb-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Refund Policy</h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            Brief: Because Infalex provides digital API credits and software utilities, purchases are generally non-refundable. However, we review technical failures on a case-by-case basis.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
          <h2>1. Digital Goods and AI Processing</h2>
          <p>
            Because our services involve real-time AI computation and immediate digital delivery, refunds are not applicable once credits are consumed or processing has started. International customers may request refund review within 7 days of payment. Final decision is at Infalex’s discretion.
          </p>
          <p>
            Infalex provides access to software tools and AI processing capabilities. Because running AI models incurs significant server compute costs in real-time, all sales of premium credits, API usage, and digital subscriptions are final and non-refundable once the service has been accessed or the computing power has been utilized.
          </p>

          <h2>2. Subscription Cancellations</h2>
          <p>
            If you are enrolled in a recurring subscription plan, you may cancel your subscription at any time through your account dashboard. Cancellation will take effect at the end of your current billing cycle. You will retain access to premium features until the cycle concludes, but no prorated refunds will be issued for unused time.
          </p>

          <h2>3. Exceptions and Technical Failures</h2>
          <p>
            We stand behind the quality of our code. Exceptions to our no-refund policy may be made solely at our discretion under the following circumstances:
          </p>
          <ul>
            <li>Major, prolonged service outages that prevent you from using paid features.</li>
            <li>Billing errors resulting in duplicate charges.</li>
            <li>A verifiable technical bug that completely prevents a tool from delivering its core functionality, which our support team is unable to resolve within a reasonable timeframe.</li>
          </ul>

          <h2>4. How to Request a Review</h2>
          <p>
            If you believe you qualify for an exception, please contact our support team at <strong>support@infalex.com</strong> within 7 days of the transaction. Include your account details, transaction receipt, and a detailed explanation of the issue (including screenshots if applicable). Allow up to 3-5 business days for our team to process your request.
          </p>

          <p className="text-sm text-slate-400 mt-8"><em>Last Updated: February 2026</em></p>
        </article>
      </main>
    </div>
  );
}