"use client";

import content from "@/data/content.json";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const detailContent = {
  "website-ban-hang": {
    fit: "Shop nhỏ, dịch vụ cá nhân hoặc doanh nghiệp cần một trang bán hàng rõ ràng, dễ liên hệ.",
    scope: ["Trang giới thiệu sản phẩm/dịch vụ", "Form liên hệ hoặc CTA Zalo", "Tối ưu hiển thị mobile"],
    demo: "Demo luồng khách xem sản phẩm, đọc thông tin chính và liên hệ qua Zalo/form.",
    feedback: "Website rõ hơn, khách dễ xem dịch vụ và nhắn tư vấn nhanh hơn.",
    author: "Chủ shop online",
    outcomes: ["Thông điệp rõ", "CTA dễ thấy", "Dễ cập nhật"],
  },
  "ai-chatbot-tu-van": {
    fit: "Đội ngũ cần bot trả lời FAQ, tư vấn bước đầu và thu thông tin khách hàng.",
    scope: ["Kịch bản hỏi đáp", "Thu lead cơ bản", "Chuyển tiếp cho nhân sự"],
    demo: "Demo luồng khách hỏi thông tin, bot trả lời và đề xuất để lại liên hệ.",
    feedback: "Bot giúp giảm các câu hỏi lặp lại và gom thông tin khách trước khi tư vấn.",
    author: "Đội ngũ tư vấn dịch vụ",
    outcomes: ["FAQ gọn", "Lead rõ nguồn", "Dễ bàn giao"],
  },
  "tool-ai-noi-bo": {
    fit: "Cá nhân hoặc đội ngũ cần công cụ AI hỗ trợ xử lý nội dung, dữ liệu hoặc báo cáo.",
    scope: ["Form nhập liệu", "Luồng xử lý AI", "Kết quả dễ kiểm tra"],
    demo: "Demo một luồng nhập dữ liệu, AI xử lý và trả về kết quả có cấu trúc.",
    feedback: "Demo rõ ràng, dễ trình bày và phù hợp với quy trình thật.",
    author: "Người dùng nội bộ",
    outcomes: ["Giảm thao tác", "Kết quả có cấu trúc", "Dễ mở rộng"],
  },
  "automation-van-hanh": {
    fit: "Shop hoặc đội ngũ vận hành muốn giảm thao tác lặp lại giữa form, sheet, email và thông báo.",
    scope: ["Kết nối biểu mẫu", "Đồng bộ dữ liệu", "Thông báo tự động"],
    demo: "Demo luồng khách gửi form, dữ liệu vào sheet và thông báo được gửi tự động.",
    feedback: "Quy trình gọn hơn, ít phải nhập tay và dễ theo dõi trạng thái.",
    author: "Đội ngũ vận hành",
    outcomes: ["Ít nhập tay", "Theo dõi dễ", "Luồng rõ ràng"],
  },
  "landing-page-dich-vu": {
    fit: "Dịch vụ cần một trang giới thiệu ngắn gọn, có điểm tin cậy và CTA nổi bật.",
    scope: ["Hero bán hàng", "Khối lợi ích/dịch vụ", "Form hoặc CTA liên hệ"],
    demo: "Demo luồng khách đọc lợi ích, xem bằng chứng và gửi yêu cầu tư vấn.",
    feedback: "Trang gọn, nhìn chuyên nghiệp hơn và dễ dùng cho chiến dịch quảng cáo.",
    author: "Đơn vị dịch vụ",
    outcomes: ["Tập trung chuyển đổi", "Nội dung dễ đọc", "Ra mắt nhanh"],
  },
  "website-portfolio-ca-nhan": {
    fit: "Cá nhân, freelancer hoặc đội nhóm cần hồ sơ năng lực đẹp và dễ chia sẻ.",
    scope: ["Trang giới thiệu", "Danh sách dự án", "Thông tin liên hệ"],
    demo: "Demo cách người xem đi từ hồ sơ, năng lực đến dự án nổi bật và liên hệ.",
    feedback: "Portfolio nhìn chỉn chu hơn, dễ gửi cho khách hàng và nhà tuyển dụng.",
    author: "Freelancer",
    outcomes: ["Hình ảnh nổi bật", "Câu chuyện rõ", "Dễ liên hệ"],
  },
  "dashboard-quan-tri": {
    fit: "Đội ngũ cần một màn hình tổng hợp số liệu, trạng thái và tác vụ vận hành.",
    scope: ["Giao diện dashboard", "Bảng dữ liệu chính", "Bộ lọc và trạng thái"],
    demo: "Demo luồng xem chỉ số, lọc dữ liệu và kiểm tra trạng thái xử lý.",
    feedback: "Dữ liệu dễ nhìn hơn, đội ngũ nắm trạng thái nhanh hơn.",
    author: "Quản lý vận hành",
    outcomes: ["Dữ liệu tập trung", "Trạng thái rõ", "Dễ thao tác"],
  },
  "crm-mini": {
    fit: "Đội tư vấn cần quản lý khách hàng, trạng thái liên hệ và lịch sử chăm sóc.",
    scope: ["Danh sách khách hàng", "Trạng thái tư vấn", "Ghi chú và lịch sử"],
    demo: "Demo luồng thêm khách, cập nhật trạng thái và xem lịch sử liên hệ.",
    feedback: "Việc theo dõi khách hàng gọn hơn, tránh bỏ sót người cần chăm sóc.",
    author: "Đội sale nhỏ",
    outcomes: ["Không bỏ sót lead", "Quy trình rõ", "Dễ tìm lại"],
  },
  "demo-ai-data": {
    fit: "Sinh viên hoặc đội ngũ cần demo AI/Data dễ trình bày, có giao diện minh họa.",
    scope: ["Luồng upload/nhập liệu", "Hiển thị kết quả", "Trang giải thích demo"],
    demo: "Demo cách nhập dữ liệu, chạy xử lý và trình bày kết quả dễ hiểu.",
    feedback: "Demo dễ trình bày hơn, người xem hiểu nhanh bài toán và kết quả.",
    author: "Nhóm đồ án AI/Data",
    outcomes: ["Luồng rõ", "Kết quả dễ hiểu", "Dễ thuyết trình"],
  },
  "noi-dung-ai-marketing": {
    fit: "Đội marketing cần công cụ hỗ trợ lên ý tưởng, viết nháp và chuẩn hóa nội dung.",
    scope: ["Form brief nội dung", "Prompt xử lý", "Kết quả theo định dạng"],
    demo: "Demo luồng nhập brief, AI tạo gợi ý và chỉnh sửa theo giọng thương hiệu.",
    feedback: "Việc lên nội dung nhanh hơn và output đồng đều hơn giữa các kênh.",
    author: "Đội marketing",
    outcomes: ["Viết nhanh hơn", "Giọng văn đều", "Dễ kiểm duyệt"],
  },
} satisfies Record<
  string,
  {
    fit: string;
    scope: string[];
    demo: string;
    feedback: string;
    author: string;
    outcomes: string[];
  }
