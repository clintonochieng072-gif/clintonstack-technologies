import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageFounder = () => {
  const [profile, setProfile] = useState({
    name: "",
    title: "",
    photo: "",
    showProfilePicture: true,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile")
      .then((res) => setProfile(res.data));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append("photo", selectedFile);

    try {
      const uploadRes = await axios.put(
        "http://localhost:5000/profile/upload",
        formData,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfile({ ...profile, photo: uploadRes.data.url });
      setMessage("Profile photo uploaded successfully");
      setSelectedFile(null);
      setTimeout(() => setMessage(""), 3000);
    } catch (error) {
      setMessage("Error uploading photo");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(profile).forEach((key) => {
      if (profile[key] !== "" && key !== "photo") {
        data[key] = profile[key];
      }
    });
    axios
      .put("http://localhost:5000/profile", data, {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setMessage(
          `Profile updated successfully. Updated fields: ${res.data.updatedFields.join(
            ", "
          )}`
        );
        setTimeout(() => setMessage(""), 3000);
      })
      .catch(() => setMessage("Error updating profile"));
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Founder Profile</h2>
      {message && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          {message}
        </div>
      )}

      {/* Photo Upload Section */}
      <div className="mb-6 p-4 border rounded-lg bg-gray-50 space-y-4">
        <h3 className="text-lg font-semibold mb-2">Profile Photo</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 space-y-3 sm:space-y-0">
          <label htmlFor="photo-upload" className="sr-only">
            Upload profile photo
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
          <button
            type="button"
            onClick={handleUpload}
            className="w-full sm:w-auto bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
          >
            Upload Photo
          </button>
        </div>
        {profile.photo && (
          <div className="mt-4 flex items-center gap-4">
            <img
              src={`http://localhost:5000${profile.photo}`}
              alt="Current founder profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
            />
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">Founder Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4 space-y-2">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={profile.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-[#0B3D91] text-white px-4 py-2 rounded-md hover:bg-[#0a2d7a] transition-colors"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ManageFounder;
