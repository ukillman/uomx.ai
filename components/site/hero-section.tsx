import { ArrowRight, Cpu, Network, Scale } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

import { BackgroundNetwork } from "./background-network";

const institutions = [
  "中国政法大学",
  "上海破产法庭",
  "中伦律师事务所",
  "锦天城律师事务所",
  "KPMG"
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate overflow-hidden">
      <BackgroundNetwork />
      <div className="section-shell relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-20 sm:py-24 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100/95 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-300" />
              </span>
              <span>⚡ Agentic AI 驱动的重整与清算基础设施</span>
            </div>

            <h1 className="mt-8 text-balance text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              认知智能，重构破产重整生态。
            </h1>

            <p className="mt-6 max-w-3xl text-balance text-lg leading-8 text-white/68 sm:text-xl">
              Umob.AI™ Agent OS —— 专为极度复杂重整与清算量身定制的 AI
              底层操作系统。我们将多维度的债权网络、资产拓扑与跨机构协作，转化为可计算、可执行的智能工作流。
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="primary-button">
                启动智能引擎
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#agent-os" className="glass-button">
                查阅底层架构
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "债权网络建模", icon: Network },
                { label: "司法推理中枢", icon: Scale },
                { label: "Agent OS 编排层", icon: Cpu }
              ].map((item) => (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/65 backdrop-blur-lg"
                >
                  <item.icon className="h-4 w-4 text-blue-300" />
                  {item.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-indigo-500/15 blur-[90px]" />

              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-white/40">Live Console</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
                    Agent OS 实时编排面板
                  </h3>
                </div>
                <div className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
                  Live
                </div>
              </div>

              <div className="relative mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "债权关系图谱", value: "128,402" },
                  { label: "并发协同节点", value: "32" },
                  { label: "文书生成延迟", value: "1.3s" }
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">{metric.label}</p>
                    <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 rounded-[1.75rem] border border-white/10 bg-black/45 p-5">
                <div className="absolute left-0 top-8 h-px w-full bg-gradient-to-r from-transparent via-sky-400/20 to-transparent" />
                <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                <div className="animated-beam absolute top-12 h-20 w-32 rounded-full bg-gradient-to-r from-transparent via-blue-400/35 to-transparent blur-2xl" />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">案件智能拓扑</p>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {["购房人", "银行团", "施工方", "SPV", "担保人", "资产池"].map((node) => (
                        <div
                          key={node}
                          className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center text-sm text-white/72"
                        >
                          {node}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/40">Agent 推理流水</p>
                    <div className="mt-4 space-y-3">
                      {[
                        "材料摄取与多模态解析",
                        "债权交叉比对与异常穿透",
                        "方案推演与司法文书生成"
                      ].map((step, index) => (
                        <div key={step} className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-200">
                            0{index + 1}
                          </div>
                          <div className="h-px flex-1 bg-gradient-to-r from-blue-400/40 to-transparent" />
                          <p className="w-[72%] text-sm text-white/70">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="glass-panel rounded-[1.75rem] px-6 py-6 sm:px-8">
            <p className="text-xs uppercase tracking-[0.28em] text-white/42">
              核心算力引擎已为以下顶尖机构提供底层支撑
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {institutions.map((name) => (
                <div
                  key={name}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm text-white/45 grayscale transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:text-white/78"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
