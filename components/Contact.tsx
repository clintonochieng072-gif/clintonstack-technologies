import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-white to-slate-50">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold text-primary mb-4">Let's Talk About Your Business</h2>
        <p className="text-gray-600 mb-6">Call or WhatsApp us at <a href="tel:+254768524480" className="text-primary font-medium">0768524480</a> or send a message.</p>
        <form className="bg-white p-6 rounded-xl shadow-md" aria-label="Contact form">
          <div className="grid gap-4">
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" aria-label="Name" placeholder="Your name" className="border px-3 py-2 rounded-md" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" aria-label="Email" placeholder="Email address" className="border px-3 py-2 rounded-md" />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" aria-label="Message" placeholder="Tell us about your project" rows={4} className="border px-3 py-2 rounded-md"></textarea>

            <div className="flex gap-3">
              <button type="button" className="bg-primary text-white px-4 py-2 rounded-md" aria-label="Send message">Send Message</button>
              <a href="https://wa.me/254768524480" target="_blank" rel="noreferrer" className="border border-primary text-primary px-4 py-2 rounded-md" aria-label="Chat on WhatsApp">WhatsApp</a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
