import React from "react";

const Portfolio = ({ portfolio }) => {
  if (!portfolio || portfolio.length === 0) {
    return null; // Don't render the section if there are no portfolio items
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Work</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Check out some of the projects we're proud to have worked on.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={item.id || index}
              className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={
                  item.image ||
                  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
                }
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B3D91] font-semibold hover:underline"
                  >
                    View Project &rarr;
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
