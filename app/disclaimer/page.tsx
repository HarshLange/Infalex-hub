export default function DisclaimerPage() {
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
  `;

  return (
    <>
      <style>{legalStyles}</style>
      <div className="legal-page">
        <header className="legal-hero">
          <div className="legal-hero-bg" />
          <div className="legal-hero-inner">
            <span className="legal-eyebrow">Legal Document</span>
            <h1 className="legal-title">Disclaimer</h1>
            <p className="legal-date">Information & AI Tool Usage Limitations</p>
            <p className="legal-sub">Please read this disclaimer carefully before using any Infalex tool or service.</p>
          </div>
        </header>
        <main className="legal-main">
          <div className="legal-section">
            <h2 className="legal-h2">General Information</h2>
            <p className="legal-p">The information provided by Infalex ("we," "us," or "our") on this website is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">AI Tools Disclaimer</h2>
            <p className="legal-p">Our tools — including Resumetra, DocuMind RAG, AgroScan, and others — utilize Artificial Intelligence. AI systems are probabilistic in nature and can make mistakes. Suggestions, scores, and analyses provided by our tools should always be verified by human judgment before acting on them.</p>
            <p className="legal-p">We are not responsible for any career, agricultural, security, or other professional decisions made based on our tool outputs. AI-generated content is a supplement to — not a replacement for — professional advice.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">External Links</h2>
            <p className="legal-p">The Site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites.</p>
          </div>
          <div className="legal-divider" />
          <div className="legal-section">
            <h2 className="legal-h2">No Professional Advice</h2>
            <p className="legal-p">The content on this site does not constitute legal, financial, medical, or professional advice of any kind. Always seek the guidance of qualified professionals before making decisions based on information from our tools or website.</p>
          </div>
        </main>
      </div>
    </>
  );
}