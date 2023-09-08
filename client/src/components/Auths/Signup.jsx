import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { toast } from "react-hot-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (pass !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5180/register", {
        
        email,
        pass,
      });

      if (response.status === 200) {
        toast.success("Registered Successfully");
        navigate("/login"); 
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Email Already in use");
      } else {
        toast.error(
          "Registration failed. Please check your details and try again."
        );
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-2 text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password:
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg shadow-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        {/* {error && <p className="mt-2 text-red-500">{error}</p>} */}
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
