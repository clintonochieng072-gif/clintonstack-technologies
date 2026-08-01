import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Albright Ventures — Case Study | ClintonStack',
  description: 'How ClintonStack delivered a corporate website and investor-facing platform for Albright Ventures.',
};

export default function Albright() {
  return (
    <article className="py-20 container mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Albright Ventures Limited</h1>
        <p className="text-gray-600 mt-3">Corporate website and investor relations platform to present investment opportunities professionally.</p>
      </header>
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-semibold text-2xl mb-3">The Challenge</h2>
          <p className="text-gray-700 mb-4">Albright needed a polished corporate presence to build credibility with investors and partners.</p>
          <h3 className="font-semibold mt-4">Our Solution</h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Corporate design system and content strategy.</li>
            <li>Investor pages, team bios, and contact forms for qualified leads.</li>
            <li>Optimized for performance and SEO.</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&auto=format&fit=crop" alt="Business meeting" width={800} height={520} />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="font-semibold text-2xl mb-3">Results</h3>
        <p className="text-gray-700">A corporate site that increased investor inquiries and improved brand perception across digital channels.</p>
      </section>
    </article>
  );
}
