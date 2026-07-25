"use client";

import { useState } from "react";
import { Page, PageHeader, Container, Section } from "../../components/layout";
import { Mail, Globe, Building, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact Form Submission from ${formState.name}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    window.location.href = `mailto:support@infalex.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <Page>
      <PageHeader 
        title="Get in Touch"
        description="Bug report, feature request, or just want to say hi? We're here."
        badge="Reach Out"
      />
      
      <Section className="pt-0">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
            
            {/* Info */}
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-2">Contact Information</h2>
              <p className="text-foreground-muted mb-8">Reach us through any of these channels.</p>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-5 bg-surface border border-border-subtle rounded-2xl transition-colors hover:border-border hover:bg-surface-hover group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle mb-1">Email Support</p>
                    <p className="text-sm text-foreground-muted"><a href="mailto:support@infalex.com" className="text-primary hover:text-primary-glow transition-colors">support@infalex.com</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface border border-border-subtle rounded-2xl transition-colors hover:border-border hover:bg-surface-hover group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle mb-1">GitHub</p>
                    <p className="text-sm text-foreground-muted"><a href="https://github.com/infalexhq" target="_blank" rel="noreferrer" className="text-primary hover:text-primary-glow transition-colors">github.com/infalexhq</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface border border-border-subtle rounded-2xl transition-colors hover:border-border hover:bg-surface-hover group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle mb-1">Business Type</p>
                    <p className="text-sm text-foreground-muted">MSME Registered SaaS · India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-surface border border-border-subtle rounded-2xl transition-colors hover:border-border hover:bg-surface-hover group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-foreground-subtle mb-1">Support Hours</p>
                    <p className="text-sm text-foreground-muted">Mon – Fri, 10:00 AM – 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface border border-border-subtle rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">Email client opened</h3>
                  <p className="text-foreground-muted max-w-sm">Your email client has been opened. Please send the pre-filled email to complete your message.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-heading font-bold text-foreground mb-8">Send a Message</h2>
                  <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-foreground-subtle mb-2">Your Name</label>
                      <input
                        type="text" required placeholder="Jane Smith"
                        className="w-full px-4 py-3 bg-bg/50 border border-border-subtle rounded-xl text-foreground placeholder-text-subtle focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                        value={formState.name}
                        onChange={e => setFormState(s => ({...s, name: e.target.value}))}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-foreground-subtle mb-2">Email Address</label>
                      <input
                        type="email" required placeholder="jane@example.com"
                        className="w-full px-4 py-3 bg-bg/50 border border-border-subtle rounded-xl text-foreground placeholder-text-subtle focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors"
                        value={formState.email}
                        onChange={e => setFormState(s => ({...s, email: e.target.value}))}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wider uppercase text-foreground-subtle mb-2">How can we help?</label>
                      <textarea
                        required placeholder="Tell us about your issue or question..."
                        className="w-full px-4 py-3 bg-bg/50 border border-border-subtle rounded-xl text-foreground placeholder-text-subtle focus:outline-none focus:border-primary focus:bg-primary/5 transition-colors resize-none min-h-[140px]"
                        value={formState.message}
                        onChange={e => setFormState(s => ({...s, message: e.target.value}))}
                      />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="mt-2 w-full">
                      Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>

          </div>
        </Container>
      </Section>
    </Page>
  );
}