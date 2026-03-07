"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const tools = [
    { title: "Resume Matcher", tag: "Career AI", desc: "Smart analysis to match your resume with the perfect job description using LLMs.", status: "In Development", link: "#", color: "text-amber-600", bg: "bg-amber-50" },
    { title: "DocuMind RAG", tag: "Knowledge Base", desc: "Chat with your PDF documents and extract answers instantly using vector search.", status: "In Development", link: "#", color: "text-purple-600", bg: "bg-purple-50" },
    { title: "PhishGuard", tag: "Security", desc: "Real-time detection of malicious URLs to keep your browsing data safe.", status: "In Development", link: "#", color: "text-red-600", bg: "bg-red-50" },
    { title: "CodeFixer", tag: "Developer Tools", desc: "AI-powered debugger that explains errors and suggests optimized fixes.", status: "In Development", link: "#", color: "text-blue-600", bg: "bg-blue-50" },
    { title: "AgroScan", tag: "Agriculture", desc: "Detect crop diseases from images and get instant remedy suggestions.", status: "In Development", link: "#", color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            System v2.0 Online
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
            Unified Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Hub of the Future</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium mb-10">
            Infalex provides a central access point for next-generation AI utilities, developer tools, and automated workflows.
          </p>
        </div>
      </section>

      {/* Live Product Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Live Product</h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300">
          <div className="flex justify-between items-start mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">Career AI</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse">In Beta (Limited Access)</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Resume Matcher</h3>
          <p className="text-slate-600 mb-6">
            AI-powered resume analysis and job description matching. Upload your resume, paste a JD, and get an instant match score with actionable insights.
          </p>
          <a href="https://resumetra.infalex.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all">
            Access Resumetra &rarr;
          </a>
        </div>
      </section>

      {/* Ecosystem Grid */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Ecosystem</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Explore our suite of specialized AI modules currently in development.</p>
          </div>

          {isLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="h-48 bg-slate-200 rounded-2xl"></div>
               ))}
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Live Tools Card */}
              <a href="https://tools.infalex.com" className="group bg-white p-6 rounded-2xl border-2 border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 flex justify-between">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Utilities</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Infalex Tools</h3>
                <p className="text-slate-600 mb-6 flex-grow">A suite of essential non-AI utilities for everyday tasks. Available now.</p>
                <div className="mt-auto flex justify-between items-center text-sm font-semibold text-blue-600">
                  <span>Live & Operational</span>
                  <span>&rarr;</span>
                </div>
              </a>

              {/* Development Cards */}
              {tools.map((tool, index) => (
                <div key={index} className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col h-full opacity-80 hover:opacity-100">
                  <div className="mb-4">
                    <span className={`px-3 py-1 ${tool.bg} ${tool.color} text-xs font-bold rounded-full`}>{tool.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{tool.desc}</p>
                  <div className="mt-auto text-sm font-medium text-slate-400 flex justify-between items-center">
                    <span>{tool.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}