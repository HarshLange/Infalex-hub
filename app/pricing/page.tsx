import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans | Infalex",
  description: "Simple, transparent pricing for Infalex's AI-powered Resume Analyzer. Start free, scale when ready.",
};

import { PageHeader } from "../../components/layout/PageHeader";
import { Container, Section } from "../../components/layout";

export default function PricingPage() {
  const plans = [
    {
      label: "Starter",
      name: "Free",
      price: "₹0",
      period: "/ forever",
      sub: "Perfect to get started",
      perks: ["5 resume scans / month", "ATS check included", "Job discovery access", "Basic dashboard"],
      cta: "Get Started Free",
      ctaHref: "https://resumetra.infalex.com",
      featured: false,
    },
    {
      label: "Credits",
      labelHot: true,
      name: "Pay-as-you-go",
      price: "₹99",
      period: "/ credit pack",
      sub: "Use only what you need",
      perks: ["Credits for scans & rewrites", "Cover letter generation", "AI resume rewriter", "Application tracker", "Priority support"],
      cta: "Buy Credits",
      ctaHref: "https://resumetra.infalex.com",
      featured: true,
      badge: "Most Popular",
    },
    {
      label: "Unlimited",
      name: "Pro",
      price: "₹499",
      period: "/ month",
      sub: "No limits, no surprises",
      perks: ["Unlimited scans & rewrites", "Unlimited cover letters", "Full AI job matching", "Advanced analytics", "Razorpay billing"],
      cta: "Go Unlimited",
      ctaHref: "https://resumetra.infalex.com",
      featured: false,
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Figtree:wght@300;400;500;600&display=swap');
        .pp { min-height:100vh; background:#05050a; font-family:'Figtree',sans-serif; color:#f0f0f8; }

        .pp-hero-bg, .pp-hero-grid, .pp-hero-inner, .pp-eyebrow, .pp-eyebrow-dot, .pp-title, .pp-subtitle, .pp-hero { display: none; } /* removed custom hero classes */



        .pp-main { max-width:1000px; margin:0 auto; padding:64px 24px 96px; }

        .pp-note {
          text-align:center; font-size:13px; color:rgba(240,240,248,0.3);
          margin-bottom:40px;
        }

        .pp-grid {
          display:grid; grid-template-columns:repeat(3,1fr); gap:2px;
          background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.07);
          border-radius:24px; overflow:hidden;
          margin-bottom:48px;
        }

        .pp-card { background:#0f0f1a; padding:40px 36px; position:relative; }
        .pp-card.featured { background:#141422; }
        .pp-card.featured::before {
          content:''; position:absolute; top:0; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,#3b6bff,#00d4aa,transparent);
        }

        .pp-card-badge {
          position:absolute; top:-1px; left:50%; transform:translateX(-50%);
          padding:5px 16px; background:#00d4aa; color:#05050a;
          font-size:10px; font-weight:700; letter-spacing:0.08em;
          text-transform:uppercase; border-radius:0 0 12px 12px;
          white-space:nowrap;
        }

        .pp-card-label {
          font-size:11px; font-weight:600; letter-spacing:0.1em;
          text-transform:uppercase; color:rgba(240,240,248,0.3); margin-bottom:16px;
        }
        .pp-card-label.hot { color:#00d4aa; }

        .pp-card-name {
          font-family:'Syne',sans-serif; font-size:22px; font-weight:700;
          color:#f0f0f8; margin-bottom:6px; letter-spacing:-0.02em;
        }

        .pp-card-price {
          font-family:'Syne',sans-serif; font-size:44px; font-weight:800;
          color:#f0f0f8; letter-spacing:-0.04em; line-height:1; margin-bottom:8px;
        }
        .pp-card-price span { font-size:16px; font-weight:400; color:rgba(240,240,248,0.4); }

        .pp-card-sub { font-size:13px; color:rgba(240,240,248,0.4); margin-bottom:28px; font-weight:300; }

        .pp-divider { height:1px; background:rgba(255,255,255,0.07); margin-bottom:28px; }

        .pp-perks { display:flex; flex-direction:column; gap:12px; margin-bottom:32px; }
        .pp-perk { display:flex; align-items:flex-start; gap:10px; font-size:14px; color:rgba(240,240,248,0.55); font-weight:300; }
        .pp-check { color:#00d4aa; flex-shrink:0; font-size:14px; margin-top:1px; }

        .pp-btn {
          display:block; text-align:center; padding:13px 24px; border-radius:100px;
          font-size:14px; font-weight:600; text-decoration:none;
          font-family:'Figtree',sans-serif; transition:all 0.2s;
        }
        .pp-btn.outline { border:1px solid rgba(255,255,255,0.12); color:rgba(240,240,248,0.5); background:transparent; }
        .pp-btn.outline:hover { border-color:rgba(255,255,255,0.25); color:#f0f0f8; }
        .pp-btn.filled { background:#3b6bff; color:white; box-shadow:0 0 24px rgba(59,107,255,0.25); }
        .pp-btn.filled:hover { transform:translateY(-1px); box-shadow:0 0 40px rgba(59,107,255,0.45); }

        /* FAQ */
        .pp-faq-title {
          font-family:'Syne',sans-serif; font-size:28px; font-weight:700;
          color:#f0f0f8; letter-spacing:-0.02em; text-align:center; margin-bottom:32px;
        }
        .pp-faqs { display:flex; flex-direction:column; gap:12px; max-width:680px; margin:0 auto; }
        .pp-faq {
          background:#0f0f1a; border:1px solid rgba(255,255,255,0.07);
          border-radius:16px; padding:24px 28px;
          transition:border-color 0.2s;
        }
        .pp-faq:hover { border-color:rgba(255,255,255,0.12); }
        .pp-faq-q { font-size:15px; font-weight:500; color:#f0f0f8; margin-bottom:10px; }
        .pp-faq-a { font-size:14px; color:rgba(240,240,248,0.45); font-weight:300; line-height:1.65; }

        @media(max-width:768px){
          .pp-grid { grid-template-columns:1fr; }
          .pp-card-badge { position:static; transform:none; display:inline-block; margin-bottom:12px; border-radius:100px; }
        }
        @media(max-width:500px){ .pp-card{padding:32px 24px;} }
      `}</style>

      <div className="pp">
        <PageHeader 
          title="Start free. Scale when ready."
          description="No hidden fees. Pay-as-you-go or go unlimited — your choice."
          badge="Pricing"
        />

        <main className="pp-main">
          <p className="pp-note">All prices in INR · Payments via Razorpay · Cancel anytime</p>

          <div className="pp-grid">
            {plans.map((plan, i) => (
              <div key={i} className={`pp-card ${plan.featured ? "featured" : ""}`}>
                {plan.badge && <div className="pp-card-badge">{plan.badge}</div>}
                <p className={`pp-card-label ${plan.labelHot ? "hot" : ""}`}>{plan.label}</p>
                <h3 className="pp-card-name">{plan.name}</h3>
                <div className="pp-card-price">{plan.price} <span>{plan.period}</span></div>
                <p className="pp-card-sub">{plan.sub}</p>
                <div className="pp-divider" />
                <div className="pp-perks">
                  {plan.perks.map((p, j) => (
                    <div key={j} className="pp-perk">
                      <span className="pp-check">✓</span>
                      {p}
                    </div>
                  ))}
                </div>
                <a href={plan.ctaHref} target="_blank" rel="noreferrer" className={`pp-btn ${plan.featured ? "filled" : "outline"}`}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="pp-faq-title">Common Questions</h2>
          <div className="pp-faqs">
            {[
              { q: "What is a credit?", a: "1 credit = 1 resume scan or 1 cover letter. Credits don't expire and can be used for any paid feature on Resumetra." },
              { q: "Can I try before paying?", a: "Yes. The Free plan gives you 5 resume scans per month with no credit card required. You can experience the core features before upgrading." },
              { q: "What payment methods are accepted?", a: "We use Razorpay which supports UPI, credit/debit cards, net banking, and wallets. All transactions are secure." },
              { q: "Is there a refund policy?", a: "Because our services involve real-time AI computation, all sales are generally final. We review technical failures case by case. See our Refund Policy for details." },
            ].map((faq, i) => (
              <div key={i} className="pp-faq">
                <p className="pp-faq-q">{faq.q}</p>
                <p className="pp-faq-a">{faq.a}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { q: "What is a credit?", a: "1 credit = 1 resume scan or 1 cover letter. Credits don't expire and can be used for any paid feature on Resumetra." },
              { q: "Can I try before paying?", a: "Yes. The Free plan gives you 5 resume scans per month with no credit card required. You can experience the core features before upgrading." },
              { q: "What payment methods are accepted?", a: "We use Razorpay which supports UPI, credit/debit cards, net banking, and wallets. All transactions are secure." },
              { q: "Is there a refund policy?", a: "Because our services involve real-time AI computation, all sales are generally final. We review technical failures case by case. See our Refund Policy for details." },
            ].map((faq) => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}