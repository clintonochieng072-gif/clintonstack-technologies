import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
    image: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:5000/testimonials");
      setTestimonials(response.data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
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
          `http://localhost:5000/testimonials/${editingItem.id}`,
          dataToSend,
          {
            headers: { Authorization: token },
          }
        );
        alert(
          `Testimonial updated successfully. Fields updated: ${response.data.updatedFields.join(
            ", "
          )}`
        );
      } else {
        await axios.post("http://localhost:5000/testimonials", formData, {
          headers: { Authorization: token },
        });
        alert("Testimonial added successfully");
      }
      fetchTestimonials();
      setFormData({ name: "", company: "", message: "", image: "" });
      setEditingItem(null);
    } catch (error) {
      console.error("Error saving testimonial:", error);
      alert("Error saving testimonial");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      company: item.company,
      message: item.message,
      image: item.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/testimonials/${id}`, {
        headers: { Authorization: token },
      });
      fetchTestimonials();
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900 mb-4">
        Manage Testimonials
      </h3>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          placeholder="Company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
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
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a]"
        >
          {editingItem ? "Update" : "Add"} Testimonial
        </button>
        {editingItem && (
          <button
            type="button"
            onClick={() => {
              setEditingItem(null);
              setFormData({ name: "", company: "", message: "", image: "" });
            }}
            className="ml-2 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </form>
      <div className="space-y-4">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-gray-50 p-4 rounded-lg"
          >
            <div>
              <h4 className="font-medium">
                {item.name} - {item.company}
              </h4>
              <p className="text-sm text-gray-600">{item.message}</p>
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

export default ManageTestimonials;
