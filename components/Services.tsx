import React from 'react';

const services = [
  { title: 'Custom Software Development', desc: 'Build tailored systems that automate and scale your business.' },
  { title: 'Business Websites', desc: 'Conversion-focused websites that capture leads and tell your story.' },
  { title: 'AI & Business Automation', desc: 'AI-driven workflows to reduce manual work and increase accuracy.' },
  { title: 'Lead Generation Systems', desc: 'Capture and route high-quality leads to your sales team.' },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-6">Business Problems We Solve</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-white p-6 rounded-xl shadow-sm text-left">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
