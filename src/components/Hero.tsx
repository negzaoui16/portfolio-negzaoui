"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Sparkles, Terminal as TerminalIcon, Cpu, Smartphone, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import AnimatedProfileCard from "./AnimatedProfileCard";
import InteractiveTerminal from "./InteractiveTerminal";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-purple-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Hero CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              <span>Software & Mobile Engineer • ESPRIT 2027</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hello, I&apos;m{" "}
              <span className="text-gradient-cyan-purple inline-block">
                Oussama Negzaoui
              </span>
            </h1>

            {/* Exact CV Title */}
            <div className="text-lg sm:text-2xl font-semibold text-slate-200 tracking-wide mb-6 flex flex-wrap items-center gap-2">
              <span className="text-cyan-400 font-mono">Software & Mobile Engineer</span>
              <span className="text-slate-600">|</span>
              <span className="text-indigo-300 font-mono">Flutter & Full-Stack</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400 font-mono">AI Integration</span>
            </div>

            {/* Bio Narrative */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Engineering student at <strong className="text-slate-200">ESPRIT</strong> (Mobile Major) with a Bachelor&apos;s in Computer Science from <strong className="text-slate-200">ISAMM</strong>. 
              I engineer production cross-platform mobile apps with <strong className="text-cyan-300">Flutter (BLoC)</strong> & native <strong className="text-indigo-300">Android (Kotlin / Compose)</strong>, 
              scalable backends (<strong className="text-emerald-300">NestJS / FastAPI</strong>), and cutting-edge <strong className="text-purple-300">Multimodal AI pipelines (RAG, Gemini, Vision & Audio)</strong>.
            </p>

            {/* Floating Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-2xl mb-8">
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-cyan-400">15+</div>
                <div className="text-xs text-slate-400 mt-1">Flutter Screens</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-indigo-400">3 AI</div>
                <div className="text-xs text-slate-400 mt-1">Microservices</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">Web3</div>
                <div className="text-xs text-slate-400 mt-1">Hedera DLT</div>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center">
                <div className="font-mono text-xl sm:text-2xl font-bold text-purple-400">60 FPS</div>
                <div className="text-xs text-slate-400 mt-1">Unity & WebAR</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] hover:scale-105 active:scale-95"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all hover:border-cyan-400 hover:bg-slate-800 hover:text-white"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-slate-400 hover:border-slate-700 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-5 w-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 text-slate-400 hover:border-slate-700 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Animated Profile Card & Interactive Terminal CLI (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 w-full flex flex-col justify-center"
          >
            {/* Holographic Animated Profile Card */}
            <AnimatedProfileCard />

            <div className="relative">
              {/* Outer Glow effect behind terminal */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 blur-xl opacity-75" />
              <InteractiveTerminal />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
