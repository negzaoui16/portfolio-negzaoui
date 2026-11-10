import ParticleCanvas from "@/components/ParticleCanvas";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Interactive Background Particle Mesh */}
      <ParticleCanvas />

      {/* Cyber Magnetic Cursor */}
      <CustomCursor />

      {/* Top Glassmorphic Navigation */}
      <Navbar />

      {/* Main Content Stream */}
      <main className="relative z-10 flex flex-col">
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceTimeline />
        <ContactSection />
      </main>

      {/* Bottom Footer */}
      <Footer />
    </div>
  );
}
