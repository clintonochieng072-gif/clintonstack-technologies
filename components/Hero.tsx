'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const metrics = [
  { label: 'Product launches', value: '40+' },
  { label: 'Automation workflows', value: '120+' },
  { label: 'Average ROI lift', value: '3.2x' },
];

const logos = ['Vercel', 'Stripe', 'Linear', 'Notion', 'Framer'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.22),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.2),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_60%,_#111827_100%)] px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Premium software company for ambitious brands
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              We design and build software that feels as premium as your ambition.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              ClintonStack Technologies creates world-class websites, AI systems, and product experiences that help companies earn trust and grow faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300">
                Book a strategy call <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
                <Play className="h-4 w-4" /> View our work
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 -translate-y-8 rounded-[2rem] bg-cyan-400/20 blur-3xl" />
            <div className="glow-ring relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl">
              <Image src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80" alt="Premium software analytics dashboard" width={900} height={700} className="h-[420px] w-full rounded-[1.4rem] object-cover" priority />
              <div className="absolute left-8 top-8 rounded-2xl border border-cyan-400/30 bg-slate-950/80 px-4 py-3 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Live automation</p>
                <p className="mt-1 text-lg font-semibold text-white">+24% pipeline efficiency</p>
              </div>
              <div className="absolute bottom-8 right-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur">
                <p className="text-sm text-slate-300">AI copilots deployed</p>
                <p className="text-xl font-semibold text-white">12 active systems</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-center text-sm uppercase tracking-[0.35em] text-slate-400">Trusted by modern operators</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-300 sm:gap-8">
            {logos.map((logo) => (
              <span key={logo} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">{logo}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

