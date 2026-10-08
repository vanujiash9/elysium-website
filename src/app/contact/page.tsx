"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import content from "@/data/content.json";

export default function ContactPage() {
  const { company } = content;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [need, setNeed] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = encodeURIComponent(
      [
        `Tên: ${name}`,
        `Số điện thoại/Zalo: ${phone || "Chưa nhập"}`,
        `Email liên hệ: ${email || "Chưa nhập"}`,
        `Nhu cầu: ${need}`,
        `Ngân sách dự kiến: ${budget || "Chưa xác định"}`,
        "",
        "Mô tả yêu cầu:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Yêu cầu tư vấn từ website Elysium")}&body=${body}`;
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative flex min-h-screen items-start overflow-hidden px-5 pb-10 pt-28 sm:px-6 md:px-8 md:pt-32 xl:items-center xl:pb-12">
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary/8 blur-[90px]" />
        <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-primary-container/10 blur-[110px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] xl:items-center">
          <header>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-0.5 w-12 bg-primary" />
              <span className="text-xs font-black uppercase tracking-[0.28em] text-primary">Liên hệ Elysium</span>
            </div>
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight text-on-surface md:text-6xl xl:text-7xl">
              Kể nhanh nhu cầu, <span className="text-primary">Elysium</span> phản hồi phương án phù hợp.
            </h1>
            <p className="mt-6 max-w-xl text-lg font-semibold leading-relaxed text-on-surface-variant md:text-xl">
              Mô tả ngắn mục tiêu và nhu cầu. Elysium sẽ liên hệ lại sớm.
            </p>
            <div className="mt-10 grid max-w-2xl gap-4 border border-outline-variant/35 bg-white/80 px-5 py-4 shadow-[0_20px_70px_rgba(0,82,204,0.06)] sm:grid-cols-3 xl:mt-8">
              <div>
                <p className="text-xs font-bold text-on-surface-variant">Email</p>
                <a href={`mailto:${company.email}`} className="mt-1 block truncate text-sm font-black text-primary">{company.email}</a>
              </div>
              <div className="border-outline-variant/35 sm:border-l sm:pl-5">
                <p className="text-xs font-bold text-on-surface-variant">Điện thoại / Zalo</p>
                <a href={`tel:${company.phone}`} className="mt-1 block text-sm font-black text-primary">{company.phone}</a>
              </div>
              <div className="border-outline-variant/35 sm:border-l sm:pl-5">
                <p className="text-xs font-bold text-on-surface-variant">Phản hồi</p>
                <p className="mt-1 text-sm font-black text-primary">Trong 24 giờ</p>
              </div>
            </div>
          </header>

          <form className="border border-primary/35 bg-white/92 px-5 py-6 shadow-[0_24px_90px_rgba(0,82,204,0.12)] backdrop-blur sm:px-6 md:px-8 md:py-7" onSubmit={handleSubmit}>
            <div className="mb-5">
              <h2 className="text-3xl font-manrope font-extrabold tracking-tight text-on-surface md:text-4xl xl:text-4xl">Gửi yêu cầu tư vấn</h2>
              <p className="mt-2 text-base font-semibold text-on-surface-variant">Điền thông tin, Elysium sẽ liên hệ lại.</p>
            </div>

            <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
              <label className="space-y-1.5">
                <span className="text-sm font-bold text-on-surface">Tên <span className="text-primary">*</span></span>
                <input id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} required type="text" autoComplete="name" className="h-11 w-full border border-outline-variant/60 bg-white px-4 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary md:h-12" placeholder="Nguyễn Văn A" />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-bold text-on-surface">Số điện thoại / Zalo <span className="text-primary">*</span></span>
                <input id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} required type="tel" autoComplete="tel" className="h-11 w-full border border-outline-variant/60 bg-white px-4 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary md:h-12" placeholder="0338 994 373" />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-bold text-on-surface">Email</span>
                <input id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" autoComplete="email" className="h-11 w-full border border-outline-variant/60 bg-white px-4 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary md:h-12" placeholder="ban@example.com" />
              </label>

              <label className="space-y-1.5">
                <span className="text-sm font-bold text-on-surface">Nhu cầu <span className="text-primary">*</span></span>
                <input id="need" name="need" value={need} onChange={(event) => setNeed(event.target.value)} required type="text" autoComplete="off" className="h-11 w-full border border-outline-variant/60 bg-white px-4 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary md:h-12" placeholder="Website, chatbot, AI tool..." />
              </label>
            </div>

            <label className="mt-4 block space-y-1.5">
              <span className="text-sm font-bold text-on-surface">Ngân sách dự kiến</span>
              <input id="budget" name="budget" value={budget} onChange={(event) => setBudget(event.target.value)} type="text" autoComplete="off" className="h-11 w-full border border-outline-variant/60 bg-white px-4 text-base font-semibold text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary md:h-12" placeholder="Ví dụ: 3-5 triệu hoặc chưa xác định" />
            </label>

            <label className="mt-4 block space-y-1.5">
              <span className="text-sm font-bold text-on-surface">Mô tả yêu cầu <span className="text-primary">*</span></span>
              <textarea id="message" name="message" value={message} onChange={(event) => setMessage(event.target.value)} required rows={3} className="w-full resize-none border border-outline-variant/60 bg-white px-4 py-3 text-base font-semibold leading-relaxed text-on-surface outline-none transition-colors placeholder:text-on-surface-variant/45 focus:border-primary xl:min-h-24" placeholder="Mục tiêu, số trang, tính năng cần có hoặc mẫu bạn thích..." />
            </label>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="inline-flex h-[3.25rem] flex-1 items-center justify-center gap-3 bg-primary px-7 text-base font-bold text-white transition-colors hover:bg-primary-container active:scale-[0.98] md:h-14">
                Gửi yêu cầu qua Email
                <Send className="h-4 w-4" />
              </button>
              <a href={`https://zalo.me/${company.phone}`} target="_blank" rel="noreferrer" className="inline-flex h-[3.25rem] items-center justify-center bg-on-surface px-9 text-base font-bold text-white transition-colors hover:bg-primary active:scale-[0.98] md:h-14">
                Nhắn Zalo
              </a>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
