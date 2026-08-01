'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: 'Discovery', desc: 'We learn your goals, users, and metrics that matter.' },
  { title: 'Design & Prototype', desc: 'High-fidelity designs and clickable prototypes for rapid validation.' },
  { title: 'Build & Automate', desc: 'Engineering with observability, testing, and automation.' },
  { title: 'Launch & Iterate', desc: 'Measure results and iterate to improve impact.' },
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">How We Work</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">A lean, transparent process focused on speed and measurable business outcomes.</p>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">{`0${i + 1}`}</div>
              <h4 className="font-semibold mb-1">{s.title}</h4>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
