// src/OnboardingStart.tsx
import { useNavigate } from "react-router-dom";

const OnboardingStart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center bg-[#f9f8f6] text-[#2d2d2d]">
      <h2 className="text-3xl font-semibold text-[#84754e] mb-4">
        Welcome to Root 🌱
      </h2>
      <p className="max-w-xl mb-6 text-lg">
        We’d love to get to know you better so we can personalize your
        experience. These questions will help us better support your unique
        wellness journey.
      </p>
      <p className="mb-10 text-sm text-gray-600">
        Everything you share stays safe and private with us. Always. 🤍
      </p>
      <button
        onClick={() => navigate("/onboarding-1")}
        className="px-6 py-3 bg-[#84754e] text-white font-semibold rounded hover:bg-[#6d6441] transition"
      >
        Begin
      </button>
    </div>
  );
};

export default OnboardingStart;
