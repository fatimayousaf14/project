import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";
import Welcome from "./Welcome";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomePage from "./HomePage";
import OnboardingStart from "./OnboardingStart";
import type { JSX } from "react/jsx-runtime";

function App() {
  const [user, setUser] = useState(false);

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app">
        <header className="hero">
          <h1>Root</h1>
          <p>Your Body. Your Balance</p>
        </header>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/OnboardingStart" element={<OnboardingStart />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>

        <footer>
          <p>&copy; 2025 Root. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
