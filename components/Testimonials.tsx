'use client';

import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  { name: 'John K.', company: 'Tech Corp', rating: 5, review: 'Their team delivered a premium digital experience that made our growth story tangible from day one.', date: '2024-09-12' },
  { name: 'Mary A.', company: 'Startup Inc', rating: 5, review: 'The automation layer was thoughtful, fast and immediately valuable for our ops team.', date: '2024-08-03' },
  { name: 'Peter N.', company: 'Hiltech', rating: 5, review: 'Professional, calm and deeply strategic — exactly what we needed to launch confidently.', date: '2024-07-18' },
];

export default function Testimonials() {
  return (
    <section className="border-b border-white/10 bg-slate-950/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Client testimonials</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">What it feels like to launch with a high-performance digital partner.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="flex gap-1 text-cyan-300">
                {Array.from({ length: item.rating }).map((_, index) => (<Star key={index} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mt-5 text-base leading-7 text-slate-300">“{item.review}”</p>
              <footer className="mt-6">
                <div className="font-semibold text-white">{item.name}</div>
                <div className="text-sm text-slate-400">{item.company} · {item.date}</div>
              </footer>
            </blockquote>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
