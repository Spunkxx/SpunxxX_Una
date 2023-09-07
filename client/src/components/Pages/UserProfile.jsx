import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useState } from "react";
import { toast } from "react-hot-toast";

const UserProfile = () => {
  // const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const fetchUserData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5180/user");
  //     setUserData(response.data); // Make sure the API returns an object with 'name' and 'email' properties.
  //     toast.success("Data is on Display");
  //   } catch (err) {
  //     console.error(err);
  //     toast.error("Failed to fetch user data");
  //   }
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5180/logout");
      toast.success("Logout successful!");
      navigate("/");
    } catch (err) {
      setError("Logout Failed");
      toast.error(err);
    }
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
          {/* <p className="text-gray-600">{userData.name}</p> */}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          {/* <p className="text-gray-600">{userData.email}</p> */}
        </div>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-red-500"
        >
          Logout
        </button>
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default UserProfile;
