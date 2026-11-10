"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Smartphone, BrainCircuit, Server, Boxes, Languages, CheckCircle2, Cpu } from "lucide-react";
import { SKILL_CATEGORIES, PERSONAL_INFO } from "@/data/portfolioData";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const icons = [Smartphone, BrainCircuit, Server, Boxes];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering & <span className="text-gradient-cyan-purple">AI Stack Matrix</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Production-grade competencies developed across international exchanges, enterprise internships, and cutting-edge mobile & AI platforms.
          </p>

          {/* Pillar Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const IconComponent = icons[idx] || Cpu;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 text-left ${
                    isActive
                      ? "border border-cyan-500/50 bg-slate-900/90 shadow-[0_10px_30px_rgba(56,189,248,0.2)] scale-102"
                      : "border border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-mono">Pillar 0{idx + 1}</div>
                    <div className={`text-sm font-bold ${isActive ? "text-white" : "text-slate-300"}`}>
                      {cat.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pillar Skills Display */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>{SKILL_CATEGORIES[activeTab].title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                Verified across active GitHub repositories & production deployments
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full">
              {SKILL_CATEGORIES[activeTab].skills.length} Core Technologies
            </span>
          </div>

          <div className="space-y-6">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-200">{skill.name}</span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-[10px] text-cyan-300 border border-slate-700">
                      {skill.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    {skill.featuredIn && (
                      <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                        In: {skill.featuredIn}
                      </span>
                    )}
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800/80">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(56,189,248,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spoken Languages & Communication Box */}
        <div className="max-w-4xl mx-auto mt-8 rounded-2xl border border-slate-800 bg-slate-950/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Languages className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Spoken Languages & Relocation</div>
              <div className="text-xs text-slate-400">Multilingual collaboration for international teams</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {PERSONAL_INFO.languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-xs font-mono text-slate-300"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-bold text-white">{lang.name}:</span>
                <span className="text-cyan-400">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
