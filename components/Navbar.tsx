"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        .infalex-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 68px;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 48px;
          transition: background 0.4s, border-bottom 0.4s;
          font-family: 'Figtree', sans-serif;
        }
        .infalex-nav.scrolled {
          background: rgba(5,5,10,0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .infalex-nav:not(.scrolled) {
          background: rgba(5,5,10,0.6);
          backdrop-filter: blur(12px);
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700;
          color: #f0f0f8; text-decoration: none; letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .nav-logo span { color: #3b6bff; }

        .nav-center {
          display: flex; align-items: center; gap: 2px;
        }

        .nav-link {
          font-size: 13.5px; color: rgba(240,240,248,0.5);
          text-decoration: none;
          padding: 6px 12px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { color: #f0f0f8; background: rgba(255,255,255,0.05); }
        .nav-link.active { color: #f0f0f8; }

        .nav-divider {
          width: 1px; height: 18px;
          background: rgba(255,255,255,0.12);
          margin: 0 8px; flex-shrink: 0;
        }

        .nav-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px;
          background: #3b6bff; color: white;
          font-size: 13.5px; font-weight: 600;
          font-family: 'Figtree', sans-serif;
          border-radius: 100px; text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 0 24px rgba(59,107,255,0.25);
          white-space: nowrap;
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 40px rgba(59,107,255,0.4); }

        .nav-right { display: flex; align-items: center; gap: 10px; }

        /* Hamburger */
        .nav-hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px;
          background: none; border: none;
        }
        .nav-hamburger span {
          display: block; width: 22px; height: 2px;
          background: rgba(240,240,248,0.5); border-radius: 2px;
          transition: all 0.25s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: #f0f0f8; }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: #f0f0f8; }

        /* Mobile menu */
        .nav-mobile {
          position: fixed; top: 68px; left: 0; right: 0; z-index: 99;
          background: rgba(5,5,10,0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 16px 24px 28px;
          display: flex; flex-direction: column; gap: 2px;
          opacity: 0; pointer-events: none; transform: translateY(-8px);
          transition: opacity 0.2s, transform 0.2s;
          font-family: 'Figtree', sans-serif;
        }
        .nav-mobile.open { opacity: 1; pointer-events: all; transform: translateY(0); }

        .nav-mobile-section {
          font-size: 10px; font-weight: 600; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(240,240,248,0.25);
          padding: 12px 12px 6px;
        }
        .nav-mobile-link {
          display: flex; align-items: center; gap: 10px;
          font-size: 15px; color: rgba(240,240,248,0.5);
          text-decoration: none; padding: 10px 12px;
          border-radius: 10px; transition: all 0.15s;
        }
        .nav-mobile-link:hover,
        .nav-mobile-link.active { color: #f0f0f8; background: rgba(255,255,255,0.05); }
        .nav-mobile-link .licon { font-size: 15px; width: 22px; text-align: center; }

        .nav-mobile-cta {
          display: flex; align-items: center; justify-content: center;
          margin-top: 14px; padding: 14px 24px;
          background: #3b6bff; color: white;
          font-size: 15px; font-weight: 600;
          font-family: 'Figtree', sans-serif;
          border-radius: 14px; text-decoration: none;
          box-shadow: 0 0 32px rgba(59,107,255,0.25);
        }

        @media (max-width: 900px) {
          .infalex-nav { padding: 0 24px; }
          .nav-center { display: none; }
          .nav-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`infalex-nav ${isScrolled ? "scrolled" : ""}`}>
        <Link href="/" className="nav-logo">infa<span>lex</span></Link>

        <div className="nav-center">
          <Link href="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>Home</Link>
          <Link href="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>About</Link>
          <Link href="/pricing" className={`nav-link ${isActive("/pricing") ? "active" : ""}`}>Pricing</Link>
          <Link href="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>Contact</Link>
          <div className="nav-divider" />
          <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="nav-link">Blog ↗</a>
          <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="nav-link">Tools ↗</a>
        </div>

        <div className="nav-right">
          <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="nav-cta">
            Try Resumetra →
          </a>
          <button
            className={`nav-hamburger ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`}>
        <p className="nav-mobile-section">Navigate</p>
        <Link href="/" className={`nav-mobile-link ${isActive("/") ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">🏠</span> Home
        </Link>
        <Link href="/about" className={`nav-mobile-link ${isActive("/about") ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">ℹ️</span> About Us
        </Link>
        <Link href="/pricing" className={`nav-mobile-link ${isActive("/pricing") ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">₹</span> Pricing
        </Link>
        <Link href="/contact" className={`nav-mobile-link ${isActive("/contact") ? "active" : ""}`} onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">✉️</span> Contact
        </Link>

        <p className="nav-mobile-section" style={{ marginTop: 8 }}>External</p>
        <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">📝</span> Blog ↗
        </a>
        <a href="https://tools.infalex.com" target="_blank" rel="noreferrer" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="licon">🛠️</span> Tools ↗
        </a>

        <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="nav-mobile-cta" onClick={() => setMobileMenuOpen(false)}>
          Try Resumetra Free →
        </a>
      </div>
    </>
  );
}