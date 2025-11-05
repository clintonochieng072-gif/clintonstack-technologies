import React, { useState } from "react";
import FounderIntro from "./FounderIntro";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { FaWhatsapp, FaCopy, FaCheck } from "react-icons/fa";

const PublicView = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <>
      <FounderIntro />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <a
        href="https://wa.link/qk8ej1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
      <button
        onClick={handleCopyUrl}
        className="fixed bottom-20 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Copy URL to clipboard"
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
    </>
  );
};

export default PublicView;
