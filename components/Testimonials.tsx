'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'John K., Tech Corp', text: 'ClintonStack delivered a robust website and lead system that doubled our inbound leads.' },
  { name: 'Mary A., Startup Inc', text: 'Their team shipped fast and helped us automate manual workflows — savings were immediate.' },
  { name: 'Peter N., Hiltech', text: 'Professional, responsive and outcome-focused. Highly recommended.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote key={t.name} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} className="p-6 bg-slate-50 rounded-xl">
              <p className="text-gray-700 mb-3">“{t.text}”</p>
              <footer className="text-sm font-semibold text-gray-900">{t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
