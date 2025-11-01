import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageAbout = () => {
  const [aboutData, setAboutData] = useState({ title: "", content: "" });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      const response = await axios.get("http://localhost:5000/about");
      setAboutData(response.data);
    } catch (error) {
      console.error("Error fetching about data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Filter out empty fields for partial updates
      const dataToSend = {};
      Object.keys(aboutData).forEach((key) => {
        if (aboutData[key] !== "") {
          dataToSend[key] = aboutData[key];
        }
      });

      const response = await axios.put(
        "http://localhost:5000/about",
        dataToSend,
        {
          headers: { Authorization: token },
        }
      );
      alert(
        `About section updated successfully. Fields updated: ${response.data.updatedFields.join(
          ", "
        )}`
      );
    } catch (error) {
      console.error("Error updating about:", error);
      alert("Error updating about section");
    }
  };

  const handleChange = (e) => {
    setAboutData({ ...aboutData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Manage About Section
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={aboutData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          name="content"
          placeholder="Content"
          value={aboutData.content}
          onChange={handleChange}
          rows="6"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a]"
        >
          Update About Section
        </button>
      </form>
    </div>
  );
};

export default ManageAbout;
