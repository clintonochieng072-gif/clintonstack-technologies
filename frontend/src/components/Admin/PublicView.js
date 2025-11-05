import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import CTA from "./CTA";
import Contact from "./Contact";
import Footer from "./Footer";
import "../../styles/PublicView.css";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const PublicView = () => {
  const [data, setData] = useState({
    hero: {},
    profile: {},
    logo: {},
    services: [],
    portfolio: [],
    testimonials: [],
    socialLinks: {},
    about: {},
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const [
          heroRes,
          profileRes,
          logoRes,
          servicesRes,
          portfolioRes,
          testimonialsRes,
          socialLinksRes,
          aboutRes,
        ] = await Promise.all([
          axios.get(`${API_URL}/hero`),
          axios.get(`${API_URL}/profile`),
          axios.get(`${API_URL}/logo`),
          axios.get(`${API_URL}/services`),
          axios.get(`${API_URL}/portfolio`),
          axios.get(`${API_URL}/testimonials`),
          axios.get(`${API_URL}/social-links`),
          axios.get(`${API_URL}/about`),
        ]);

        setData({
          hero: heroRes.data,
          profile: profileRes.data,
          logo: logoRes.data,
          services: servicesRes.data,
          portfolio: portfolioRes.data,
          testimonials: testimonialsRes.data,
          socialLinks: socialLinksRes.data,
          about: aboutRes.data,
        });
      } catch (err) {
        console.error("Failed to fetch public data:", err);
        setError("Could not load website content. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Loading ClintonStack Technologies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header logo={data.logo} />
      <main>
        <Hero data={data.hero} />
        <About profile={data.profile} about={data.about} />
        <Services services={data.services} />
        <Portfolio portfolio={data.portfolio} />
        <Testimonials testimonials={data.testimonials} />
        <CTA />
        <Contact />
      </main>
      <Footer socialLinks={data.socialLinks} />
    </div>
  );
};

export default PublicView;
