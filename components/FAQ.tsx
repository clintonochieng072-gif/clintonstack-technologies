import React from 'react';

const faqs = [
  { q: 'What services do you offer?', a: 'We build custom software, websites, AI-driven automation, SaaS platforms, and lead generation systems tailored to your business.' },
  { q: 'How long does a typical project take?', a: 'Typical timelines vary: a marketing website can take 2–6 weeks; a custom software project is scoped and often delivered in 8–16+ weeks depending on complexity.' },
  { q: 'Do you provide ongoing support?', a: 'Yes — we offer maintenance, monitoring and iterative product development services post-launch.' },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold">{f.q}</dt>
              <dd className="text-gray-600">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
