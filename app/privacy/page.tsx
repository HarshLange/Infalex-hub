import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Infalex",
  description: "Read the Infalex Privacy Policy to understand how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" description="Read the Infalex Privacy Policy to understand how we protect your data." lastUpdated="February 2026">
      <h2>1. Introduction</h2>
      <p>Welcome to Infalex. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website and use our services.</p>

      <h2>2. Data We Collect</h2>
      <p>Uploaded resumes and job descriptions are processed temporarily for analysis and are not stored permanently on our servers. We use Google Analytics to analyze traffic — this service may collect data regarding your device, browser, and approximate location.</p>
      <p>We do not personally store resume data uploaded to our Resume Matcher tool; it is processed in ephemeral sessions and discarded immediately after analysis.</p>

      <h2>3. Cookies</h2>
      <p>We use cookies to improve your experience and for analytics. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Disabling cookies may affect some features of our platform.</p>

      <h2>4. Data Security</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are processed through Razorpay and are fully encrypted.</p>

      <h2>5. Contact Us</h2>
      <p>For any privacy-related questions, please contact us at <a href="mailto:support@infalex.com">support@infalex.com</a>.</p>
    </LegalPageLayout>
  );
}