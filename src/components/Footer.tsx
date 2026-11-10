"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Mail, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      // Tunis Time (GMT+1)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Tunis",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/80 py-12 text-slate-400 font-mono text-xs z-10 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">Oussama Negzaoui</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-400">Portfolio 2026/2027</span>
          </div>
          <p className="text-slate-500 text-[11px]">
            Software & Mobile Engineer | Flutter & Full-Stack | AI Integration
          </p>
        </div>

        {/* Live Tunis Time */}
        <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-1.5 text-slate-300">
          <Clock className="h-3.5 w-3.5 text-cyan-400" />
          <span>Tunis, TN:</span>
          <span suppressHydrationWarning className="text-emerald-400 font-bold">{time || "Loading..."}</span>
          <span className="text-slate-500">(GMT+1)</span>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 py-1.5 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 transition-all ml-2"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
