"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');
        .cp { min-height:100vh; background:#05050a; font-family:'Figtree',sans-serif; color:#f0f0f8; }

        .cp-hero {
          position:relative; padding:80px 24px 64px; text-align:center;
          border-bottom:1px solid rgba(255,255,255,0.07); overflow:hidden;
        }
        .cp-hero-bg {
          position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(59,107,255,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 30% 30% at 20% 80%, rgba(0,212,170,0.05) 0%, transparent 50%);
        }
        .cp-hero-grid {
          position:absolute; inset:0; pointer-events:none;
          background-image: linear-gradient(rgba(59,107,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,107,255,0.04) 1px, transparent 1px);
          background-size:60px 60px;
          mask-image:radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 70%);
        }
        .cp-hero-inner { position:relative; z-index:1; max-width:680px; margin:0 auto; }

        .cp-eyebrow {
          display:inline-flex; align-items:center; gap:8px;
          font-size:11px; font-weight:600; letter-spacing:0.14em;
          text-transform:uppercase; color:#00d4aa; margin-bottom:24px;
        }
        .cp-eyebrow-dot { width:6px; height:6px; border-radius:50%; background:#00d4aa; animation:cp-pulse 2s infinite; }
        @keyframes cp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }

        .cp-title {
          font-family:'Syne',sans-serif;
          font-size:clamp(40px,7vw,68px); font-weight:800; line-height:0.95;
          letter-spacing:-0.04em; color:#f0f0f8; margin-bottom:20px;
        }
        .cp-title span {
          background:linear-gradient(135deg,#3b6bff 0%,#00d4aa 100%);
          -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
        }
        .cp-subtitle { font-size:17px; font-weight:300; color:rgba(240,240,248,0.5); line-height:1.7; }

        .cp-main { max-width:1040px; margin:0 auto; padding:64px 24px 96px; }
        .cp-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:40px; align-items:start; }

        /* Info side */
        .cp-info-title {
          font-family:'Syne',sans-serif; font-size:22px; font-weight:700;
          letter-spacing:-0.02em; color:#f0f0f8; margin-bottom:8px;
        }
        .cp-info-sub { font-size:14px; color:rgba(240,240,248,0.4); margin-bottom:28px; font-weight:300; }

        .cp-cards { display:flex; flex-direction:column; gap:12px; }

        .cp-info-card {
          display:flex; align-items:flex-start; gap:16px;
          padding:18px 20px; background:#0f0f1a;
          border:1px solid rgba(255,255,255,0.07); border-radius:16px;
          transition:border-color 0.2s, background 0.2s;
        }
        .cp-info-card:hover { border-color:rgba(255,255,255,0.12); background:#141422; }

        .cp-info-icon {
          width:40px; height:40px; border-radius:12px;
          background:rgba(59,107,255,0.12); border:1px solid rgba(59,107,255,0.2);
          display:flex; align-items:center; justify-content:center;
          font-size:18px; flex-shrink:0;
          transition:background 0.2s;
        }
        .cp-info-card:hover .cp-info-icon { background:rgba(59,107,255,0.2); }

        .cp-info-label { font-size:11px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:rgba(240,240,248,0.3); margin-bottom:4px; }
        .cp-info-value { font-size:14px; color:rgba(240,240,248,0.65); }
        .cp-info-value a { color:#7da4ff; text-decoration:none; }
        .cp-info-value a:hover { color:#b8ccff; }

        /* Form side */
        .cp-form-card {
          background:#0f0f1a; border:1px solid rgba(255,255,255,0.07);
          border-radius:24px; padding:40px;
          position:relative; overflow:hidden;
        }
        .cp-form-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:1px;
          background:linear-gradient(90deg,transparent,rgba(59,107,255,0.5),rgba(0,212,170,0.3),transparent);
        }

        .cp-form-title {
          font-family:'Syne',sans-serif; font-size:22px; font-weight:700;
          color:#f0f0f8; margin-bottom:28px; letter-spacing:-0.02em;
        }

        .cp-form { display:flex; flex-direction:column; gap:16px; }

        .cp-label { display:block; font-size:12px; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; color:rgba(240,240,248,0.3); margin-bottom:8px; }

        .cp-input, .cp-textarea {
          width:100%; padding:14px 16px;
          background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.1);
          border-radius:12px; color:#f0f0f8; font-size:15px;
          font-family:'Figtree',sans-serif; font-weight:300;
          outline:none; transition:border-color 0.2s, background 0.2s;
        }
        .cp-input::placeholder, .cp-textarea::placeholder { color:rgba(240,240,248,0.2); }
        .cp-input:focus, .cp-textarea:focus {
          border-color:rgba(59,107,255,0.5); background:rgba(59,107,255,0.06);
        }
        .cp-textarea { resize:none; min-height:140px; }

        .cp-submit {
          display:flex; align-items:center; justify-content:center; gap:8px;
          width:100%; padding:15px 24px;
          background:#3b6bff; color:white;
          font-size:15px; font-weight:600; font-family:'Figtree',sans-serif;
          border:none; border-radius:12px; cursor:pointer;
          transition:all 0.2s; box-shadow:0 0 24px rgba(59,107,255,0.25);
          margin-top:4px;
        }
        .cp-submit:hover { transform:translateY(-1px); box-shadow:0 0 40px rgba(59,107,255,0.4); }

        .cp-success {
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          gap:16px; padding:40px 20px; text-align:center;
        }
        .cp-success-icon { font-size:48px; }
        .cp-success-title { font-family:'Syne',sans-serif; font-size:22px; font-weight:700; color:#f0f0f8; }
        .cp-success-text { font-size:15px; color:rgba(240,240,248,0.5); font-weight:300; }

        /* Skeleton */
        .cp-skeleton { animation:cp-shimmer 1.5s infinite; border-radius:16px; background:linear-gradient(90deg,#0f0f1a 25%,#141422 50%,#0f0f1a 75%); background-size:200% 100%; }
        @keyframes cp-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        @media(max-width:800px){ .cp-grid{grid-template-columns:1fr;} }
        @media(max-width:500px){ .cp-form-card{padding:28px 20px;} }
      `}</style>

      <div className="cp">
        <header className="cp-hero">
          <div className="cp-hero-bg" />
          <div className="cp-hero-grid" />
          <div className="cp-hero-inner">
            <div className="cp-eyebrow"><span className="cp-eyebrow-dot" />Reach Out</div>
            <h1 className="cp-title">Get in <span>Touch</span></h1>
            <p className="cp-subtitle">Bug report, feature request, or just want to say hi? We're here.</p>
          </div>
        </header>

        <main className="cp-main">
          {isLoading ? (
            <div className="cp-grid">
              <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
                <div className="cp-skeleton" style={{ height:24, width:"60%", marginBottom:8 }} />
                <div className="cp-skeleton" style={{ height:80 }} />
                <div className="cp-skeleton" style={{ height:80 }} />
                <div className="cp-skeleton" style={{ height:80 }} />
                <div className="cp-skeleton" style={{ height:80 }} />
              </div>
              <div className="cp-skeleton" style={{ height:420, borderRadius:24 }} />
            </div>
          ) : (
            <div className="cp-grid">
              {/* Info */}
              <div>
                <h2 className="cp-info-title">Contact Information</h2>
                <p className="cp-info-sub">Reach us through any of these channels.</p>
                <div className="cp-cards">
                  <div className="cp-info-card">
                    <div className="cp-info-icon">✉️</div>
                    <div>
                      <p className="cp-info-label">Email Support</p>
                      <p className="cp-info-value"><a href="mailto:support@infalex.com">support@infalex.com</a></p>
                    </div>
                  </div>
                  <div className="cp-info-card">
                    <div className="cp-info-icon">⌨️</div>
                    <div>
                      <p className="cp-info-label">GitHub</p>
                      <p className="cp-info-value"><a href="https://github.com/infalex" target="_blank" rel="noreferrer">github.com/infalex</a></p>
                    </div>
                  </div>
                  <div className="cp-info-card">
                    <div className="cp-info-icon">🏢</div>
                    <div>
                      <p className="cp-info-label">Business Type</p>
                      <p className="cp-info-value">MSME Registered SaaS · India</p>
                    </div>
                  </div>
                  <div className="cp-info-card">
                    <div className="cp-info-icon">🕐</div>
                    <div>
                      <p className="cp-info-label">Support Hours</p>
                      <p className="cp-info-value">Mon – Fri, 10:00 AM – 6:00 PM IST</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="cp-form-card">
                {submitted ? (
                  <div className="cp-success">
                    <span className="cp-success-icon">✅</span>
                    <h3 className="cp-success-title">Message sent!</h3>
                    <p className="cp-success-text">We'll get back to you within 1–2 business days at your email address.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="cp-form-title">Send a Message</h2>
                    <form className="cp-form" onSubmit={handleSubmit}>
                      <div>
                        <label className="cp-label">Your Name</label>
                        <input
                          type="text" required placeholder="Jane Smith"
                          className="cp-input"
                          value={formState.name}
                          onChange={e => setFormState(s => ({...s, name: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="cp-label">Email Address</label>
                        <input
                          type="email" required placeholder="jane@example.com"
                          className="cp-input"
                          value={formState.email}
                          onChange={e => setFormState(s => ({...s, email: e.target.value}))}
                        />
                      </div>
                      <div>
                        <label className="cp-label">How can we help?</label>
                        <textarea
                          required placeholder="Tell us about your issue or question..."
                          className="cp-textarea"
                          value={formState.message}
                          onChange={e => setFormState(s => ({...s, message: e.target.value}))}
                        />
                      </div>
                      <button type="submit" className="cp-submit">
                        Send Message →
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}