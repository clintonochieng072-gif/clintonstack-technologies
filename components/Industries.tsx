import React from 'react';

const industries = [
  'Healthcare',
  'E-commerce',
  'Professional Services',
  'Manufacturing',
  'Fintech',
  'Logistics',
];

export default function Industries() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Industries We Serve</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">We work with organizations of all sizes across multiple industries to design and deliver systems that accelerate growth.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
          {industries.map((i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-sm">
              <h4 className="font-semibold">{i}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
