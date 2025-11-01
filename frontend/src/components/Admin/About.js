import React from "react";

const About = ({ profile, about }) => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            {profile.showProfilePicture && profile.photo && (
              <img
                src={`http://localhost:5000${profile.photo}`}
                alt={`Founder & CEO, ${profile.name}`}
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto object-cover"
                style={{ aspectRatio: "1 / 1" }}
                loading="lazy"
              />
            )}
          </div>
          <div className="slide-in-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {about.title || "About Us"}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {about.content ||
                "ClintonStack Technologies is a leading provider of tech solutions for Kenyan SMEs. Our mission is to empower businesses with cutting-edge technology."}
            </p>
            {profile.name && (
              <div className="bg-white p-4 rounded-lg shadow-md inline-block">
                <p className="font-bold text-lg text-[#0B3D91]">
                  {profile.name}
                </p>
                <p className="text-gray-500">
                  {profile.title || "Founder & CEO"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
