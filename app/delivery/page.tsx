import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/layout/LegalPageLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delivery & Shipping Policy | Infalex",
  description: "Delivery and shipping information for Infalex digital products.",
};

export default function DeliveryPage() {
  return (
    <LegalPageLayout title="Delivery & Shipping Policy" description="Because Infalex provides digital API credits and software utilities, purchases are generally non-refundable. However, we review technical failures on a case-by-case basis." lastUpdated="February 2026">
      <div className="bg-surface border border-border-subtle border-l-4 border-l-accent p-6 rounded-lg mb-8">
        <strong>Instant Digital Delivery · No Shipping Required</strong>
        <p className="mt-2 mb-0">Infalex is a fully digital platform. No physical goods are shipped — all deliveries are instant and electronic.</p>
      </div>

      <h2>1. Delivery Mechanism</h2>
      <p>Upon successful processing of your payment, access to your purchased subscription, AI credits, or specific software tools is granted electronically. An automated confirmation email containing your payment receipt and account access details will be sent immediately to the email address registered with your Infalex account.</p>

      <h2>2. Delivery Timeframe</h2>
      <p>Digital delivery is typically instantaneous. As soon as the payment gateway confirms the transaction, your Infalex dashboard will automatically update to reflect your new access level or credit balance. In rare cases involving network latency or banking delays, it may take up to 15 minutes for the services to activate.</p>

      <h2>3. International Transactions</h2>
      <p>For international users paying in foreign currencies, access is granted under the same instantaneous digital delivery model once the international payment gateway clears the transaction. There are no cross-border shipping delays, customs fees, or physical tracking numbers involved.</p>

      <h2>4. Troubleshooting Delivery Issues</h2>
      <p>If your account does not reflect your purchase within 15 minutes of payment, first check your email's spam or junk folder for the payment receipt. If you still require assistance, please contact our support team via our <Link href="/contact">Contact Support</Link> page with your transaction ID. We will manually verify the payment and activate your access promptly.</p>
    </LegalPageLayout>
  );
}