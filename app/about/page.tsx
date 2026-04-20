import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Infalex AI",
  description: "Learn about Infalex, an MSME-registered Indian software initiative building practical, ethical AI productivity tools.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');
        .ap { min-height:100vh; background:#05050a; font-family:'Figtree',sans-serif; color:#f0f0f8; }

        .ap-hero {
          position:relative; padding:80px 24px 64px; text-align:center;
          border-bottom:1px solid rgba(255,255,255,0.07); overflow:hidden;
        }
        .ap-hero-bg {
          position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,107,255,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 80% 80%, rgba(0,212,170,0.06) 0%, transparent 50%);
        }
        .ap-hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(59,107,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,107,255,0.04) 1px, transparent 1px);
          background-size:60px 60px;
          mask-image:radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 70%);
        }
        .ap-hero-inner { position:relative; z-index:1; max-width:720px; margin:0 auto; }

        .ap-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; font-weight:600; letter-spacing:0.14em;
          text-transform:uppercase; color:#00d4aa; margin-bottom:24px;
        }
        .ap-eyebrow-dot {
          width:6px; height:6px; border-radius:50%; background:#00d4aa;
          animation:ap-pulse 2s infinite;
        }
        @keyframes ap-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }

        .ap-title {
          font-family:'Syne',sans-serif;
          font-size:clamp(40px,7vw,72px); font-weight:800; line-height:0.95;
          letter-spacing:-0.04em; color:#f0f0f8; margin-bottom:24px;
        }
        .ap-title span {
          background:linear-gradient(135deg,#3b6bff 0%,#00d4aa 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .ap-subtitle { font-size:18px; font-weight:300; color:rgba(240,240,248,0.5); line-height:1.7; }

        .ap-main { max-width:800px; margin:0 auto; padding:64px 24px 96px; display:flex; flex-direction:column; gap:20px; }

        .ap-stats {
          display:grid; grid-template-columns:repeat(3,1fr); gap:2px;
          background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.07);
          border-radius:20px; overflow:hidden;
        }
        .ap-stat { background:#0f0f1a; padding:32px 24px; text-align:center; transition:background 0.2s; }
        .ap-stat:hover { background:#141422; }
        .ap-stat-val {
          font-family:'Syne',sans-serif; font-size:36px; font-weight:800; letter-spacing:-0.04em;
          background:linear-gradient(135deg,#f0f0f8 0%,rgba(240,240,248,0.5) 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
          margin-bottom:6px; line-height:1;
        }
        .ap-stat-lbl { font-size:12px; color:rgba(240,240,248,0.35); }

        .ap-card {
          background:#0f0f1a; border:1px solid rgba(255,255,255,0.07);
          border-radius:20px; padding:36px 40px;
          transition:border-color 0.25s, background 0.25s; position:relative; overflow:hidden;
        }
        .ap-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(59,107,255,0.4),rgba(0,212,170,0.3),transparent);
          opacity:0; transition:opacity 0.3s;
        }
        .ap-card:hover { border-color:rgba(255,255,255,0.12); background:#141422; }
        .ap-card:hover::before { opacity:1; }

        .ap-card-icon { font-size:28px; margin-bottom:16px; display:block; }
        .ap-card-title {
          font-family:'Syne',sans-serif; font-size:20px; font-weight:700;
          color:#f0f0f8; margin-bottom:12px; letter-spacing:-0.02em;
          display:flex; align-items:center; gap:10px;
        }
        .ap-card-title .bdg {
          font-family:'Figtree',sans-serif; font-size:10px; font-weight:600;
          letter-spacing:0.08em; text-transform:uppercase;
          padding:3px 10px; border-radius:100px;
          background:rgba(59,107,255,0.12); color:#7da4ff;
          border:1px solid rgba(59,107,255,0.25);
        }
        .ap-card-text { font-size:15px; color:rgba(240,240,248,0.5); line-height:1.75; font-weight:300; }

        @media(max-width:600px){
          .ap-card{padding:28px 24px;}
          .ap-stats{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="ap">
        <header className="ap-hero">
          <div className="ap-hero-bg" />
          <div className="ap-hero-grid" />
          <div className="ap-hero-inner">
            <div className="ap-eyebrow"><span className="ap-eyebrow-dot" />Our Story</div>
            <h1 className="ap-title">Building <span>AI tools</span><br />that actually work.</h1>
            <p className="ap-subtitle">An MSME-registered software initiative from India, focused on practical AI for real people.</p>
          </div>
        </header>

        <main className="ap-main">
          <div className="ap-stats">
            <div className="ap-stat"><div className="ap-stat-val">2026</div><div className="ap-stat-lbl">Founded</div></div>
            <div className="ap-stat"><div className="ap-stat-val">MSME</div><div className="ap-stat-lbl">Registered in India</div></div>
            <div className="ap-stat"><div className="ap-stat-val">10+</div><div className="ap-stat-lbl">AI Features</div></div>
          </div>

          <div className="ap-card">
            <span className="ap-card-icon">🏢</span>
            <h2 className="ap-card-title">Company Identity <span className="bdg">India</span></h2>
            <p className="ap-card-text">
              Infalex is an India-based software initiative focused on building AI-powered productivity and automation tools. The platform is operated as a Micro, Small and Medium Enterprise (MSME) and complies with applicable Indian business regulations. We believe in building tools that are accessible, ethical, and genuinely useful.
            </p>
          </div>

          <div className="ap-card">
            <span className="ap-card-icon">🛡️</span>
            <h2 className="ap-card-title">MSME Registration <span className="bdg">Verified</span></h2>
            <p className="ap-card-text">
              Infalex is registered under the Government of India's MSME (Udyam) framework. This registration recognizes Infalex as a legitimate technology service provider offering digital and software-based services. We operate with full transparency and compliance.
            </p>
          </div>

          <div className="ap-card">
            <span className="ap-card-icon">🔍</span>
            <h2 className="ap-card-title">What We Do</h2>
            <p className="ap-card-text">
              Our primary focus is on Artificial Intelligence solutions that solve practical problems. Our flagship product — Resumetra — is an AI Resume Analyzer and Job Description Matcher designed to help students and professionals improve hiring outcomes through data-driven insights, featuring resume scoring, ATS simulation, AI rewriting, cover letter generation, smart job discovery, and application tracking.
            </p>
          </div>

          <div className="ap-card">
            <span className="ap-card-icon">🚀</span>
            <h2 className="ap-card-title">Our Vision</h2>
            <p className="ap-card-text">
              Founded in 2026, Infalex aims to become a trusted hub for AI-powered tools — combining ethical AI usage, clear policies, and user-focused design. Additional applications will be launched as independent modules under the Infalex ecosystem: developer utilities, agricultural AI, and more — each built to solve a real problem with craftsmanship.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}