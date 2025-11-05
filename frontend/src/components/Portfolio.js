import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/portfolio`)
      .then((response) => setPortfolio(response.data))
      .catch((error) => console.error("Error fetching portfolio:", error));
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600">
            Check out some of our recent projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#0B3D91] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a href={item.link} className="text-[#34C759] hover:underline">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
