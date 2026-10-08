"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, DraftingCompass, Lightbulb, Rocket, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";


const serviceImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85",
];

const servicePreviews = [
  {
    badge: "WEB",
    eyebrow: "Website dịch vụ",
    message: "CTA rõ, thu lead nhanh.",
  },
  {
    badge: "AI",
    eyebrow: "AI Tool nội bộ",
    message: "Xử lý gọn, output rõ.",
  },
  {
    badge: "BOT",
    eyebrow: "Chatbot tư vấn",
    message: "FAQ, báo giá, thu lead.",
  },
  {
    badge: "AUTO",
    eyebrow: "Automation vận hành",
    message: "Form, sheet, email tự chạy.",
  },
  {
    badge: "EDU",
    eyebrow: "Demo AI/Data",
    message: "Dễ trình bày, dễ hiểu.",
  },
  {
    badge: "SHOP",
    eyebrow: "Tư vấn số hóa",
    message: "Lộ trình vừa ngân sách.",
  },
];

const serviceCardSummaries = [
  "Landing page · Web giới thiệu · Portfolio",
  "AI workflow · Báo cáo · Xử lý dữ liệu",
  "FAQ · Báo giá · Thu lead tự động",
  "Form · Sheet · Email · Thông báo",
  "Giao diện demo · Output · Tài liệu",
  "Website · Chatbot · Automation vừa ngân sách",
];

interface HeroSlide {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
}

interface HeroKpi {
  value: number;
  label: string;
  suffix?: string;
}

const heroImageAccents = [
  "left-[14%] top-[16%] h-24 w-24 bg-cyan-300/18",
  "right-[12%] top-[18%] h-28 w-28 bg-white/14",
  "bottom-[14%] left-[18%] h-20 w-20 bg-blue-500/18",
  "bottom-[16%] right-[16%] h-24 w-24 bg-violet-300/16",
];

const heroSlides: HeroSlide[] = [
  {
    src: "/bannerHero.png",
    alt: "Bộ giao diện website dịch vụ Elysium hiển thị trên nhiều thiết bị",
    label: "Website thương hiệu",
    subtitle: "Giao diện rõ CTA, dễ ra mắt và dễ đo lường.",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    alt: "Dashboard dữ liệu với biểu đồ và chỉ số vận hành",
    label: "Dashboard & CRM",
    subtitle: "Tập trung dữ liệu, lead và trạng thái tư vấn.",
  },
  {
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=85",
    alt: "Giao diện chatbot tư vấn khách hàng tự động",
    label: "Chatbot tư vấn",
    subtitle: "FAQ, báo giá và thu lead tự động 24/7.",
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85",
    alt: "Quy trình automation kết nối công cụ vận hành",
    label: "Automation vận hành",
    subtitle: "Form, sheet, email và thông báo chạy liền mạch.",
  },
  {
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1400&q=85",
    alt: "Không gian trình bày demo AI và dữ liệu hiện đại",
    label: "AI/Data demo",
    subtitle: "Luồng demo gọn, output rõ và dễ bàn giao.",
  },
];

const heroKpis: HeroKpi[] = [
  { value: 3500, suffix: "+", label: "Khách hàng hài lòng" },
  { value: 1500, suffix: "+", label: "Dự án hoàn thành" },
  { value: 40, suffix: "+", label: "Thành viên" },
  { value: 9, suffix: "+", label: "Năm kinh nghiệm" },
];

const pricingPlans = [
  {
    name: "Website Cơ Bản",
    price: "Từ 1tr",
    description: "Dành cho cá nhân, sinh viên, shop nhỏ hoặc người cần một landing page gọn đẹp để bắt đầu online.",
    features: ["1 landing page hoặc web giới thiệu cơ bản", "3-5 section theo nội dung khách cung cấp", "Responsive tốt trên điện thoại", "Form liên hệ đơn giản", "Gắn nút gọi, Zalo, Messenger"],
    cta: "Tư vấn gói cơ bản",
  },
  {
    name: "Website Chuyên Nghiệp",
    price: "Từ 3tr",
    description: "Dành cho dịch vụ, cửa hàng hoặc doanh nghiệp cần hình ảnh chỉn chu và cấu trúc nội dung đáng tin hơn.",
    features: ["3-5 trang: trang chủ, dịch vụ, giới thiệu, liên hệ", "Giao diện theo thương hiệu", "Tối ưu responsive và trải nghiệm người dùng", "SEO cơ bản, tốc độ tải tốt", "Hiệu ứng chuyển động nhẹ"],
    cta: "Tư vấn gói chuyên nghiệp",
    featured: true,
  },
  {
    name: "Web App, CRM & AI",
    price: "Báo giá riêng",
    description: "Dành cho doanh nghiệp cần tool riêng, CRM, dashboard, chatbot hoặc automation theo quy trình nội bộ.",
    features: ["Khảo sát nghiệp vụ và luồng vận hành", "Báo giá theo module và phạm vi rõ ràng", "Thiết kế web/app theo yêu cầu", "Chatbot, AI tool và automation", "Tích hợp API, dữ liệu, email, Google Sheet"],
    cta: "Nhận báo giá riêng",
  },
];


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
  hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

