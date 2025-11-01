import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
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
          `http://localhost:5000/services/${editingItem.id}`,
          dataToSend,
          {
            headers: { Authorization: token },
          }
        );
        alert(
          `Service updated successfully. Fields updated: ${response.data.updatedFields.join(
            ", "
          )}`
        );
      } else {
        await axios.post("http://localhost:5000/services", formData, {
          headers: { Authorization: token },
        });
        alert("Service added successfully");
      }
      fetchServices();
      setFormData({ title: "", description: "", icon: "" });
      setEditingItem(null);
    } catch (error) {
      console.error("Error saving service:", error);
      alert("Error saving service");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      description: item.description,
      icon: item.icon,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/services/${id}`, {
        headers: { Authorization: token },
      });
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Manage Services
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
          placeholder="Icon (emoji or text)"
          value={formData.icon}
          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a]"
        >
          {editingItem ? "Update" : "Add"} Service
        </button>
        {editingItem && (
          <button
            type="button"
            onClick={() => {
              setEditingItem(null);
              setFormData({ title: "", description: "", icon: "" });
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>
      <div className="space-y-4">
        {services.map((item) => (
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

export default ManageServices;
