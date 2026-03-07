"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading state for the skeleton loader
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* Hero Section */}
            <header className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white -z-10" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Have a bug report, feature request, or just want to say hi? We're here to help you build the future.
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {isLoading ? (
                    /* Skeleton Loader */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 animate-pulse">
                        <div className="space-y-6">
                            <div className="h-8 bg-slate-200 rounded w-1/3 mb-8"></div>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-slate-200 rounded-xl"></div>
                                    <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                            <div className="h-8 bg-slate-200 rounded w-1/4 mb-6"></div>
                            <div className="space-y-4">
                                <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
                                <div className="h-12 bg-slate-200 rounded-xl w-full"></div>
                                <div className="h-32 bg-slate-200 rounded-xl w-full"></div>
                                <div className="h-12 bg-blue-200 rounded-xl w-full mt-6"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Actual Content */
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                        {/* Contact Information Cards */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-2">Contact Information</h2>
                                <p className="text-slate-600">For support inquiries, please reach out to us directly through any of these channels.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Email Card */}
                                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Email Support</p>
                                        <a href="mailto:support@infalex.com" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">support@infalex.com</a>
                                    </div>
                                </div>

                                {/* GitHub Card */}
                                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">GitHub</p>
                                        <a href="https://github.com/infalex" target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">github.com/infalex</a>
                                    </div>
                                </div>

                                {/* Business Details */}
                                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Business Type</p>
                                        <p className="text-slate-600">MSME Registered SaaS</p>
                                    </div>
                                </div>

                                {/* Support Hours */}
                                <div className="group flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">Support Hours</p>
                                        <p className="text-slate-600">Mon – Fri, 10:00 AM – 6:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Card */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl pointer-events-none" />
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 relative z-10">Send a Message</h2>

                            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="sr-only">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="sr-only">How can we help?</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        placeholder="How can we help?"
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2"
                                >
                                    Send Message
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}