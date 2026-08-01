import { BrainCircuit, Compass, Rocket, ShieldCheck } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const services = [
  { title: 'Product strategy', desc: 'Transform complex business goals into product systems that feel effortless and measurable.', icon: Compass },
  { title: 'AI automation', desc: 'Deploy copilots, workflow automations and intelligent decision support that save time.', icon: BrainCircuit },
  { title: 'Growth websites', desc: 'Create premium marketing sites designed to convert traffic into qualified opportunities.', icon: Rocket },
  { title: 'Operational excellence', desc: 'Launch resilient software foundations with security, observability and intelligent support.', icon: ShieldCheck },
];

export default function Services() {
  return (
    <section id="solutions" className="border-b border-white/10 bg-slate-900/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Business problems we solve</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Premium solutions for teams that need speed, clarity and trust.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="rounded-[1.6rem] border border-white/10 bg-white/6 p-8 backdrop-blur-xl">
                <div className="mb-6 inline-flex rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-400">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
