import AnimatedSection from './AnimatedSection';

const faqs = [
  { q: 'What kinds of projects do you take on?', a: 'We design and build high-performance websites, custom software products, AI automation systems, and product-led experiences for ambitious companies.' },
  { q: 'How quickly can we begin?', a: 'Most engagements begin with a discovery call and a tailored roadmap within a matter of days.' },
  { q: 'Do you support ongoing iteration?', a: 'Yes. We provide launch support, product refinement and growth-focused enhancements long after the first release.' },
];

export default function FAQ() {
  return (
    <section className="border-b border-white/10 bg-slate-900/70 px-6 py-24 sm:px-8 lg:px-10">
      <AnimatedSection className="mx-auto max-w-4xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-400">Frequently asked questions</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">Everything you need to know before we build together.</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <dt className="text-lg font-semibold text-white">{faq.q}</dt>
              <dd className="mt-3 text-base leading-7 text-slate-400">{faq.a}</dd>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
