'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Why() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why ClintonStack</h2>
          <p className="text-gray-600 max-w-3xl">We focus on measurable outcomes: faster time-to-market, automated processes that reduce operating costs, and scalable systems that grow with your business. Our cross-functional teams blend design, engineering and AI to deliver secure, maintainable products.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Outcome-driven</h4>
            <p className="text-sm text-gray-600">We design solutions around business metrics, not technology for its own sake.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Practical AI</h4>
            <p className="text-sm text-gray-600">We apply AI where it delivers real ROI—automation, insights, and personalization.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <h4 className="font-semibold mb-2">Scalable Engineering</h4>
            <p className="text-sm text-gray-600">Modular architectures and clean APIs let you scale safely as demand grows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
