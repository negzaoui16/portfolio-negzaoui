"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, Code2, Eye, Layers, Box, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/data/portfolioData";
import { Project, ProjectCategory } from "@/types";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: "All Projects", value: "all" },
    { label: "Mobile & AR", value: "mobile" },
    { label: "AI & Multimodal", value: "ai" },
    { label: "Full-Stack & Web3", value: "fullstack" },
    { label: "WebAR & 3D", value: "webar3d" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold text-indigo-400 mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Featured Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Production Software & <span className="text-gradient-cyan-purple">Flagship Systems</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Architected, built, and optimized across Mobile Ecosystems, High-Throughput Backends, Multimodal AI, and Web3 DLT.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.value
                    ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                    : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-slate-900/90 hover:shadow-[0_20px_50px_rgba(56,189,248,0.12)]"
    >
      {/* Top Meta Header */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
            {project.categoryLabel}
          </span>
          {project.badge && (
            <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-md border border-slate-700/60">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1 mb-4 font-mono">
          {project.subtitle}
        </p>

        {/* Mockup Frame Simulation */}
        <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 font-mono text-xs overflow-hidden relative shadow-inner">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          {project.mockupType === "mobile" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Smartphone className="h-3.5 w-3.5" /> Mobile Runtime
                </span>
                <span>BLoC / Jetpack Compose</span>
              </div>
              <div className="text-slate-300 space-y-1 pt-1">
                <div className="text-emerald-400">✓ State Management: Reactive StreamFlow</div>
                <div className="text-cyan-300">✓ AI Subsystem: Real-time Multimodal Gateway</div>
              </div>
            </div>
          )}

          {project.mockupType === "ide" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-indigo-400">
                  <Code2 className="h-3.5 w-3.5" /> Microservice & Backend Pipeline
                </span>
                <span>NestJS / FastAPI</span>
              </div>
              <div className="text-slate-300 space-y-1 pt-1">
                <div className="text-indigo-300">➜ POST /v1/ai/audit: inference complete</div>
                <div className="text-emerald-400">✓ Status: 200 OK (Latency &lt; 350ms)</div>
              </div>
            </div>
          )}

          {project.mockupType === "webar" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-purple-400">
                  <Eye className="h-3.5 w-3.5" /> WebAR Sensor Fusion
                </span>
                <span>IMU Euler 1:1 Scale</span>
              </div>
              <div className="text-slate-300 space-y-1 pt-1">
                <div className="text-purple-300">✦ Surface Plane: Locked (Table Top)</div>
                <div className="text-emerald-400">✓ 60 FPS WebGL Canvas Active</div>
              </div>
            </div>
          )}

          {project.mockupType === "game" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-yellow-400">
                  <Box className="h-3.5 w-3.5" /> Unity 3D Engine
                </span>
                <span>C# PhysX 60 FPS</span>
              </div>
              <div className="text-slate-300 space-y-1 pt-1">
                <div className="text-yellow-300">✦ Framerate: Stable 60 FPS Target</div>
                <div className="text-emerald-400">✓ Memory Optimization Complete</div>
              </div>
            </div>
          )}

          {/* Metrics bar */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-slate-800/80 text-center">
              {project.metrics.map((m) => (
                <div key={m.label} className="bg-slate-900/60 rounded p-1">
                  <div className="text-[10px] text-slate-500">{m.label}</div>
                  <div className="text-xs font-bold text-slate-200 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Key Features */}
        <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
          {project.keyFeatures.map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Footer: Tech Chips & Source Link */}
      <div className="border-t border-slate-800/80 pt-4 mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-800/60 px-2 py-0.5 font-mono text-[11px] text-slate-300 border border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-cyan-500 hover:text-slate-950"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Inspect Repository</span>
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500">
              Enterprise Internal System
            </span>
          )}

          <span className="text-xs font-mono text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Verified Code</span>
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
