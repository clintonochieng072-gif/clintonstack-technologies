import React from "react";

const Testimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We're trusted by businesses across the region.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg text-left"
            >
              <p className="text-gray-600 italic mb-6">
                "{testimonial.message}"
              </p>
              <div className="flex items-center">
                <img
                  src={
                    testimonial.image ||
                    `https://i.pravatar.cc/150?u=${testimonial.name}`
                  }
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#0B3D91]"
                  loading="lazy"
                />
                <div>
                  <p className="font-bold text-lg text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
