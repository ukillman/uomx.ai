import { AboutSection } from "@/components/site/about-section";
import { AgentOsSection } from "@/components/site/agent-os-section";
import { FooterSection } from "@/components/site/footer-section";
import { HeroSection } from "@/components/site/hero-section";
import { Navbar } from "@/components/site/navbar";
import { SolutionsSection } from "@/components/site/solutions-section";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0a0a0a] text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-cyan-400/6 blur-[160px]" />
      <div className="pointer-events-none absolute right-[-6%] top-[22%] h-[440px] w-[440px] rounded-full bg-violet-500/6 blur-[170px]" />
      <div className="pointer-events-none absolute left-[-8%] top-[60%] h-[360px] w-[360px] rounded-full bg-white/[0.03] blur-[150px]" />
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
