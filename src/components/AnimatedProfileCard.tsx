"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Smartphone, Sparkles, Server, CheckCircle2, ShieldCheck, MapPin } from "lucide-react";

export default function AnimatedProfileCard() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setRotateX(((y - centerY) / centerY) * -8);
    setRotateY(((x - centerX) / centerX) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mb-6 rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute -top-12 -left-12 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-44 w-44 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

      <div className="relative flex flex-col sm:flex-row items-center gap-5 z-10">
        
        {/* Animated Avatar Frame with Rotating Conic Glow */}
        <div className="relative shrink-0">
          {/* Rotating Conic Gradient Aura */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 via-purple-500 to-emerald-500 blur-sm opacity-80 animate-spin-slow" />
          
          {/* Avatar Container */}
          <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl overflow-hidden border-2 border-slate-900 bg-slate-950 shadow-2xl">
            <Image
              src="/profile.png"
              alt="Oussama Negzaoui"
              width={256}
              height={256}
              priority
              className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />

            {/* Subtle holographic scanline reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-pulse" />
          </div>

          {/* Online Pulsing Indicator */}
          <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border-2 border-slate-900 shadow-md">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
          </span>
        </div>

        {/* Profile Info & Floating Badges */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
              <span>Oussama Negzaoui</span>
              <ShieldCheck className="h-4 w-4 text-cyan-400" />
            </h3>
            <span className="rounded-full bg-cyan-950/60 border border-cyan-800/50 px-2 py-0.5 text-[10px] font-mono font-medium text-cyan-300">
              ESPRIT 2027
            </span>
          </div>

          <p className="text-xs text-slate-400 font-mono flex items-center justify-center sm:justify-start gap-1">
            <MapPin className="h-3 w-3 text-slate-500" />
            <span>Tunis, Tunisia • Open to Global Relocation</span>
          </p>

          {/* Floating Mini Tech Tags */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2 py-1 text-[11px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.2)]"
            >
              <Smartphone className="h-3 w-3" />
              <span>Flutter BLoC</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="inline-flex items-center gap-1 rounded-lg border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[11px] font-mono text-purple-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
            >
              <Sparkles className="h-3 w-3" />
              <span>Multimodal AI</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[11px] font-mono text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            >
              <Server className="h-3 w-3" />
              <span>NestJS / FastAPI</span>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
