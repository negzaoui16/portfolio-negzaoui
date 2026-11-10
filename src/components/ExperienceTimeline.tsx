"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, Sparkles } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<"all" | "internship" | "education">("all");

  const filteredItems =
    activeFilter === "all"
      ? EXPERIENCES
      : EXPERIENCES.filter((item) => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-xs font-semibold text-purple-400 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Experience & <span className="text-gradient-cyan-purple">Education Roadmap</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Track record of delivering software across international research labs, government institutions, and elite engineering schools.
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
              }`}
            >
              All Milestones
            </button>
            <button
              onClick={() => setActiveFilter("internship")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "internship"
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
              }`}
            >
              Internships & Industry
            </button>
            <button
              onClick={() => setActiveFilter("education")}
              className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                activeFilter === "education"
                  ? "bg-purple-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
              }`}
            >
              Education & Degrees
            </button>
          </div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 space-y-12">
          {filteredItems.map((item, index) => {
            const isInternship = item.type === "internship";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 sm:pl-10"
              >
                {/* Glowing Node on the timeline */}
                <div
                  className={`absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-slate-950 ${
                    isInternship
                      ? "border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.5)]"
                      : "border-purple-400 text-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.5)]"
                  }`}
                >
                  {isInternship ? (
                    <Briefcase className="h-3.5 w-3.5" />
                  ) : (
                    <GraduationCap className="h-3.5 w-3.5" />
                  )}
                </div>

                {/* Milestone Content Card */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur-xl transition-all hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700/60">
                        <Calendar className="h-3 w-3 text-slate-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="h-3 w-3 text-slate-400" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-1.5 mb-5 text-xs sm:text-sm text-slate-400">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-slate-800/60 px-2.5 py-0.5 font-mono text-[11px] text-slate-300 border border-slate-700/40"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
