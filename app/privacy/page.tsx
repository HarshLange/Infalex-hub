// ─── PRIVACY PAGE ────────────────────────────────────────────────────────────
// app/privacy/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Infalex",
  description: "Read the Infalex Privacy Policy to understand how we protect your data.",
};

const legalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');

  .legal-page { min-height:100vh; background:#05050a; font-family:'Figtree',sans-serif; color:#f0f0f8; }

  .legal-hero {
    position:relative; padding:72px 24px 52px;
    border-bottom:1px solid rgba(255,255,255,0.07); overflow:hidden;
  }
  .legal-hero-bg {
    position:absolute; inset:0; pointer-events:none;
    background:radial-gradient(ellipse 50% 40% at 50% 0%, rgba(59,107,255,0.1) 0%, transparent 60%);
  }
  .legal-hero-inner { position:relative; z-index:1; max-width:760px; margin:0 auto; }

  .legal-eyebrow {
    font-size:11px; font-weight:600; letter-spacing:0.14em;
    text-transform:uppercase; color:rgba(240,240,248,0.3); margin-bottom:16px;
    display:block;
  }
  .legal-title {
    font-family:'Syne',sans-serif;
    font-size:clamp(32px,5vw,52px); font-weight:800; line-height:1;
    letter-spacing:-0.04em; color:#f0f0f8; margin-bottom:12px;
  }
  .legal-date { font-size:13px; color:rgba(240,240,248,0.3); }

  .legal-main { max-width:760px; margin:0 auto; padding:52px 24px 96px; }

  .legal-section { margin-bottom:40px; }

  .legal-h2 {
    font-family:'Syne',sans-serif; font-size:18px; font-weight:700;
    color:#f0f0f8; margin-bottom:14px; letter-spacing:-0.02em;
    display:flex; align-items:center; gap:10px;
  }
  .legal-h2::before {
    content:''; display:block; width:3px; height:18px;
    background:linear-gradient(to bottom,#3b6bff,#00d4aa);
    border-radius:2px; flex-shrink:0;
  }

  .legal-p {
    font-size:15px; color:rgba(240,240,248,0.5); line-height:1.8; font-weight:300;
    margin-bottom:12px;
  }
  .legal-p:last-child { margin-bottom:0; }

  .legal-ul {
    list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px;
  }
  .legal-ul li {
    display:flex; gap:10px; font-size:15px; color:rgba(240,240,248,0.5); font-weight:300; line-height:1.65;
  }
  .legal-ul li::before { content:'→'; color:#3b6bff; flex-shrink:0; }

  .legal-link { color:#7da4ff; text-decoration:none; }
  .legal-link:hover { color:#b8ccff; }

  .legal-divider { height:1px; background:rgba(255,255,255,0.07); margin:36px 0; }
`;

export default function PrivacyPage() {
  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-page">
        <header className="legal-hero">
          <div className="legal-hero-bg" />
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Legal Document</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-date">Last Updated: February 2026</p>
          </div>
        </header>
        <main className="legal-main">
          <div className="legal-section">
            <h2 className="legal-h2">1. Introduction</h2>
            <p className="legal-p">Welcome to Infalex. We respect your privacy and are committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website and use our services.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">2. Data We Collect</h2>
            <p className="legal-p">Uploaded resumes and job descriptions are processed temporarily for analysis and are not stored permanently on our servers. We use Google Analytics to analyze traffic — this service may collect data regarding your device, browser, and approximate location.</p>
            <p className="legal-p">We do not personally store resume data uploaded to our Resume Matcher tool; it is processed in ephemeral sessions and discarded immediately after analysis.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">3. Cookies</h2>
            <p className="legal-p">We use cookies to improve your experience and for analytics. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. Disabling cookies may affect some features of our platform.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">4. Data Security</h2>
            <p className="legal-p">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All payment transactions are processed through Razorpay and are fully encrypted.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">5. Contact Us</h2>
            <p className="legal-p">For any privacy-related questions, please contact us at <a href="mailto:support@infalex.com" className="legal-link">support@infalex.com</a>.</p>
          </div>
        </main>
      </div>
    </>
  );
}