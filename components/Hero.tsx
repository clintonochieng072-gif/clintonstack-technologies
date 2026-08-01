'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-white to-slate-50 py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4">We build software, websites, and AI systems that grow businesses.</h1>
            <p className="text-lg text-gray-600 mb-6">Custom software, automation and SaaS solutions for businesses seeking digital transformation.</p>
            <div className="flex gap-3">
              <a href="https://wa.me/254768524480" className="inline-flex items-center bg-primary text-white px-5 py-3 rounded-md">WhatsApp Us</a>
              <a href="#contact" className="inline-flex items-center border border-primary text-primary px-5 py-3 rounded-md">Book Consultation</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1400&q=80" alt="Team collaborating" width={700} height={460} className="object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

