"use client";

import { motion } from "framer-motion";
import { Terminal, Users, Share2 } from "lucide-react";
import Image from "next/image";
import content from "@/data/content.json";

export default function AboutPage() {
  const { about } = content;

  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <section className="relative px-8 pt-40 pb-32 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 z-10"
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-tertiary-container/10 text-tertiary text-xs font-bold tracking-widest uppercase">Our Vision</span>
            <h1 className="font-manrope font-extrabold text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] tracking-tighter mb-8">
              Architecting the <span className="text-primary italic">Future</span> Together
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              {about.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-xl overflow-hidden aspect-4/5 shadow-2xl relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Vision"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Our Story (Asymmetric Bento) */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
              <h2 className="font-manrope font-bold text-4xl text-on-surface mb-6">{about.story.title}</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                {about.story.p1}
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {about.story.p2}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {about.milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-white p-8 rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow ${idx === 1 ? 'lg:ml-12' : ''}`}
                >
                  <span className={`font-manrope font-extrabold text-5xl mb-4 block ${idx === 1 ? 'text-tertiary' : idx === 2 ? 'text-primary-container' : 'text-primary'}`}>
                    {milestone.year}
                  </span>
                  <h3 className="font-manrope font-bold text-xl mb-2">{milestone.title}</h3>
                  <p className="text-on-surface-variant">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Leadership (Portrait Grid) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-manrope font-bold text-4xl text-on-surface mb-4">Đội ngũ phía sau Elysium</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Một đội ngũ nhỏ, linh hoạt, tập trung vào website, AI ứng dụng và tự động hóa thực dụng.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.leadership.map((leader) => (
              <motion.div key={leader.name} whileHover={{ y: -5 }} className="group">
                <div className="relative aspect-3/4 rounded-xl overflow-hidden mb-6 bg-surface-container-high">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-manrope font-bold text-xl text-on-surface">{leader.name}</h4>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Values (Iconic Cards) */}
      <section className="py-32 bg-surface-container-high">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about.values.map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-8 ${idx === 0 ? 'signature-gradient' : idx === 1 ? 'bg-tertiary' : 'bg-primary-container text-on-primary-container'}`}>
                  {idx === 0 && <Terminal className="w-6 h-6" />}
                  {idx === 1 && <Users className="w-6 h-6" />}
                  {idx === 2 && <Share2 className="w-6 h-6" />}
                </div>
                <h3 className="font-manrope font-bold text-2xl text-on-surface mb-4">{value.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Company Culture (Image Collage) */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
            <div className="md:w-1/2">
              <h2 className="font-manrope font-bold text-4xl text-on-surface mb-4">Culture of Curiosity</h2>
              <p className="text-on-surface-variant text-lg">We&apos;ve built an environment where experimentation is celebrated, and &ldquo;I don&apos;t know&rdquo; is the start of an adventure.</p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 h-[600px]">
            <div className="col-span-12 md:col-span-8 rounded-xl overflow-hidden shadow-lg relative">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Culture"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Office"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg relative">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Team"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto text-center bg-on-surface rounded-3xl py-20 px-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <h2 className="font-manrope font-extrabold text-4xl md:text-5xl text-white mb-8 relative z-10">Join our journey into the unknown.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">Whether you&apos;re looking to build your next breakthrough or join a team of world-class creators, we&apos;re ready for you.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button className="btn-primary px-10 py-4 text-lg">
              Work with us
            </button>
            <button className="btn-ghost px-10 py-4 text-lg bg-transparent! text-white! border-white/20">
              View Careers
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

