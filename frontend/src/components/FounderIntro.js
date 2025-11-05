import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const FounderIntro = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/profile`).then((res) => setProfile(res.data));
  }, []);

  return (
    <section className="py-8 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-[#0B3D91] mb-2">
              Welcome to ClintonStack Technologies
            </h1>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Founder & CEO: {profile.name?.replace(/^Updated\s+/, "")}
            </h2>
            <p className="text-gray-600 italic text-sm">
              Building the Future of Digital Solutions in Africa.
            </p>
          </div>
          {profile.showProfilePicture && (
            <div className="flex-shrink-0">
              <img
                src={
                  profile.photo
                    ? `${API_URL}${profile.photo}`
                    : "https://via.placeholder.com/100?text=CEO"
                }
                alt={profile.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg border-2 border-[#0B3D91] object-cover animate-fadeIn"
                loading="lazy"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FounderIntro;
