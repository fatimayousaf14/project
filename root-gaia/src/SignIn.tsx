import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignInProps {
  setUser: (user: boolean) => void;
}

const SignIn: React.FC<SignInProps> = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Dummy auth
    if (email && password) {
      setUser(true);
      navigate("/home");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
