import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
 

  const handleLogin = async (e) => {
    e.preventDefault();

    
       await axios
        .post("http://localhost:5180/login", {
          email,
          password,
        })
        .then((response) => {
          console.log(response?.data);
          navigate("/profile");
        })
        .catch((err) => {
          setError("Login failed. Please check your email and password.");
          console.log(err);
        });

 
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            type="submit"
          >
            Login
          </button>
          <p className="mt-4 text-sm text-gray-600">
            {"Don't"} have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
