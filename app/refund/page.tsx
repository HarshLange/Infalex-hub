export default function RefundPage() {
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
    .legal-ul { list-style:none; padding:0; margin:12px 0 0; display:flex; flex-direction:column; gap:10px; }
    .legal-ul li { display:flex; gap:10px; font-size:15px; color:rgba(240,240,248,0.5); font-weight:300; line-height:1.65; }
    .legal-ul li::before { content:'→'; color:#3b6bff; flex-shrink:0; }
    .legal-divider { height:1px; background:rgba(255,255,255,0.07); margin:36px 0; }
    .legal-link { color:#7da4ff; text-decoration:none; }
    .legal-link:hover { color:#b8ccff; }
    .legal-highlight {
      background:#0f0f1a; border:1px solid rgba(255,255,255,0.07); border-left:3px solid #3b6bff;
      border-radius:12px; padding:20px 24px; margin-bottom:28px;
      font-size:14px; color:rgba(240,240,248,0.5); font-weight:300; line-height:1.65;
    }
  `;

  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-page">
        <header className="legal-hero">
          <div className="legal-hero-bg" />
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Legal Document</span>
            <h1 className="legal-title">Refund Policy</h1>
            <p className="legal-date">Last Updated: February 2026</p>
            <p className="legal-sub">Because Infalex provides digital API credits and software utilities, purchases are generally non-refundable. However, we review technical failures on a case-by-case basis.</p>
          </div>
        </header>
        <main className="legal-main">
          <div className="legal-highlight">
            <strong style={{ color:"#f0f0f8" }}>TL;DR:</strong> All digital purchases are final once processed. Exceptions exist for prolonged outages, duplicate charges, or verified technical failures. Contact us within 7 days of purchase.
          </div>

          <div className="legal-section">
            <h2 className="legal-h2">1. Digital Goods and AI Processing</h2>
            <p className="legal-p">Because our services involve real-time AI computation and immediate digital delivery, refunds are not applicable once credits are consumed or processing has started. Infalex provides access to software tools and AI processing capabilities — running AI models incurs significant server compute costs in real-time, so all sales of premium credits, API usage, and digital subscriptions are final and non-refundable once accessed.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">2. Subscription Cancellations</h2>
            <p className="legal-p">If you are enrolled in a recurring subscription plan, you may cancel your subscription at any time through your account dashboard. Cancellation will take effect at the end of your current billing cycle. You will retain access to premium features until the cycle concludes, but no prorated refunds will be issued for unused time.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">3. Exceptions and Technical Failures</h2>
            <p className="legal-p">Exceptions to our no-refund policy may be made solely at our discretion under the following circumstances:</p>
            <ul className="legal-ul">
              <li>Major, prolonged service outages that prevent you from using paid features.</li>
              <li>Billing errors resulting in duplicate charges.</li>
              <li>A verifiable technical bug that completely prevents a tool from delivering its core functionality, which our support team is unable to resolve within a reasonable timeframe.</li>
            </ul>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">4. How to Request a Review</h2>
            <p className="legal-p">If you believe you qualify for an exception, please contact our support team at <a href="mailto:support@infalex.com" className="legal-link">support@infalex.com</a> within 7 days of the transaction. Include your account details, transaction receipt, and a detailed explanation of the issue. Allow up to 3–5 business days for processing.</p>
          </div>
        </main>
      </div>
    </>
  );
}