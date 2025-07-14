import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="text-center py-20 px-4">
      <h1 className="text-4xl font-bold text-[#84754e] mb-4">
        Welcome to Root
      </h1>
      <p className="mb-6 text-lg text-gray-600">Your Body. Your Balance.</p>
      <div className="space-x-4">
        <Link
          to="/signin"
          className="text-[#A29B5D] underline hover:text-[#84754e]"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="text-[#A29B5D] underline hover:text-[#84754e]"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
