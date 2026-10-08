"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import data from "@/data/content.json";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-8 flex items-center justify-between">
          <Link href="/" className="font-manrope z-50 leading-none">
            <span className="block text-2xl font-extrabold text-primary tracking-[0.18em] uppercase">Elysium</span>
            <span className="block text-[0.55rem] font-bold text-on-surface-variant tracking-[0.28em] uppercase mt-1">Build a brighter future</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {data.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-manrope font-bold transition-colors ${pathname === item.href
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="group hidden items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-white shadow-xl shadow-primary/25 ring-4 ring-primary/10 transition-all hover:bg-primary-container hover:shadow-2xl hover:shadow-primary/30 active:scale-95 sm:flex motion-safe:animate-[ctaZoom_1.8s_ease-in-out_infinite]">
              Nhận tư vấn
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden z-50 p-2 text-primary hover:bg-primary/10 rounded-full transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface flex flex-col pt-32 px-8 md:hidden"
          >
            <div className="space-y-8">
              {data.navigation.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-extrabold tracking-tighter ${pathname === item.href ? 'text-primary' : 'text-on-surface'
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pb-16 space-y-8"
            >
              <div className="h-px bg-outline-variant/30" />
              <div className="space-y-4">
                <p className="text-sm font-bold text-outline uppercase tracking-widest">Liên hệ</p>
                <div className="flex flex-col gap-4">
                  <a href={`tel:${data.company.phone}`} className="text-xl font-bold text-on-surface-variant">{data.company.phone}</a>
                  <a href={`mailto:${data.company.email}`} className="text-on-surface-variant/80">{data.company.email}</a>
                  <p className="text-on-surface-variant/60">{data.company.address}</p>
                </div>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full signature-gradient text-white py-6 rounded-2xl font-bold text-xl flex items-center justify-center gap-2 group"
              >
                Tư vấn ngay
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

