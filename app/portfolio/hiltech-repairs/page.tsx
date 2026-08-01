import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Hiltech Repairs — Case Study | ClintonStack',
  description: 'Hiltech Repairs — how we built an effective service website and customer request flows.',
};

export default function Hiltech() {
  return (
    <article className="py-20 container mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary">Hiltech Repairs</h1>
        <p className="text-gray-600 mt-3">A repair service website designed for bookings and service requests.</p>
      </header>
      <section className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="font-semibold text-2xl mb-3">The Challenge</h2>
          <p className="text-gray-700 mb-4">Hiltech needed a clear way for customers to request repairs and schedule drop-offs.</p>
          <h3 className="font-semibold mt-4">Our Solution</h3>
          <ul className="list-disc pl-5 text-gray-700 mt-2">
            <li>Service pages with clear scope and pricing.</li>
            <li>Customer request forms and confirmations.</li>
          </ul>
        </div>
        <div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image src="https://images.unsplash.com/photo-1580910051072-7f6b2f3e9e6e?w=1200&q=80&auto=format&fit=crop" alt="Repair service" width={800} height={520} />
          </div>
        </div>
      </section>
      <section className="mt-12">
        <h3 className="font-semibold text-2xl mb-3">Results</h3>
        <p className="text-gray-700">Simplified service booking and improved customer response time.</p>
      </section>
    </article>
  );
}
