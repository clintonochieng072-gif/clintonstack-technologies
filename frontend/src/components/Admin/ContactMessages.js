import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const EditableMessage = ({ message, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      const data = {
        name: editedMessage.name,
        email: editedMessage.email,
        message: editedMessage.message,
      };

      const response = await axios.put(
        `${API_URL}/contact/${message.id}`,
        data,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      onUpdate(response.data.item);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating message:", error);
      alert("Failed to update message.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setEditedMessage({ ...editedMessage, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-md">
      {isEditing ? (
        <div className="space-y-3">
          {/* Form fields for editing */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={editedMessage.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={editedMessage.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={editedMessage.message}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={loading}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{message.name}</p>
              <a
                href={`mailto:${message.email}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {message.email}
              </a>
              <p className="mt-2 text-gray-800 whitespace-pre-wrap">
                {message.message}
              </p>
            </div>
            <div className="flex flex-col items-end space-y-2 ml-4">
              <p className="text-xs text-gray-500 whitespace-nowrap">
                {new Date(message.date).toLocaleDateString()}
              </p>
              <div className="flex space-x-2">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 border border-blue-500 rounded hover:bg-blue-50 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(message.id)}
                  className="px-3 py-1 text-sm text-red-600 hover:text-red-800 border border-red-500 rounded hover:bg-red-50 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactMessages = ({ messages, setMessages }) => {
  const handleUpdateMessage = (updatedMessage) => {
    setMessages(
      messages.map((msg) =>
        msg.id === updatedMessage.id ? updatedMessage : msg
      )
    );
  };

  const handleDeleteMessage = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await axios.delete(`${API_URL}/contact/${id}`, {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setMessages(messages.filter((msg) => msg.id !== id));
        alert("Message deleted successfully.");
      } catch (error) {
        console.error("Error deleting message:", error);
        alert("Failed to delete message.");
      }
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Contact Messages
      </h3>
      {messages.length > 0 ? (
        <div className="space-y-4">
          {messages.map((message) => (
            <EditableMessage
              key={message.id}
              message={message}
              onUpdate={handleUpdateMessage}
              onDelete={handleDeleteMessage}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 px-6 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-medium text-gray-700">No Messages Yet</h4>
          <p className="text-sm text-gray-500 mt-1">
            New messages from your public site will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactMessages;
