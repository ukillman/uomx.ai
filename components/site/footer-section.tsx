import { ArrowUpRight, Globe2, Mail, MapPinned, Phone } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";

const contactColumns = [
  {
    title: "US Office",
    detail: "Chapel Hill, NC, USA",
    icon: MapPinned
  },
  {
    title: "Asia R&D",
    detail: "Hangzhou, China (杭州优莫百信息科技有限公司)",
    icon: Globe2
  },
  {
    title: "Contact",
    detail: "info@umob.ai | 0571-8888-8888 | umob.ai",
    icon: Mail
  }
];

export function FooterSection() {
  return (
    <footer id="contact" className="relative pb-10 pt-6">
      <div className="section-shell">
        <Reveal>
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="absolute left-[-8%] top-[-12%] h-56 w-56 rounded-full bg-cyan-400/6 blur-[120px]" />
            <div className="absolute right-[-5%] top-[12%] h-64 w-64 rounded-full bg-violet-500/6 blur-[120px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="max-w-3xl">
                <p className="section-kicker">DEPLOYMENT</p>
                <h2 className="mt-5 text-balance text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  开启下一代破产案件管理方式
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                  让 Agent OS 接管复杂计算、流程编排与文书生成，把团队的时间重新分配给真正创造价值的判断。
                </p>
              </div>

              <div className="flex lg:justify-end">
                <a
                  href="mailto:info@umob.ai?subject=Umob.AI%20Deployment%20Inquiry"
                  className="primary-button w-full justify-center px-8 py-4 text-base sm:w-auto"
                >
                  预约专属算力部署方案
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative mt-10 grid gap-4 md:grid-cols-3">
              {contactColumns.map((column) => (
                <div
                  key={column.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/78">
                    <column.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm uppercase tracking-[0.24em] text-white/40">
                    {column.title}
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/74">{column.detail}</p>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
              <p>Umob.AI™ Agent OS for bankruptcy, restructuring, and liquidation workflows.</p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="mailto:info@umob.ai" className="transition-colors hover:text-white">
                  info@umob.ai
                </a>
                <a href="tel:057188888888" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <Phone className="h-4 w-4" />
                  0571-8888-8888
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
