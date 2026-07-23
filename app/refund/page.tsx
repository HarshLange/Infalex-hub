import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Infalex",
  description: "Infalex Refund Policy for digital goods and subscriptions.",
};

export default function RefundPage() {
  return (
    <LegalPageLayout title="Refund Policy" description="Because Infalex provides digital API credits and software utilities, purchases are generally non-refundable. However, we review technical failures on a case-by-case basis." lastUpdated="February 2026">
      <div className="bg-surface border border-border2 border-l-4 border-l-accent p-6 rounded-lg mb-8">
        <strong>TL;DR:</strong> All digital purchases are final once processed. Exceptions exist for prolonged outages, duplicate charges, or verified technical failures. Contact us within 7 days of purchase.
      </div>

      <h2>1. Digital Goods and AI Processing</h2>
      <p>Because our services involve real-time AI computation and immediate digital delivery, refunds are not applicable once credits are consumed or processing has started. Infalex provides access to software tools and AI processing capabilities — running AI models incurs significant server compute costs in real-time, so all sales of premium credits, API usage, and digital subscriptions are final and non-refundable once accessed.</p>

      <h2>2. Subscription Cancellations</h2>
      <p>If you are enrolled in a recurring subscription plan, you may cancel your subscription at any time through your account dashboard. Cancellation will take effect at the end of your current billing cycle. You will retain access to premium features until the cycle concludes, but no prorated refunds will be issued for unused time.</p>

      <h2>3. Exceptions and Technical Failures</h2>
      <p>Exceptions to our no-refund policy may be made solely at our discretion under the following circumstances:</p>
      <ul>
        <li>Major, prolonged service outages that prevent you from using paid features.</li>
        <li>Billing errors resulting in duplicate charges.</li>
        <li>A verifiable technical bug that completely prevents a tool from delivering its core functionality, which our support team is unable to resolve within a reasonable timeframe.</li>
      </ul>

      <h2>4. How to Request a Review</h2>
      <p>If you believe you qualify for an exception, please contact our support team at <a href="mailto:support@infalex.com">support@infalex.com</a> within 7 days of the transaction. Include your account details, transaction receipt, and a detailed explanation of the issue. Allow up to 3–5 business days for processing.</p>
    </LegalPageLayout>
  );
}