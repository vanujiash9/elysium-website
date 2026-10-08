"use client";

import { motion, type Variants } from "framer-motion";
import { CheckCircle2, Rocket, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceCard {
  title: string;
  eyebrow: string;
  description: string;
  timeline: string;
  price: string;
  points: string[];
  cta: string;
  featured?: boolean;
}

const serviceCards: ServiceCard[] = [
  {
    title: "Xây dựng hiện diện",
    eyebrow: "Website & Landing Page",
    description: "Trang web đẹp, rõ CTA và đủ tin cậy để khách hiểu bạn trong vài giây đầu.",
    timeline: "3-7 ngày",
    price: "Từ 1tr",
    points: ["Thông điệp và bố cục bán hàng rõ", "Giao diện mobile-first, dễ đọc", "Form liên hệ, nút Zalo và gọi nhanh", "SEO cơ bản và tốc độ tải tốt", "Bàn giao dễ cập nhật nội dung"],
    cta: "Tư vấn website",
  },
  {
    title: "Thiết kế trải nghiệm AI",
    eyebrow: "AI Tool & Chatbot",
    description: "Luồng AI dùng được thật: tư vấn, thu lead, xử lý nội dung hoặc demo dữ liệu gọn gàng.",
    timeline: "5-14 ngày",
    price: "Theo phạm vi",
    points: ["Chatbot FAQ và kịch bản tư vấn", "Thu lead và chuyển tiếp cho người thật", "Tool xử lý nội dung hoặc dữ liệu", "Output có cấu trúc, dễ kiểm tra", "Demo trước khi nghiệm thu"],
    cta: "Tư vấn AI tool",
    featured: true,
  },
  {
    title: "Phát triển quy trình",
    eyebrow: "Automation nội bộ",
    description: "Kết nối những việc đang rời rạc để giảm nhập liệu tay và theo dõi trạng thái dễ hơn.",
    timeline: "7-14 ngày",
    price: "Theo workflow",
    points: ["Đồng bộ form, sheet, email", "CRM mini hoặc dashboard vận hành", "Thông báo tự động khi có lead", "Tối ưu quy trình lặp lại", "Hướng dẫn sử dụng sau bàn giao"],
    cta: "Tư vấn automation",
  },
];

const proofItems = [
  { label: "Triển khai nhanh", icon: Rocket },
  { label: "Tối ưu chi phí", icon: ShieldCheck },
  { label: "Đồng hành dài hạn", icon: Users },
];


const revealContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function ServicesHeroVisual() {
  return (
    <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-primary/15 sm:min-h-[30rem] sm:rounded-[2.5rem] sm:p-4">
      <div className="relative h-full min-h-[22.5rem] overflow-hidden rounded-[1.6rem] bg-surface-container-low sm:min-h-[28rem] sm:rounded-[2rem]">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90"
          alt="Đội ngũ sản phẩm đang trao đổi giải pháp website và AI"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 780px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-t from-on-surface/70 via-on-surface/10 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/30 bg-white/88 p-5 shadow-2xl shadow-on-surface/15 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-primary">Website • AI • Automation</p>
          <h2 className="mt-2 max-w-xl text-2xl font-manrope font-extrabold leading-tight text-on-surface sm:text-3xl">Một đội ngũ, một luồng triển khai rõ ràng.</h2>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="overflow-x-hidden bg-white">
      <section className="relative overflow-hidden bg-linear-to-br from-white via-sky-50/60 to-white px-6 pt-28 pb-12 md:px-8 md:pt-32 md:pb-16">
        <div className="absolute left-0 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute right-0 top-24 h-96 w-96 translate-x-1/3 rounded-full bg-sky-200/50 blur-[120px]" />
        <motion.div initial="hidden" animate="visible" variants={revealContainer} className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div>
            <motion.span variants={revealItem} className="text-xs font-black uppercase tracking-[0.24em] text-primary">
              Dịch vụ Elysium
            </motion.span>
            <motion.h1 variants={revealItem} className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight text-on-surface md:text-6xl lg:text-6xl">
              Website, AI và automation dùng được thật.
            </motion.h1>
            <motion.p variants={revealItem} className="mt-6 max-w-xl text-base font-semibold leading-relaxed text-on-surface-variant md:text-lg">
              Chọn đúng phần cần làm, có demo rõ và bàn giao gọn.
            </motion.p>
            <motion.div variants={revealItem} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary justify-center px-8 py-3">
                Nhận tư vấn
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/portfolio" className="btn-ghost justify-center px-8 py-3">
                Xem demo
              </Link>
            </motion.div>
            <motion.div variants={revealItem} className="mt-7 flex flex-wrap gap-3">
              {proofItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-on-surface-variant shadow-sm shadow-primary/5">
                    <Icon className="h-4 w-4 text-primary" />
                    {item.label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div variants={revealItem}>
            <ServicesHeroVisual />
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-on-surface px-6 py-14 text-white md:px-8 md:py-20">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-3">
          {serviceCards.map((service) => (
            <motion.article
              key={service.title}
              variants={revealItem}
              className="group relative flex min-h-[30rem] flex-col border-t-2 border-primary bg-white/[0.055] px-6 py-7 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] md:px-7 md:py-8"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-[60px] transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-on-primary-container">{service.eyebrow}</span>
                <h2 className="mt-5 text-2xl font-manrope font-extrabold uppercase leading-tight tracking-tight text-white md:text-3xl">{service.title}</h2>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-white/68">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">{service.timeline}</span>
                  <span className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">{service.price}</span>
                </div>

                <ul className="mt-7 space-y-4">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm font-bold leading-relaxed text-white/90">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 fill-on-primary-container text-on-primary-container" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="mt-8 inline-flex text-sm font-black uppercase tracking-[0.14em] text-on-primary-container transition-colors hover:text-white">
                  {service.cta}
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
