import Image from "next/image";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Database,
  LockKeyhole,
  Network,
  Scale,
  Shield
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

import { BackgroundNetwork } from "./background-network";

const integrations = [
  {
    title: "Sovereign LLM Core",
    subtitle: "私有化大模型基座",
    icon: BrainCircuit
  },
  {
    title: "Secure Vector Store",
    subtitle: "加密向量引擎",
    icon: Database
  },
  {
    title: "Legal Reasoning Engine",
    subtitle: "专属法律推理引擎",
    icon: Scale
  },
  {
    title: "Gov-Cloud Ready",
    subtitle: "政务云级安全部署",
    icon: Shield
  },
  {
    title: "Edge Encryption",
    subtitle: "边缘数据加密",
    icon: LockKeyhole
  }
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <BackgroundNetwork />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/82">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-45" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
              </span>
              <span>Autonomous Agent Runtime Layer</span>
            </div>

            <h1 className="mt-8 text-balance text-5xl font-medium tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.75rem]">
              The Cognitive Infrastructure for Autonomous Agents.
            </h1>

            <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-white/62 sm:text-xl">
              Umob.AI Agent OS is the definitive runtime environment for orchestrating complex
              multi-agent systems. We bridge the gap between probabilistic LLMs and deterministic
              enterprise workflows.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="primary-button">
                Initialize OS / Request API Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#agent-os" className="glass-button">
                Explore Runtime Architecture
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "Deterministic Workflow Layer", icon: Network },
                { label: "Runtime Policy Constraints", icon: Scale },
                { label: "Multi-Agent Control Plane", icon: Cpu }
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/58"
                >
                  <item.icon className="h-4 w-4 text-white/68" />
                  {item.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <div className="absolute right-[-4%] top-[10%] h-44 w-44 rounded-full bg-cyan-400/8 blur-[100px]" />
              <div className="absolute left-[-6%] bottom-[8%] h-40 w-40 rounded-full bg-violet-400/7 blur-[104px]" />

              <div className="relative flex items-start justify-between gap-4 px-2 pb-4 pt-2 sm:px-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/35">Product Preview</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Agent OS Workspace
                  </h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/55">
                  Live UI
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03]">
                <Image
                  src="/visuals/hero-agent-os.svg"
                  alt="Umob.AI Agent OS product workspace preview"
                  width={1600}
                  height={1120}
                  className="h-auto w-full"
                  priority
                />

                <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/10 bg-[#0d0d10]/90 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:max-w-[78%]">
                  <div className="flex items-center gap-2 border-b border-white/8 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="ml-3 text-[11px] uppercase tracking-[0.24em] text-white/35">
                      umob-runtime
                    </span>
                  </div>
                  <pre className="mt-4 overflow-x-auto whitespace-pre-wrap break-words text-xs leading-6 text-white/72 sm:text-sm sm:leading-7">
{`> umob init --core gpt-4-turbo --vector-store pinecone
[SYSTEM] Initializing Umob.AI Agent OS...
[RAG] Vectorizing proprietary knowledge base... DONE.
[AGENT] Spawning 'Architect_Agent' into cognitive sandbox... Awaiting instructions.`}
                  </pre>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="glass-panel rounded-[1.75rem] px-6 py-6 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Compliant Tech Stack
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">
                  Purpose-built for the Chinese legal and bankruptcy market where sovereign
                  deployment, encrypted data flow, and infrastructure control are not negotiable.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {integrations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.025] px-4 py-5 text-left transition-all duration-300 hover:border-cyan-300/18 hover:bg-white/[0.04]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/76">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-medium text-white/84">{item.title}</p>
                  <p className="mt-2 text-xs leading-6 tracking-[0.12em] text-white/42">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
