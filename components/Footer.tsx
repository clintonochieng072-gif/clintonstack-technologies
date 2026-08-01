import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold text-lg">ClintonStack Technologies</h4>
            <p className="text-gray-300 text-sm">We build software, websites, AI systems and automation tools that help businesses grow faster.</p>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-gray-300 text-sm">Phone: <a href="tel:+254768524480" className="text-white">0768524480</a></p>
          </div>
          <div>
            <h5 className="font-semibold">Products</h5>
            <ul className="text-gray-300 text-sm">
              <li><a href="https://affiliate.clintonstack.com" className="hover:text-white">Affiliate Platform</a></li>
              <li><a href="https://leads.clintonstack.com" className="hover:text-white">Lead Capture System</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">© {new Date().getFullYear()} ClintonStack Technologies</div>
      </div>
    </footer>
  );
}
