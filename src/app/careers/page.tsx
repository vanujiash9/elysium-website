"use client";

import content from "@/data/content.json";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const { careers, company } = content;

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto space-y-24">

        <header className="max-w-3xl space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-sm font-medium text-tertiary border border-outline-variant/30">
            Careers at {company.name}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-[-0.02em]">
            {careers.title}
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            {careers.description}
          </p>
        </header>

        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-outline-variant/20 pb-8">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <p className="text-on-surface-variant font-medium">{careers.openPositions.length} jobs available</p>
          </div>

          <div className="divide-y divide-outline-variant/10">
            {careers.openPositions.map((job, i) => (
              <div key={i} className="py-12 group flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-surface-container/30 transition-colors px-4 rounded-2xl">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex items-center gap-6 text-on-surface-variant">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {job.type}</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-secondary group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-container text-on-primary p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Don&apos;t see a position that fits?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              We are always looking for exceptional talent. If you believe you belong here, tell us why.
            </p>
            <Link href="/contact" className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-white text-primary font-bold hover:scale-105 transition-transform">
              General Application
            </Link>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary-container blur-[100px] opacity-40 -translate-y-1/2 translate-x-1/2" />
        </section>

      </div>
    </main>
  );
}
