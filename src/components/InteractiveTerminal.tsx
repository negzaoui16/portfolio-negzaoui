"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, Sparkles, CornerDownLeft } from "lucide-react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";

interface OutputLine {
  id: string;
  type: "command" | "response" | "system" | "error";
  text: string;
  isHtml?: boolean;
}

export default function InteractiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [output, setOutput] = useState<OutputLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "⚡ Negzaoui Terminal v2.4 initialized. Ready for commands.",
    },
    {
      id: "init-2",
      type: "system",
      text: "💡 Type 'help' or click the quick command chips below to explore.",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const quickCommands = ["help", "projects", "skills", "experience", "hire", "clear"];

  const executeCommand = (cmdText: string) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    setHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    const args = rawCmd.toLowerCase().split(" ");
    const command = args[0];

    // Add user command to output
    const userLine: OutputLine = {
      id: Date.now().toString(),
      type: "command",
      text: `$ ${rawCmd}`,
    };

    let responseLine: OutputLine;

    switch (command) {
      case "help":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `AVAILABLE COMMANDS:
  • projects     - View Oussama's 8 featured production projects
  • skills       - Inspect technical stack across Mobile, AI, Cloud & Web3
  • experience   - View professional engineering internships & education
  • about        - Summary of Oussama Negzaoui's background & focus
  • contact      - Get email, phone, location, and social links
  • hire         - Trigger interview request / PFE opportunity
  • sudo         - Try your luck with superuser privileges
  • clear        - Wipe clean the terminal screen`,
        };
        break;

      case "projects":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `FEATURED REPOSITORIES:
1. Project Chronos   [Flutter BLoC + NestJS + Multimodal RAG AI] (AIESEC India)
2. CastMate          [Android Native Kotlin Compose + Gemini AI Video Coach]
3. Arena of Coders   [Full-Stack Flutter/Next.js + Hedera Blockchain + Stream Chat]
4. AI Anti-Cheat     [FastAPI + Whisper Audio + DeepFace Vision + RoBERTa NLP]
5. Restivo           [Zero-Install WebAR 3D Dishes + IMU Euler Sensor Fusion]
6. ChainPlay         [Web3 1v1 PvP Gaming Arcade on Hedera Testnet]
7. Maratech AR       [AR Marathon Runner Navigation App in Flutter]
8. Enterprise Suite  [Symfony + MySQL RBAC Security at Ministry of Economy]`,
        };
        break;

      case "skills":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `CORE TECHNICAL STACK:
• Mobile   : Flutter (BLoC), Android Native (Kotlin / Jetpack Compose), Swift, Dart
• AI / ML  : Multimodal RAG, LangChain, Pinecone, Gemini 1.5 Flash, Whisper, CLIP, DeepFace
• Backend  : NestJS (TypeScript), FastAPI (Python), Symfony (PHP), Spring Boot, Docker
• Web3/3D  : Hedera Hashgraph DLT, WebAR (Three.js), Unity (C# 60FPS)
• Databases: PostgreSQL, MySQL, MongoDB, Prisma ORM, Redis`,
        };
        break;

      case "experience":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `PROFESSIONAL MILESTONES:
1. MMDU University (India)   - Full-Stack & AI Mobile Engineering Intern (July-Aug 2026)
2. Ministry of Economy       - Software Development Intern (Symfony RBAC) (June-Aug 2025)
3. CGI Studio                - Graduation Project Intern (Unity 3D Game) (Feb-May 2024)
4. ESPRIT Engineering School - Software Engineering Degree (Mobile major) (2024-2027)
5. ISAMM                     - Bachelor in Computer Science (2021-2024)`,
        };
        break;

      case "about":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `OUSSAMA NEGZAOUI:
Software & Mobile Engineer | Flutter & Full-Stack | AI Integration
ESPRIT Engineering student (Mobile Major, 2027) & ISAMM CS Graduate (2024).
Obsessed with high-performance cross-platform mobile apps, robust scalable backends,
and cutting-edge Multimodal AI integrations.`,
        };
        break;

      case "contact":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `DIRECT CONTACT CHANNELS:
• Email    : ${PERSONAL_INFO.email}
• Phone    : ${PERSONAL_INFO.phone}
• Location : ${PERSONAL_INFO.location}
• GitHub   : ${PERSONAL_INFO.github}
• LinkedIn : ${PERSONAL_INFO.linkedin}
• Status   : ${PERSONAL_INFO.status}`,
        };
        break;

      case "hire":
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        } catch {}
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "response",
          text: `🎉 EXCELLENT DECISION! Oussama is currently available for PFE 2027 & International Relocation.
Direct email: ${PERSONAL_INFO.email}
Feel free to send a message via the Contact section below!`,
        };
        break;

      case "sudo":
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "error",
          text: "nice try! Permission denied: you are already running as elite recruiter.",
        };
        break;

      case "clear":
        setOutput([]);
        setInput("");
        return;

      default:
        responseLine = {
          id: (Date.now() + 1).toString(),
          type: "error",
          text: `command not found: '${rawCmd}'. Type 'help' to see available commands.`,
        };
        break;
    }

    setOutput((prev) => [...prev, userLine, responseLine]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(input);
    } else if (e.key === "ArrowUp") {
      if (history.length > 0 && historyIndex < history.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInput(history[history.length - 1 - nextIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      id="terminal"
      className="w-full rounded-2xl border border-slate-800 bg-slate-950/90 shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl overflow-hidden font-mono text-sm"
    >
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80 border border-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500/80 border border-green-400" />
          <span className="ml-2 text-xs font-semibold text-slate-400">
            negzaoui@dev-box: ~ (zsh)
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>interactive session</span>
        </div>
      </div>

      {/* Terminal Output Area */}
      <div className="h-64 overflow-y-auto p-4 space-y-2 text-slate-300 font-mono text-xs sm:text-sm">
        {output.map((line) => (
          <div key={line.id} className="leading-relaxed">
            {line.type === "command" && (
              <span className="font-semibold text-cyan-400">{line.text}</span>
            )}
            {line.type === "system" && (
              <span className="text-slate-400 italic">{line.text}</span>
            )}
            {line.type === "response" && (
              <pre className="whitespace-pre-wrap font-mono text-emerald-400/90 bg-emerald-950/10 p-2 rounded-lg border border-emerald-900/20">
                {line.text}
              </pre>
            )}
            {line.type === "error" && (
              <span className="text-red-400 font-medium">{line.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Chips */}
      <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-800/60 bg-slate-900/50 px-4 py-2 text-xs">
        <span className="text-slate-500 font-mono flex items-center gap-1 mr-1">
          <Sparkles className="h-3 w-3 text-cyan-400" /> Quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="rounded-md border border-slate-700/60 bg-slate-800/50 px-2 py-0.5 text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-cyan-300"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Input Prompt */}
      <div className="flex items-center gap-2 border-t border-slate-800 bg-slate-950 px-4 py-2.5">
        <label htmlFor="terminal-command-input" className="text-cyan-400 font-bold">$</label>
        <input
          id="terminal-command-input"
          name="terminal-command-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' or any command..."
          aria-label="Terminal interactive command prompt"
          className="flex-1 bg-transparent text-slate-100 outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
        />
        <button
          onClick={() => executeCommand(input)}
          className="rounded p-1 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          aria-label="Send command"
        >
          <CornerDownLeft className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
