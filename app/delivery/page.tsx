// ═══════════════════════════════════════════════════════════
// app/delivery/page.tsx
// ═══════════════════════════════════════════════════════════

import Link from "next/link";

export default function DeliveryPage() {
  const legalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');
    .legal-page { min-height:100vh; background:#05050a; font-family:'Figtree',sans-serif; color:#f0f0f8; }
    .legal-hero { position:relative; padding:72px 24px 52px; border-bottom:1px solid rgba(255,255,255,0.07); overflow:hidden; }
    .legal-hero-bg { position:absolute; inset:0; pointer-events:none; background:radial-gradient(ellipse 50% 40% at 50% 0%, rgba(59,107,255,0.1) 0%, transparent 60%); }
    .legal-hero-inner { position:relative; z-index:1; max-width:760px; margin:0 auto; }
    .legal-eyebrow { font-size:11px; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:rgba(240,240,248,0.3); margin-bottom:16px; display:block; }
    .legal-title { font-family:'Syne',sans-serif; font-size:clamp(32px,5vw,52px); font-weight:800; line-height:1; letter-spacing:-0.04em; color:#f0f0f8; margin-bottom:12px; }
    .legal-date { font-size:13px; color:rgba(240,240,248,0.3); }
    .legal-sub { font-size:15px; color:rgba(240,240,248,0.4); font-weight:300; line-height:1.65; margin-top:12px; max-width:560px; }
    .legal-main { max-width:760px; margin:0 auto; padding:52px 24px 96px; }
    .legal-section { margin-bottom:40px; }
    .legal-h2 { font-family:'Syne',sans-serif; font-size:18px; font-weight:700; color:#f0f0f8; margin-bottom:14px; letter-spacing:-0.02em; display:flex; align-items:center; gap:10px; }
    .legal-h2::before { content:''; display:block; width:3px; height:18px; background:linear-gradient(to bottom,#3b6bff,#00d4aa); border-radius:2px; flex-shrink:0; }
    .legal-p { font-size:15px; color:rgba(240,240,248,0.5); line-height:1.8; font-weight:300; margin-bottom:12px; }
    .legal-p:last-child { margin-bottom:0; }
    .legal-divider { height:1px; background:rgba(255,255,255,0.07); margin:36px 0; }
    .legal-link { color:#7da4ff; text-decoration:none; }
    .legal-link:hover { color:#b8ccff; }
    .legal-badge {
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 18px; border:1px solid rgba(0,212,170,0.25);
      border-radius:100px; font-size:13px; color:#00d4aa;
      margin-bottom:32px; background:rgba(0,212,170,0.06);
    }
    .legal-badge-dot { width:6px; height:6px; border-radius:50%; background:#00d4aa; animation:lb-pulse 2s infinite; }
    @keyframes lb-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
  `;

  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-page">
        <header className="legal-hero">
          <div className="legal-hero-bg" />
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Legal Document</span>
            <h1 className="legal-title">Delivery & Shipping Policy</h1>
            <p className="legal-date">Digital SaaS Platform</p>
            <p className="legal-sub">Infalex is a fully digital platform. No physical goods are shipped — all deliveries are instant and electronic.</p>
          </div>
        </header>
        <main className="legal-main">
          <div className="legal-badge">
            <span className="legal-badge-dot" />
            Instant Digital Delivery · No Shipping Required
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">1. Delivery Mechanism</h2>
            <p className="legal-p">Upon successful processing of your payment, access to your purchased subscription, AI credits, or specific software tools is granted electronically. An automated confirmation email containing your payment receipt and account access details will be sent immediately to the email address registered with your Infalex account.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">2. Delivery Timeframe</h2>
            <p className="legal-p">Digital delivery is typically instantaneous. As soon as the payment gateway confirms the transaction, your Infalex dashboard will automatically update to reflect your new access level or credit balance. In rare cases involving network latency or banking delays, it may take up to 15 minutes for the services to activate.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">3. International Transactions</h2>
            <p className="legal-p">For international users paying in foreign currencies, access is granted under the same instantaneous digital delivery model once the international payment gateway clears the transaction. There are no cross-border shipping delays, customs fees, or physical tracking numbers involved.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">4. Troubleshooting Delivery Issues</h2>
            <p className="legal-p">If your account does not reflect your purchase within 15 minutes of payment, first check your email's spam or junk folder for the payment receipt. If you still require assistance, please contact our support team via our <Link href="/contact" className="legal-link">Contact Support</Link> page with your transaction ID. We will manually verify the payment and activate your access promptly.</p>
          </div>
        </main>
      </div>
    </>
  );
}