import { Link } from "react-router-dom";

const UserProfile = () => {

  // ilisdi ni og get method para sa user Info puhon2
  
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",

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
        {/* Add more user-related information as needed */}
        <Link to="/">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500">
            Edit Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
