import {
  BrainCircuit,
  Network,
  ScanSearch,
  ScrollText,
  ShieldCheck
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Card = {
  title: string;
  description: string;
  icon: typeof ScanSearch;
  className: string;
};

const cards: Card[] = [
  {
    title: "多模态债权解析引擎",
    description:
      "机器视觉与大语言模型深度融合，毫秒级解构海量申报材料。自动进行交叉比对与穿透核查，构建高精度债权图谱。",
    icon: ScanSearch,
    className: "md:col-span-2 xl:row-span-2"
  },
  {
    title: "领域私有大模型",
    description:
      "沉淀中国破产重整行业十余年深厚 Know-How，构建专属司法智能库。让每一次业务判断，都有全维度的历史洞察与合规支撑。",
    icon: BrainCircuit,
    className: ""
  },
  {
    title: "生成式司法文书",
    description:
      "摒弃静态模板。Agent 基于案件全局上下文动态推理，一键生成符合严苛司法规范的深度定制文书。",
    icon: ScrollText,
    className: ""
  },
  {
    title: "全景数字共识平台",
    description:
      "突破物理与算力边界，支撑超大规模债权人并发。以智能风控与实时鉴权机制，保障程序正义与数据绝对安全。",
    icon: ShieldCheck,
    className: "md:col-span-2"
  }
];

export function AgentOsSection() {
  return (
    <section id="agent-os" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="AGENT OS"
            title="算力接管繁杂，智慧回归决策。"
            description="传统的表单与流程，已无法承载现代重整案件的海量数据与多方博弈。你需要的是具备深度推理能力的思考引擎。"
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[minmax(240px,auto)] gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className={card.className}>
              <article className="glass-panel group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 sm:p-7">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-blue-200">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/40">
                    Agent Primitive
                  </div>
                </div>

                <h3 className="relative mt-10 text-2xl font-semibold tracking-[-0.04em] text-white">
                  {card.title}
                </h3>
                <p className="relative mt-4 text-base leading-7 text-white/65">{card.description}</p>

                {card.title === "多模态债权解析引擎" ? (
                  <div className="relative mt-10 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "视觉解析", value: "OCR + 表格还原" },
                      { label: "穿透核查", value: "交叉验证 + 风险标注" },
                      { label: "图谱构建", value: "债权关系实时建模" }
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-white/40">{item.label}</p>
                        <p className="mt-4 text-sm leading-6 text-white/75">{item.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {card.title === "领域私有大模型" ? (
                  <div className="relative mt-10 flex flex-wrap gap-3">
                    {["裁判规则", "债权审核逻辑", "表决机制", "资产处置路径", "历史案例映射"].map(
                      (chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/72"
                        >
                          {chip}
                        </span>
                      )
                    )}
                  </div>
                ) : null}

                {card.title === "生成式司法文书" ? (
                  <div className="relative mt-10 rounded-[1.5rem] border border-white/10 bg-black/35 p-4">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/40">
                      <span>Document Synthesis</span>
                      <span>v6.2</span>
                    </div>
                    <div className="mt-5 space-y-3">
                      {["管理人报告", "债权表决结果", "法院提交材料", "方案摘要生成"].map((line) => (
                        <div
                          key={line}
                          className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/72"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {card.title === "全景数字共识平台" ? (
                  <div className="relative mt-10 grid gap-4 sm:grid-cols-4">
                    {[
                      { label: "并发债权人", value: "100K+" },
                      { label: "实时鉴权", value: "Layered ACL" },
                      { label: "数字投票", value: "Consensus Safe" },
                      { label: "数据隔离", value: "Zero-Trust" }
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.5rem] border border-white/10 bg-black/35 p-4"
                      >
                        <p className="text-xs uppercase tracking-[0.22em] text-white/40">{item.label}</p>
                        <p className="mt-4 text-sm leading-6 text-white/75">{item.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <div className="glass-panel flex flex-col items-start justify-between gap-6 rounded-[2rem] p-6 sm:flex-row sm:items-center sm:p-7">
            <div className="max-w-2xl">
              <p className="section-kicker">Consensus Layer</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                从材料解析、知识推理到合规交付，形成完整闭环。
              </h3>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-3 text-sm text-white/70">
              <Network className="h-4 w-4 text-blue-300" />
              Agent OS 正在重写重整工作台的默认范式
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
