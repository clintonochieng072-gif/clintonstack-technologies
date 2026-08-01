import React from 'react';

const products = [
  { title: 'Affiliate Platform', url: 'https://affiliate.clintonstack.com', desc: 'A SaaS platform for managing affiliate partners and commissions.' },
  { title: 'Lead Capture System', url: 'https://leads.clintonstack.com', desc: 'A focused system for capturing and managing potential customers.' },
];

export default function Products() {
  return (
    <section id="products" className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Software Products</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((p) => (
            <div key={p.title} className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{p.desc}</p>
              <a href={p.url} target="_blank" rel="noreferrer" className="text-primary font-medium">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
