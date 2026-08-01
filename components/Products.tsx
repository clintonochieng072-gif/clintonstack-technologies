import { ArrowUpRight, Box, Layers3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const products = [
  { title: 'Affiliate Platform', desc: 'A modern partner operations hub for commissions, onboarding and performance analytics.', icon: Layers3 },
  { title: 'Lead Capture System', desc: 'An intelligent conversion engine that captures, qualifies and routes new prospects instantly.', icon: Box },
];

export default function Products() {
  return (
    <section className="border-b border-white/10 bg-slate-950/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Our software products</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Digitally native products built for growth and operational clarity.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div key={product.title} className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{product.desc}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  Explore product <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
