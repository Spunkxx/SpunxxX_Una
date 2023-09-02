import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import { useState } from "react";

const UserProfile = () => {
  const [error, setError] = useState("");
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    
      await axios.post("http://localhost:5180/logout")
      
      
      .then((response) => {
        console.log(response?.data);
        navigate("/");
      })
      .catch((err) => {
        setError("Logout Failed")
        console.log(err)
      })

      // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          User Profile
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name:
          </label>
          <p className="text-gray-600">{user.name}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-red-500"
        >
          Logout
        </button>
        <Link to="/">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500">
            Edit Profile
          </button>
        </Link>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UserProfile;
