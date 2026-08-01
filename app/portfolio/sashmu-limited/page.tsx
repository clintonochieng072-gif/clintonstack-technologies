import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Sashmu Limited — Case Study | ClintonStack',
  description: 'A case study of Sashmu Limited — product website and lead generation built by ClintonStack.',
};

export default function Sashmu() {
  return (
    <article className="py-20 container mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Sashmu Limited</h1>
        <p className="text-gray-600 mt-3">Technology company website showcasing services, expertise, and client success.</p>
      </header>
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-semibold text-2xl mb-3">The Challenge</h2>
          <p className="text-gray-700 mb-4">Sashmu needed a platform to present its capabilities and capture enterprise leads.</p>
          <h3 className="font-semibold mt-4">Our Solution</h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Strategic messaging and product-focused pages.</li>
            <li>Lead capture funnels and demo request workflows.</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop" alt="Technology team" width={800} height={520} />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="font-semibold text-2xl mb-3">Results</h3>
        <p className="text-gray-700">A modern site and lead pipeline that helped the team secure enterprise conversations.</p>
      </section>
    </article>
  );
}
