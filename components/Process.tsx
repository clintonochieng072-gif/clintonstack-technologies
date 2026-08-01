'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const steps = [
  { title: 'Discover', desc: 'We learn your goals, users and the metrics that matter.' },
  { title: 'Design', desc: 'We prototype elegant experiences with clarity and speed.' },
  { title: 'Build', desc: 'We engineer resilient products with automation and observability.' },
  { title: 'Launch', desc: 'We iterate quickly and turn performance into durable growth.' },
];

export default function Process() {
  return (
    <section id="process" className="border-b border-white/10 bg-slate-950/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Our development process</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">A modern operating model designed for premium delivery.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div key={step.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="text-3xl font-semibold text-cyan-300">0{index + 1}</div>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
