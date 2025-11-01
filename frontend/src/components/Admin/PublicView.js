import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../public/Header";
import Hero from "../public/Hero";
import About from "../public/About";
import Services from "../public/Services";
import Portfolio from "../public/Portfolio";
import Testimonials from "../public/Testimonials";
import CTA from "../public/CTA";
import Contact from "../public/Contact";
import Footer from "../public/Footer";
import "../../styles/PublicView.css";

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
          axios.get("http://localhost:5000/hero"),
          axios.get("http://localhost:5000/profile"),
          axios.get("http://localhost:5000/logo"),
          axios.get("http://localhost:5000/services"),
          axios.get("http://localhost:5000/portfolio"),
          axios.get("http://localhost:5000/testimonials"),
          axios.get("http://localhost:5000/social-links"),
          axios.get("http://localhost:5000/about"),
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
