import { Project, SkillCategory, ExperienceItem } from "@/types";

export const PERSONAL_INFO = {
  name: "Oussama Negzaoui",
  title: "Software & Mobile Engineer | Flutter & Full-Stack | AI Integration",
  location: "Tunis, Tunisia",
  phone: "+216 28 505 612",
  email: "negzaouioussama15@gmail.com",
  github: "https://github.com/negzaoui16",
  linkedin: "https://linkedin.com/in/oussama-negzaoui",
  status: "🟢 Available for PFE 2027 & International Relocation",
  summary:
    "Engineering student at ESPRIT (Mobile Major, class of 2027) with a Bachelor in Computer Science from ISAMM (2024). Specializing in architecting cross-platform mobile apps (Flutter BLoC & Kotlin Compose), high-throughput enterprise backends (NestJS, FastAPI, Symfony), and state-of-the-art AI systems (Multimodal RAG, Computer Vision & Audio ML).",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "B2 Professional" },
    { name: "French", level: "B2 Professional" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "project-chronos",
    title: "Project Chronos",
    subtitle: "Smart Campus Equipment Sharing & Multimodal AI Troubleshooting Platform",
    category: "mobile",
    categoryLabel: "Mobile & Multimodal AI",
    badge: "AIESEC India Exchange 2026",
    mockupType: "mobile",
    description:
      "Engineered an enterprise-grade smart campus platform at MMDU India. Coordinates a cross-platform mobile client with modular microservices and an autonomous 24/7 technical troubleshooting assistant.",
    keyFeatures: [
      "15+ interactive mobile screens engineered with Flutter & BLoC state management",
      "Multimodal RAG AI Chatbot handling combined text & error photo diagnostic queries",
      "Vector embeddings with Pinecone and autonomous web search fallback for continuous self-learning",
      "Modular TypeScript API in NestJS with JWT authentication, role guards & Cloudinary storage",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "BLoC",
      "NestJS",
      "FastAPI",
      "Python",
      "LangChain",
      "Pinecone",
      "MongoDB",
      "Prisma ORM",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/negzaoui16/Project-Chronos",
    metrics: [
      { label: "Mobile Screens", value: "15+" },
      { label: "AI Response", value: "<1.2s" },
      { label: "Architecture", value: "Clean BLoC" },
    ],
  },
  {
    id: "castmate",
    title: "CastMate (Casting Portal)",
    subtitle: "Native Mobile & AI Video Audition Screening System",
    category: "mobile",
    categoryLabel: "Native Mobile & AI Vision",
    badge: "Native Android & Gemini AI",
    mockupType: "mobile",
    description:
      "Production-ready native Android mobile app for actors and casting directors. Features an autonomous AI Video Agent powered by Google Gemini 1.5 Flash that analyzes candidate audition videos against tailored director rubrics.",
    keyFeatures: [
      "Modern native Android architecture built in Kotlin, Jetpack Compose & Material 3",
      "Offline-first local cache with Room Database and clean MVVM StateFlow patterns",
      "AI Video Screening Agent scoring acting audition tapes against custom criteria",
      "Decentralized actor credentials and tamper-proof verification on Hedera Hashgraph",
    ],
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Room DB",
      "NestJS 11",
      "Gemini 1.5 Flash",
      "Hedera DLT",
      "StateFlow",
      "Coroutines",
    ],
    githubUrl: "https://github.com/negzaoui16/CastMate",
    metrics: [
      { label: "Native UI", value: "100% Compose" },
      { label: "AI Model", value: "Gemini 1.5 Flash" },
      { label: "Storage", value: "Offline-First Room" },
    ],
  },
  {
    id: "arena-of-coders",
    title: "Arena of Coders",
    subtitle: "Competitive Hackathon Platform & Talent Scouting Ecosystem",
    category: "fullstack",
    categoryLabel: "Full-Stack & Web3",
    badge: "ESPRIT PIM Flagship",
    mockupType: "ide",
    description:
      "Comprehensive hackathon and developer scouting ecosystem connecting student builders with tech enterprises. Features real-time multi-room messaging, filtered leaderboards, and on-chain Hedera reward distribution.",
    keyFeatures: [
      "Full cross-platform experience with Flutter client and Next.js web application",
      "Scalable TypeScript backend with NestJS, Prisma ORM, and MongoDB replica clustering",
      "Live real-time collaborative chat rooms powered by Stream Chat SDK",
      "Instant tokenized prize distribution on Hedera Testnet smart contracts",
    ],
    techStack: [
      "Flutter",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Prisma ORM",
      "MongoDB",
      "Hedera Hashgraph",
      "Stream Chat",
    ],
    githubUrl: "https://github.com/negzaoui16/Arena-Of-Coders",
    metrics: [
      { label: "Ecosystem", value: "Mobile + Web" },
      { label: "DLT Ledger", value: "Hedera Testnet" },
      { label: "Chat Protocol", value: "Stream SDK" },
    ],
  },
  {
    id: "arena-anticheat",
    title: "Arena AI Anti-Cheat Subsystem",
    subtitle: "Multimodal Proctoring: Facial Biometrics, Audio Timbre & RoBERTa AI",
    category: "ai",
    categoryLabel: "Deep AI Microservices",
    badge: "Autonomous AI Agent",
    mockupType: "ide",
    description:
      "Three autonomous AI microservices designed to preserve academic and competitive integrity in hackathons and coding assessments using vision, voice, and natural language models.",
    keyFeatures: [
      "Facial Biometrics & Gaze Tracking using DeepFace / OpenCV vision pipelines",
      "Audio Timbre & Environmental Room Noise classification powered by Whisper",
      "RoBERTa NLP checkpoint auditing detecting AI-generated code snippets vs genuine human authorship",
      "FastAPI asynchronous streaming endpoints with low-latency inference pipelines",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "RoBERTa",
      "Whisper",
      "DeepFace",
      "OpenCV",
      "PyTorch",
      "Hugging Face",
    ],
    githubUrl: "https://github.com/negzaoui16/Arena-Of-Coders-AI-AntiCheat",
    metrics: [
      { label: "AI Modalities", value: "Vision + Audio + NLP" },
      { label: "Inference Latency", value: "<350ms" },
      { label: "Framework", value: "FastAPI Async" },
    ],
  },
  {
    id: "restivo",
    title: "Restivo",
    subtitle: "Zero-Install Interactive WebAR 3D Dining & SaaS Platform",
    category: "webar3d",
    categoryLabel: "WebAR & Computer Vision",
    badge: "Computer Vision & AR",
    mockupType: "webar",
    description:
      "Innovative restaurant management platform allowing patrons to project true-to-scale (1:1) interactive 3D virtual dishes onto physical tables with real-time multi-angle inspection before ordering.",
    keyFeatures: [
      "Zero-install browser WebAR powered by camera feeds and IMU Euler rotation matrices",
      "True-to-scale (1:1) photorealistic 3D dish rendering with dynamic table surface anchoring",
      "Full-stack restaurant management SaaS for menu catalogs, orders, and table analytics",
      "Mobile-optimized 60 FPS WebGL rendering without native application downloads",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "WebXR",
      "Tailwind CSS",
      "IMU Sensor Fusion",
    ],
    githubUrl: "https://github.com/negzaoui16/restivo-V1",
    metrics: [
      { label: "Scale Accuracy", value: "1:1 Physical" },
      { label: "Install Required", value: "0 MB (WebAR)" },
      { label: "Framerate", value: "60 FPS WebGL" },
    ],
  },
  {
    id: "chainplay",
    title: "ChainPlay Web3 Arcade",
    subtitle: "Decentralized 1v1 PvP Gaming Arena on Hedera Hashgraph",
    category: "fullstack",
    categoryLabel: "Web3 & Blockchain",
    badge: "Hedera Testnet (EVM 296)",
    mockupType: "ide",
    description:
      "Decentralized competitive gaming arcade allowing players to compete in 1v1 PvP matches wagered with native CPT utility tokens on Hedera Testnet smart contracts.",
    keyFeatures: [
      "Solidity smart contracts executing verifiable wager pools and escrow releases",
      "Next.js 14 App Router frontend with real-time wallet interaction via HashConnect",
      "Instant block finality (<3s) and micro-cent fee efficiency powered by Hedera Hashgraph",
      "Full responsive cyber dark UI with interactive sound effects and match history",
    ],
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Solidity",
      "Hedera Hashgraph",
      "Tailwind CSS",
      "Ethers.js",
    ],
    githubUrl: "https://github.com/negzaoui16/chainplay-web3-arcade",
    metrics: [
      { label: "Finality Time", value: "<3.0s" },
      { label: "Network", value: "Hedera EVM 296" },
      { label: "Smart Contracts", value: "Solidity 0.8" },
    ],
  },
  {
    id: "maratech",
    title: "Maratech Hackathon AR App",
    subtitle: "Augmented Reality Marathon Navigation & Live Runner Telemetry",
    category: "mobile",
    categoryLabel: "Mobile & AR",
    badge: "Hackathon Sprint",
    mockupType: "mobile",
    description:
      "Cross-platform Flutter application engineered during an agile hackathon sprint for a marathon running association, incorporating Augmented Reality racecourse guidance.",
    keyFeatures: [
      "AR-anchored race markers directing runners along optimal marathon routes",
      "Real-time runner telemetry, milestone pace calculation, and live spectator leaderboards",
      "Geofenced checkpoint validation preventing route deviations",
    ],
    techStack: ["Flutter", "Dart", "ARCore", "ARKit", "Geolocation API", "Firebase"],
    githubUrl: "https://github.com/negzaoui16/marathonfrontend",
    metrics: [
      { label: "Tracking", value: "Real-Time GPS" },
      { label: "Guidance", value: "AR Markers" },
    ],
  },
  {
    id: "ministry-economy",
    title: "Enterprise Workflow Suite",
    subtitle: "Administrative Digitization & RBAC Security Suite",
    category: "fullstack",
    categoryLabel: "Enterprise Systems",
    badge: "Ministry of Economy & Planning",
    mockupType: "ide",
    description:
      "Architected and deployed a secure internal enterprise web application to digitize leave requests, meeting room reservations, and confidential administrative workflows.",
    keyFeatures: [
      "Enterprise Symfony (PHP) architecture with MySQL relational schema optimization",
      "Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA) enforcement",
      "Database query indexing eliminating administrative bottlenecks and ensuring full traceability",
    ],
    techStack: ["Symfony", "PHP", "MySQL", "RBAC", "Bootstrap", "Docker"],
    metrics: [
      { label: "Security", value: "MFA + RBAC" },
      { label: "Impact", value: "100% Digitized" },
    ],
  },
  {
    id: "cgi-studio-game",
    title: "Interactive 3D Video Game",
    subtitle: "Physics Mechanics, Sound Synthesis & 60 FPS Optimization",
    category: "webar3d",
    categoryLabel: "Game Dev & 3D",
    badge: "CGI Studio PFE",
    mockupType: "game",
    description:
      "Designed and engineered an interactive 3D video game using Unity and C#, implementing custom player mechanics, controller physics, sound synthesis, and real-time UI.",
    keyFeatures: [
      "Rigged 3D assets, fluid animation blends, and dynamic environmental physics",
      "Memory profiling and performance optimization ensuring rock-solid 60 FPS gameplay",
      "Real-time UI audio synthesis and state-driven game loop architecture",
    ],
    techStack: ["Unity", "C#", "3D Rigging", "PhysX", "Shader Graph", "HLSL"],
    metrics: [
      { label: "Performance", value: "Solid 60 FPS" },
      { label: "Engine", value: "Unity 3D / C#" },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Mobile Engineering",
    iconName: "Smartphone",
    color: "#38BDF8", // Cyan
    skills: [
      { name: "Flutter (BLoC Pattern)", level: 95, tag: "Primary", featuredIn: "Chronos / Arena" },
      { name: "Android Native (Kotlin & Compose)", level: 90, tag: "Native", featuredIn: "CastMate" },
      { name: "Dart", level: 95, tag: "Language", featuredIn: "Cross-Platform" },
      { name: "iOS Native (Swift)", level: 80, tag: "Native", featuredIn: "Casting Portal" },
      { name: "Clean Architecture & StateFlow", level: 92, tag: "Architecture", featuredIn: "Enterprise" },
    ],
  },
  {
    title: "AI & Multimodal Intelligence",
    iconName: "BrainCircuit",
    color: "#818CF8", // Cyber Violet
    skills: [
      { name: "Multimodal RAG & LangChain", level: 92, tag: "AI/RAG", featuredIn: "Project Chronos" },
      { name: "Pinecone Vector DB", level: 90, tag: "Vector Search", featuredIn: "Project Chronos" },
      { name: "Google Gemini 1.5 Flash API", level: 90, tag: "VLM", featuredIn: "CastMate" },
      { name: "Vision-Language Models (VLM)", level: 88, tag: "Vision", featuredIn: "CastMate / AntiCheat" },
      { name: "Whisper (Audio Timbre) & RoBERTa", level: 86, tag: "Audio/NLP", featuredIn: "Anti-Cheat" },
      { name: "DeepFace Facial Biometrics", level: 88, tag: "Computer Vision", featuredIn: "Anti-Cheat" },
    ],
  },
  {
    title: "Backend & Cloud Architecture",
    iconName: "Server",
    color: "#34D399", // Emerald Green
    skills: [
      { name: "NestJS (TypeScript)", level: 92, tag: "Enterprise", featuredIn: "Chronos / Arena" },
      { name: "FastAPI (Python)", level: 90, tag: "Microservices", featuredIn: "Chronos / AI Subsystems" },
      { name: "Next.js 14/15 (React 19)", level: 88, tag: "Full-Stack", featuredIn: "Restivo / Arena" },
      { name: "Symfony (PHP) & Spring Boot", level: 85, tag: "Enterprise", featuredIn: "Ministry of Economy" },
      { name: "MongoDB & Prisma ORM", level: 90, tag: "Database", featuredIn: "Production Schema" },
      { name: "PostgreSQL & MySQL", level: 88, tag: "Relational", featuredIn: "Optimized Indexes" },
      { name: "Docker & RESTful APIs", level: 88, tag: "DevOps", featuredIn: "Containerization" },
    ],
  },
  {
    title: "Web3, 3D & Tools",
    iconName: "Boxes",
    color: "#F472B6", // Pink/Rose Neon
    skills: [
      { name: "Hedera Hashgraph DLT", level: 88, tag: "Blockchain", featuredIn: "Arena / CastMate" },
      { name: "Zero-Install WebAR (IMU Euler)", level: 86, tag: "AR/VR", featuredIn: "Restivo" },
      { name: "Unity & C# Game Dev", level: 85, tag: "3D Graphics", featuredIn: "CGI Studio PFE" },
      { name: "Git, GitHub Actions & CI/CD", level: 92, tag: "DevOps", featuredIn: "All Projects" },
      { name: "Postman, Firebase & Cloudinary", level: 90, tag: "Cloud Services", featuredIn: "Asset Hosting" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "mmdu-india",
    role: "Full-Stack & AI Mobile Engineering Intern",
    company: "Maharishi Markandeshwar University (MMDU)",
    location: "Haryana, India",
    period: "July 2026 – August 2026",
    type: "internship",
    description:
      "International engineering exchange through AIESEC. Architected and engineered the complete client ecosystem and intelligent AI gateway for Project Chronos, an enterprise smart campus equipment sharing and AI troubleshooting platform.",
    highlights: [
      "Built 15+ interactive mobile screens in Flutter utilizing BLoC pattern, QR verification, and Web3 balance tracking",
      "Constructed a modular NestJS/Prisma API with role-based guards, MongoDB modeling, and Cloudinary asset storage",
      "Developed an autonomous 24/7 technical troubleshooting assistant in FastAPI, LangChain, and Pinecone vector search with web fallback",
    ],
    skills: ["Flutter", "Dart", "BLoC", "NestJS", "FastAPI", "Python", "LangChain", "Pinecone", "MongoDB", "Cloudinary"],
  },
  {
    id: "ministry-economy",
    role: "Software Development Intern",
    company: "Ministry of Economy & Planning",
    location: "Tunis, Tunisia",
    period: "June 2025 – August 2025",
    type: "internship",
    description:
      "Architected and deployed a secure internal enterprise web application to digitize administrative workflows, employee leave requests, and meeting reservations.",
    highlights: [
      "Engineered Role-Based Access Control (RBAC), multi-factor authentication, and audit logs",
      "Optimized MySQL relational schemas and indexing to eliminate administrative operational bottlenecks",
    ],
    skills: ["Symfony", "PHP", "MySQL", "RBAC", "Enterprise Architecture"],
  },
  {
    id: "cgi-studio",
    role: "Graduation Project (PFE) Intern",
    company: "CGI Studio",
    location: "Tunis, Tunisia",
    period: "February 2024 – May 2024",
    type: "internship",
    description:
      "Designed and developed an interactive 3D video game using Unity and C# as a graduation project, optimizing mechanics, physics, and frame rates.",
    highlights: [
      "Programmed player mechanics, controller physics, sound synthesis, and real-time UI components",
      "Integrated rigged 3D assets and animations while conducting memory optimization to guarantee stable 60 FPS performance",
    ],
    skills: ["Unity", "C#", "3D Rigging", "PhysX", "Optimization"],
  },
  {
    id: "esprit",
    role: "Software Engineering Degree (Mobile Major)",
    company: "ESPRIT Engineering School",
    location: "Tunis, Tunisia",
    period: "Expected 2027",
    type: "education",
    description:
      "Specializing in Mobile Engineering, Distributed Systems, Cloud Architecture, and Applied Artificial Intelligence. Leading academic innovation projects including Arena of Coders and CastMate.",
    highlights: [
      "Major: Mobile Engineering (Android, iOS, Cross-Platform)",
      "PIM Flagship Project: Arena of Coders (Hedera Blockchain + AI Anti-Cheat)",
    ],
    skills: ["Mobile Systems", "Distributed Architecture", "AI Engineering", "Blockchain DLT"],
  },
  {
    id: "isamm",
    role: "Bachelor in Computer Science",
    company: "ISAMM (Higher Institute of Multimedia Arts)",
    location: "Manouba, Tunisia",
    period: "July 2024",
    type: "education",
    description:
      "Graduated with honors. Rigorous foundation in software engineering, algorithms, data structures, multimedia systems, and interactive 3D technologies.",
    highlights: [
      "Comprehensive curriculum in algorithms, object-oriented systems, and multimedia",
      "PFE evaluated with Highest Distinction at CGI Studio",
    ],
    skills: ["Computer Science", "Software Architecture", "Algorithms", "Multimedia"],
  },
  {
    id: "bac",
    role: "High School Baccalaureate – Computer Science Focus",
    company: "Lycée Secondaire",
    location: "Tunisia",
    period: "July 2020",
    type: "education",
    description: "National secondary degree with specialized focus on Computer Science, Mathematics, and Algorithms.",
    highlights: ["Strong foundation in computational logic, mathematics, and programming fundamentals"],
    skills: ["Algorithms", "Mathematics", "Logic"],
  },
];
