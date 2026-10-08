"use client";

import content from "@/data/content.json";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { insights } = content;

  const article = insights.articles.find(a => a.slug === slug);

  if (!article) {
    return notFound();
  }

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <article className="max-w-4xl mx-auto space-y-16">
        
        <Link href="/insights" className="inline-flex items-center text-on-surface-variant hover:text-primary transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Insights
        </Link>

        <header className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Engineering Deep Dive</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {article.title}
            </h1>
          </div>
          
          <div className="flex items-center gap-6 pt-4 border-y border-outline-variant/10 py-6">
             <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center font-bold">
               {article.author.split(' ').map(n => n[0]).join('')}
             </div>
             <div>
               <p className="font-bold text-lg">{article.author}</p>
               <p className="text-on-surface-variant">Published on {article.date}</p>
             </div>
          </div>
        </header>

        <div className="relative aspect-[21/9] rounded-3xl overflow-hidden border border-outline-variant/20">
          <Image 
            src={article.image} 
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg prose-blue max-w-none text-on-surface-variant leading-relaxed space-y-8">
          <p className="text-2xl text-on-surface font-medium leading-relaxed italic border-l-4 border-primary pl-8 py-4">
            {article.excerpt}
          </p>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-on-surface">The Challenge of Modern Scale</h2>
            <p>
              In the current landscape of rapid AI evolution, the traditional methods of handling data processing have reached their limits. When we started building our proprietary distributed system, we knew that memory safety and raw execution speed were not negotiable.
            </p>
            <p>
              Our team spent months auditing various low-level languages before settling on a hybrid architecture. By leveraging the power of modern cloud-native principles and combining them with deep technical precision, we&apos;ve managed to achieve what many thought was impossible: sub-millisecond response times at petabyte scale.
            </p>
          </div>

          <div className="bg-surface-container-low p-10 rounded-3xl border border-outline-variant/20 my-16">
            <h3 className="text-2xl font-bold mb-4 text-on-surface">Key Technical Takeaways</h3>
            <ul className="list-disc pl-6 space-y-4">
              <li>Distributed state management with zero-latency overhead.</li>
              <li>Proprietary quantization techniques for model deployment.</li>
              <li>Rust-based core modules for critical processing paths.</li>
              <li>Custom CI/CD pipelines optimized for rapid iteration.</li>
            </ul>
          </div>

          <p>
            As we continue to explore the frontier of software engineering, we remain committed to our founding principle: great software is an engineered masterpiece. We don&apos;t just write code; we build the digital infrastructure for the future.
          </p>
        </div>

        <footer className="pt-20 border-t border-outline-variant/20">
           <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-surface-container-low p-12 rounded-[2.5rem]">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-on-surface">Bạn muốn áp dụng ý tưởng này?</h4>
                <p className="text-lg text-on-surface-variant">Elysium có thể tư vấn cách biến nhu cầu của bạn thành website, chatbot hoặc AI tool thực tế.</p>
              </div>
              <Link href="/contact" className="btn-primary whitespace-nowrap">
                Nhận tư vấn
              </Link>
           </div>
        </footer>

      </article>
    </main>
  );
}
