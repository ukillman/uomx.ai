import Image from "next/image";
import {
  BrainCircuit,
  ScanSearch,
  Workflow
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Card = {
  title: string;
  description: string;
  icon: typeof ScanSearch;
  className: string;
  image: string;
};

const cards: Card[] = [
  {
    title: "Dynamic RAG & Semantic Routing",
    description:
      "Dynamic context window management and semantic routing for hyper-relevant, hallucination-free retrieval.",
    icon: ScanSearch,
    className: "",
    image: "/visuals/card-rag.svg"
  },
  {
    title: "Multi-Agent Orchestration",
    description:
      "Deploy swarms of specialized agents with our proprietary engine managing inter-agent communication and state persistence.",
    icon: Workflow,
    className: "",
    image: "/visuals/card-orchestration.svg"
  },
  {
    title: "Neural-Symbolic Reasoning",
    description:
      "Combining neural intuition with symbolic logic constraints. Execute pathways securely within isolated Sandbox environments.",
    icon: BrainCircuit,
    className: "",
    image: "/visuals/card-reasoning.svg"
  }
];

export function AgentOsSection() {
  return (
    <section id="agent-os" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="AGENT OS"
            title="Core Runtime Primitives for Agent-Grade Systems."
            description="A minimal control surface for retrieval, orchestration, and reasoning, designed to make autonomous systems legible to enterprise operators."
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(240px,auto)] gap-5 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className={card.className}>
              <article className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/18 sm:p-7">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-white/[0.03] blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/78">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/38">
                    Core Module
                  </div>
                </div>

                <h3 className="relative mt-10 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="relative mt-4 text-base leading-7 text-white/65">{card.description}</p>
                <div className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]">
                  <Image
                    src={card.image}
                    alt={`${card.title} interface visual`}
                    width={960}
                    height={720}
                    className="h-auto w-full"
                  />
                </div>
                <div className="relative mt-10 rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                    <span>Runtime Signal</span>
                    <span>Stable</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {card.title === "Dynamic RAG & Semantic Routing" ? (
                      <>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          Context windows adapt to the task surface in real time.
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          Retrieval paths are selected semantically, not statically.
                        </div>
                      </>
                    ) : null}
                    {card.title === "Multi-Agent Orchestration" ? (
                      <>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          Agent roles, memory, and handoff state stay continuously synchronized.
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          The runtime governs communication patterns across specialized agents.
                        </div>
                      </>
                    ) : null}
                    {card.title === "Neural-Symbolic Reasoning" ? (
                      <>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          Constraint-bound execution keeps reasoning pathways inspectable.
                        </div>
                        <div className="rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-white/72">
                          Isolated Sandbox environments reduce operational risk by default.
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:p-7">
            <div className="max-w-2xl">
              <p className="section-kicker">System Integrity</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                Built to make autonomous systems predictable enough for real enterprise deployment.
              </h3>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/70">
              <Workflow className="h-4 w-4 text-white/72" />
              Agent OS establishes the control plane between model output and workflow execution
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
