"use client";

import { motion } from "framer-motion";
import { Send, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import content from "@/data/content.json";

export default function InsightsPage() {
  const { insights } = content;

  if (!insights) {
    return null;
  }

  return (
    <main className="overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
        {/* Hero Section */}
        <header className="mb-16">
          <div className="flex flex-col md:flex-row items-end gap-4 mb-8">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-7xl font-extrabold font-manrope tracking-tighter text-on-surface leading-none"
            >
              Insights
            </motion.h1>
            <div className="h-1 w-24 bg-tertiary mb-3 hidden md:block"></div>
            <p className="text-on-surface-variant font-medium text-lg max-w-md pb-1">
              Exploring the frontier of software engineering and digital craft.
            </p>
          </div>

          {/* Featured Article */}
          <Link href={`/insights/${insights.articles[0].slug}`} className="group block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-4xl bg-surface-container-low min-h-[500px] flex items-end shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="absolute inset-0">
                <Image
                  src={insights.articles[0].image}
                  alt={insights.articles[0].title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-on-surface/90 via-on-surface/40 to-transparent"></div>
              </div>
              <div className="relative z-10 p-8 md:p-12 w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-tertiary text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Featured</span>
                  <span className="text-white/70 text-sm font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 12 Min Read
                  </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-manrope font-extrabold text-white mb-6 leading-tight tracking-tight">
                  {insights.articles[0].title}
                </h2>
                <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                  {insights.articles[0].excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      alt={insights.articles[0].author}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-bold">{insights.articles[0].author}</p>
                    <p className="text-white/50 text-sm">Principal Architect</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        </header>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-3 mb-12">
          {["All Insights", "Engineering", "Design", "AI/ML", "Product"].map((cat, idx) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${idx === 0 ? 'bg-primary text-white' : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asymmetric Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Column 1: Main Posts */}
          <div className="md:col-span-7 flex flex-col gap-12">
            {insights.articles.slice(1, 3).map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/insights/${article.slug}`}>
                  <div className={`rounded-3xl overflow-hidden bg-surface-container-low mb-6 relative aspect-video ${idx === 1 ? 'aspect-4/3' : ''}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
                      {idx === 0 ? "Engineering" : "AI / ML"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm mb-3 font-medium">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span>8 Min Read</span>
                    </div>
                    <h3 className="text-2xl font-manrope font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed mb-6">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                          alt={article.author}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm font-semibold text-on-surface">{article.author}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Column 2: Side Content & Other Posts */}
          <div className="md:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary-container p-8 rounded-3xl text-white relative overflow-hidden"
            >
              <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <h4 className="font-manrope font-extrabold text-2xl mb-4 relative z-10">Get the Blueprint</h4>
              <p className="text-white/80 mb-6 relative z-10">Join 15,000+ engineers receiving our weekly deep-dives into technical excellence.</p>
              <div className="flex flex-col gap-3 relative z-10">
                <input className="bg-white/10 border-none rounded-xl py-3 px-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30" placeholder="Email Address" type="email" />
                <button className="bg-white text-primary font-bold py-3 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                  Subscribe Now <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            {insights.articles.slice(3).map((article, idx) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/insights/${article.slug}`}>
                  <div className={`rounded-3xl overflow-hidden bg-surface-container-low mb-6 relative aspect-square ${idx === 1 ? 'aspect-video' : ''}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest text-primary">
                      {idx === 0 ? "Design" : "Engineering"}
                    </div>
                  </div>
                  <div className="px-2">
                    <div className="flex items-center gap-3 text-on-surface-variant text-sm mb-3 font-medium">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span>10 Min Read</span>
                    </div>
                    <h3 className="text-2xl font-manrope font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-on-surface-variant leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

