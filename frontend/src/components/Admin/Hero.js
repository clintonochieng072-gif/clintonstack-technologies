import React from "react";

const Hero = ({ data }) => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${
          data.image ||
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80"
        })`,
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-6 py-32 md:py-48 text-center z-10">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            {data.heading ||
              "Building the Future of Digital Solutions in Africa"}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {data.subheading ||
              "Empowering businesses with cutting-edge technology"}
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="bg-[#0B3D91] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 transform hover:scale-105"
            >
              {data.cta1 || "Get Started"}
            </a>
            <a
              href="#portfolio"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
            >
              {data.cta2 || "View Portfolio"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
