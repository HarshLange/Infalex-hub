import type { Metadata } from "next";
import { LegalPageLayout } from "../../components/layout/LegalPageLayout";

export const metadata: Metadata = {
  title: "Disclaimer | Infalex",
  description: "Information and AI Tool Usage Limitations.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout title="Disclaimer" description="Please read this disclaimer carefully before using any Infalex tool or service." lastUpdated="February 2026">
      <h2>General Information</h2>
      <p>The information provided by Infalex ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>

      <h2>AI Tools Disclaimer</h2>
      <p>Our tools — including Resumetra, DocuMind RAG, AgroScan, and others — utilize Artificial Intelligence. AI systems are probabilistic in nature and can make mistakes. Suggestions, scores, and analyses provided by our tools should always be verified by human judgment before acting on them.</p>
      <p>We are not responsible for any career, agricultural, security, or other professional decisions made based on our tool outputs. AI-generated content is a supplement to — not a replacement for — professional advice.</p>

      <h2>External Links</h2>
      <p>The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</p>

      <h2>No Professional Advice</h2>
      <p>The content on this site does not constitute legal, financial, medical, or professional advice of any kind. Always seek the guidance of qualified professionals before making decisions based on information from our tools or website.</p>
    </LegalPageLayout>
  );
}