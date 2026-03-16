import Image from "next/image";
import { BadgeCheck, Globe2, MapPinned } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const timeline = [
  {
    year: "2014",
    title: "优破案系统发布",
    description: "以真实破产重整业务场景为起点，建立数字化案件管理底座。"
  },
  {
    year: "2026",
    title: "Umob.AI Agent OS 开启代际革命",
    description: "将法律 Know-How、复杂协作与认知算力汇聚为可编排的操作系统。"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <SectionHeading
              eyebrow="ABOUT & TRUST"
              title="跨界融合，定义下一个十年的行业标准。"
              description="Umob.AI™ 诞生于对复杂重整业务的深刻理解与底层算力的跨界融合。我们的核心团队拥有中国破产与重整法律体系的深厚实战经验。如今，我们立足美国北卡罗来纳州（North Carolina）的科技研发前沿，致力于将一线的行业洞察转化为全球领先的系统化基础设施。"
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/78">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45">研发前沿</p>
                    <p className="mt-1 text-lg font-semibold text-white">Chapel Hill, North Carolina</p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/78">
                    <Globe2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/45">行业根基</p>
                    <p className="mt-1 text-lg font-semibold text-white">杭州优莫百信息科技有限公司</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {["司法实战经验", "跨境研发协同", "复杂案件方法论", "系统化基础设施"].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70"
                >
                  <BadgeCheck className="h-4 w-4 text-white/72" />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025]">
              <Image
                src="/visuals/lab-system.svg"
                alt="Umob.AI system architecture visual"
                width={960}
                height={760}
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-panel h-full rounded-[2rem] p-6 sm:p-8">
              <p className="section-kicker">TIMELINE</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white">
                从数字化工具到 Agent OS 基础设施
              </h3>

              <div className="relative mt-10 space-y-8">
                <div className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-white/28 via-white/16 to-transparent" />
                {timeline.map((item) => (
                  <div key={item.year} className="relative pl-14">
                    <div className="absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/78">
                      {item.year.slice(-2)}
                    </div>
                    <p className="text-sm uppercase tracking-[0.26em] text-white/42">{item.year}</p>
                    <h4 className="mt-2 text-xl font-semibold text-white">{item.title}</h4>
                    <p className="mt-3 max-w-xl text-base leading-7 text-white/65">{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">Strategic Direction</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "North Carolina", value: "AI R&D Frontier" },
                    { label: "China Expertise", value: "破产重整 Know-How" },
                    { label: "Global Infra", value: "Agent OS Foundation" }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">{item.label}</p>
                      <p className="mt-4 text-sm leading-6 text-white/74">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
