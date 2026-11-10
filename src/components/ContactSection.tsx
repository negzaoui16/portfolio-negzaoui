"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import confetti from "canvas-confetti";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {}
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSending(true);

    // Simulate sending transmission
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch {}
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Initiate a <span className="text-gradient-emerald-cyan">Direct Transmission</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Seeking opportunities for <strong>PFE 2027</strong>, International Relocation, or cutting-edge Mobile & AI engineering projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Credentials & 1-Click Copy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick Email Copy Card */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-[0_15px_40px_rgba(56,189,248,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Primary Channel</div>
                  <div className="text-sm font-bold text-white">Direct Email</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-3 flex items-center justify-between gap-2 mb-4 font-mono text-xs sm:text-sm text-cyan-300">
                <span className="truncate">{PERSONAL_INFO.email}</span>
                <button
                  onClick={copyEmailToClipboard}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors shrink-0"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-400" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>

              <button
                onClick={copyEmailToClipboard}
                className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-3 text-xs sm:text-sm font-bold text-white shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Details List */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 space-y-4 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.location} • Open to Relocation</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <GithubIcon className="h-4 w-4 text-purple-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  github.com/negzaoui16
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <LinkedinIcon className="h-4 w-4 text-blue-400 shrink-0" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  linkedin.com/in/oussama-negzaoui
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Transmission Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-cyan-400" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
                Direct inquiry channel for hiring managers, engineering teams & founders.
              </p>

              {sentSuccess ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center space-y-3">
                  <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Check className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Transmission Delivered</h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Thank you! Your message was received. You can also reach out directly via email at <span className="text-cyan-400 font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSentSuccess(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-slate-400 mb-1">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="John Doe / Tech Lead"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-slate-400 mb-1">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="recruiter@company.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) =>
                        setFormState({ ...formState, subject: e.target.value })
                      }
                      placeholder="PFE 2027 Opportunity / Engineering Role / Project"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Hi Oussama, we came across your work in Flutter and Multimodal AI..."
                      className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-xs sm:text-sm text-white outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-600 py-3.5 text-xs sm:text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span className="font-mono">Transmitting Signal...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
