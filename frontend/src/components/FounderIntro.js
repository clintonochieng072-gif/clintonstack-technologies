import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const FounderIntro = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/profile`).then((res) => setProfile(res.data));
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
              Welcome to ClintonStack Technologies
            </h1>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Founder & CEO: {profile.name}
            </h2>
            <p className="text-gray-600 italic">
              Building the Future of Digital Solutions in Africa.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={
                profile.photo
                  ? `${API_URL}${profile.photo}`
                  : "https://via.placeholder.com/200?text=CEO"
              }
              alt={profile.name}
              className="w-48 h-48 rounded-full shadow-lg border-4 border-[#0B3D91] object-cover animate-fadeIn"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;
