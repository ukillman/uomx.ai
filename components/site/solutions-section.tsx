"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Building2, Factory, Landmark } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Solution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof Building2;
  outcomes: string[];
  capabilities: string[];
};

const stats = [
  { value: "10x", label: "生产力释放" },
  { value: "50%", label: "综合成本均摊降低" },
  { value: "0", label: "偏差合规保障" }
];

const solutions: Solution[] = [
  {
    id: "real-estate",
    title: "房企破产最佳实践",
    subtitle: "海量购房人债权穿透",
    description:
      "针对超大体量购房人债权、预售资金链和多层担保结构，构建从材料解析到投票组织的一体化智能闭环。",
    icon: Building2,
    outcomes: [
      "自动识别重复申报、证据冲突与权益归属异常",
      "将购房人债权、施工债权、银行债权纳入统一图谱",
      "支撑大规模投票、公告、问答与结果追踪"
    ],
    capabilities: ["海量材料清洗", "表决编排", "合规风控", "多角色协同"]
  },
  {
    id: "manufacturing",
    title: "制造业重整案例",
    subtitle: "复杂资产剥离与重组",
    description:
      "围绕产线、设备、土地、知识产权和订单体系，快速生成重整方案推演底座，明确剥离路径与风险区间。",
    icon: Factory,
    outcomes: [
      "自动梳理资产包边界与历史交易关系",
      "辅助识别低效资产与核心经营单元",
      "生成可比交易摘要与方案评估文书"
    ],
    capabilities: ["资产拓扑建模", "方案推演", "文书生成", "交易溯源"]
  },
  {
    id: "group",
    title: "集团企业协同方案",
    subtitle: "跨机构关联交易溯源",
    description:
      "在集团化结构和多主体交织场景中，打通法院、管理人、顾问与金融机构之间的信息壁垒，保障协同一致性。",
    icon: Landmark,
    outcomes: [
      "识别关联交易链路与关键控制节点",
      "为多家机构提供统一口径的事实底座",
      "通过权限分层和审计留痕强化安全控制"
    ],
    capabilities: ["关联方识别", "多机构工作台", "权限矩阵", "审计追踪"]
  }
];

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(solutions[0].id);

  const activeSolution = useMemo(
    () => solutions.find((solution) => solution.id === activeId) ?? solutions[0],
    [activeId]
  );

  return (
    <section id="solutions" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="ROI & SOLUTIONS"
            title="效率跃迁：从“劳动密集”向“算力密集”的跨越。"
            description="将机械的数据验证彻底留给硅基智能，让人类大脑回归商业重组与价值创造的核心博弈。"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08}>
              <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
                <p className="gradient-text text-5xl font-semibold tracking-[-0.08em] sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-4 text-lg text-white/65">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="space-y-3">
              {solutions.map((solution) => (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveId(solution.id)}
                  className={`glass-panel w-full rounded-[1.75rem] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 ${
                    solution.id === activeId ? "border-blue-500/40 bg-blue-500/10" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-blue-200">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-white">{solution.title}</p>
                      <p className="mt-2 text-sm text-white/55">{solution.subtitle}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel min-h-[420px] overflow-hidden rounded-[2rem] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSolution.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="section-kicker">Scenario Blueprint</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                        {activeSolution.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-white/65">
                        {activeSolution.description}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-white/60">
                      {activeSolution.subtitle}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">Outcomes</p>
                      <div className="mt-5 space-y-3">
                        {activeSolution.outcomes.map((outcome, index) => (
                          <div key={outcome} className="flex gap-4">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10 text-xs font-semibold text-blue-200">
                              0{index + 1}
                            </div>
                            <p className="pt-1 text-sm leading-6 text-white/72">{outcome}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5">
                      <p className="text-xs uppercase tracking-[0.24em] text-white/40">Capability Stack</p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        {activeSolution.capabilities.map((capability) => (
                          <span
                            key={capability}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
                          >
                            {capability}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                          Operation Lane
                        </p>
                        <div className="mt-4 space-y-3">
                          {["数据摄取", "智能推理", "协同决策", "合规交付"].map((lane, index) => (
                            <div key={lane} className="flex items-center gap-3">
                              <div className="h-px flex-1 bg-gradient-to-r from-blue-400/45 to-transparent" />
                              <div className="rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/72">
                                {lane}
                              </div>
                              <div className="text-xs text-white/35">0{index + 1}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <a href="#contact" className="glass-button mt-8">
                    深入了解该方案
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
