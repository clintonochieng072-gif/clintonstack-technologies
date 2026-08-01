import React from 'react';

const projects = [
  { title: 'Smartchems Cleaning Services', industry: 'Cleaning Services', slug: 'smartchems-cleaning', url: 'https://smartchems-cleaning.lovable.app/' },
  { title: 'Albright Ventures Limited', industry: 'Business & Investment', slug: 'albright-ventures', url: 'https://albright-ventures.lovable.app/' },
  { title: 'Sashmu Limited', industry: 'Technology', slug: 'sashmu-limited', url: 'https://sashmulimited.lovable.app/' },
  { title: 'Hiltech Repairs', industry: 'Electronics & Repairs', slug: 'hiltech-repairs', url: 'https://hiltech-repairs.lovable.app/' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={`/portfolio/${p.slug}`} className="block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.industry}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