interface AnimatedKpiProps {
  kpi: HeroKpi;
  index: number;
}

function AnimatedKpi({ kpi, index }: AnimatedKpiProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? kpi.value : 0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (shouldReduceMotion) {
      return;
    }

    let frameId = 0;
    const duration = 1200;
    const startTime = performance.now() + index * 90;

    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - startTime) / duration, 0), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(kpi.value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [index, isInView, kpi.value, shouldReduceMotion]);

  const renderedValue = shouldReduceMotion ? kpi.value : displayValue;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      className="relative"
    >
      <div className="flex items-end gap-3">
        <p className="font-manrope text-5xl font-extrabold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl" aria-label={`${kpi.value.toLocaleString("en-US")}${kpi.suffix ?? ""} ${kpi.label}`}>
          <span aria-hidden="true">{renderedValue.toLocaleString("en-US")}</span>
        </p>
        {kpi.suffix && <span className="pb-2 font-manrope text-4xl font-extrabold text-primary-container sm:text-5xl">{kpi.suffix}</span>}
      </div>
      <p className="mt-1 max-w-44 text-sm font-extrabold leading-tight text-white/86 sm:ml-24">{kpi.label}</p>
    </motion.div>
  );
}

function HeroKpiSection() {
  return (
    <section className="bg-[#151515] px-6 py-11 text-white md:px-8 md:py-14" aria-label="Chỉ số nổi bật của Elysium">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {heroKpis.map((kpi, index) => (
          <AnimatedKpi key={kpi.label} kpi={kpi} index={index} />
        ))}
      </div>
    </section>
  );
}

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const autoplayId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(autoplayId);
  }, [shouldReduceMotion]);

  const featuredSlides = heroSlides.slice(1, 4);
  const activeHeroSlide = heroSlides[activeSlide];

  return (
    <section className="relative mx-auto w-full max-w-[52rem] lg:max-w-[60rem]" aria-label="Banner ảnh giải pháp nổi bật của Elysium">
      <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_18%_18%,rgba(0,82,204,0.24),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(112,41,225,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.9),rgba(234,237,255,0.38))] blur-2xl" />
      <div className="absolute -right-8 top-8 h-76 w-76 rounded-full bg-primary/18 blur-[105px]" />
      <div className="absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-tertiary/14 blur-[95px]" />

      <div className="relative rounded-[2.25rem] bg-white/46 p-2 shadow-[0_34px_120px_rgba(0,61,155,0.16)] ring-1 ring-white/72 backdrop-blur sm:rounded-[2.85rem] sm:p-3">
        <div className="relative aspect-[16/11] overflow-hidden rounded-[1.65rem] bg-[#08142a] sm:aspect-[16/10] sm:rounded-[2.2rem] lg:aspect-[16/9]">
          {heroSlides.map((slide, index) => {
            const isActive = activeSlide === index;

            return (
              <div
                key={slide.label}
                className={`absolute inset-0 transition-[opacity,transform,filter] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? "scale-100 opacity-100 blur-0" : "scale-[1.035] opacity-0 blur-[2px]"}`}
                aria-hidden={!isActive}
              >
                <Image
                  src={slide.src}
                  alt={isActive ? slide.alt : ""}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 92vw, 760px"
                  className="object-cover object-center"
                />
              </div>
            );
          })}

          <div className="absolute inset-0 bg-linear-to-br from-[#061225]/52 via-[#061225]/10 to-[#020817]/68" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)] bg-[length:26px_26px] opacity-16" />
          <div className="absolute inset-4 rounded-[1.25rem] border border-white/22 sm:inset-6 sm:rounded-[1.75rem]" />

          {heroImageAccents.map((accentClass) => (
            <span key={accentClass} className={`absolute rounded-full blur-2xl ${accentClass}`} aria-hidden="true" />
          ))}

          <div className="absolute left-5 top-5 max-w-[15rem] rounded-[1.35rem] border border-white/18 bg-white/14 p-4 text-white shadow-2xl shadow-black/20 backdrop-blur-md sm:left-7 sm:top-7 sm:max-w-[18rem] sm:p-5">
            <p className="text-[0.66rem] font-black uppercase tracking-[0.22em] text-cyan-100/90">Live preview</p>
            <h3 className="mt-2 font-manrope text-xl font-extrabold leading-tight sm:text-2xl">{activeHeroSlide.label}</h3>
            <p className="mt-2 text-sm font-semibold leading-snug text-white/76">{activeHeroSlide.subtitle}</p>
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-2 sm:bottom-7 sm:left-7 sm:right-7 sm:gap-3">
            {featuredSlides.map((slide) => (
              <div key={slide.label} className="group relative h-18 overflow-hidden rounded-2xl border border-white/18 bg-white/12 shadow-xl shadow-black/18 backdrop-blur sm:h-24">
                <Image src={slide.src} alt="" fill sizes="160px" className="object-cover opacity-82 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-[#031027]/78 via-[#031027]/14 to-transparent" />
                <p className="absolute bottom-2 left-2 right-2 line-clamp-1 text-[0.66rem] font-black uppercase tracking-[0.12em] text-white sm:bottom-3 sm:left-3 sm:text-xs">{slide.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { home, services, company } = content;

  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate overflow-hidden bg-[#f8faff] px-6 pt-28 pb-16 md:px-8 md:pt-34 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(0,82,204,0.14),transparent_30%),radial-gradient(circle_at_84%_24%,rgba(112,41,225,0.12),transparent_28%),linear-gradient(180deg,#ffffff_0%,#eef3ff_52%,#ffffff_100%)]" />
        <div className="absolute left-0 top-28 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/12 blur-[95px]" />
        <div className="absolute right-0 bottom-8 h-88 w-88 translate-x-1/3 rounded-full bg-tertiary/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-32 h-px bg-linear-to-r from-transparent via-primary/12 to-transparent" />
        <div className="relative z-10 mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={revealContainer} className="max-w-2xl">
            <motion.span variants={revealItem} className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/78 px-3.5 py-2 text-[0.68rem] font-black uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/5 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Website • AI Tool • Automation
            </motion.span>
            <motion.h1 variants={revealItem} className="mt-5 max-w-[12ch] text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-on-surface sm:text-6xl md:text-7xl lg:text-[5.65rem]">
              Website và AI tool gọn đẹp cho thương hiệu ra mắt nhanh.
            </motion.h1>
            <motion.p variants={revealItem} className="mt-6 max-w-xl text-base font-medium leading-relaxed text-on-surface-variant md:text-xl">
              Elysium thiết kế website, chatbot và workflow tự động hóa theo hướng có thể demo ngay, đo lường rõ và bàn giao gọn cho đội vận hành.
            </motion.p>
            <motion.div variants={revealItem} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-primary btn-hero-cta group relative isolate justify-center overflow-hidden px-7 py-3 ring-2 ring-primary/25 ring-offset-2 ring-offset-white md:px-9">
                <span className="absolute -right-3 -top-3 h-10 w-10 rounded-full bg-white/28 blur-sm transition-transform duration-300 group-hover:scale-150" />
                <span className="relative z-10 flex items-center gap-2">
                  Nhận tư vấn miễn phí
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
              <Link href="/portfolio" className="btn-ghost justify-center px-7 py-3 md:px-9">
                Xem sản phẩm demo
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: "easeOut" }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      <HeroKpiSection />

      <section className="px-6 py-12 md:px-8 md:py-18">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto max-w-7xl">
          <motion.div variants={revealItem} className="mb-8 max-w-3xl">
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">Dịch vụ của Elysium</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface md:text-5xl">Website, AI và automation — gọn trong một hệ thống.</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant md:text-lg">Tập trung vào đầu ra dễ dùng: giao diện rõ, luồng demo chạy được và quy trình bàn giao không rối.</p>
          </motion.div>

          <motion.div variants={revealContainer} className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.list.map((service, idx) => {
              const preview = servicePreviews[idx % servicePreviews.length];

              return (
                <motion.article
                  key={service.title}
                  variants={revealItem}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#172944] shadow-[0_24px_80px_rgba(0,26,68,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15"
                >
                  <Link href="/services" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4" aria-label={`Xem chi tiết ${service.title}`}>
                    <div className="relative min-h-[12rem] overflow-hidden bg-[#0d1729] p-5 text-white sm:min-h-[13rem]">
                      <Image src={serviceImages[idx]} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 410px" className="object-cover opacity-58 transition-transform duration-500 group-hover:scale-[1.04]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,210,255,0.18)_1px,transparent_0)] bg-[length:22px_22px] opacity-60" />
                      <div className="absolute inset-0 bg-linear-to-b from-[#0d1729]/28 via-[#0d1729]/48 to-[#0d1729]/95" />
                      <div className="relative z-10 max-w-[17rem]">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-container font-manrope text-xs font-black text-white">{preview.badge}</span>
                          <div>
                            <p className="font-manrope text-sm font-extrabold text-white">{preview.eyebrow}</p>
                            <p className="text-xs font-bold text-cyan-200/80">Vừa xong · online</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#314563] px-6 py-4 text-white">
                      <h3 className="font-manrope text-xl font-extrabold leading-tight text-white transition-colors group-hover:text-cyan-200">{service.title}</h3>
                      <p className="mt-2 text-sm font-semibold leading-snug text-slate-300">{serviceCardSummaries[idx]}</p>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <section className="px-6 md:px-8 pb-14 md:pb-24 max-w-7xl mx-auto" id="pricing">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="text-center max-w-3xl mx-auto mb-5"
        >
          <motion.span variants={revealItem} className="block text-tertiary font-bold text-xs uppercase tracking-widest">Bảng giá tham khảo</motion.span>
          <motion.h2 variants={revealItem} className="text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-6">Gói dịch vụ linh hoạt theo nhu cầu</motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={revealItem}
              whileHover={{ y: -6 }}
              className={`flex flex-col rounded-3xl p-6 md:p-8 border shadow-sm relative overflow-hidden transition-shadow duration-300 hover:shadow-xl ${plan.featured ? "bg-on-surface text-white border-on-surface" : "bg-white border-outline-variant/20"}`}
            >
              {plan.featured && <div className="absolute top-0 right-0 signature-gradient text-white text-xs font-bold px-5 py-2 rounded-bl-2xl">Phổ biến</div>}
              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <div className={`text-4xl font-manrope font-extrabold mb-4 ${plan.featured ? "text-white" : "text-primary"}`}>{plan.price}</div>
              <p className={`leading-relaxed mb-8 ${plan.featured ? "text-white/70" : "text-on-surface-variant"}`}>{plan.description}</p>
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm ${plan.featured ? "text-white/80" : "text-on-surface-variant"}`}>
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="#consult" className={plan.featured ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}>
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          id="consult"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.3 }}
          className="mt-8 scroll-mt-28 rounded-[2rem] bg-on-surface px-6 py-6 text-white shadow-2xl shadow-primary/10 md:px-8"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-on-primary-container">Tư vấn nhanh</span>
              <h3 className="mt-2 text-2xl font-manrope font-extrabold tracking-tight text-white">Chưa chắc nên chọn gói nào?</h3>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center px-7 py-3">
                Nhận tư vấn
              </Link>
              <a
                href={`https://zalo.me/${company.phone}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-primary transition-all hover:bg-primary-container hover:text-white active:scale-95"
              >
                Nhắn Zalo
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-b from-white via-primary/4 to-white py-12 md:py-18">
        <div className="absolute left-1/2 top-24 h-48 w-[48rem] -translate-x-1/2 rounded-full bg-primary/8 blur-[110px]" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={revealContainer}
            className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
          >
            <motion.h2 variants={revealItem} className="text-3xl md:text-4xl font-extrabold tracking-tight">{home.process.title}</motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={revealContainer}
            className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5"
          >
            <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-linear-to-r from-primary/10 via-primary/45 to-tertiary/20 md:block" />
            {home.process.steps.map((step, idx) => (
              <motion.div key={step.title} variants={revealItem} className="relative">
                <div className="absolute left-7 top-16 bottom-0 w-px bg-linear-to-b from-primary/35 to-transparent md:hidden" />
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative h-full rounded-[1.75rem] bg-white/90 p-5 shadow-[0_18px_55px_rgba(0,82,204,0.08)] transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-primary/10 md:p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
                      {idx === 0 && <Lightbulb className="h-7 w-7" />}
                      {idx === 1 && <DraftingCompass className="h-7 w-7" />}
                      {idx === 2 && <Code2 className="h-7 w-7" />}
                      {idx === 3 && <Rocket className="h-7 w-7" />}
                    </div>
                    <span className="rounded-full bg-primary/7 px-3 py-1 text-xs font-black tracking-widest text-primary">0{idx + 1}</span>
                  </div>
                  <h4 className="mb-3 text-xl font-manrope font-extrabold text-on-surface transition-colors group-hover:text-primary">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={revealContainer}
          className="mx-auto grid max-w-7xl gap-8 border-t border-outline-variant/25 pt-10 lg:grid-cols-[0.75fr_1.25fr]"
        >
          <motion.div variants={revealItem}>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-primary">FAQ</span>
            <h2 className="mt-3 text-3xl font-manrope font-extrabold tracking-tight text-on-surface md:text-5xl">{content.faq.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{content.faq.description}</p>
          </motion.div>

          <motion.div variants={revealContainer} className="space-y-3">
            {content.faq.items.map((item) => (
              <motion.details key={item.question} variants={revealItem} className="group border-t-2 border-primary bg-surface-container-low px-5 py-4 open:bg-white md:px-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-manrope font-extrabold text-on-surface marker:hidden md:text-lg">
                  {item.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-on-surface-variant md:text-base">{item.answer}</p>
              </motion.details>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
