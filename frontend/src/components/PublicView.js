import React, { useState, useEffect } from "react";
import axios from "axios";
import FounderIntro from "./FounderIntro";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import {
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaComments,
} from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const PublicView = () => {
  const [copied, setCopied] = useState(false);
  const [socialLinks, setSocialLinks] = useState({});
  const [showMessages, setShowMessages] = useState(false);
  const [messages, setMessages] = useState([]);
  const [replyForm, setReplyForm] = useState({
    messageId: null,
    name: "",
    reply: "",
  });

  useEffect(() => {
    axios
      .get(`${API_URL}/social-links`)
      .then((res) => setSocialLinks(res.data));
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`${API_URL}/contact-messages`);
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/contact/${replyForm.messageId}/reply`, {
        name: replyForm.name,
        reply: replyForm.reply,
      });
      setReplyForm({ messageId: null, name: "", reply: "" });
      fetchMessages();
    } catch (error) {
      console.error("Error submitting reply:", error);
    }
  };

  return (
    <>
      <FounderIntro />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <a
        href="https://wa.link/qk8ej1"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
      {socialLinks.facebook && (
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float facebook-float"
        >
          <FaFacebook />
        </a>
      )}
      {socialLinks.linkedin && (
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float linkedin-float"
        >
          <FaLinkedin />
        </a>
      )}
      {socialLinks.instagram && (
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float instagram-float"
        >
          <FaInstagram />
        </a>
      )}
      {socialLinks.github && (
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-float github-float"
        >
          <FaGithub />
        </a>
      )}
      <button
        onClick={handleCopyUrl}
        className="fixed bottom-20 right-4 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="Copy URL to clipboard"
      >
        {copied ? <FaCheck /> : <FaCopy />}
      </button>
      <button
        onClick={() => setShowMessages(!showMessages)}
        className="fixed bottom-32 right-4 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        title="View Messages"
      >
        <FaComments />
      </button>
      {showMessages && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Public Messages</h3>
            {messages.length === 0 ? (
              <p>No messages yet.</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="mb-4 p-4 border rounded">
                  <p>
                    <strong>{msg.name}</strong> ({msg.email})
                  </p>
                  <p>{msg.message}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(msg.date).toLocaleString()}
                  </p>
                  {msg.replies &&
                    msg.replies.map((reply) => (
                      <div
                        key={reply.id}
                        className="ml-4 mt-2 p-2 bg-gray-100 rounded"
                      >
                        <p>
                          <strong>{reply.name}</strong>
                        </p>
                        <p>{reply.reply}</p>
                        <p className="text-sm text-gray-500">
                          {new Date(reply.date).toLocaleString()}
                        </p>
                      </div>
                    ))}
                  <form onSubmit={handleReplySubmit} className="mt-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={
                        replyForm.messageId === msg.id ? replyForm.name : ""
                      }
                      onChange={(e) =>
                        setReplyForm({
                          ...replyForm,
                          messageId: msg.id,
                          name: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded mb-2"
                      required
                    />
                    <textarea
                      placeholder="Your reply"
                      value={
                        replyForm.messageId === msg.id ? replyForm.reply : ""
                      }
                      onChange={(e) =>
                        setReplyForm({
                          ...replyForm,
                          messageId: msg.id,
                          reply: e.target.value,
                        })
                      }
                      className="w-full p-2 border rounded mb-2"
                      rows="2"
                      required
                    />
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                      Reply
                    </button>
                  </form>
                </div>
              ))
            )}
            <button
              onClick={() => setShowMessages(false)}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PublicView;
