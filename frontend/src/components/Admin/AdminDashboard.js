import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Import modular components
import ManagePortfolio from "./ManagePortfolio";
import ManageServices from "./ManageServices";
import ManageTestimonials from "./ManageTestimonials";
import ManageHero from "./ManageHero";
import ManageAbout from "./ManageAbout";
import ManageFounder from "./ManageFounder";
import ManageSocialLinks from "./ManageSocialLinks";
import Settings from "./Settings";
import DashboardTabs from "./DashboardTabs";
import ContactMessages from "./ContactMessages";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("settings");
  const [contactMessages, setContactMessages] = useState([]);
  const [profile, setProfile] = useState({ showProfilePicture: false });
  const [logo, setLogo] = useState({ showLogo: false, url: "" });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }

    const fetchAllData = async () => {
      await Promise.all([fetchContactMessages(), fetchProfile(), fetchLogo()]);
    };
    fetchAllData();
  }, [navigate, token]);

  const fetchContactMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/contact-messages`, {
        headers: { Authorization: token },
      });
      setContactMessages(response.data);
    } catch (error) {
      console.error(
        "Error fetching contact messages:",
        error.response?.data?.message || error.message
      );
      if (error.response && error.response.status === 401) {
        navigate("/admin");
      }
    }
  };

  const fetchProfile = async () => {
    try {
      const response = await axios.get(`${API_URL}/profile`);
      setProfile(response.data);
    } catch (error) {
      console.error(
        "Error fetching profile:",
        error.response?.data?.message || error.message
      );
    }
  };

  const fetchLogo = async () => {
    try {
      const response = await axios.get(`${API_URL}/logo`);
      setLogo(response.data);
    } catch (error) {
      console.error(
        "Error fetching logo:",
        error.response?.data?.message || error.message
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin");
  };

  const toggleProfilePicture = async () => {
    const newShow = !profile.showProfilePicture;
    try {
      await axios.put(
        `${API_URL}/profile`,
        { showProfilePicture: newShow },
        {
          headers: { Authorization: token },
        }
      );
      setProfile({ ...profile, showProfilePicture: newShow });
    } catch (error) {
      console.error("Error updating profile visibility:", error);
      alert("Failed to update profile visibility.");
    }
  };

  const toggleLogo = async () => {
    const newShow = !logo.showLogo;
    try {
      await axios.put(
        `${API_URL}/logo`,
        { showLogo: newShow },
        {
          headers: { Authorization: token },
        }
      );
      setLogo({ ...logo, showLogo: newShow });
    } catch (error) {
      console.error("Error updating logo visibility:", error);
      alert("Failed to update logo visibility.");
    }
  };

  const handleLogoUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("logo", file);
      try {
        const response = await axios.post(`${API_URL}/logo/upload`, formData, {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        });
        setLogo({ ...logo, url: response.data.url });
        alert("Logo uploaded successfully!");
      } catch (error) {
        console.error("Error uploading logo:", error);
        alert("Error uploading logo");
      }
    }
  };

  const handleProfileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("photo", file);
      try {
        const response = await axios.put(
          `${API_URL}/profile/upload`,
          formData,
          {
            headers: {
              Authorization: token,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setProfile({ ...profile, photo: response.data.url });
        alert("Profile picture uploaded successfully!");
      } catch (error) {
        console.error("Error uploading profile picture:", error);
        alert("Error uploading profile picture");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#0B3D91] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-2 sm:px-0">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Link
              to="/public"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-300"
              aria-label="View public site in a new tab"
            >
              View Public Site
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-medium text-sm transition-colors duration-300"
              aria-label="Logout"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-2 sm:px-4 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="p-4 sm:p-6">
            {activeTab === "settings" && (
              <Settings
                profile={profile}
                logo={logo}
                toggleProfilePicture={toggleProfilePicture}
                toggleLogo={toggleLogo}
                handleLogoUpload={handleLogoUpload}
                handleProfileUpload={handleProfileUpload}
              />
            )}
            {activeTab === "founder" && <ManageFounder />}
            {activeTab === "portfolio" && <ManagePortfolio />}
            {activeTab === "services" && <ManageServices />}
            {activeTab === "testimonials" && <ManageTestimonials />}
            {activeTab === "hero" && <ManageHero />}
            {activeTab === "about" && <ManageAbout />}
            {activeTab === "social" && <ManageSocialLinks />}
            {activeTab === "messages" && (
              <ContactMessages
                messages={contactMessages}
                setMessages={setContactMessages}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
