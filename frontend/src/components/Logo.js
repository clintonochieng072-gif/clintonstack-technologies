import React, { useState, useEffect } from "react";
import axios from "axios";

const Logo = () => {
  const [logo, setLogo] = useState({});

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/logo");
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
        src={`http://localhost:5000${logo.url}`}
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
