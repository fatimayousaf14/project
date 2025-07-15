import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp: React.FC<Props> = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError("");
    console.log("Signed up with:", formData);
    setUser(true); // Simulate successful signup/login

    // Redirect to onboarding start page
    navigate("/onboarding-start");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF9F6] px-4">
      <h2 className="text-3xl font-semibold text-[#A29B5D] mb-6">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <div className="flex flex-col space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-[#A29B5D] text-white rounded hover:bg-[#8D864E] transition"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SignUp;
