import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#main" className="skip-link">Skip to content</a>
        <Link href="/" className="text-2xl font-bold text-primary">ClintonStack</Link>
        <nav aria-label="Main navigation" className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="text-gray-700 hover:text-primary">Services</a>
          <a href="#products" className="text-gray-700 hover:text-primary">Products</a>
          <a href="#portfolio" className="text-gray-700 hover:text-primary">Portfolio</a>
          <a href="#contact" className="text-gray-700 hover:text-primary">Contact</a>
          <a href="tel:+254768524480" className="bg-primary text-white px-4 py-2 rounded-md">Call 0768524480</a>
        </nav>
      </div>
    </header>
  );
}
