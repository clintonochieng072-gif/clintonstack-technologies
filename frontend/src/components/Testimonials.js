import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/testimonials")
      .then((response) => setTestimonials(response.data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our satisfied customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[#0B3D91]">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
