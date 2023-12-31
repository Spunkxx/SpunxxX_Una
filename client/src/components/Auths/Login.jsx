import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../../assests/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [pass, setPass] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post("http://localhost:5180/loginAuth", {
        email,
        // password,
        pass,
      })
      .then((response) => {
        console.log(response?.data);
        navigate("/profile");
        toast.success("Login successful!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid Email or Password");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
        {loading ? ( // Render loading indicator if loading state is true
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Loader />
          </div>
        ) : (
          <form onSubmit={handleLogin}>{/* ... Your form fields ... */}</form>
        )}
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
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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
        {/* {error && <p className="mt-2 text-red-500">{error}</p>} */}
      </div>
    </div>
  );
};

export default Login;
