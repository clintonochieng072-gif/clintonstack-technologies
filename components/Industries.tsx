import AnimatedSection from './AnimatedSection';

const industries = ['Healthcare', 'E-commerce', 'Professional Services', 'Manufacturing', 'Fintech', 'Logistics'];

export default function Industries() {
  return (
    <section className="border-b border-white/10 bg-slate-900/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Industries we serve</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Built to support fast-moving organizations from startup to enterprise scale.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-6 py-8 text-center text-lg font-medium text-slate-200">
              {industry}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
