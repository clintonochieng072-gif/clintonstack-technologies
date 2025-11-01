import React from "react";

const CTA = () => {
  return (
    <section className="bg-[#0B3D91] text-white">
      <div className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Let's work together to build something amazing. Contact us for a free
          consultation.
        </p>
        <a
          href="#contact"
          className="bg-white text-[#0B3D91] font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CTA;