>;

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
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

export default function PortfolioDetailPage() {
  const params = useParams();
  const id = params?.id as string;
  const { portfolio, company } = content;
  const project = portfolio.projects.find((item) => item.id === id);

  if (!project) {
    return notFound();
  }

  const detail = detailContent[project.id as keyof typeof detailContent] ?? detailContent["website-ban-hang"];
  const relatedProjects = portfolio.projects.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <main className="overflow-x-hidden bg-white">
      <section className="px-6 pt-32 pb-10 md:px-8 md:pt-36 md:pb-12">
        <motion.div initial="hidden" animate="visible" variants={revealContainer} className="mx-auto max-w-7xl border-b border-outline-variant/25 pb-10">
          <motion.div variants={revealItem}>
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-bold text-on-surface-variant transition-colors hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Quay lại sản phẩm
            </Link>
          </motion.div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <motion.span variants={revealItem} className="text-xs font-black uppercase tracking-[0.22em] text-primary">
                {project.category}
              </motion.span>
              <motion.h1 variants={revealItem} className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-on-surface md:text-6xl">
                {project.title}
              </motion.h1>
            </div>
            <motion.div variants={revealItem} className="max-w-2xl lg:justify-self-end">
              <p className="text-base leading-relaxed text-on-surface-variant md:text-lg">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary px-7 py-3">
                  Yêu cầu demo
                </Link>
                <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-transform transition-colors hover:bg-primary active:scale-95">
                  Nhắn Zalo
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: "easeOut" }} className="relative mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative aspect-[1.45] overflow-hidden bg-surface-container-low md:aspect-[2.05] lg:aspect-[1.55]">
            <Image src={project.image} alt={project.title} fill preload sizes="(max-width: 1024px) 100vw, 840px" className="object-cover" />
          </div>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {detail.outcomes.map((item, index) => (
              <div key={item} className="border-t-2 border-primary bg-surface-container-low px-5 py-5">
                <span className="text-xs font-black text-primary">0{index + 1}</span>
                <p className="mt-3 text-lg font-manrope font-extrabold leading-tight text-on-surface">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <motion.article variants={revealItem} className="border-t-2 border-primary bg-surface-container-low px-6 py-7 md:px-7 md:py-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Phù hợp</span>
            <p className="mt-5 text-lg font-semibold leading-relaxed text-on-surface">{detail.fit}</p>
          </motion.article>

          <motion.article variants={revealItem} className="border-t-2 border-primary bg-surface-container-low px-6 py-7 md:px-7 md:py-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Phạm vi mẫu</span>
            <ul className="mt-6 space-y-4">
              {detail.scope.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-bold leading-relaxed text-on-surface">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article variants={revealItem} className="border-t-2 border-primary bg-surface-container-low px-6 py-7 md:px-7 md:py-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Demo</span>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-on-surface-variant">{detail.demo}</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.14em] text-primary transition-[gap] hover:gap-3">
              Yêu cầu xem demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.article>
        </motion.div>
      </section>

      <section className="px-6 pb-14 md:px-8 md:pb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-120px" }} variants={revealContainer} className="mx-auto grid max-w-7xl gap-8 border-y border-outline-variant/25 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <motion.div variants={revealItem}>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Feedback</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface">Phản hồi sau demo</h2>
          </motion.div>
          <motion.figure variants={revealItem} className="border-l-2 border-primary pl-6">
            <Quote className="mb-4 h-7 w-7 text-primary/30" />
            <blockquote className="text-xl font-semibold leading-relaxed text-on-surface">“{detail.feedback}”</blockquote>
            <figcaption className="mt-5 text-sm font-bold text-primary">{detail.author}</figcaption>
          </motion.figure>
        </motion.div>
      </section>

      <section className="px-6 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl border-t border-outline-variant/25 pt-10">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">Sản phẩm liên quan</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-on-surface">Xem thêm mẫu khác</h2>
            </div>
            <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-none bg-on-surface px-7 text-sm font-bold text-white transition-transform transition-colors hover:bg-primary active:scale-95">
              Nhắn Zalo
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {relatedProjects.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.id}`} className="group block">
                <div className="relative aspect-[1.35] overflow-hidden bg-surface-container-low">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 420px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-4 border-t border-outline-variant/20 pt-4">
                  <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-primary/70">{item.category}</span>
                  <h3 className="mt-2 text-lg font-manrope font-extrabold text-on-surface transition-colors group-hover:text-primary">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
