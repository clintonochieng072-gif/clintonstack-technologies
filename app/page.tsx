import React from 'react';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Services from '../components/Services';
import Products from '../components/Products';
import Portfolio from '../components/Portfolio';
import Why from '../components/Why';
import Process from '../components/Process';
import Industries from '../components/Industries';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustedBy />
      <Services />
      <Products />
      <Portfolio />
      <Why />
      <Process />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
