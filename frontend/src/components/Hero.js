import React, { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [heroData, setHeroData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/hero")
      .then((response) => setHeroData(response.data))
      .catch((error) => console.error("Error fetching hero data:", error));
  }, []);

  return (
    <section id="hero" className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {heroData.heading || "Welcome to ClintonStack Technologies"}
          </h1>
          <p className="text-xl mb-8">
            {heroData.subheading ||
              "Innovative solutions for your business needs."}
          </p>
          <div className="space-x-4">
            <a
              href="https://wa.link/qk8ej1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {heroData.cta1 || "Get Started"}
            </a>
            <a href="#portfolio" className="btn-secondary">
              {heroData.cta2 || "See Portfolio"}
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src={
              heroData.image || "https://via.placeholder.com/400x300?text=CEO"
            }
            alt="CEO"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
