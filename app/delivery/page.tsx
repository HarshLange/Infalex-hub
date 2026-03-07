import Link from "next/link";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="pt-24 pb-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Delivery & Shipping Policy</h1>
          <p className="text-slate-500 font-medium">Digital SaaS Platform Guidelines</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-slate prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
          <p>
            Infalex operates strictly as a digital Software-as-a-Service (SaaS) platform, providing AI-powered development and productivity tools. Because our products are entirely digital, we do not ship any physical goods or hardware.
          </p>

          <h2>1. Delivery Mechanism</h2>
          <p>
            Upon successful processing of your payment, access to your purchased subscription, AI credits, or specific software tools is granted electronically. An automated confirmation email containing your payment receipt and account access details will be sent immediately to the email address registered with your Infalex account.
          </p>

          <h2>2. Delivery Timeframe</h2>
          <p>
            Digital delivery is typically instantaneous. As soon as the payment gateway confirms the transaction, your Infalex dashboard will automatically update to reflect your new access level or credit balance. In rare cases involving network latency or banking delays, it may take up to 15 minutes for the services to activate.
          </p>

          <h2>3. International Transactions</h2>
          <p>
            For our international users paying in foreign currencies, access is granted under the exact same instantaneous digital delivery model once the international payment gateway clears the transaction. There are no cross-border shipping delays, customs fees, or physical tracking numbers involved.
          </p>

          <h2>4. Troubleshooting Delivery Issues</h2>
          <p>
            If your account does not reflect your purchase within 15 minutes of payment, please first check your email's spam or junk folder for the payment receipt. If you still require assistance, please contact our support team via our <Link href="/contact">Contact Support</Link> page with your transaction ID. We will manually verify the payment and activate your access promptly.
          </p>
        </article>
      </main>
    </div>
  );
}