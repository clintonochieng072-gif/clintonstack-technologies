import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const ManageHero = () => {
  const [heroData, setHeroData] = useState({
    heading: "",
    subheading: "",
    cta1: "",
    cta2: "",
    image: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      const response = await axios.get(`${API_URL}/hero`);
      setHeroData(response.data);
    } catch (error) {
      console.error("Error fetching hero data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Filter out empty fields for partial updates
      const dataToSend = {};
      Object.keys(heroData).forEach((key) => {
        if (heroData[key] !== "") {
          dataToSend[key] = heroData[key];
        }
      });

      const response = await axios.put(`${API_URL}/hero`, dataToSend, {
        headers: { Authorization: token },
      });
      alert(
        `Hero section updated successfully. Fields updated: ${response.data.updatedFields.join(
          ", "
        )}`
      );
    } catch (error) {
      console.error("Error updating hero:", error);
      alert("Error updating hero section");
    }
  };

  const handleChange = (e) => {
    setHeroData({ ...heroData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Manage Hero Section
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={heroData.heading}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="subheading"
          placeholder="Subheading"
          value={heroData.subheading}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="cta1"
          placeholder="CTA Button 1 Text"
          value={heroData.cta1}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="cta2"
          placeholder="CTA Button 2 Text"
          value={heroData.cta2}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={heroData.image}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a]"
        >
          Update Hero Section
        </button>
      </form>
    </div>
  );
};

export default ManageHero;
