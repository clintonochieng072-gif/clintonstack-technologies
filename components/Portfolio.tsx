import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const projects = [
  { title: 'Smartchems Cleaning Services', industry: 'Operations & growth', slug: 'smartchems-cleaning', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80' },
  { title: 'Albright Ventures Limited', industry: 'Capital & digital presence', slug: 'albright-ventures', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80' },
  { title: 'Sashmu Limited', industry: 'Technology & product', slug: 'sashmu-limited', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80' },
  { title: 'Hiltech Repairs', industry: 'Service transformation', slug: 'hiltech-repairs', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-b border-white/10 bg-slate-900/60 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Featured portfolio</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Premium product work that balances elegance, scale and measurable impact.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.title} href={`/portfolio/${project.slug}`} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="relative h-56 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{project.industry}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                  View case study <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
