import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const ManagePortfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await axios.get(`${API_URL}/portfolio`);
      setPortfolio(response.data);
    } catch (error) {
      console.error("Error fetching portfolio:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Filter out empty fields for partial updates
      const dataToSend = {};
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== "") {
          dataToSend[key] = formData[key];
        }
      });

      if (editingItem) {
        const response = await axios.put(
          `${API_URL}/portfolio/${editingItem.id}`,
          dataToSend,
          {
            headers: { Authorization: token },
          }
        );
        alert(
          `Portfolio item updated successfully. Fields updated: ${response.data.updatedFields.join(
            ", "
          )}`
        );
      } else {
        await axios.post(`${API_URL}/portfolio`, formData, {
          headers: { Authorization: token },
        });
        alert("Portfolio item added successfully");
      }
      fetchPortfolio();
      setFormData({ title: "", description: "", image: "", link: "" });
      setEditingItem(null);
    } catch (error) {
      console.error("Error saving portfolio item:", error);
      alert("Error saving portfolio item");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      image: item.image,
      link: item.link,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/portfolio/${id}`, {
        headers: { Authorization: token },
      });
      fetchPortfolio();
    } catch (error) {
      console.error("Error deleting portfolio item:", error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Manage Portfolio
      </h3>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Link"
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a]"
        >
          {editingItem ? "Update" : "Add"} Item
        </button>
        {editingItem && (
          <button
            type="button"
            onClick={() => {
              setEditingItem(null);
              setFormData({ title: "", description: "", image: "", link: "" });
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>
      <div className="space-y-4">
        {portfolio.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
          >
            <div>
              <h4 className="font-medium">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagePortfolio;
