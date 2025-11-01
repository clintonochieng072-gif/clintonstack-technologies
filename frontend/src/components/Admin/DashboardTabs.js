import React from "react";

const tabs = [
  { id: "settings", label: "General Settings" },
  { id: "founder", label: "Founder Section" },
  { id: "portfolio", label: "Portfolio" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Testimonials" },
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "social", label: "Social Links" },
  { id: "messages", label: "Contact Messages" },
];

const DashboardTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="border-b border-gray-200">
      <nav
        className="-mb-px flex space-x-6 sm:space-x-8 px-4 sm:px-6 overflow-x-auto"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap py-3 sm:py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
              activeTab === tab.id
                ? "border-[#0B3D91] text-[#0B3D91]"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default DashboardTabs;
