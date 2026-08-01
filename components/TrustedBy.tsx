import AnimatedSection from './AnimatedSection';

const companies = ['Smartchems', 'Albright Ventures', 'Sashmu', 'Hiltech'];

export default function TrustedBy() {
  return (
    <section className="border-b border-white/10 bg-slate-950/60 px-6 py-16 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">Trusted by ambitious teams</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {companies.map((company) => (
              <div key={company} className="rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-6 text-center text-lg font-semibold text-slate-100">
                {company}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
