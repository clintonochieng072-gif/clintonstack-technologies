import React from 'react';

const companies = ['Smartchems', 'Albright Ventures', 'Sashmu', 'Hiltech'];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-sm uppercase text-gray-500 tracking-wider">Trusted By</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-6">Trusted by businesses across industries</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center max-w-3xl mx-auto">
          {companies.map((c) => (
            <div key={c} className="p-6 bg-slate-50 rounded-lg shadow-sm">
              <p className="font-semibold">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
