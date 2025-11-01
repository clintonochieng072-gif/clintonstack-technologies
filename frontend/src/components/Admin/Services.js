import React from "react";

const defaultServices = [
  {
    icon: "🌐",
    title: "Web Development",
    description: "Building responsive and high-performance websites.",
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    description: "Creating intuitive mobile experiences for iOS and Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing beautiful and user-friendly interfaces.",
  },
];

const Services = ({ services }) => {
  const displayServices =
    services && services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a range of services to help your business grow in the digital
          age.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {displayServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
