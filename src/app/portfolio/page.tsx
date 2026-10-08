"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, SearchX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import content from "@/data/content.json";

type PortfolioFilter = "Tất cả" | "Website" | "AI Tool" | "Chatbot" | "Automation" | "Dashboard/CRM";

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
  filterCategory?: string;
  outcome?: string;
  scope?: string[];
  highlight?: string;
}

const filters: PortfolioFilter[] = ["Tất cả", "Website", "AI Tool", "Chatbot", "Automation", "Dashboard/CRM"];

const projectOutcomes: Record<string, string> = {
  "website-ban-hang": "CTA rõ, khách dễ xem dịch vụ và liên hệ nhanh.",
  "ai-chatbot-tu-van": "FAQ gọn, thu lead và chuyển tiếp tư vấn mượt hơn.",
  "tool-ai-noi-bo": "Output AI có cấu trúc, dễ kiểm tra và bàn giao.",
  "automation-van-hanh": "Giảm nhập tay giữa form, sheet, email và thông báo.",
  "landing-page-dich-vu": "Tập trung chuyển đổi cho chiến dịch bán dịch vụ.",
  "website-portfolio-ca-nhan": "Hồ sơ năng lực đẹp, dễ gửi và dễ liên hệ.",
  "dashboard-quan-tri": "Dữ liệu tập trung, trạng thái vận hành rõ hơn.",
  "crm-mini": "Theo dõi lead, ghi chú và lịch sử chăm sóc gọn hơn.",
  "demo-ai-data": "Luồng demo dễ hiểu, phù hợp thuyết trình AI/Data.",
  "noi-dung-ai-marketing": "Ý tưởng và bản nháp nội dung đồng đều hơn.",
};

function getProjectFilter(project: PortfolioProject): PortfolioFilter {
  if (filters.includes(project.filterCategory as PortfolioFilter)) {
    return project.filterCategory as PortfolioFilter;
  }

  return "Website";
}

function matchesFilter(project: PortfolioProject, activeFilter: PortfolioFilter) {
  if (activeFilter === "Tất cả") {
    return true;
  }

  return getProjectFilter(project) === activeFilter;
}

function getProjectOutcome(project: PortfolioProject) {
  return project.outcome ?? projectOutcomes[project.id] ?? project.description;
}

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.03,
    },
  },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

