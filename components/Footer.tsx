import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600&display=swap');

        .infalex-footer {
          background: #0b0b14;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 64px 48px 40px;
          font-family: 'Figtree', sans-serif;
          color: #f0f0f8;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
          max-width: 1140px;
          margin-left: auto;
          margin-right: auto;
        }

        .footer-logo {
          font-family: 'Syne', sans-serif;
          font-size: 22px; font-weight: 700;
          color: #f0f0f8; text-decoration: none; letter-spacing: -0.02em;
          display: inline-block; margin-bottom: 14px;
        }
        .footer-logo span { color: #3b6bff; }

        .footer-tagline {
          font-size: 14px; color: rgba(240,240,248,0.45);
          line-height: 1.65; max-width: 280px; margin-bottom: 24px;
        }

        .footer-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 100px; font-size: 12px;
          color: rgba(240,240,248,0.35);
        }
        .footer-badge-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #00d4aa; flex-shrink: 0;
          animation: fp-pulse 2s infinite;
        }
        @keyframes fp-pulse {
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.5; transform:scale(1.5); }
        }

        .footer-col-title {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(240,240,248,0.25);
          margin-bottom: 18px;
        }

        .footer-col-links {
          display: flex; flex-direction: column; gap: 10px;
        }

        .footer-col-link {
          font-size: 14px; color: rgba(240,240,248,0.45);
          text-decoration: none;
          transition: color 0.2s;
          display: flex; align-items: center; gap: 5px;
        }
        .footer-col-link:hover { color: #f0f0f8; }
        .footer-col-link .ext { font-size: 10px; opacity: 0.5; }

        .footer-bottom {
          max-width: 1140px;
          margin: 0 auto;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }

        .footer-copy {
          font-size: 13px; color: rgba(240,240,248,0.25);
        }

        .footer-legal-links {
          display: flex; gap: 20px; flex-wrap: wrap;
        }

        .footer-legal-link {
          font-size: 12px; color: rgba(240,240,248,0.25);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-legal-link:hover { color: rgba(240,240,248,0.5); }

        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 768px) {
          .infalex-footer { padding: 48px 24px 32px; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { align-items: center; text-align: center; }
          .footer-legal-links { justify-content: center; }
        }
      `}</style>

      <footer className="infalex-footer">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">infa<span>lex</span></Link>
            <p className="footer-tagline">
              AI-powered career tools for modern job seekers. An MSME-registered software initiative built in India.
            </p>
            <div className="footer-badge">
              <span className="footer-badge-dot" />
              Resumetra Beta · Free to try
            </div>
          </div>

          {/* Resumetra */}
          <div>
            <p className="footer-col-title">Resumetra</p>
            <div className="footer-col-links">
              <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="footer-col-link">
                Launch App <span className="ext">↗</span>
              </a>
              <Link href="/#features" className="footer-col-link">Features</Link>
              <Link href="/#how-it-works" className="footer-col-link">How it works</Link>
              <Link href="/#pricing" className="footer-col-link">Pricing</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <p className="footer-col-title">Company</p>
            <div className="footer-col-links">
              <Link href="/" className="footer-col-link">Infalex Hub</Link>
              <Link href="/about" className="footer-col-link">About Us</Link>
              <Link href="/pricing" className="footer-col-link">All Plans</Link>
              <Link href="/contact" className="footer-col-link">Contact & Support</Link>
              <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="footer-col-link">
                Blog <span className="ext">↗</span>
              </a>
              <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="footer-col-link">
                Tools <span className="ext">↗</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="footer-col-title">Legal</p>
            <div className="footer-col-links">
              <Link href="/privacy" className="footer-col-link">Privacy Policy</Link>
              <Link href="/terms" className="footer-col-link">Terms of Service</Link>
              <Link href="/refund" className="footer-col-link">Refund Policy</Link>
              <Link href="/delivery" className="footer-col-link">Delivery Policy</Link>
              <Link href="/disclaimer" className="footer-col-link">Disclaimer</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Infalex Ecosystem · MSME Registered · All rights reserved.
          </span>
          <div className="footer-legal-links">
            <Link href="/privacy" className="footer-legal-link">Privacy</Link>
            <Link href="/terms" className="footer-legal-link">Terms</Link>
            <Link href="/refund" className="footer-legal-link">Refunds</Link>
            <Link href="/contact" className="footer-legal-link">Support</Link>
          </div>
        </div>
      </footer>
    </>
  );
}