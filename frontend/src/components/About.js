import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const About = () => {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    axios
      .get(`${API_URL}/about`)
      .then((response) => setAboutData(response.data))
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            {aboutData.title?.replace(/^Updated\s+/, "") || "About Us"}
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            {aboutData.content ||
              "ClintonStack Technologies is a leading provider of tech solutions for Kenyan SMEs. Our mission is to empower businesses with cutting-edge technology."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
