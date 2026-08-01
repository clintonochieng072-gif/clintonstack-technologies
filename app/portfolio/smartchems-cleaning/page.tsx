import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Smartchems Cleaning Services — Case Study | ClintonStack',
  description: 'A full case study: how ClintonStack built a lead-generating website and booking flow for Smartchems Cleaning Services.',
};

export default function Smartchems() {
  return (
    <article className="py-20 container mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Smartchems Cleaning Services</h1>
        <p className="text-gray-600 mt-3">Professional cleaning company website with services, pricing and booking — designed to convert.</p>
      </header>
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-semibold text-2xl mb-3">The Challenge</h2>
          <p className="text-gray-700 mb-4">Smartchems needed a modern web presence with an easy booking flow and clear pricing to increase conversions from local searches.</p>
          <h3 className="font-semibold mt-4">Our Solution</h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Fast, SEO-optimized website targeting local keywords.</li>
            <li>Simple booking flow with lead capture and WhatsApp integration.</li>
            <li>Conversion-focused landing pages and service pages.</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1581579181433-6e6f6ad4a9f3?w=1200&q=80&auto=format&fit=crop" alt="Cleaning services" width={800} height={520} />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="font-semibold text-2xl mb-3">Results</h3>
        <p className="text-gray-700">Improved local search visibility and a 45% increase in booking inquiries within two months post-launch.</p>
      </section>
    </article>
  );
}
