import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./HomePage";

function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Root Gaia</h1>
        <p>Nurturing skin from the root up.</p>
      </header>

      <HomePage />

      <main>
        <section className="about">
          <h2>Our Philosophy</h2>
          <p>
            We blend nature and science to deliver clean, honest skincare
            grounded in earth’s wisdom.
          </p>
        </section>

        <section className="products">
          <h2>Coming Soon</h2>
          <p>Botanical serums, earthy cleansers, and more — launching soon.</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Root Gaia. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