export default function PortfolioPage() {
  const { portfolio, company } = content;
  const projects = portfolio.projects as PortfolioProject[];
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>(filters[0]);
  const visibleProjects = projects.filter((project) => matchesFilter(project, activeFilter));

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="px-6 pt-32 pb-10 md:px-8 md:pt-36 md:pb-12">
        <motion.div initial="hidden" animate="visible" variants={revealContainer} className="mx-auto max-w-7xl border-b border-outline-variant/25 pb-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <motion.span variants={revealItem} className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                Sản phẩm & demo
              </motion.span>
              <motion.h1 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-on-surface md:text-5xl">
                Sản phẩm & demo đã triển khai
              </motion.h1>
            </div>
            <motion.div variants={revealItem} className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">
                Tập trung vào hình ảnh, demo và hướng triển khai thực tế. Chọn một nhóm sản phẩm để xem mẫu gần với nhu cầu của bạn.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="#projects" className="btn-primary px-7 py-3">
                  Xem sản phẩm
                </Link>
                <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-transform transition-colors hover:bg-primary active:scale-95">
                  Nhắn Zalo
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div variants={revealItem} className="mt-9 flex flex-wrap gap-2 sm:gap-x-6 sm:gap-y-2" aria-label="Lọc sản phẩm theo nhóm">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition-colors sm:rounded-none sm:px-0 sm:py-0 ${activeFilter === filter ? "bg-primary text-white sm:bg-transparent sm:text-primary" : "bg-surface-container-low text-on-surface-variant hover:text-primary sm:bg-transparent"}`}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="scroll-mt-28 px-6 pb-16 md:px-8 md:pb-20">
        {visibleProjects.length > 0 ? (
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-12">
            <motion.article variants={revealItem} className="lg:col-span-7 xl:col-span-8">
              <Link href={`/portfolio/${visibleProjects[0].id}`} className="group block h-full overflow-hidden rounded-[2rem] bg-on-surface text-white shadow-2xl shadow-primary/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4">
                <div className="relative min-h-[24rem] overflow-hidden p-5 sm:min-h-[30rem] sm:p-7">
                  <Image src={visibleProjects[0].image} alt={visibleProjects[0].title} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover opacity-72 transition-transform duration-500 group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-linear-to-b from-on-surface/12 via-on-surface/36 to-on-surface/90" />
                  <div className="relative z-10 flex h-full min-h-[21rem] flex-col justify-between sm:min-h-[26rem]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">Selected work</span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white/88 backdrop-blur">{visibleProjects[0].category}</span>
                    </div>
                    <div className="max-w-2xl">
                      <p className="text-sm font-bold leading-relaxed text-white/78">{visibleProjects[0].highlight ?? visibleProjects[0].description}</p>
                      <h2 className="mt-4 font-manrope text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">{visibleProjects[0].title}</h2>
                      <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/84">{getProjectOutcome(visibleProjects[0])}</p>
                      {visibleProjects[0].scope && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {visibleProjects[0].scope.map((item) => (
                            <span key={item} className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/86 backdrop-blur">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                      <span className="mt-7 inline-flex items-center gap-2 font-manrope text-sm font-extrabold text-white">
                        Xem cách triển khai
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>

            <motion.div variants={revealContainer} className="grid gap-5 lg:col-span-5 xl:col-span-4">
              {visibleProjects.slice(1, 4).map((project) => (
                <motion.article key={project.id} variants={revealItem}>
                  <Link href={`/portfolio/${project.id}`} className="group grid gap-4 rounded-[1.6rem] border border-outline-variant/18 bg-white p-3 shadow-sm shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:grid-cols-[10rem_1fr] lg:grid-cols-1">
                    <div className="relative aspect-[1.25] overflow-hidden rounded-[1.25rem] bg-surface-container-low sm:aspect-square lg:aspect-[1.55]">
                      <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 160px, 360px" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-linear-to-t from-on-surface/40 to-transparent opacity-70" />
                    </div>
                    <div className="p-1 sm:py-2 lg:p-2">
                      <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-primary/70">{project.category}</span>
                      <h2 className="mt-2 font-manrope text-xl font-extrabold leading-tight text-on-surface transition-colors group-hover:text-primary">{project.title}</h2>
                      <p className="mt-3 text-sm font-semibold leading-relaxed text-on-surface-variant">{getProjectOutcome(project)}</p>
                      {project.scope && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.scope.slice(0, 2).map((item) => (
                            <span key={item} className="rounded-full bg-surface-container-low px-3 py-1 text-[0.68rem] font-bold text-on-surface-variant">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))}

              <motion.div variants={revealItem} className="rounded-[1.6rem] border border-primary/10 bg-surface-container-low p-6">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Muốn mẫu tương tự?</span>
                <h2 className="mt-3 font-manrope text-2xl font-extrabold tracking-tight text-on-surface">Elysium có thể dựng demo theo brief của bạn.</h2>
                <Link href="/contact" className="btn-primary mt-5 inline-flex px-7 py-3">
                  Gửi brief dự án
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <div className="mx-auto max-w-3xl border-t-2 border-primary bg-surface-container-low px-6 py-10 text-center md:px-10">
            <SearchX className="mx-auto h-10 w-10 text-primary" />
            <h2 className="mt-5 text-2xl font-manrope font-extrabold text-on-surface">Chưa có mẫu trong nhóm {activeFilter}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-on-surface-variant">
              Elysium vẫn có thể dựng demo theo nhu cầu riêng. Bạn có thể xem toàn bộ mẫu hiện có hoặc nhắn Zalo để nhận gợi ý gần nhất.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <button type="button" onClick={() => setActiveFilter("Tất cả")} className="btn-primary justify-center px-7 py-3">
                Xem tất cả
              </button>
              <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-transform transition-colors hover:bg-primary active:scale-95">
                Nhắn Zalo
              </a>
            </div>
          </div>
        )}
      </section>

      <section className="px-6 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-t border-outline-variant/25 pt-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">Bắt đầu dự án</span>
            <h2 className="mt-3 text-3xl font-manrope font-extrabold tracking-tight text-on-surface">Muốn xem demo gần với nhu cầu của bạn?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary justify-center px-7 py-3">
              Nhận tư vấn
            </Link>
            <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-transform transition-colors hover:bg-primary active:scale-95">
              Nhắn Zalo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
