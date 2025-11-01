import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageSocialLinks = () => {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    linkedin: "",
    instagram: "",
    github: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/social-links")
      .then((res) => setSocialLinks(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(socialLinks).forEach((key) => {
      if (socialLinks[key] !== "") {
        data[key] = socialLinks[key];
      }
    });
    axios
      .put("http://localhost:5000/social-links", data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setMessage(
          `Social links updated successfully. Updated fields: ${res.data.updatedFields.join(
            ", "
          )}`
        );
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(() => setMessage("Error updating social links"));
  };

  const handleChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Manage Social Links</h2>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Facebook URL</label>
          <input
            type="url"
            name="facebook"
            value={socialLinks.facebook}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">LinkedIn URL</label>
          <input
            type="url"
            name="linkedin"
            value={socialLinks.linkedin}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Instagram URL</label>
          <input
            type="url"
            name="instagram"
            value={socialLinks.instagram}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">GitHub URL</label>
          <input
            type="url"
            name="github"
            value={socialLinks.github}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Social Links
        </button>
      </form>
    </div>
  );
};

export default ManageSocialLinks;
