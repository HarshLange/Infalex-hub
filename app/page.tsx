"use client";

import { useState, useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   HOOK: simple intersection observer
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const features = [
  {
    icon: "🔍",
    tag: "Core Feature",
    title: "AI Resume Matcher",
    desc: "Upload your resume, paste any job description. Get an instant match score, missing skills report, and line-by-line improvement suggestions — all in seconds.",
    bullets: ["Match score out of 100", "Missing keyword detection", "ATS compatibility report"],
  },
  {
    icon: "📊",
    tag: "Screening",
    title: "ATS Checker",
    desc: "Simulate how Applicant Tracking Systems parse your resume. Fix structure, add missing sections, and ensure your resume isn't filtered before a human ever sees it.",
    bullets: ["Structure & section audit", "Keyword density analysis", "Pass/fail with recommendations"],
  },
  {
    icon: "✍️",
    tag: "Rewriting",
    title: "AI Resume Rewriter",
    desc: "Transform weak, generic bullet points into punchy, impactful statements tailored to the specific job you're targeting. AI-powered, human-reviewed quality.",
    bullets: ["Weak → strong bullet conversion", "Job-description tailoring", "Clarity & impact optimization"],
  },
  {
    icon: "📄",
    tag: "Applications",
    title: "Cover Letter Generator",
    desc: "Generate personalized, non-generic cover letters in seconds. Choose your tone, and the AI crafts a letter that matches your resume to the role perfectly.",
    bullets: ["Tone selection (formal, confident, friendly)", "Resume + JD context-aware", "Credit-based system"],
  },
  {
    icon: "💼",
    tag: "Discovery",
    title: "Smart Job Engine",
    desc: "Not a job board. An AI-enhanced job discovery engine that fetches live listings, structures them for better matching, and ranks them against your profile.",
    bullets: ["Live job listings updated daily", "AI-structured descriptions", "Role + location filtering"],
  },
  {
    icon: "📌",
    tag: "Tracking",
    title: "Application Tracker",
    desc: "Keep your entire job search in one place. Move applications through stages, track your timeline, and never lose track of a promising opportunity.",
    bullets: ["Saved → Applied → Interview → Offer", "Timeline-based tracking", "Status at a glance"],
  },
];

const steps = [
  { num: "01", title: "Upload Your Resume", desc: "Drop your PDF or DOCX. We extract your full career story — skills, experience, impact." },
  { num: "02", title: "Paste a Job Description", desc: "Copy any posting from LinkedIn, Indeed, or anywhere. We decode exactly what the role demands." },
  { num: "03", title: "Get Your Match Report", desc: "Receive your score, gap analysis, ATS report, and rewrite suggestions instantly." },
  { num: "04", title: "Discover & Apply", desc: "Find AI-ranked matching jobs. Track every application in one organized dashboard." },
];

const metrics = [
  { value: "10", unit: "features", label: "All-in-one system" },
  { value: "< 5s", unit: "", label: "Analysis turnaround" },
  { value: "ATS", unit: "ready", label: "Every resume checked" },
  { value: "Real", unit: "jobs", label: "Live job intelligence" },
];

const journey = [
  { icon: "📂", step: "Resume Upload" },
  { icon: "🔍", step: "AI Analysis" },
  { icon: "✍️", step: "Rewriting" },
  { icon: "💼", step: "Job Discovery" },
  { icon: "📄", step: "Cover Letter" },
  { icon: "📌", step: "Tracking" },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const heroFade = useInView(0.01);
  const metricsFade = useInView(0.2);
  const journeyFade = useInView(0.2);
  const featuresFade = useInView(0.1);
  const stepsFade = useInView(0.1);
  const pricingFade = useInView(0.1);
  const ctaFade = useInView(0.1);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    const onMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Figtree:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #05050a;
          --bg2: #0b0b14;
          --surface: #0f0f1a;
          --surface2: #141422;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --text: #f0f0f8;
          --muted: rgba(240,240,248,0.45);
          --muted2: rgba(240,240,248,0.25);
          --accent: #3b6bff;
          --accent-glow: rgba(59,107,255,0.25);
          --accent2: #00d4aa;
          --display: 'Syne', sans-serif;
          --body: 'Figtree', sans-serif;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: var(--body);
          background: var(--bg);
          color: var(--text);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .cursor-blob {
          position: fixed;
          pointer-events: none;
          z-index: 0;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59,107,255,0.07) 0%, transparent 65%);
          transform: translate(-50%, -50%);
          transition: left 0.08s linear, top 0.08s linear;
        }

        /* NAV */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 0 48px;
          display: flex; justify-content: space-between; align-items: center;
          height: 68px;
          transition: background 0.4s, border-bottom 0.4s;
        }
        .nav.scrolled {
          background: rgba(5,5,10,0.92);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
        }
        .nav-logo {
          font-family: var(--display);
          font-size: 20px; font-weight: 700;
          color: var(--text); text-decoration: none; letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .nav-logo span { color: var(--accent); }

        .nav-links {
          display: flex; gap: 4px; align-items: center;
        }
        .nav-link {
          font-size: 13.5px; color: var(--muted);
          text-decoration: none; transition: color 0.2s;
          padding: 6px 12px; border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .nav-link:hover { color: var(--text); background: rgba(255,255,255,0.05); }

        .nav-divider {
          width: 1px; height: 18px;
          background: var(--border2);
          margin: 0 6px;
          flex-shrink: 0;
        }

        .nav-right {
          display: flex; align-items: center; gap: 8px;
        }

        .nav-cta {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 9px 20px;
          background: var(--accent); color: white;
          font-size: 13.5px; font-weight: 600;
          border-radius: 100px; text-decoration: none;
          transition: all 0.2s; box-shadow: 0 0 24px var(--accent-glow);
          white-space: nowrap;
        }
        .nav-cta:hover { transform: translateY(-1px); box-shadow: 0 0 40px rgba(59,107,255,0.4); }

        /* MOBILE MENU */
        .nav-hamburger {
          display: none;
          flex-direction: column; gap: 5px;
          cursor: pointer; padding: 6px;
          background: none; border: none;
          z-index: 101;
        }
        .nav-hamburger span {
          display: block; width: 22px; height: 2px;
          background: var(--muted); border-radius: 2px;
          transition: all 0.25s;
        }
        .nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--text); }
        .nav-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--text); }

        .nav-mobile-menu {
          position: fixed; top: 68px; left: 0; right: 0;
          background: rgba(5,5,10,0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border2);
          padding: 16px 24px 24px;
          z-index: 99;
          display: flex; flex-direction: column; gap: 2px;
          transform: translateY(-8px);
          opacity: 0; pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-mobile-menu.open {
          opacity: 1; pointer-events: all; transform: translateY(0);
        }
        .nav-mobile-section {
          font-size: 10px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted2);
          padding: 12px 12px 6px;
        }
        .nav-mobile-link {
          display: flex; align-items: center; gap: 10px;
          font-size: 15px; color: var(--muted);
          text-decoration: none; padding: 10px 12px;
          border-radius: 10px; transition: all 0.15s;
        }
        .nav-mobile-link:hover { color: var(--text); background: rgba(255,255,255,0.05); }
        .nav-mobile-link .link-icon { font-size: 16px; width: 24px; text-align: center; }
        .nav-mobile-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          margin-top: 12px; padding: 14px 24px;
          background: var(--accent); color: white;
          font-size: 15px; font-weight: 600;
          border-radius: 14px; text-decoration: none;
          box-shadow: 0 0 32px var(--accent-glow);
        }

        /* FADE ANIMATIONS */
        .fade-up {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.75s ease, transform 0.75s ease;
        }
        .fade-up.in { opacity: 1; transform: translateY(0); }
        .delay-1 { transition-delay: 0.1s !important; }
        .delay-2 { transition-delay: 0.2s !important; }
        .delay-3 { transition-delay: 0.3s !important; }
        .delay-4 { transition-delay: 0.4s !important; }
        .delay-5 { transition-delay: 0.5s !important; }

        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 140px 24px 100px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .hero-mesh {
          position: absolute; inset: 0; z-index: 0;
          background:
            radial-gradient(ellipse 70% 60% at 50% -5%, rgba(59,107,255,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 40% 40% at 85% 70%, rgba(0,212,170,0.08) 0%, transparent 50%),
            radial-gradient(ellipse 30% 30% at 10% 80%, rgba(59,107,255,0.05) 0%, transparent 50%);
        }
        .hero-noise {
          position: absolute; inset: 0; z-index: 0; opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-repeat: repeat; background-size: 200px;
        }
        .hero-grid {
          position: absolute; inset: 0; z-index: 0;
          background-image: linear-gradient(rgba(59,107,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,107,255,0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%);
        }
        .hero-content { position: relative; z-index: 1; max-width: 900px; }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 7px 18px;
          background: rgba(59,107,255,0.1);
          border: 1px solid rgba(59,107,255,0.3);
          color: #7da4ff; font-size: 13px; font-weight: 500;
          border-radius: 100px; margin-bottom: 40px;
        }
        .pulse { width: 6px; height: 6px; background: var(--accent2); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }

        .hero-tag {
          font-size: 12px; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--muted); margin-bottom: 20px;
        }

        .hero-headline {
          font-family: var(--display);
          font-size: clamp(52px, 9vw, 104px);
          font-weight: 800;
          line-height: 0.95;
          letter-spacing: -0.04em;
          color: var(--text);
          margin-bottom: 32px;
        }
        .hero-headline .line2 {
          display: block;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 19px; font-weight: 300; color: var(--muted);
          line-height: 1.7; max-width: 580px; margin: 0 auto 48px;
        }

        .hero-actions {
          display: flex; align-items: center; justify-content: center;
          gap: 14px; flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 17px 36px; background: var(--accent); color: white;
          font-family: var(--display); font-size: 15px; font-weight: 600;
          border-radius: 100px; text-decoration: none;
          transition: all 0.25s; box-shadow: 0 0 32px var(--accent-glow);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 0 52px rgba(59,107,255,0.45), 0 12px 32px rgba(59,107,255,0.25); }
        .btn-outline {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 17px 32px; color: var(--muted);
          font-size: 15px; border-radius: 100px; text-decoration: none;
          border: 1px solid var(--border2);
          transition: all 0.2s; background: rgba(255,255,255,0.03);
        }
        .btn-outline:hover { color: var(--text); border-color: rgba(255,255,255,0.2); background: rgba(255,255,255,0.05); }

        .hero-social {
          margin-top: 72px;
          display: flex; align-items: center; justify-content: center; gap: 10px;
        }
        .avatars { display: flex; }
        .av {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid var(--bg); margin-left: -8px;
          font-size: 15px; display: flex; align-items: center; justify-content: center;
          background: var(--surface2);
        }
        .av:first-child { margin-left: 0; }
        .social-text { font-size: 13px; color: var(--muted); }
        .social-text strong { color: var(--text); }

        /* JOURNEY MARQUEE */
        .journey-section {
          padding: 56px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg2);
          overflow: hidden;
          position: relative;
        }
        .journey-section::before,
        .journey-section::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }
        .journey-section::before {
          left: 0;
          background: linear-gradient(90deg, var(--bg2) 0%, transparent 100%);
        }
        .journey-section::after {
          right: 0;
          background: linear-gradient(-90deg, var(--bg2) 0%, transparent 100%);
        }
        .journey-label {
          text-align: center;
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--muted2); margin-bottom: 28px;
          position: relative; z-index: 1;
        }
        .marquee-outer { overflow: hidden; width: 100%; }
        .marquee-track {
          display: flex; align-items: center;
          width: max-content;
          animation: marquee-scroll 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .marquee-step { display: flex; align-items: center; flex-shrink: 0; }
        .journey-node {
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          padding: 18px 24px;
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 16px;
          transition: all 0.25s ease;
          cursor: default;
          position: relative; overflow: hidden;
          min-width: 130px;
        }
        .journey-node::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(59,107,255,0.08) 0%, rgba(0,212,170,0.04) 100%);
          opacity: 0; transition: opacity 0.3s;
        }
        .journey-node:hover { border-color: rgba(59,107,255,0.45); transform: translateY(-3px); box-shadow: 0 8px 28px rgba(59,107,255,0.15), 0 0 0 1px rgba(59,107,255,0.2); }
        .journey-node:hover::before { opacity: 1; }
        .j-icon { font-size: 24px; line-height: 1; position: relative; z-index: 1; }
        .j-label { font-size: 11px; font-weight: 600; color: var(--muted); white-space: nowrap; letter-spacing: 0.05em; position: relative; z-index: 1; }
        .journey-arrow {
          width: 44px; height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04));
          flex-shrink: 0; margin: 0 4px;
        }

        /* METRICS */
        .metrics-section { padding: 80px 24px; }
        .metrics-inner {
          max-width: 1000px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 20px; overflow: hidden;
        }
        .metric-card { background: var(--surface); padding: 40px 28px; text-align: center; transition: background 0.2s; }
        .metric-card:hover { background: var(--surface2); }
        .metric-value {
          font-family: var(--display);
          font-size: 44px; font-weight: 800; letter-spacing: -0.04em;
          background: linear-gradient(135deg, var(--text) 0%, var(--muted) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
          line-height: 1;
        }
        .metric-unit { display: block; font-size: 15px; font-weight: 400; color: var(--accent2); margin-top: 2px; font-family: var(--display); }
        .metric-label { font-size: 13px; color: var(--muted); margin-top: 8px; font-weight: 300; }

        /* FEATURES */
        .features-section { padding: 100px 24px; }
        .section-inner { max-width: 1140px; margin: 0 auto; }
        .section-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent2); margin-bottom: 16px; }
        .section-title {
          font-family: var(--display);
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 800; line-height: 1.0;
          letter-spacing: -0.035em; color: var(--text);
          margin-bottom: 60px; max-width: 620px;
        }
        .section-title em { font-style: italic; font-weight: 400; color: var(--muted); }

        .features-layout {
          display: grid; grid-template-columns: 1fr 1fr; gap: 2px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 24px; overflow: hidden;
        }
        .feature-card {
          background: var(--surface); padding: 40px;
          transition: background 0.25s; position: relative; overflow: hidden;
        }
        .feature-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,107,255,0.5), rgba(0,212,170,0.4), transparent);
          opacity: 0; transition: opacity 0.35s;
        }
        .feature-card::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(59,107,255,0.04) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.3s;
        }
        .feature-card:hover { background: var(--surface2); }
        .feature-card:hover::before { opacity: 1; }
        .feature-card:hover::after { opacity: 1; }
        .feature-tag {
          display: inline-block; padding: 4px 12px;
          background: rgba(255,255,255,0.05); border: 1px solid var(--border2);
          font-size: 11px; font-weight: 600; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--muted2);
          border-radius: 100px; margin-bottom: 20px;
        }
        .feature-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .feature-emoji { font-size: 26px; }
        .feature-name { font-family: var(--display); font-size: 20px; font-weight: 700; color: var(--text); letter-spacing: -0.02em; }
        .feature-desc { font-size: 15px; color: var(--muted); line-height: 1.7; font-weight: 300; margin-bottom: 22px; }
        .feature-bullets { display: flex; flex-direction: column; gap: 8px; }
        .feature-bullet { display: flex; align-items: center; gap: 10px; font-size: 13px; color: var(--muted2); }
        .bullet-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent2); flex-shrink: 0; }

        /* STEPS */
        .steps-section { padding: 100px 24px; background: var(--bg2); border-top: 1px solid var(--border); }
        .steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; }
        .step-num {
          font-family: var(--display); font-size: 72px; font-weight: 800;
          color: rgba(255,255,255,0.04); line-height: 1; letter-spacing: -0.05em; margin-bottom: 12px;
        }
        .step-bar { width: 28px; height: 2px; background: var(--accent); margin-bottom: 16px; border-radius: 2px; }
        .step-title { font-family: var(--display); font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 10px; letter-spacing: -0.01em; }
        .step-desc { font-size: 14px; color: var(--muted); line-height: 1.65; font-weight: 300; }

        /* PRICING */
        .pricing-section { padding: 100px 24px; }
        .pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: 24px; overflow: hidden; max-width: 900px; margin: 0 auto;
        }
        .pricing-card { background: var(--surface); padding: 40px 36px; position: relative; }
        .pricing-card.featured { background: var(--surface2); }
        .pricing-card.featured::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent), var(--accent2), transparent);
        }
        .pricing-label { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted2); margin-bottom: 16px; }
        .pricing-label.hot { color: var(--accent2); }
        .pricing-name { font-family: var(--display); font-size: 22px; font-weight: 700; color: var(--text); margin-bottom: 6px; letter-spacing: -0.02em; }
        .pricing-price { font-family: var(--display); font-size: 44px; font-weight: 800; color: var(--text); letter-spacing: -0.04em; line-height: 1; margin-bottom: 8px; }
        .pricing-price span { font-size: 16px; font-weight: 400; color: var(--muted); }
        .pricing-sub { font-size: 13px; color: var(--muted); margin-bottom: 28px; font-weight: 300; }
        .pricing-divider { height: 1px; background: var(--border); margin-bottom: 28px; }
        .pricing-perks { display: flex; flex-direction: column; gap: 12px; margin-bottom: 32px; }
        .pricing-perk { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--muted); font-weight: 300; }
        .perk-check { color: var(--accent2); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .pricing-btn {
          display: block; text-align: center;
          padding: 13px 24px; border-radius: 100px;
          font-size: 14px; font-weight: 600; text-decoration: none;
          transition: all 0.2s; font-family: var(--display);
        }
        .pricing-btn.outline { border: 1px solid var(--border2); color: var(--muted); background: transparent; }
        .pricing-btn.outline:hover { border-color: rgba(255,255,255,0.2); color: var(--text); }
        .pricing-btn.filled { background: var(--accent); color: white; box-shadow: 0 0 24px var(--accent-glow); }
        .pricing-btn.filled:hover { transform: translateY(-1px); box-shadow: 0 0 40px rgba(59,107,255,0.45); }
        .featured-badge {
          position: absolute; top: -1px; left: 50%; transform: translateX(-50%);
          padding: 5px 16px;
          background: var(--accent2); color: #05050a;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; border-radius: 0 0 12px 12px;
        }

        /* CTA */
        .cta-section { padding: 120px 24px; text-align: center; position: relative; overflow: hidden; border-top: 1px solid var(--border); }
        .cta-glow {
          position: absolute; top: -120px; left: 50%; transform: translateX(-50%);
          width: 700px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(59,107,255,0.12) 0%, transparent 65%);
          pointer-events: none;
        }
        .cta-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
        .cta-headline {
          font-family: var(--display);
          font-size: clamp(44px, 7vw, 80px);
          font-weight: 800; line-height: 0.95;
          letter-spacing: -0.04em; color: var(--text); margin-bottom: 24px;
        }
        .cta-headline em {
          font-style: italic; font-weight: 400;
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .cta-sub { font-size: 18px; color: var(--muted); margin-bottom: 48px; font-weight: 300; line-height: 1.65; }
        .cta-note { font-size: 13px; color: var(--muted2); margin-top: 20px; }

        /* FOOTER */
        .footer {
          border-top: 1px solid var(--border);
          padding: 64px 48px 40px;
          background: var(--bg2);
        }
        .footer-top {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand {}
        .footer-logo {
          font-family: var(--display); font-size: 22px; font-weight: 700;
          color: var(--text); text-decoration: none; letter-spacing: -0.02em;
          display: inline-block; margin-bottom: 14px;
        }
        .footer-logo span { color: var(--accent); }
        .footer-tagline { font-size: 14px; color: var(--muted); line-height: 1.65; max-width: 280px; margin-bottom: 24px; }
        .footer-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          border: 1px solid var(--border2);
          border-radius: 100px; font-size: 12px; color: var(--muted2);
        }
        .footer-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent2); animation: pulse 2s infinite; }

        .footer-col {}
        .footer-col-title {
          font-size: 11px; font-weight: 600; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted2); margin-bottom: 18px;
        }
        .footer-col-links { display: flex; flex-direction: column; gap: 10px; }
        .footer-col-link {
          font-size: 14px; color: var(--muted); text-decoration: none;
          transition: color 0.2s;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-col-link:hover { color: var(--text); }
        .footer-col-link .ext-icon {
          font-size: 10px; opacity: 0.5;
        }

        .footer-bottom {
          padding-top: 28px;
          border-top: 1px solid var(--border);
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 16px;
        }
        .footer-copy { font-size: 13px; color: var(--muted2); }
        .footer-legal-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .footer-legal-link {
          font-size: 12px; color: var(--muted2); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal-link:hover { color: var(--muted); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .footer-top { grid-template-columns: 1fr 1fr; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 900px) {
          .nav { padding: 0 24px; }
          .nav-links { display: none; }
          .nav-divider { display: none; }
          .nav-hamburger { display: flex; }
          .features-layout { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .metrics-inner { grid-template-columns: 1fr 1fr; }
          .footer { padding: 48px 24px 32px; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .hero { padding: 110px 20px 80px; }
          .steps-grid { grid-template-columns: 1fr; }
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { align-items: center; text-align: center; }
          .footer-legal-links { justify-content: center; }
        }
      `}</style>

      {/* Cursor blob */}
      <div className="cursor-blob" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Mobile menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <p className="nav-mobile-section">Product</p>
        <a href="#features" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">✦</span> Features
        </a>
        <a href="#how-it-works" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">→</span> How it works
        </a>
        <a href="#pricing" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">₹</span> Pricing
        </a>

        <p className="nav-mobile-section" style={{ marginTop: 8 }}>Company</p>
        <a href="/" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">🏠</span> Home (Infalex Hub)
        </a>
        <a href="/about" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">ℹ️</span> About Us
        </a>
        <a href="/contact" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">✉️</span> Contact
        </a>
        <a href="https://blog.infalex.com" target="_blank" rel="noreferrer" className="nav-mobile-link" onClick={() => setMobileMenuOpen(false)}>
          <span className="link-icon">📝</span> Blog ↗
        </a>

        <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="nav-mobile-cta" onClick={() => setMobileMenuOpen(false)}>
          Analyze My Resume Free →
        </a>
      </div>

      {/* ── HERO ─────────────────────────────────── */}
      <section className="hero" ref={heroFade.ref}>
        <div className="hero-mesh" />
        <div className="hero-noise" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className={`hero-badge fade-up ${mounted && heroFade.inView ? "in" : ""}`}>
            <span className="pulse" />
            Beta Live — Free to Try Now
          </div>
          <p className={`hero-tag fade-up delay-1 ${mounted && heroFade.inView ? "in" : ""}`}>
            Resumetra by Infalex
          </p>
          <h1 className={`hero-headline fade-up delay-2 ${mounted && heroFade.inView ? "in" : ""}`}>
            Turn your resume into<br />
            <span className="line2">a job-winning machine.</span>
          </h1>
          <p className={`hero-sub fade-up delay-3 ${mounted && heroFade.inView ? "in" : ""}`}>
            The all-in-one AI career platform that analyzes your resume, matches you to real jobs, rewrites your bullets, generates cover letters, and tracks every application — in one system.
          </p>
          <div className={`hero-actions fade-up delay-4 ${mounted && heroFade.inView ? "in" : ""}`}>
            <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="btn-primary">
              Analyze My Resume →
            </a>
            <a href="#features" className="btn-outline">
              Explore Features
            </a>
          </div>
          <div className={`hero-social fade-up delay-5 ${mounted && heroFade.inView ? "in" : ""}`}>
            <div className="avatars">
              {["👩‍💼","👨‍💻","👩‍🔬","👨‍🎨","👩‍💻"].map((e, i) => (
                <div key={i} className="av">{e}</div>
              ))}
            </div>
            <p className="social-text"><strong>Early users</strong> already landing more interviews</p>
          </div>
        </div>
      </section>

      {/* ── JOURNEY MARQUEE ──────────────────────── */}
      <section className="journey-section">
        <p className="journey-label">End-to-end job search journey</p>
        <div className="marquee-outer">
          <div className="marquee-track">
            {[...Array(3)].map((_, copyIdx) =>
              journey.map((j, i) => (
                <div className="marquee-step" key={`${copyIdx}-${i}`}>
                  <div className="journey-node">
                    <span className="j-icon">{j.icon}</span>
                    <span className="j-label">{j.step}</span>
                  </div>
                  <div className="journey-arrow" />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────── */}
      <section className="metrics-section" ref={metricsFade.ref}>
        <div className={`metrics-inner fade-up ${mounted && metricsFade.inView ? "in" : ""}`}>
          {metrics.map((m, i) => (
            <div className="metric-card" key={i}>
              <div className="metric-value">
                {m.value}
                {m.unit && <span className="metric-unit">{m.unit}</span>}
              </div>
              <p className="metric-label">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ─────────────────────────────── */}
      <section className="features-section" id="features" ref={featuresFade.ref}>
        <div className="section-inner">
          <p className={`section-eyebrow fade-up ${mounted && featuresFade.inView ? "in" : ""}`}>Everything you need</p>
          <h2 className={`section-title fade-up delay-1 ${mounted && featuresFade.inView ? "in" : ""}`}>
            Not just a resume checker.<br /><em>A complete career system.</em>
          </h2>
          <div className={`features-layout fade-up delay-2 ${mounted && featuresFade.inView ? "in" : ""}`}>
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <span className="feature-tag">{f.tag}</span>
                <div className="feature-header">
                  <span className="feature-emoji">{f.icon}</span>
                  <h3 className="feature-name">{f.title}</h3>
                </div>
                <p className="feature-desc">{f.desc}</p>
                <div className="feature-bullets">
                  {f.bullets.map((b, j) => (
                    <div className="feature-bullet" key={j}>
                      <span className="bullet-dot" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────── */}
      <section className="steps-section" id="how-it-works" ref={stepsFade.ref}>
        <div className="section-inner">
          <p className={`section-eyebrow fade-up ${mounted && stepsFade.inView ? "in" : ""}`}>How it works</p>
          <h2 className={`section-title fade-up delay-1 ${mounted && stepsFade.inView ? "in" : ""}`}>
            Four steps from<br /><em>resume to offer.</em>
          </h2>
          <div className={`steps-grid fade-up delay-2 ${mounted && stepsFade.inView ? "in" : ""}`}>
            {steps.map((s, i) => (
              <div key={i}>
                <div className="step-num">{s.num}</div>
                <div className="step-bar" />
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────── */}
      <section className="pricing-section" id="pricing" ref={pricingFade.ref}>
        <div className="section-inner">
          <p className={`section-eyebrow fade-up ${mounted && pricingFade.inView ? "in" : ""}`}>Pricing</p>
          <h2 className={`section-title fade-up delay-1 ${mounted && pricingFade.inView ? "in" : ""}`}>
            Start free.<br /><em>Scale when you're ready.</em>
          </h2>
          <div className={`pricing-grid fade-up delay-2 ${mounted && pricingFade.inView ? "in" : ""}`}>
            {/* Free */}
            <div className="pricing-card">
              <p className="pricing-label">Starter</p>
              <h3 className="pricing-name">Free</h3>
              <div className="pricing-price">₹0 <span>/ forever</span></div>
              <p className="pricing-sub">Perfect to get started</p>
              <div className="pricing-divider" />
              <div className="pricing-perks">
                {["5 resume scans / month", "ATS check included", "Job discovery access", "Basic dashboard"].map((p, i) => (
                  <div className="pricing-perk" key={i}><span className="perk-check">✓</span>{p}</div>
                ))}
              </div>
              <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="pricing-btn outline">Get Started Free</a>
            </div>

            {/* Credits */}
            <div className="pricing-card featured">
              <div className="featured-badge">Most Popular</div>
              <p className="pricing-label hot">Credits</p>
              <h3 className="pricing-name">Pay-as-you-go</h3>
              <div className="pricing-price">₹99 <span>/ credit pack</span></div>
              <p className="pricing-sub">Use only what you need</p>
              <div className="pricing-divider" />
              <div className="pricing-perks">
                {["Credits for scans & rewrites", "Cover letter generation", "AI resume rewriter", "Application tracker", "Priority support"].map((p, i) => (
                  <div className="pricing-perk" key={i}><span className="perk-check">✓</span>{p}</div>
                ))}
              </div>
              <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="pricing-btn filled">Buy Credits</a>
            </div>

            {/* Pro */}
            <div className="pricing-card">
              <p className="pricing-label">Unlimited</p>
              <h3 className="pricing-name">Pro</h3>
              <div className="pricing-price">₹499 <span>/ month</span></div>
              <p className="pricing-sub">No limits, no surprises</p>
              <div className="pricing-divider" />
              <div className="pricing-perks">
                {["Unlimited scans & rewrites", "Unlimited cover letters", "Full AI job matching", "Advanced analytics", "Razorpay billing"].map((p, i) => (
                  <div className="pricing-perk" key={i}><span className="perk-check">✓</span>{p}</div>
                ))}
              </div>
              <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="pricing-btn outline">Go Unlimited</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="cta-section" ref={ctaFade.ref}>
        <div className="cta-glow" />
        <div className="cta-inner">
          <h2 className={`cta-headline fade-up ${mounted && ctaFade.inView ? "in" : ""}`}>
            Your next job starts<br /><em>with one scan.</em>
          </h2>
          <p className={`cta-sub fade-up delay-1 ${mounted && ctaFade.inView ? "in" : ""}`}>
            Stop guessing why you're not getting callbacks. Resumetra tells you exactly what to fix — then helps you fix it and find matching jobs immediately.
          </p>
          <div className={`fade-up delay-2 ${mounted && ctaFade.inView ? "in" : ""}`}>
            <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="btn-primary" style={{ fontSize: 16, padding: "18px 44px" }}>
              Analyze My Resume Free →
            </a>
          </div>
          <p className={`cta-note fade-up delay-3 ${mounted && ctaFade.inView ? "in" : ""}`}>
            No credit card · Results in under 5 seconds · Free during beta
          </p>
        </div>
      </section>
    </>
  );
}