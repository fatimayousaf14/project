import React, { useState } from "react";
import "./index.css";

const HomePage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    "Home",
    "Marketplace",
    "Experts",
    "Me",
    "Cart",
    "For you",
    "Fitness",
    "Gadgets",
    "Gut Health",
    "Nutrition",
  ];

  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <p>Welcome to Root!</p>;
      case "Marketplace":
        return <p>Browse our wellness marketplace.</p>;
      case "Experts":
        return <p>Connect with top PCOS professionals.</p>;
      case "Me":
        return <p>Track your health journey here.</p>;
      case "Cart":
        return <p>Your cart is currently empty.</p>;
      case "For you":
        return <p>Curated insights just for you.</p>;
      case "Fitness":
        return <p>Discover PCOS-safe fitness routines.</p>;
      case "Gadgets":
        return <p>Explore wellness gadgets and tools.</p>;
      case "Gut Health":
        return <p>Learn about gut-PCOS connections.</p>;
      case "Nutrition":
        return <p>Personalized food and meal plans.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col">
      {/* Top Scrollable Tabs */}
      <nav className="overflow-x-auto w-full no-scrollbar bg-white border-b">
        <div className="flex w-max space-x-3 px-4 py-2">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                activeTab === tab
                  ? "bg-[#A29B5D] text-white"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D6C1A9] to-[#B0A26C] mb-4">
          Root
        </h1>

        <p className="max-w-xl text-gray-700 text-lg mb-4">
          A holistic PCOS companion app that helps you track, understand, and
          rebalance your body — every single day.
        </p>

        <div className="max-w-xl text-gray-600">{renderContent()}</div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center space-y-4">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-[#A29B5D] text-white font-medium hover:bg-[#8D864E] transition"
          >
            Join Waitlist
          </a>
          <a
            href="#"
            className="text-sm text-[#A29B5D] underline hover:text-[#7C7542]"
          >
            Learn more
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-4">
        © {currentYear} Root. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
