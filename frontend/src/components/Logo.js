import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Logo = () => {
  const [logo, setLogo] = useState({});

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await axios.get(`${API_URL}/logo`);
      setLogo(response.data);
    } catch (error) {
      console.error("Error fetching logo:", error);
    }
  };

  if (!logo.url) {
    return (
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold text-[#0B3D91]">
          Welcome to ClintonStack Technologies
        </h1>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <img
        src={`${API_URL}${logo.url}`}
        alt="ClintonStack Technologies Logo"
        className="mx-auto h-16 w-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-[#0B3D91]">
        Welcome to ClintonStack Technologies
      </h1>
    </div>
  );
};

export default Logo;
