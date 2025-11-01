import React from "react";

const Footer = ({ socialLinks }) => {
  const links = [
    { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#services", text: "Services" },
    { href: "#portfolio", text: "Portfolio" },
    { href: "#contact", text: "Contact" },
  ];

  const socials = [
    { key: "facebook", url: socialLinks.facebook, label: "Facebook" },
    { key: "linkedin", url: socialLinks.linkedin, label: "LinkedIn" },
    { key: "instagram", url: socialLinks.instagram, label: "Instagram" },
    { key: "github", url: socialLinks.github, label: "GitHub" },
  ].filter((social) => social.url);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="md:col-span-1">
            <p className="text-lg font-bold">ClintonStack</p>
            <p className="text-gray-400 mt-2">
              Building the future of digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {/* You can replace these with actual icons from a library like react-icons */}
                  <span className="text-2xl font-bold">
                    {social.label.charAt(0)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} ClintonStack Technologies. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
