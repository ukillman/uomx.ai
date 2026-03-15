import { AboutSection } from "@/components/site/about-section";
import { AgentOsSection } from "@/components/site/agent-os-section";
import { FooterSection } from "@/components/site/footer-section";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { SolutionsSection } from "@/components/site/solutions-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[720px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/12 blur-[180px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[28%] h-[520px] w-[520px] rounded-full bg-indigo-600/10 blur-[180px]" />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AgentOsSection />
        <SolutionsSection />
        <AboutSection />
      </main>
      <FooterSection />
    </div>
  );
}
