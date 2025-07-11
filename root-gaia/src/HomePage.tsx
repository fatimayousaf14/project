import React from "react";
import "./index.css";
import App from "./App";

const HomePage: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D6C1A9] to-[#B0A26C] mb-4">
        Root Gaia
      </h1>

      <p className="text-center max-w-xl text-gray-600 text-lg">
        A holistic PCOS companion app that helps you track, understand, and
        rebalance your body — every single day.
      </p>

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

      <footer className="absolute bottom-6 text-xs text-gray-400">
        © {currentYear} Root Gaia. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
